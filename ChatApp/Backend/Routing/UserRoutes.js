const express = require('express')
const router = express.Router()
const { registerUser, LoginUser, GetallUser } = require('../Controller/UserController')
const middleware = require('../Middleware/middleware')
router.get('/', middleware, GetallUser)
router.post('/', registerUser)
router.post('/login', LoginUser)
module.exports = router