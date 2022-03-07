import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'
import { listRouter } from '../src/resources/list/list.router'

export const app = express()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use('api/v1/lists', listRouter)


export const start = () => {
  app.listen(5000, console.log(`server running on 5000`))
}
