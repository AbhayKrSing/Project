const express = require('express')
const path = require('path');
const colors = require('colors')
require('dotenv').config({ path: path.resolve(__dirname, './.env') }); // According to document,Best pratice must be like this.
const app = express()
const connectDB = require('./config/connectdb')
connectDB()
app.get('/', (req, res) => {
    res.send('API is Running')
})
app.get('/api/chats', (req, res) => {
    res.send('You will see all chats')
})
app.get('/api/chats/:id', (req, res) => {
    res.send('You will see User specific chats')
})



app.listen(process.env.SERVER_HOST, () => {
    console.log('Server is running on 5000'.yellow.bold)
})