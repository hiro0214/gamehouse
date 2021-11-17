import express from 'express';
import socketIo from 'socket.io';
import http from "http";

import { common } from './common';
import { hanabi } from './hanabi';

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
  hanabi.init();
})