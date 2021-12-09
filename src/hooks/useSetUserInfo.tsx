import { useCallback } from 'react';
import { User } from '../../types/user';
import { useMyInfo } from '../providers/UserInfoProvider';
import { socket } from '../socket';

export const useSetUserInfo = () => {
  const { setMyInfo } = useMyInfo();

  const randomId = () => {
    const length = 8;
    const patterns = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let id = '';

    for (let i = 0; i < length; i++) {
      id += patterns[Math.floor(Math.random() * patterns.length)];
    }
    return id;
  };

  const randomIcon = () => {
    const pokemonLength = 3;
    const random = `${Math.floor(Math.random() * pokemonLength) + 1}`;
    let icon: string;

    if (random.length === 1) {
      icon = `00${random}`;
    } else if (random.length === 2) {
      icon = `0${random}`;
    } else {
      icon = random;
    }
    return icon;
  };

  const setInfo = useCallback((userName: string, isAdmin: boolean) => {
    const newUser: User = {
      id: randomId(),
      name: userName,
      icon: randomIcon(),
      isAdmin: isAdmin,
    };

    setMyInfo(newUser);
    socket.emit('common:newUser', newUser);
  }, []);

  return { setInfo, randomIcon };
};
