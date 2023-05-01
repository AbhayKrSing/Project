const express = require('express')
const app = express()
const path = require('path')
const colors = require('colors')
const cors = require('cors')
app.use(cors())
require('dotenv').config({ path: path.resolve(__dirname, './.env') })
const connect = require('./Database')
const Usersign_up = require('./Route/User')
app.use(express.json())
connect()  //To connect to database
app.use('/user', Usersign_up)
app.get('/', (req, res) => {
    res.send('hello')
})
app.listen(5000, () => {
    console.log('Server is Running at 5000 port'.yellow.bold)
})


