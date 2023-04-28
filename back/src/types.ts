
export interface DiaryEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
}

export enum Weather {
  Sunny = 'sunny',
  Rainy = 'rainy',
  Cloudy = 'cloudy',
  Windy = 'windy',
  Storny = 'storny'
}

export enum Visibility {
  great = 'great',
  good = 'good',
  ok = 'ok',
  poor = 'poor'
}

// export type  NonSensitiveInfoDiaryEntry = Pick<DiaryEntry, 'id'| 'date' | 'visibility' | 'weather'>

export type NonSensitiveInfoDiaryEntry = Omit <DiaryEntry, 'comment'>

export type NewDiaryEntry = Omit<DiaryEntry, 'id'>
