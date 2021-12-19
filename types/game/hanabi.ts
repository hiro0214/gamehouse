import { User } from "../user";

export type color = 'red' | 'blue' | 'yellow' | 'green' | 'white' | 'purple';

export type hand = {
  color: string;
  num: number
}

export type playerHandType = {
  player: User;
  hands: hand[];
}