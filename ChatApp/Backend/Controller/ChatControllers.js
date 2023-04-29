const { catchAsync } = require("async-handler-express")
const Chat = require('../Models/Chatmodel');


//API to give access to the Chat b/w two users
const accessChats = catchAsync(async (req, res, next) => {

    const LoginUserID = req.user              //Using headers
    if (!LoginUserID) {
        res.send('Not allowed to access particular resources')
        return
    }
    const { userId } = req.body
    if (!userId) {
        console.log("UserId param is not send with request")
        return res.sendStatus(400)
    }
    let isChat = await Chat.find({
        isGroupChat: false,
        //$and checks if both is present inside the users:
        $and: [{ users: { $eq: LoginUserID } }, { users: { $eq: userId } }]  //This is a way to search in an array+ for elemMatch visit https://stackoverflow.com/questions/41725419/elemmatch-query-in-mongodb
    }).populate('users', '-password')
    // isChat = await User.populate(isChat, {     //yeh pata nhi kya hai koi fark nhi aarha result mey
    //     path: "latestMessage.sender",
    //     select: "name pic email",
    // });
    if (isChat.length > 0) {
        res.send(isChat[0])
    }
    else {
        try {
            let newChat = {
                chatName: 'Sender',
                isGroupChat: false,
                users: [LoginUserID, userId]
            }
            newChat = await Chat.create(newChat)
            newChat = await Chat.findById(newChat._id).populate('users', '-password')
            res.send(newChat)
        } catch (error) {
            res.status(400).send(error.message)
        }

    }

})


//API to fetch chat of Login User
const fetchChats = catchAsync(async (req, res, next) => {
    try {
        const LoginedUserChat = req.user
        const chats = await Chat.find({ users: { $eq: LoginedUserChat } })
            .populate('users', '-password')
            .populate('groupAdmin', '-password')
            .populate('latestMessage')
            .sort({ updatedAt: -1 })
        res.status(200).send(chats)

    } catch (error) {
        res.status(400).send(error.message)
    }


})
module.exports = { accessChats, fetchChats }