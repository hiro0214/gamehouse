import React, { useCallback, useState } from 'react';
import { KowloonTactics } from '../components/organisms/gameConfig/KowloonTactics';

export const useCurrentConfig = () => {
  const [currentConfig, setCurrentConfig] = useState<React.ReactElement | null>(null);

  const setConfig = useCallback((game: string) => {
    switch (game) {
      case 'クーロンタクティクス':
        setCurrentConfig(<KowloonTactics />);
        break;
      case 'Hanabi':
        setCurrentConfig(<p>Hanabi</p>);
        break;
      case 'other':
        setCurrentConfig(<p>other</p>);
        break;
    }
  }, []);

  return { currentConfig, setConfig };
};
