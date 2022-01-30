import { serverSocket, socket } from '../server';
import { currentConfig, setCurrentConfig, userList } from '../data';
import { hanabiConfig } from '../../types/config';
import { actionType, cemeteryType, color, gameDataType,  hand, playerHandType } from '../../types/game/hanabi';
import { shuffle } from '../utility';

/**
 * Variable
*/
const
  eventName = 'hanabi',
  colorVal: color[] = ['red', 'blue', 'yellow', 'green', 'white', 'purple'],
  numVal = [1, 1, 1, 2, 2, 3, 3, 4, 4, 5];


/**
 * Type
*/
type selectHandType = {
  player: number;
  index: number;
}


/**
 * Data
*/
const gameData: gameDataType = {
  deck: [],
  players: [],
  fields: [],
  cemetery: [],
  score: 0,
  turn: 0,
  extra: 6,
  hint: 8,
  miss: 0
};


/**
 * Function
*/
export const hanabiConfigInit = () => {
  const initialConfig: hanabiConfig = {
    colorNum: 5,
    handNum: 4
  }

  setCurrentConfig(initialConfig)
}

export const hanabiDataInit = () => {
  // 初期化
  gameData.deck.length = 0;
  gameData.players.length = 0;
  gameData.fields.length = 0;
  gameData.cemetery.length = 0;
  gameData.score = 0;
  gameData.turn = 0;
  gameData.extra = 6;
  gameData.hint = 8;
  gameData.miss = 0;

  for (let i = 0; i < (<hanabiConfig>currentConfig).colorNum; i ++) {
    const color: color = colorVal[i];
    numVal.forEach((num: number) => {
      const hand: hand = { color, num };
      gameData.deck.push(hand);
    })

    gameData.fields[i] = { color, num: 0 };
    gameData.cemetery[i] = { color, num: [] };
  };

  shuffle(gameData.deck);

  for (let i = 0; i < userList.length; i ++) {
    const user = userList[i];
    gameData.players[i] = { player: user, hands: [] };

    for (let j = 0; j < (<hanabiConfig>currentConfig).handNum; j ++) {
      const hand = gameData.deck.shift() as hand;
      hand.colorHint = false;
      hand.numHint = false;
      gameData.players[i].hands.push(hand);
    }
  }

  shuffle(gameData.players)
}

const useHand = (player: playerHandType, selectIndex: number) => {
  player.hands.splice(selectIndex, 1)

  const newHand = gameData.deck.shift();
  if (newHand) {
    newHand.colorHint = false;
    newHand.numHint = false;
    player.hands.push(newHand);
  }
}

const moveCemetery = (targetColor: hand, hand: hand) => {
  const cemeteryColor = gameData.cemetery.find(v => v.color === targetColor.color) as cemeteryType;
  cemeteryColor.num.push(hand.num)
  cemeteryColor.num.sort((a, b) => a - b);
}

const changeTurn = () => {
  const playerLength = gameData.players.length;
  gameData.turn = gameData.turn === playerLength - 1 ? 0 : gameData.turn + 1;

  if (gameData.deck.length === 0) {
    gameData.extra -= 1
  }
}

export const hanabi = {
  init: () => {
    socket.on(`${eventName}:getConfig`, () => {
      serverSocket.emit(`${eventName}:updateConfig`, currentConfig)
    })

    socket.on(`${eventName}:setColorNum`, (colorNum: string) => {
      (<hanabiConfig>currentConfig).colorNum = Number(colorNum)
      serverSocket.emit(`${eventName}:updateConfig`, currentConfig)
    })

    socket.on(`${eventName}:setHandNum`, (handNum: string) => {
      (<hanabiConfig>currentConfig).handNum = Number(handNum)
      serverSocket.emit(`${eventName}:updateConfig`, currentConfig)
    })

    socket.on(`${eventName}:getData`, () => {
      serverSocket.emit(`${eventName}:getData`, gameData)
    })

    socket.on(`${eventName}:playHand`, (select: selectHandType) => {
      const player = gameData.players[select.player];
      const hand = player.hands[select.index];
      const targetColor = gameData.fields.find(v => v.color === hand.color) as hand;
      let action: actionType = null;

      // 数字チェック
      if (targetColor.num === hand.num - 1) {
        targetColor.num += 1
        gameData.score += 1
        if (hand.num === 5 && gameData.hint !== 8) gameData.hint += 1
      }
      else {
        gameData.miss += 1
        moveCemetery(targetColor, hand);

        // ゲームオーバー
        if (gameData.miss === 3) {
          gameData.turn = 999
          action = 'gameover';
        }
        else {
          action = 'miss';
        }
      }

      useHand(player, select.index);
      changeTurn();

      if (gameData.extra === 0) {
        gameData.turn = 999
        action = 'finish';
      }
      serverSocket.emit(`${eventName}:getData`, gameData, action);
    })

    socket.on(`${eventName}:discardHand`, (select: selectHandType) => {
      const player = gameData.players[select.player];
      const hand = player.hands[select.index];
      const targetColor = gameData.fields.find(v => v.color === hand.color) as hand;
      let action: actionType = null;

      moveCemetery(targetColor, hand);

      // ヒントの回復
      if (gameData.hint !== 8) gameData.hint += 1

      useHand(player, select.index);
      changeTurn();

      if (gameData.extra === 0) {
        gameData.turn = 999
        action = 'finish';
      }
      serverSocket.emit(`${eventName}:getData`, gameData, action);
    })

    socket.on(`${eventName}:colorHint`, (select: selectHandType) => {
      const player = gameData.players[select.player];
      const color = player.hands[select.index].color;
      let action: actionType = null;

      player.hands.forEach(hand => {
        if (hand.color === color) hand.colorHint = true
      })

      // ヒントの消費
      gameData.hint -= 1

      changeTurn();

      if (gameData.extra === 0) {
        gameData.turn = 999
        action = 'finish';
      }
      serverSocket.emit(`${eventName}:getData`, gameData, action);
    })

    socket.on(`${eventName}:numHint`, (select: selectHandType) => {
      const player = gameData.players[select.player];
      const num = player.hands[select.index].num;
      let action: actionType = null;

      player.hands.forEach(hand => {
        if (hand.num === num) hand.numHint = true
      })

      // ヒントの消費
      gameData.hint -= 1

      changeTurn();

      if (gameData.extra === 0) {
        gameData.turn = 999
        action = 'finish';
      }
      serverSocket.emit(`${eventName}:getData`, gameData, action);
    })
  }
}