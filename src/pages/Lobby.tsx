import { memo } from 'react';
import { socket } from '../socket';

export const Lobby = memo(() => {
  socket.emit('common:getUser');
  socket.on('common:getUser', (userList) => {
    console.log('list', userList);
  });

  return (
    <>
      <h1>Lobby</h1>
    </>
  );
});
