import { serverSocket, socket } from '../server';
import { currentConfig, setCurrentConfig } from '../data';
import { shuffle } from '../utility';
import { fakeArtistConfig } from '../../types/config';

/**
 * Variable
*/
const eventName = 'fakeArtist';

let context = '';


/**
 * Data
*/


/**
 * Function
*/
export const fakeArtistConfigInit = () => {
  const initialConfig: fakeArtistConfig = null
  setCurrentConfig(initialConfig)
}

export const fakeArtistDataInit = () => {
  // const initialData: fakeArtistData 

}

export const fakeArtist = {
  init: () => {
    socket.on(`${eventName}:hoge`, (imgContext: string) => {
      context = imgContext
      serverSocket.emit(`${eventName}:fuga`, context)
    })
  }
}