import express from 'express'
import { prisma } from './lib/prisma.js'

const app = express()

app.use(express.json())

app.post('/users', async (req, res) => {
  const {name} = req.body

  const user = await prisma.user.create({
    data: {
      name
    }
  })

  return res.json(user)
})

app.get('/users', async (req, res) => {
  const users = await prisma.user.findMany()

  return res.json(users)
})


app.listen(3333, () => { console.log('Servidor rodando')})