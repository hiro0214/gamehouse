import { User } from './user'

export type gameConfigType = kowloonTacticsConfig;

export interface kowloonTacticsConfig {
  redPlayer: User,
  bluePlayer: User,
  redSupporter: User[],
  blueSupporter: User[]
}