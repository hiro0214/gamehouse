import { serverSocket, socket } from './server';
import { kowloonTacticsConfig } from '../types/config';
import { User } from '../types/user';

const eventName = 'kowloonTactics';

let
  config: kowloonTacticsConfig = {
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
  };

export const kowloonTacticsInit = () => {
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

  config = initialConfig
}

const includeCheck = (user: User) => {
  const initial: User = {
    id: '',
    name: '',
    icon: '',
    isAdmin: false
  }

  if (config.redPlayer.id === user.id) {
    config.redPlayer = initial
  }
  else if (config.bluePlayer.id === user.id) {
    config.bluePlayer = initial
  }
  else if (config.redSupporter.some(v => v.id === user.id)) {
    const index = config.redSupporter.findIndex(({id}) => id === user.id)
    config.redSupporter.splice(index, 1)
  }
  else if (config.blueSupporter.some(v => v.id === user.id)) {
    const index = config.blueSupporter.findIndex(({id}) => id === user.id)
    config.blueSupporter.splice(index, 1)
  }
}

export const kowloonTactics = {
  init: () => {
    socket.on(`${eventName}:updateConfig`, () => {
      serverSocket.emit(`${eventName}:updateConfig`, config)
    })

    socket.on(`${eventName}:setRedPlayer`, (user: User) => {
      includeCheck(user)
      config.redPlayer = user
      serverSocket.emit(`${eventName}:updateConfig`, config)
    })

    socket.on(`${eventName}:setBluePlayer`, (user: User) => {
      includeCheck(user)
      config.bluePlayer = user
      serverSocket.emit(`${eventName}:updateConfig`, config)
    })

    socket.on(`${eventName}:setRedSupporterr`, (user: User) => {
      includeCheck(user)
      config.redSupporter.push(user)
      serverSocket.emit(`${eventName}:updateConfig`, config)
    })

    socket.on(`${eventName}:setBlueSupporterr`, (user: User) => {
      includeCheck(user)
      config.blueSupporter.push(user)
      serverSocket.emit(`${eventName}:updateConfig`, config)
    })
  }
}