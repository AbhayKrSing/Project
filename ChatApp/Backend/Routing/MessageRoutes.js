const express = require('express')
const router = express.Router()
const { singleChatMessage } = require('../Controller/MessageControllers')
const middlware = require('../Middleware/middleware')

router.use(middlware)
router.post('/single', singleChatMessage)
module.exports = router