import { User } from "../user";

export type gameDataType = {
  players: User[],
  fakeMan: number,
  colors: string[],
  category: string,
  theme: string,
  context: string,
  turn: number,
  mostVote: string
};

export type gameStatusType = 'theme' | 'title' | 'game' | 'vote' | 'voted' | 'reversal' | 'fin' |'';