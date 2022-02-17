import { serverSocket, socket } from '../server';
import { setCurrentConfig, userList } from '../data';
import { randomInt, shuffle } from '../utility';
import { fakeArtistConfig } from '../../types/config';
import { gameDataType } from '../../types/game/fakeArtist';

/**
 * Variable
*/
const
  eventName = 'fakeArtist',
  colors = ['#ff0f0f', '#0f0fff', '#0fff0f', '#ffff05', '#ff840a', '#ff0aff', '#0affff' ,'#840aff', '#bc611e', '#ff9498', '#00afcc', '#9cbb1c', '#003f8e'];

/**
 * Type
*/
type themeType = {
  category: string;
  theme: string[];
}


/**
 * Data
*/
const gameData: gameDataType = {
  players: [],
  fakeMan: 0,
  colors: colors,
  category: '',
  theme: '',
  context: '',
  turn: 0,
  mostVote: ''
};

const voteArray: string[] = [];
let lap = 0;


/**
 * Theme
*/
const themeList: themeType[] = [
  {
    category: '海の生き物',
    theme: ['イルカ', 'タコ', 'イカ']
  },
  {
    category: '建物',
    theme: ['スカイツリー', '万里の長城', '凱旋門']
  }
];

/**
 * Function
*/
export const fakeArtistConfigInit = () => {
  const initialConfig: fakeArtistConfig = null
  setCurrentConfig(initialConfig)
}

export const fakeArtistDataInit = () => {
  // 初期化
  gameData.players = userList
  gameData.fakeMan = 0;
  gameData.category = '';
  gameData.theme = '';
  gameData.context = '';
  gameData.turn = 0;

  const targetCategory = themeList[randomInt(themeList.length)];
  gameData.category = targetCategory.category;
  gameData.theme = targetCategory.theme[randomInt(targetCategory.theme.length)];

  shuffle(gameData.players);
  gameData.fakeMan = randomInt(userList.length);

  shuffle(gameData.colors)
}

export const fakeArtist = {
  init: () => {
    socket.on(`${eventName}:getData`, () => {
      serverSocket.emit(`${eventName}:getData`, gameData)
    })
    socket.on(`${eventName}:draw`, (imgContext: string) => {
      gameData.context = imgContext;

      if (gameData.turn === gameData.players.length - 1) {
        gameData.turn = 0
        lap += 1
      }
      else {
        gameData.turn += 1
      }

      if (lap < 2) {
        serverSocket.emit(`${eventName}:getData`, gameData)
      }
      else {
        serverSocket.emit(`${eventName}:getData`, gameData)
        serverSocket.emit(`${eventName}:vote`);
      }
    })
    socket.on(`${eventName}:vote`, (index: number) => {
      const votePlayer = gameData.players[index].name
      voteArray.push(votePlayer);

      if (voteArray.length !== gameData.players.length) return;

      const obj: any = {};
      for (let i = 0; i < voteArray.length; i ++) {
        obj[voteArray[i]] = obj[voteArray[i]] ? obj[voteArray[i]] + 1 : 1
      }
      const
        val: number[] = Object.values(obj),
        key = Object.keys(obj),
        maxIndex = val.indexOf(Math.max(...val));

      gameData.mostVote = key[maxIndex];
      serverSocket.emit(`${eventName}:getData`, gameData)
      serverSocket.emit(`${eventName}:voted`, gameData)
    })
  }
}