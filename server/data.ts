import { gameConfigType } from '../types/config';
import { gameDataType } from '../types/data';
import { Connect } from '../types/connect';
import { User } from '../types/user';
import { kowloonTacticsConfigInit } from './kowloonTactics';

export const connectList: Connect[] = [];

export const userList: User[] = [];

export let
  currentGame = '',
  currentConfig: gameConfigType | null = null,
  gameData: gameDataType | null = null;

export const initConfig = (game: string) => {
  switch (game) {
    case 'クーロンタクティクス':
      kowloonTacticsConfigInit()
      break;
    // case 'Hanabi':
    //   //
    //   break;
    // case 'other':
    //   //
    //   break;
  }
}

export const setCurrentGame = (game: string) => currentGame = game;

export const setCurrentConfig = (config: gameConfigType) => currentConfig = config;

export const setGameData = (data: gameDataType) => gameData = data;