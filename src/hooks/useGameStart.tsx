import { useCallback } from 'react';
import { useHistory } from 'react-router';

export const useGameStart = () => {
  const history = useHistory();
  const gameStart = useCallback((game: string) => {
    switch (game) {
      case 'クーロンタクティクス':
        history.push('/game/kowloon_tactics');
        break;
    }
  }, []);

  return { gameStart };
};
