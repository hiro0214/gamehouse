import React, { useCallback, useState } from 'react';
import { GameType } from '../../types/gameList';
import { KowloonTactics } from '../components/organisms/gameConfig/KowloonTactics';
import { Hanabi } from '../pages/game/Hanabi';

export const useCurrentConfig = () => {
  const [currentConfig, setCurrentConfig] = useState<React.ReactElement | null>(null);

  const setConfig = useCallback((game: GameType) => {
    switch (game) {
      case 'クーロンタクティクス':
        setCurrentConfig(<KowloonTactics />);
        break;
      case 'Hanabi':
        setCurrentConfig(<Hanabi />);
        break;
      case 'other':
        setCurrentConfig(<p>other</p>);
        break;
    }
  }, []);

  return { currentConfig, setConfig };
};
