const { catchAsync } = require('async-handler-express');  //async-handler-express used for handle error in async operation
const User = require('../Models/UserModel');
const generateToken = require('../config/generateToken');
//For Sign UP
const registerUser = catchAsync(async (req, res) => {
    const { name, email, password, pic } = req.body
    if (!name || !email || !password) {
        throw new Error('Please Enter all the Fields')  //Error throw karna ki wajah se return statement nhi laga skte
    }
    const UserExists = await User.findOne({ email })
    if (UserExists) {
        throw new Error('User already present,give valid credientials')
    }
    const user = await User.create({ name, email, password, pic })
    if (user) {
        const token = await generateToken(user._id.toString())
        res.status(200).json({
            success: true,
            id: user._id,
            name: user.name,
            password: user.password,
            pic: user.pic,
            token: token
        })
    }
    else {
        res.status(400).send('Failed to create User account')
    }
})
//For login

const LoginUser = catchAsync(async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        throw new Error('Please Enter all the Fields')  //Error throw karna ki wajah se return statement nhi laga skte
    }
    const UserExists = await User.findOne({ email })
    //   const User=  await bcrypt.compare(password, UserExists.password);
    if (UserExists && await UserExists.matchpassword(password)) {
        const token = await generateToken(UserExists._id.toString())
        res.status(200).json({
            success: true,
            id: UserExists._id,
            name: UserExists.name,
            email: UserExists.email,
            pic: UserExists.pic,
            token: token
        })
    }
    else {
        res.status(400).send('Give valid credientials')
    }
})


//Get all Users.(Login required)
const GetallUser = catchAsync(async (req, res) => {
    const keyword = req.query.search          //If more query is there i will use $or in next line for mongodb query
    const users = await User.find({ name: { $regex: keyword, $options: 'i' } }).find({ _id: { $ne: req.user } }).select('-password')
    res.send(users)
})
module.exports = { registerUser, LoginUser, GetallUser }
