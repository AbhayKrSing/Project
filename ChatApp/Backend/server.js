const express = require('express')
const path = require('path');
const { errorHandler } = require('async-handler-express');
const handleUnknownAPI = require('./HandleUnknown/404');
const colors = require('colors')
require('dotenv').config({ path: path.resolve(__dirname, './.env') }); // According to document,Best pratice must be like this.
const app = express()
const connectDB = require('./config/connectdb');
const UserRoutes = require('./Routing/UserRoutes');
const ChatRoutes = require('./Routing/ChatRoutes')
connectDB()
app.use(errorHandler);
app.use(express.json())

app.use('/api/user', UserRoutes)
app.use('/api/chats', ChatRoutes)
app.get('/', (req, res) => {
    res.send('API is Running')
})



app.use(handleUnknownAPI)  //Applied in last because we want to run it in last
app.listen(process.env.SERVER_HOST, () => {
    console.log('Server is running on 5000'.yellow.bold)
})