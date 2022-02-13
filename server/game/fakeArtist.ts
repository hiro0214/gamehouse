import { serverSocket, socket } from '../server';
import { currentConfig, setCurrentConfig } from '../data';
import { shuffle } from '../utility';
import { fakeArtistConfig } from '../../types/config';

export const fakeArtistConfigInit = () => {
  const initialConfig: fakeArtistConfig = null
  setCurrentConfig(initialConfig)
}

export const fakeArtistDataInit = () => {
  // const initialData: fakeArtistData 

}
