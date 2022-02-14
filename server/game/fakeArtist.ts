import { serverSocket, socket } from '../server';
import { setCurrentConfig, userList } from '../data';
import { randomInt, shuffle } from '../utility';
import { fakeArtistConfig } from '../../types/config';
import { gameDataType } from '../../types/game/fakeArtist';

/**
 * Variable
*/
const eventName = 'fakeArtist';

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
  category: '',
  theme: '',
  context: '',
  turn: 0
};


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
  gameData.fakeMan = randomInt(userList.length)
}

export const fakeArtist = {
  init: () => {
    socket.on(`${eventName}:getData`, () => {
      serverSocket.emit(`${eventName}:getData`, gameData)
    })
    socket.on(`${eventName}:hoge`, (imgContext: string) => {
      gameData.context = imgContext
      serverSocket.emit(`${eventName}:getData`, gameData)
    })
  }
}