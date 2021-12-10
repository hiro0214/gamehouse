import { useCallback, useEffect } from 'react';
import { useHistory } from 'react-router';
import { socket } from '../socket';

export const useToLobby = () => {
  const history = useHistory();

  useEffect(() => {
    socket.on('common:toLobby', () => {
      history.push('/lobby');
    });
  }, []);

  const toLobby = useCallback(() => {
    socket.emit('common:toLobby');
  }, []);

  return { toLobby };
};
