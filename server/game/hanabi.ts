import { serverSocket, socket } from '../server';
import { currentConfig, setCurrentConfig, userList } from '../data';
import { hanabiConfig } from '../../types/config';
import { cemeteryType, color, gameDataType,  hand } from '../../types/game/hanabi';
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

const changeTurn = () => {
  const playerLength = gameData.players.length;
  gameData.turn = gameData.turn === playerLength - 1 ? 0 : gameData.turn + 1;
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

      // 数字チェック
      if (targetColor.num === hand.num - 1) {
        targetColor.num += 1
        gameData.score += 1
      }
      else {
        gameData.miss += 1
        const cemeteryColor = gameData.cemetery.find(v => v.color === targetColor.color) as cemeteryType;
        cemeteryColor.num.push(hand.num)
        cemeteryColor.num.sort((a, b) => a - b);
      }

      // 手札使用
      player.hands.splice(select.index, 1)

      // 手札補充
      const newHand = gameData.deck.shift();
      if (newHand) {
        newHand.colorHint = false;
        newHand.numHint = false;
        player.hands.push(newHand);
      }

      changeTurn();
      serverSocket.emit(`${eventName}:getData`, gameData);
    })

    socket.on(`${eventName}:discardHand`, (select: selectHandType) => {
      const player = gameData.players[select.player];
      const hand = player.hands[select.index];
      const cemeteryColor = gameData.cemetery.find(v => v.color === hand.color) as cemeteryType;
      cemeteryColor.num.push(hand.num)
      cemeteryColor.num.sort((a, b) => a - b);

      // ヒントの回復
      gameData.hint += 1

      // 手札使用
      player.hands.splice(select.index, 1)

      // 手札補充
      const newHand = gameData.deck.shift();
      if (newHand) {
        newHand.colorHint = false;
        newHand.numHint = false;
        player.hands.push(newHand);
      }

      changeTurn();
      serverSocket.emit(`${eventName}:getData`, gameData);
    })

    socket.on(`${eventName}:colorHint`, (select: selectHandType) => {
      const player = gameData.players[select.player];
      const color = player.hands[select.index].color;
      player.hands.forEach(hand => {
        if (hand.color === color) hand.colorHint = true
      })

      // ヒントの消費
      gameData.hint -= 1

      changeTurn();
      serverSocket.emit(`${eventName}:getData`, gameData);
    })

    socket.on(`${eventName}:numHint`, (select: selectHandType) => {
      const player = gameData.players[select.player];
      const num = player.hands[select.index].num;
      player.hands.forEach(hand => {
        if (hand.num === num) hand.numHint = true
      })

      // ヒントの消費
      gameData.hint -= 1

      changeTurn();
      serverSocket.emit(`${eventName}:getData`, gameData);
    })
  }
}