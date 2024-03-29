const express = require('express')
const router = express.Router()
const { singleChatMessage, fetchAllMessages } = require('../Controller/MessageControllers')
const middlware = require('../Middleware/middleware')

router.use(middlware)
router.get('/allchats', fetchAllMessages)
router.post('/single', singleChatMessage)
module.exports = router