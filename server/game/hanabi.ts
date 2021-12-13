import { serverSocket, socket } from '../server';
import { currentConfig, gameData, setCurrentConfig, setGameData } from '../data';
import { hanabiConfig } from '../../types/config';
import { hanabiData } from '../../types/data';

const
  eventName = 'hanabi';

export const hanabiConfigInit = () => {
  const initialConfig: hanabiConfig = {
    key: 'init'
  }

  setCurrentConfig(initialConfig)
}


export const hanabiDataInit = () => {
  const initialData: hanabiData = {
    key: 'data'
  }

  setGameData(initialData)
}

export const hanabi = {
  init: () => {
    console.log('ok')
  }
}