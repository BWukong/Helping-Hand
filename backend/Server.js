const express = require('express')
const mongoose = require('mongoose')
const routes = require('./Routes/todo_route')
const cors = require("cors")

require('dotenv').config()

const app = express()
const port = process.env.port || 5000

app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGODB_URL).then(() => console.log(`Connected to MonoDB`)).catch((err) => console.log(err))

app.use(routes)

app.listen(port, () => console.log(`Listening: ${port}`))