import { useCallback } from 'react';
import { useHistory } from 'react-router';
import { useSetUserInfo } from './useSetUserInfo';

export const useEnter = () => {
  const history = useHistory();
  const { setInfo } = useSetUserInfo();

  const enter = useCallback((userName: string) => {
    setInfo(userName);
    history.push('/lobby');
  }, []);

  return { enter };
};
