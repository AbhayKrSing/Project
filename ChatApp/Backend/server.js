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
const MessageRoutes = require('./Routing/MessageRoutes')
connectDB()
app.use(errorHandler);
app.use(express.json())

app.use('/api/user', UserRoutes)
app.use('/api/chats', ChatRoutes)
app.use('/api/messages', MessageRoutes)



app.use(handleUnknownAPI)  //Applied in last because we want to run it in last
const server = app.listen(process.env.SERVER_HOST, () => {
    console.log('Server is running on 5000'.yellow.bold)
})

//setting socketio in backend side

const io = require('socket.io')(server, {
    cors: {
        origin: ['http://localhost:3000']
    },
    pingTimeout: 6000
})

io.on('connection', (socket) => {
    console.log('connect with socket having id :' + socket.id)
})