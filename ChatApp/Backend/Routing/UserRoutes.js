const express = require('express')
const router = express.Router()
const { registerUser, LoginUser } = require('../Controller/UserController')
router.post('/', registerUser)
router.post('/login', LoginUser)
module.exports = router