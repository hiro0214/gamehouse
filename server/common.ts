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

    socket.on('common:updateInfo', (data: User) => {
      const targetIndex = userList.findIndex((user: User) => user.id === data.id)
      userList[targetIndex] = data
      serverSocket.emit('common:getUser', userList)
    })
  }
}