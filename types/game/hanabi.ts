import { User } from "../user";

export type color = 'red' | 'blue' | 'yellow' | 'green' | 'white' | 'purple';

export type actionType = 'miss' | 'gameover' | 'finish' | null;

export type gameDataType = {
  deck: hand[];
  players: playerHandType[];
  fields: hand[];
  cemetery: cemeteryType[];
  score: number;
  turn: number;
  extra: number;
  hint: number;
  miss: number;
}

export type hand = {
  color: string;
  num: number;
  colorHint?: boolean;
  numHint?: boolean;

}

export type playerHandType = {
  player: User;
  hands: hand[];
}

export type cemeteryType = {
  color: color;
  num: number[];
}