import { User } from '../types/user';
import { kowloonTacticsInit } from './kowloonTactics';

export const userList: User[] = []

export let currentGame = '';

export const data = {}

export const initConfig = (game: string) => {
  switch (game) {
    case 'クーロンタクティクス':
      kowloonTacticsInit()
      break;
    // case 'Hanabi':
    //   //
    //   break;
    // case 'other':
    //   //
    //   break;
  }
}

export const setCurrentGame = (game: string) => currentGame = game