import { serverSocket, socket } from './server';
import { userList } from './data'
import { User } from '../types/user';

export const common = {
  init: () => {
    socket.on('common:enter', (newUser: User) => {
      userList.push(newUser)
    })

    socket.on('common:getUser', () => {
      serverSocket.emit('common:getUser', userList)
    })
  }
}