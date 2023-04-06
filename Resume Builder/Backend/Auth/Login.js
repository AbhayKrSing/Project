const jwt = require("jsonwebtoken");
const User = require('../model/LogUp')

const run = async (email,password) => {
    try {
        let user = await User.findOne({Email:email,password:password})
        if(user){
            console.log(user.id)
           const token= jwt.sign(user.id,process.env.key1)
           return token
        }
        else{
            console.log('not a valid credentials')
        }

    } catch (error) {
        console.log(error.message)
    }
}
module.exports=run
