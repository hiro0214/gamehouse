import { serverSocket, socket } from './server';
import { connectList, currentConfig, currentGame, initConfig, setCurrentGame, userList } from './data'
import { User } from '../types/user';
import { kowloonTacticsDataInit } from './game/kowloonTactics';
import { hanabiDataInit } from './game/hanabi';
import { Connect } from '../types/connect';
import { GameType } from '../types/gameList';
import { fakeArtistDataInit } from './game/fakeArtist';

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

    socket.on(`${eventName}:clearUser`, () => {
      connectList.length = 0;
      userList.length = 0;
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

    socket.on(`${eventName}:setCurrentGame`, (game: GameType | null) => {
      if (game) {
        setCurrentGame(game)
        initConfig(game)
      }
      else {
        setCurrentGame(null)
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
        case 'Hanabi':
          hanabiDataInit()
          break;
        case 'エセ芸術家 ニューヨークへ行く':
          fakeArtistDataInit()
          break;
      }

      serverSocket.emit(`${eventName}:gameStart`, (currentGame))
    })

    socket.on(`${eventName}:toLobby`, () => {
      serverSocket.emit(`${eventName}:toLobby`)
    })
  }
}