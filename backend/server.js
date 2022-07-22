const express = require('express')
const cors = require("cors")
const app = express()
const port = 5000
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

app.use(cors({
    origin: "http://localhost:5173"
}))

app.use(express.json());

app.get('/users', async (req, res) => {
    res.send(await prisma.User.findMany())
})

app.get('/perks', async (req, res) => {
    res.send(await prisma.Perk.findMany())
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
