import { serverSocket, socket } from './server';
import { userList } from './data'
import { user } from '../types/user';

export const common = {
  init: () => {
    socket.on('common:enter', (newUser: user) => {
      userList.push(newUser)
    })
    socket.on('common:getUser', () => {
      serverSocket.emit('common:getUser', userList)
    })
  }
}