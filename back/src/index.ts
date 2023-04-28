import express from 'express'

import DiarieRouter from './routes/diaries'

const app = express()
app.use(express.json())

const PORT = 3001

app.get('/ping', (_req, res) => {
  console.log('ping 0')
  res.send('pong')
})

app.use('/api/diaries', DiarieRouter)

app.listen(PORT, () => {
  console.log(`escucha en el puerto ${PORT}`)
})
