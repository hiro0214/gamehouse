import { gameConfigType } from '../types/config';
import { Connect } from '../types/connect';
import { User } from '../types/user';
import { GameType } from '../types/gameList';
import { kowloonTacticsConfigInit } from './game/kowloonTactics';
import { hanabiConfigInit } from './game/hanabi';
import { fakeArtistConfigInit } from './game/fakeArtist';

export const connectList: Connect[] = [];

export const userList: User[] = [];

export let
  currentGame: GameType | null= null,
  currentConfig: gameConfigType | null = null;

export const initConfig = (game: GameType) => {
  switch (game) {
    case 'クーロンタクティクス':
      kowloonTacticsConfigInit()
      break;
    case 'Hanabi':
      hanabiConfigInit()
      break;
    case 'エセ芸術家 ニューヨークへ行く':
      fakeArtistConfigInit()
      break;
  }
}

export const setCurrentGame = (game: GameType | null) => currentGame = game;

export const setCurrentConfig = (config: gameConfigType) => currentConfig = config;
