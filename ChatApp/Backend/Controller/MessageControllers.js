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
const fetchAllMessages = catchAsync(async (req, res) => {
    try {
        const { chatId, GroupChat } = req.query
        if (!chatId) {
            throw new Error('No Id is send through params')
        }
        if (GroupChat == 'true') {
            const chats = await Message.find({ chat: chatId })
            res.send(chats)
        }
        else {
            //single chat logic(one on one chat logic)
            const chats = await Message.find({
                $or: [
                    {
                        $and: [
                            { chat: chatId }, { sender: req.user }
                        ]
                    },
                    {
                        $and: [
                            { chat: req.user }, { sender: chatId }
                        ]
                    }

                ]
            })
            res.send(chats)
        }
    } catch (error) {
        console.log(error.message)
    }
})
module.exports = { singleChatMessage, fetchAllMessages }
