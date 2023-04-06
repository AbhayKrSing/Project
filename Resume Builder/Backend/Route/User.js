const express = require('express')
const router = express.Router()

const run = require('../Auth/SignUp')
const runlogin = require('../Auth/Login')

//1.Logup or signup 
router.post('/Logup', async (req, res) => {
    const { Name, Email, password } = req.body
    let token = await run(Name, Email, password)
    if (token) {
        res.status(200).json({ success: true, token })
    }
    else {
        res.status(400).json({ success: false ,message:'Give valid credientials'})
    }
})
//2. Login 
router.post('/login', async(req, res) => {
    const { Email, password } = req.body
     let token= await runlogin(Email, password)
     if(token){
         res.status(200).json({success:true,token})
     }
     else{
        res.status(400).send('Give valid credentials')
     }

})
module.exports = router