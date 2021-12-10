export type gameDataType = kowloonTacticsData;

export interface kowloonTacticsData {
  redPlayer: {
    "hand": number[],
    "field": number[]
  },
  bluePlayer: {
    "hand": number[],
    "field": number[]
  }
}