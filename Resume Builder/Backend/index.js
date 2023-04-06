const express=require('express')
const app=express()
require('dotenv').config()
const connect=require('./Database')
const Usersign_up=require('./Route/User')
app.use(express.json())
connect()  //To connect to database
app.use('/user',Usersign_up)
app.get('/',(req,res)=>{
    res.send('hello')
})
app.listen(80)


