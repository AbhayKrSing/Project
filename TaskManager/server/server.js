const express = require('express')
const app = express()
const color = require('colors')
app.get('/', (req, res) => {
    res.send('Hello This is / route')
})

app.listen(5000, () => {
    console.log('listen to port 5000'.yellow)
})