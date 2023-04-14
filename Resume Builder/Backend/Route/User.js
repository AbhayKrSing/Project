const express = require('express')
const router = express.Router()
const { body, validationResult } = require('express-validator');
const run = require('../Auth/SignUp')
const runlogin = require('../Auth/Login')
const getuser=require('../Auth/Getuser')
const multer  = require('multer');
const fetch = require('../middleware/fetchuser');
const { sync } = require('framer-motion');
const upload = multer({ dest: 'uploads/' })
//1.Logup or signup 
router.post('/Logup',upload.array('files', 12),[ 
body('Name').isAlpha('en-US', { ignore: " " }),  //imp to ignore ' '
body('Email').isEmail(),
body('password').isLength({ min: 7 })], async (req, res) => {
     const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      console.log(req.body)
      const { Name, Email, password } = req.body
      let token = await run(Name, Email, password)
      if (token) {
          res.status(200).json({ success: true, token })
      }
      else {
          res.status(400).json({ success: false ,message:'Give valid credientials'})
      }
    } catch (error) {
      console.log(error.message)
    }

})
//2. Login 
router.post('/login',upload.array('files', 12),[ 
  body('Email').isEmail()] ,async(req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      console.log(req.body)
      const { Email, password } = req.body
       let token= await runlogin(Email, password)
       if(token){
           res.status(200).json({success:true,token})
       }
       else{
          res.status(400).json({success:false,token:null,message:'Enter valid credentails'})
       }
    } catch (error) {
      console.log(error.message)
    }
 

})
//3.Authentication(login required)
router.post('/getuser',fetch,async(req,res)=>{
  try {
    const data= await getuser(req.user)
    res.status(200).send(data)
  } catch (error) {
    console.log(error.message)
  }


})
module.exports = router