import { NewDiaryEntry, Weather, Visibility } from '../types'

const parseComment = (CommentForRequest: any): string => {
  if (!IsString(CommentForRequest)) {
    throw new Error('Incorecto')
  }
  return CommentForRequest
}
const parseDate = (DateForRequest: any): string => {
  if (!IsString(DateForRequest) || !IsDate(DateForRequest)) {
    throw new Error('fecha error')
  }
  return DateForRequest
}
const parseWeather = (WeatherForRequest: any): Weather => {
  if (!IsString(WeatherForRequest) || !IsWeather(WeatherForRequest)) {
    throw new Error('clima error')
  }
  return WeatherForRequest
}

const parseVisibility = (VisibilityForRequest: any): Visibility => {
  if (!IsString(VisibilityForRequest) || !IsVisibility(VisibilityForRequest)) {
    throw new Error('clima error')
  }
  return VisibilityForRequest
}

const IsWeather = (param: any): boolean => {
  return Object.values(Weather).includes(param)
}

const IsVisibility = (param: any): boolean => {
  return Object.values(Visibility).includes(param)
}

const IsString = (string: string): boolean => { return typeof string === 'string' }

const IsDate = (date: string): boolean => {
  return Boolean(Date.parse(date))
}

const toNewDiaryEntry = (object: any): NewDiaryEntry => {
  const NewEntry: NewDiaryEntry = {
    comment: parseComment(object.comment),
    date: parseDate(object.date),
    weather: parseWeather(object.weather),
    visibility: parseVisibility(object.visibility)
  }
  return NewEntry
}

export default toNewDiaryEntry
