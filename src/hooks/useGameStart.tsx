import { useCallback } from 'react';
import { useHistory } from 'react-router';
import { GameType } from '../../types/gameList';

export const useGameStart = () => {
  const history = useHistory();
  const gameStart = useCallback((game: GameType) => {
    switch (game) {
      case 'クーロンタクティクス':
        history.push('/game/kowloon_tactics');
        break;
      case 'Hanabi':
        history.push('/game/hanabi');
        break;
    }
  }, []);

  return { gameStart };
};
