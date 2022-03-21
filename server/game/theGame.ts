import { serverSocket, socket } from '../server';
import { setCurrentConfig, userList } from '../data';
import { shuffle } from '../utility';
import { theGameConfig } from '../../types/config';
import { gameDataType, playerHandType, playCardType } from '../../types/game/theGame';

/**
 * Variable
*/
const eventName = 'theGame';
const deckLength = 98;
const handLength = 6;


/**
 * Type
*/


/**
 * Data
*/
const gameData: gameDataType = {
  playerList: [],
  fieldCards: [[], [], [], []],
  deck: [],
  score: 0,
  turn: 0,
}

/**
 * Function
*/
export const theGameConfigInit = () => {
  const initialConfig: theGameConfig = null
  setCurrentConfig(initialConfig)
}

export const theGameDataInit = () => {
  // 初期化
  gameData.playerList.length = 0;
  gameData.fieldCards[0].length = 0;
  gameData.fieldCards[1].length = 0;
  gameData.fieldCards[2].length = 0;
  gameData.fieldCards[3].length = 0;
  gameData.deck.length = 0;
  gameData.score = 0;
  gameData.turn = 0;

  [...Array(deckLength)].map((_, i) => gameData.deck.push(i + 2))
  shuffle(gameData.deck);

  const copyUserList = [...userList];
  for (let i = 0; i < copyUserList.length; i ++) {
    const player: playerHandType = {
      user: copyUserList[i],
      hand: []
    };

    [...Array(handLength)].map(() => player.hand.push(gameData.deck.shift() as number));
    gameData.playerList.push(player);
  }

  shuffle(gameData.playerList);
}

export const theGame = {
  init: () => {
    socket.on(`${eventName}:getData`, () => {
      serverSocket.emit(`${eventName}:getData`, gameData)
    })

    socket.on(`${eventName}:playCard`, (data: playCardType) => {
      const player = gameData.playerList.find(p => p.user.id === data.userId) as playerHandType;

      // 選んだ手札をフィールドに移動
      const selectHand = player.hand.splice(data.selectIndex, 1)[0];
      const selectField = gameData.fieldCards[data.fieldIndex];
      if (selectField.length === 5) selectField.shift();
      selectField.push(selectHand);

      // scoreの更新
      gameData.score += 1

      serverSocket.emit(`${eventName}:getData`, gameData)
    })

    socket.on(`${eventName}:turnFinish`, () => {
      // 手札の補充
      const player = gameData.playerList[gameData.turn];
      while (player.hand.length < 6 && gameData.deck.length) {
        const newHand = gameData.deck.shift() as number;
        player.hand.push(newHand);
      }

      // turnの更新
      const playerLength = gameData.playerList.length
      gameData.turn = gameData.turn === playerLength - 1 ? 0 : gameData.turn + 1;

      serverSocket.emit(`${eventName}:getData`, gameData)
    })
  }
}