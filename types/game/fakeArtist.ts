import { User } from "../user";

export type gameDataType = {
  players: User[],
  fakeMan: number,
  colors: string[],
  category: string,
  theme: string,
  context: string,
  turn: number,
  mostVote: string,
  answerList: string[],
  answer: string;
};

export type gameStatusType = 'theme' | 'title' | 'game' | 'vote' | 'voted' | 'reversal' | 'answer' | 'finish' |'';