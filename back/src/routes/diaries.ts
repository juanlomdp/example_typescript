import express from 'express'
import * as diaryServices from '../services/diariesServices'
import toNewDiaryEntry from '../utils/utils'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(diaryServices.getEntriesWithOutComent())
})

router.get('/:id', (req, res) => {
  const { id } = req.params
  const diary = diaryServices.findByid(Number(id))
  res.send(diary?.weather)
})

router.post('/', (req, res) => {
  try {
    const NewDiaryEntry = toNewDiaryEntry(req.body)
    const addedDiaryEntry = diaryServices.addEntry(NewDiaryEntry)
    res.json(addedDiaryEntry)
  } catch (error: any) {
    res.status(400).send(error.message)
  }
})

export default router
