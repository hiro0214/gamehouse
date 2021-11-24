import { User } from './user'

export interface kowloonTacticsConfig {
  redPlayer: User,
  bluePlayer: User,
  redSupporter: User[],
  blueSupporter: User[]
}