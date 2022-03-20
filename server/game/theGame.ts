import { serverSocket, socket } from '../server';
import { setCurrentConfig, userList } from '../data';
import { randomInt, shuffle } from '../utility';
import { theGameConfig } from '../../types/config';
import { gameDataType } from '../../types/game/theGame';
import { playerHandType } from '../../types/game/theGame';

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
  }
}