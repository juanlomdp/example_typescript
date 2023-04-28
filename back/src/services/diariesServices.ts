import DiaryData from './diaries.json'
import { DiaryEntry, NonSensitiveInfoDiaryEntry, NewDiaryEntry } from '../types.js'

const diaries: DiaryEntry[] = DiaryData as DiaryEntry[]
// const pepe:DiaryEntry[]=DiaryData

export const findByid = (id: number): NonSensitiveInfoDiaryEntry | undefined => {
  const entry = diaries.find(d => d.id === id)
  if (entry != null) {
    const { comment, ...resto } = entry
    return resto
  }
  return entry
}

export const getEntries = (): DiaryEntry[] => diaries

export const getEntriesWithOutComent = (): NonSensitiveInfoDiaryEntry[] => {
  return diaries.map(({ id, date, weather, visibility }) => {
    return { id, date, weather, visibility }
  })
}

export const addEntry = (newDiaryEntry: NewDiaryEntry): DiaryEntry => {
  const newDiary = {
    id: diaries.length + 1,
    ...newDiaryEntry
  }
  diaries.push(newDiary)

  return newDiary
}
