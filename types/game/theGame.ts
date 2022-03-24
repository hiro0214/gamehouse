import { User } from "../user";

export type gameDataType = {
  playerList: playerHandType[],
  fieldCards: [
    fieldCardType,
    fieldCardType,
    fieldCardType,
    fieldCardType,
  ],
  deck: number[],
  score: number,
  turn: number,
  remainingHand: number,
  status: messageStatusType
}

export type playerHandType = {
  user: User,
  hand: number[]
}

type fieldCardType = number[];

export type messageStatusType = 'remaining' | 'continue' | 'finish';

export type playCardType = {
  userId: string,
  selectIndex: number,
  fieldIndex: number
}