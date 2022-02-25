import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'

export const app = express()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.send({ message: 'Hello, Being' })
})

app.post('/', (req, res) => {
  console.log(req.body)
  res.send({ message: 'Ok' })
})
app.get('/name', (req, res) => {
  res.json({ mesage: 'name received' })
})
app.post('/name', (req, res) => {
  const name = req.body.name
  res.send(name)
})

export const start = () => {
  app.listen(5000, console.log(`server running on 5000`))
}
