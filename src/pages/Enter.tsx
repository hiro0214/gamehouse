import { memo } from 'react';
import { useHistory } from 'react-router';
import { socket } from '../App';

export const Enter = memo(() => {
  const history = useHistory();
  const enter = () => socket.emit('enter');
  socket.on('server enter', () => history.push('/lobby'));

  return (
    <>
      <h1>Enter</h1>
      <button onClick={enter}>ロビーへ</button>
    </>
  );
});
