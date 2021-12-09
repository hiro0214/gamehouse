import { serverSocket, socket } from './server';
import { connectList, currentConfig, currentGame, initConfig, setCurrentGame, userList } from './data'
import { User } from '../types/user';
import { kowloonTacticsDataInit } from './kowloonTactics';
import { Connect } from '../types/connect';

const eventName = 'common';

export const common = {
  init: () => {
    socket.on(`${eventName}:newUser`, (newUser: User) => {
      const newConnect: Connect = {
        socketId: socket.id,
        userId: newUser.id
      }

      connectList.push(newConnect)
      userList.push(newUser)
    })

    socket.on(`${eventName}:getUser`, () => {
      serverSocket.emit(`${eventName}:getUser`, userList)
    })

    socket.on(`${eventName}:getCurrentGame`, () => {
      serverSocket.emit(`${eventName}:getCurrentGame`, currentGame)
    })

    socket.on(`${eventName}:getCurrentConfig`, () => {
      serverSocket.emit(`${eventName}:getCurrentConfig`, currentConfig)
    })

    socket.on(`${eventName}:setCurrentGame`, (game: string | null) => {
      if (game) {
        setCurrentGame(game)
        initConfig(game)
      }
      else {
        setCurrentGame('')
      }

      serverSocket.emit(`${eventName}:setCurrentGame`, currentGame)
    })

    socket.on(`${eventName}:updateInfo`, (data: User) => {
      const targetIndex = userList.findIndex((user: User) => user.id === data.id)
      userList[targetIndex] = data
      serverSocket.emit(`${eventName}:getUser`, userList)
    })

    socket.on(`${eventName}:gameStart`, () => {
      switch (currentGame) {
        case 'クーロンタクティクス':
          kowloonTacticsDataInit()
          break;
      }

      serverSocket.emit(`${eventName}:gameStart`, (currentGame))
    })

    socket.on(`${eventName}:toLobby`, () => {
      serverSocket.emit(`${eventName}:toLobby`)
    })
  }
}