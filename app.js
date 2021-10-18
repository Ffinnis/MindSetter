require('dotenv').config()
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const authRouter = require('./routes/auth.router')
const mapRouter = require('./routes/map.router')

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use('/api', authRouter)
app.use('/api', mapRouter)

const server = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`App stated on ${PORT} port`)
        })
    } catch (e) {
        console.log(e)
    }
}

server()