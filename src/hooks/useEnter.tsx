import { useCallback } from 'react';
import { useHistory } from 'react-router';
import { useSetUserInfo } from './useSetUserInfo';

export const useEnter = () => {
  const history = useHistory();
  const { setInfo } = useSetUserInfo();

  const enter = useCallback((userName: string) => {
    userName === 'admin' ? setInfo('いわもと', true) : setInfo(userName, false);
    history.push('/lobby');
  }, []);

  return { enter };
};
