const express = require('express')
const app = express()
require('dotenv').config()
app.get('/',  (req, res)=> {
  res.send('API is Running')
})
app.get('/api/chats',(req,res)=>{
    res.send('You will see all chats')
})
app.get('/api/chats/:id',(req,res)=>{
    res.send('You will see User specific chats')
})



app.listen(process.env.SERVER_HOST,()=>{
    console.log('Server is running on 5000')
})