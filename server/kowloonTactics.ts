import { serverSocket, socket } from './server';
import { kowloonTacticsConfig } from '../types/config';
import { User } from '../types/user';
import { currentConfig, setCurrentConfig, setGameData } from './data';
import { kowloonTacticsData } from '../types/data';

const eventName = 'kowloonTactics';

export const kowloonTacticsConfigInit = () => {
  const initialConfig: kowloonTacticsConfig = {
    redPlayer: {
      id: '',
      name: '',
      icon: '',
      isAdmin: false
    },
    bluePlayer: {
      id: '',
      name: '',
      icon: '',
      isAdmin: false
    },
    redSupporter: [],
    blueSupporter: []
  }

  setCurrentConfig(initialConfig)
}

export const kowloonTacticsDataInit = () => {
  const initialData: kowloonTacticsData = {
    redPlayer: {
      "hand": [1, 2, 3, 4, 5, 6, 7, 8, 9],
      "field": []
    },
    bluePlayer: {
      "hand": [1, 2, 3, 4, 5, 6, 7, 8, 9],
      "field": []
    }
  }

  setGameData(initialData)
}

const includeCheck = (user: User) => {
  const initial: User = {
    id: '',
    name: '',
    icon: '',
    isAdmin: false
  };

  if ((<kowloonTacticsConfig>currentConfig).redPlayer.id === user.id) {
    (<kowloonTacticsConfig>currentConfig).redPlayer = initial
  }
  else if ((<kowloonTacticsConfig>currentConfig).bluePlayer.id === user.id) {
    (<kowloonTacticsConfig>currentConfig).bluePlayer = initial
  }
  else if ((<kowloonTacticsConfig>currentConfig).redSupporter.some(v => v.id === user.id)) {
    const index = (<kowloonTacticsConfig>currentConfig).redSupporter.findIndex(({id}) => id === user.id);
    (<kowloonTacticsConfig>currentConfig).redSupporter.splice(index, 1)
  }
  else if ((<kowloonTacticsConfig>currentConfig).blueSupporter.some(v => v.id === user.id)) {
    const index = (<kowloonTacticsConfig>currentConfig).blueSupporter.findIndex(({id}) => id === user.id);
    (<kowloonTacticsConfig>currentConfig).blueSupporter.splice(index, 1)
  }
}

export const kowloonTactics = {
  init: () => {
    socket.on(`${eventName}:updateConfig`, () => {
      serverSocket.emit(`${eventName}:updateConfig`, currentConfig)
    })

    socket.on(`${eventName}:setRedPlayer`, (user: User) => {
      includeCheck(user);
      (<kowloonTacticsConfig>currentConfig).redPlayer = user
      serverSocket.emit(`${eventName}:updateConfig`, currentConfig)
    })

    socket.on(`${eventName}:setBluePlayer`, (user: User) => {
      includeCheck(user);
      (<kowloonTacticsConfig>currentConfig).bluePlayer = user
      serverSocket.emit(`${eventName}:updateConfig`, currentConfig)
    })

    socket.on(`${eventName}:setRedSupporterr`, (user: User) => {
      includeCheck(user);
      (<kowloonTacticsConfig>currentConfig).redSupporter.push(user)
      serverSocket.emit(`${eventName}:updateConfig`, currentConfig)
    })

    socket.on(`${eventName}:setBlueSupporterr`, (user: User) => {
      includeCheck(user);
      (<kowloonTacticsConfig>currentConfig).blueSupporter.push(user)
      serverSocket.emit(`${eventName}:updateConfig`, currentConfig)
    })
  }
}