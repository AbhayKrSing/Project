const express=require('express')
const router=express.Router()
const run=require('../Auth/SignUp')
//1.Logup or signup 
router.post('/Logup',async(req,res)=>{
   const {Name,Email,password}=req.body
    let token=await run(Name,Email,password)
   if(token){
       res.status(200).json({success:true,token})
   }
   else{
    res.status(400).json({success:false})
   }
})
module.exports=router