import { User } from './user'

export type gameConfigType = kowloonTacticsConfig | hanabiConfig | fakeArtistConfig;

export interface kowloonTacticsConfig {
  redPlayer: User,
  bluePlayer: User,
  redSupporter: User[],
  blueSupporter: User[]
}

export interface hanabiConfig {
  colorNum: number;
  handNum: number;
}

export type fakeArtistConfig = null