import { serverSocket, socket } from '../server';
import { currentConfig, setCurrentConfig, userList } from '../data';
import { hanabiConfig } from '../../types/config';
import { color, hand, playerHandType } from '../../types/game/hanabi';
import { shuffle } from '../utility';

/**
 * Variable
*/
const
  eventName = 'hanabi',
  colorVal: color[] = ['red', 'blue', 'yellow', 'green', 'white', 'purple'],
  numVal = [1, 1, 1, 2, 2, 3, 3, 4, 4, 5];


/**
 * Data
*/
const
  deck: hand[] = [],
  players: playerHandType[] = [],
  fields: hand[] = [],
  cemetery: {
    color: color;
    num: number[]
  }[] = [];

let
  turn = 0,
  hint = 8,
  miss = 0;


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
  deck.length = 0;
  players.length = 0;
  fields.length = 0;
  cemetery.length = 0;
  turn = 0;
  hint = 8;
  miss = 0;

  for (let i = 0; i < (<hanabiConfig>currentConfig).colorNum; i ++) {
    const color: color = colorVal[i];
    numVal.forEach((num: number) => {
      const hand: hand = { color, num };
      deck.push(hand);
    })

    fields[i] = { color, num: 0 };
    cemetery[i] = { color, num: [] };
  };

  shuffle(deck);

  for (let i = 0; i < userList.length; i ++) {
    const user = userList[i];
    players[i] = { player: user, hands: [] };

    for (let j = 0; j < (<hanabiConfig>currentConfig).handNum; j ++) {
      const hand = deck.shift() as hand
      players[i].hands.push(hand);
    }
  }

  shuffle(players)
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
  }
}