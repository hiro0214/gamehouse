import { serverSocket, socket } from '../server';
import { currentConfig, gameData, setCurrentConfig, setGameData } from '../data';
import { hanabiConfig } from '../../types/config';
import { hanabiData } from '../../types/data';

const
  eventName = 'hanabi';

export const hanabiConfigInit = () => {
  const initialConfig: hanabiConfig = {
    colorNum: 4,
    handNum: 4
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
    socket.on(`${eventName}:getColorNum`, () => {
      serverSocket.emit(`${eventName}:getColorNum`, (<hanabiConfig>currentConfig).colorNum)
    })

    socket.on(`${eventName}:getHandNum`, () => {
      serverSocket.emit(`${eventName}:getHandNum`, (<hanabiConfig>currentConfig).handNum)
    })

    socket.on(`${eventName}:setColorNum`, (colorNum: string) => {
      (<hanabiConfig>currentConfig).colorNum = Number(colorNum)
      serverSocket.emit(`${eventName}:getColorNum`, (<hanabiConfig>currentConfig).colorNum)
    })

    socket.on(`${eventName}:setHandNum`, (handNum: string) => {
      (<hanabiConfig>currentConfig).handNum = Number(handNum)
      serverSocket.emit(`${eventName}:getHandNum`, (<hanabiConfig>currentConfig).handNum)
    })
  }
}