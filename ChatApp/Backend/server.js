const express = require('express')
const path = require('path');
const { errorHandler } = require('async-handler-express');
const colors = require('colors')
require('dotenv').config({ path: path.resolve(__dirname, './.env') }); // According to document,Best pratice must be like this.
const app = express()
const connectDB = require('./config/connectdb');
const UserRoutes = require('./Routing/UserRoutes');
connectDB()
app.use(express.json())
app.use('/api/user', UserRoutes)
app.use(errorHandler);
app.get('/', (req, res) => {
    res.send('API is Running')
})




app.listen(process.env.SERVER_HOST, () => {
    console.log('Server is running on 5000'.yellow.bold)
})