const jwt = require("jsonwebtoken");
const User = require('../model/LogUp')
require('dotenv').config()
const run = async (name,email,password) => {
    try {
        let user = new User({ Name: name, Email: email, password: password })
        user = await user.save()
        const token=jwt.sign(user.id,process.env.key1)
        return token
    } catch (error) {
        console.log(error.message)
    }
}
module.exports=run

