export type gameDataType = kowloonTacticsData | hanabiData;

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

export interface hanabiData {
  key: string;
}