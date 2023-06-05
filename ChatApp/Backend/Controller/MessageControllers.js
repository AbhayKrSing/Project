const { catchAsync } = require("async-handler-express");
const Message = require("../Models/Messagemodel");

//API for user to send messages for single chat
const singleChatMessage = catchAsync(async (req, res) => {
    try {
        const { content, chat } = req.body
        if (!content || !chat) {
            throw new Error('Fill all the fields')
        }
        const data = await Message.create({ sender: req.user, content: content, chat: chat })
        res.send(data)
    } catch (error) {
        res.send(error.message)
    }
})
module.exports = { singleChatMessage }
