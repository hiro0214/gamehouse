import { User } from "../user";

export type gameDataType = {
  players: User[],
  fakeMan: number,
  colors: string[],
  category: string,
  theme: string,
  context: string,
  turn: number
};
