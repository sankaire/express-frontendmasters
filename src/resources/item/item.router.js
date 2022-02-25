import { Router } from 'express'

const router = Router()

// CRUD

router
  .route('/')
  .get((req, res) => {
    res.send({ message: 'items' })
  })
  .post((req, res) => {
    res.send(req.body)
  })
router
  .route('/:id')
  .get((req, res) => {
    res.send({ message: 'item id' })
  })
  .put((req, res) => {
    res.send(req.body)
  })
  .delete((req, res) => {
    res.send({ message: 'item deleted' })
  })

export default router
