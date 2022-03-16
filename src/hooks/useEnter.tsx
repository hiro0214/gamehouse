import { useCallback } from 'react';
import { useHistory } from 'react-router';
import { socket } from '../socket';
import { useSetUserInfo } from './useSetUserInfo';

export const useEnter = () => {
  const history = useHistory();
  const { setInfo } = useSetUserInfo();

  const enter = useCallback((userName: string) => {
    const name = userName === 'admin' ? 'いわもと' : userName;
    const isAdmin = userName === 'admin' ? true : false;

    if (userName === '$clear') {
      socket.emit('common:clearUser');
    } else {
      setInfo(name, isAdmin);
      history.push('/lobby');
    }
  }, []);

  return { enter };
};
