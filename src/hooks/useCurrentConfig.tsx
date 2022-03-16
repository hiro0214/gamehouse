import React, { useCallback, useState } from 'react';
import { GameType } from '../../types/gameList';
import { FakeArtist } from '../components/organisms/gameConfig/FakeArtist';
import { Hanabi } from '../components/organisms/gameConfig/Hanabi';
import { KowloonTactics } from '../components/organisms/gameConfig/KowloonTactics';
import { TheGame } from '../components/organisms/gameConfig/TheGame';

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
      case 'エセ芸術家 ニューヨークへ行く':
        setCurrentConfig(<FakeArtist />);
        break;
      case 'ザ・ゲーム':
        setCurrentConfig(<TheGame />);
        break;
    }
  }, []);

  return { currentConfig, setConfig };
};
