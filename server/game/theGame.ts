import { serverSocket, socket } from '../server';
import { setCurrentConfig, userList } from '../data';
import { randomInt, shuffle } from '../utility';
import { theGameConfig } from '../../types/config';

/**
 * Variable
*/
const eventName = 'theGame';

/**
 * Type
*/


/**
 * Data
*/


/**
 * Function
*/
export const theGameConfigInit = () => {
  const initialConfig: theGameConfig = null
  setCurrentConfig(initialConfig)
}

export const theGameDataInit = () => {
  // 初期化
}

export const theGame = {
  init: () => {
    //
  }
}