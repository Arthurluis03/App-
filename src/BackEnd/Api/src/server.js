import 'dotenv/config'
import express from 'express'
import routes from './Routes/RoutesFarm.js'

const app = express()

app.use(express.json())

app.use(routes)

const porta = process.env.PORTA
const end = process.env.END

app.listen(porta, () => {
    console.log(`Servidor rodando em ${end}:${porta}`)
})