const express = require('express')
const router = express.Router()
const middleware = require('../Middleware/middleware')
const { accessChats, fetchChats, createGroupChat, renameGroup, addToGroup, removeFromGroup, deleteChat } = require('../Controller/ChatControllers')
router.use(middleware)
router.post('/', accessChats)
router.get('/', fetchChats)
router.delete('/delete', deleteChat)
router.post('/group', createGroupChat)
router.put('/rename', renameGroup)
router.put('/groupadd', addToGroup)
router.put('/groupremove', removeFromGroup)

module.exports = router