import { serverSocket, socket } from './server';

export const hanabi = {
  init: () => {
    socket.on('init', () => {
      serverSocket.emit('init')
    })

    socket.on('enter', () => {
      serverSocket.emit('server enter')
    })
  }
}