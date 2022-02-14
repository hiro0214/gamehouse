import { User } from "../user";

export type gameDataType = {
  players: User[],
  fakeMan: number,
  category: string,
  theme: string,
  context: string,
  turn: number
};

export const colors = ['#ff0f0f', '#0f0fff', '#0fff0f', '#ffff05', '#ff840a', '#ff0aff', '#0affff' ,'#840aff', '#84ff0a', '#ff1489'];