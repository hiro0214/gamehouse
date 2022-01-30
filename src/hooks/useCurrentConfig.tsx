import React, { useCallback, useState } from 'react';
import { GameType } from '../../types/gameList';
import { Hanabi } from '../components/organisms/gameConfig/Hanabi';
import { KowloonTactics } from '../components/organisms/gameConfig/KowloonTactics';

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
