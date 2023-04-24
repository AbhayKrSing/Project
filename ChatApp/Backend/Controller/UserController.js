const { catchAsync } = require('async-handler-express');
const User = require('../Models/UserModel');
const generateToken = require('../config/generateToken');
const registerUser = catchAsync(async (req, res) => {
    const { name, email, password, pic } = req.body
    if (!name || !email || !password) {
        res.sendStatus(400)
        throw new Error('Please Enter all the Fields')  //Error throw karna ki wajah se return statement nhi laga skte
    }
    const UserExists = await User.findOne({ email })
    if (UserExists) {
        res.sendStatus(400)
        throw new Error('User already present,give valid credientials')
    }
    const user = await User.create({ name, email, password, pic })
    if (user) {
        const token = await generateToken(user._id.toString())
        res.status(200).json({
            id: user._id,
            name: user.name,
            password: user.password,
            token: token
        })
    }
    else {
        res.status(400).send('Failed to create User account')
    }
})
module.exports = { registerUser }
