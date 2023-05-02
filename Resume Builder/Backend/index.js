const express = require('express')
const app = express()
const path = require('path')
const colors = require('colors')
const cors = require('cors')
const multer = require('multer');
const upload = multer({ dest: 'uploads/' })
app.use(cors())
app.use(upload.array('files', 12))
app.use(express.json())
require('dotenv').config({ path: path.resolve(__dirname, './.env') })
const connect = require('./Database')
const UserRoute = require('./Route/User')

connect()  //To connect to database
app.use('/user', UserRoute)
app.get('/', (req, res) => {
    res.send('hello')
})
app.listen(PORT = 5000, () => {
    console.log(`Server is Running at ${PORT}`.yellow.bold)
})


