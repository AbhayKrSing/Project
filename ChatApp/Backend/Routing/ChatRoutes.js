const express = require('express')
const router = express.Router()
const middleware = require('../Middleware/middleware')
const { accessChats, fetchChats } = require('../Controller/ChatControllers')
router.use(middleware)
// router.use(protect)
router.post('/', accessChats)
router.get('/', fetchChats)
// router.post('/group',createGroupChat)
// router.put('/rename',renameGroup)
// router.put('/groupremove', removeFromGroup)
// router.put('/groupadd',addToGroup)

module.exports = router