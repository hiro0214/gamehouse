import { gameConfigType } from '../types/config';
import { gameDataType } from '../types/data';
import { Connect } from '../types/connect';
import { User } from '../types/user';
import { GameType } from '../types/gameList';
import { kowloonTacticsConfigInit } from './game/kowloonTactics';
import { hanabiConfigInit } from './game/hanabi';

export const connectList: Connect[] = [];

export const userList: User[] = [];

export let
  currentGame: GameType | null= null,
  currentConfig: gameConfigType | null = null,
  gameData: gameDataType | null = null;

export const initConfig = (game: GameType) => {
  switch (game) {
    case 'クーロンタクティクス':
      kowloonTacticsConfigInit()
      break;
    case 'Hanabi':
      hanabiConfigInit()
      break;
    // case 'other':
    //   //
    //   break;
  }
}

export const setCurrentGame = (game: GameType | null) => currentGame = game;

export const setCurrentConfig = (config: gameConfigType) => currentConfig = config;

export const setGameData = (data: gameDataType) => gameData = data;