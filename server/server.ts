import express from 'express';
import socketIo from 'socket.io';
import http from "http";
import { connectList, userList } from './data';
import { common } from './common';
import { kowloonTactics } from './game/kowloonTactics';
import { hanabi } from './game/hanabi';

const
  app: express.Express = express(),
  server: http.Server = http.createServer(app),
  PORT = process.env.PORT || 8080;

export const serverSocket = new socketIo.Server(server);
export let socket: socketIo.Socket;

app
  .use(express.static('dist'))
  .get('/', (req, res) => res.render(__dirname + './index.html'));

server.listen(PORT, () => {
  console.log(`Listening on ${PORT} \n access to http://localhost:${PORT}/`);
})

serverSocket.on('connection', connect => {
  socket = connect
  common.init();
  kowloonTactics.init();
  hanabi.init();

  socket.on('disconnect', () => {
    const removeConnectIndex = connectList.findIndex(v => v.socketId === socket.id)
    if (removeConnectIndex === -1) return;

    const userId = connectList[removeConnectIndex].userId;
    const removeUserIndex = userList.findIndex(v => v.id === userId);

    connectList.splice(removeConnectIndex, 1);
    userList.splice(removeUserIndex, 1);

    serverSocket.emit('common:getUser', userList);
  })
})