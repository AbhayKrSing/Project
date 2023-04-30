const { catchAsync } = require("async-handler-express")
const Chat = require('../Models/Chatmodel');


//API to give access of Chat b/w two users
const accessChats = catchAsync(async (req, res) => {

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
const fetchChats = catchAsync(async (req, res) => {
    try {
        const LoginedUserChat = req.user
        const chats = await Chat.find({ users: { $eq: LoginedUserChat } })
            .populate('users', '-password')
            .populate('groupAdmin', '-password')
            .populate('latestMessage')
            .sort({ updatedAt: -1 })  //-1 means descending order.While 1 means ascending order.(1 is by default)
        res.status(200).send(chats)

    } catch (error) {
        res.status(400).send(error.message)
    }


})

//API for creating Group chat
const createGroupChat = catchAsync(async (req, res) => {
    try {
        if (!req.body.name || !req.body.users) {
            res.status(400).send({ message: "Please Fill all the fields" })
        }
        let Users = JSON.parse(req.body.users)           //we Will send json array from body in users key. VISIT https://www.w3schools.com/Js/tryit.asp?filename=tryjson_parse_array  for better understanding
        if (Users.length < 2) {
            return res.status(400).send({ message: 'There must be more than 2 people for creating group chat' })
        }
        const check = await Chat.find({
            chatName: req.body.name,
            isGroupChat: true,
            users: { $eq: Users },
            groupAdmin: req.user
        })
        if (check[0]) {
            return res.status(400).send({ message: 'GroupChat Already Existed' })
        }
        const groupChat = await Chat.create({
            chatName: req.body.name,
            isGroupChat: true,
            users: Users,
            groupAdmin: req.user
        })
        const fullGROUPChat = await Chat.findById((groupChat._id).toString())
            .populate('users', '-password')
            .populate('groupAdmin', '-password')
        res.status(200).send(fullGROUPChat)
    } catch (error) {
        res.status(400).send({
            error: error.message,
            message: 'Entered Chatname is already created'
        })
    }

})

module.exports = { accessChats, fetchChats, createGroupChat }