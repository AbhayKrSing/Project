//boiler plate code
import { useToast } from '@chakra-ui/react'
import { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import axios from 'axios'
const chatContext = createContext()

const ChatState = ({ children }) => {
    const toast = useToast()
    const navigate = useNavigate();
    const location = useLocation();
    const [user, setuser] = useState(localStorage.getItem('UserInfo'))
    const [chat, setchat] = useState([])
    const [load, setload] = useState(false)
    const [People, setPeople] = useState([])
    const [selectChat, setselectChat] = useState('')
    const [chatcontent, setchatcontent] = useState([])
    const [TypingIndicator, setTypingIndicator] = useState(false)
    useEffect(() => {
        if (user === null) {
            navigate('/')
            setchat([])
            setload(false)
            setPeople([])
            setselectChat('')
            setchatcontent([])
            setuser('')
        }
        else {
            navigate('/chats')
        }
        // eslint-disable-next-line
    }, [location.pathname])


    //Add user badge while creating groupchat
    const add = (user) => {
        let count = 0
        for (const element of People) {
            if (element._id === user._id) {
                Toast('Already Added', '', 'error', 1000, 'bottom')
                count++
            }
        }
        if (count === 0) {
            setPeople([...People, user])         //we don't need to use concat if we are using destructuring
        }
    }

    //remove user badge while creating groupchat
    const remove = (user) => {
        console.log(user)
        const newPeople = People.filter((element) => {
            return element._id !== user._id
        })
        setPeople([...newPeople])
    }
    const Toast = (title, description, status, duration, position = 'top') => {
        return toast({
            title: title,
            description: description,
            status: status,
            duration: duration,
            isClosable: true,
            position: position,
        })
    }
    //accessChats userChat for Chatting
    const accessChats = async (UserId) => {
        setload(true)
        try {
            const { data } = await axios.post('/api/chats', {
                "userId": UserId
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': JSON.parse(localStorage.getItem('UserInfo')).token
                }
            })
            const MyChat = data.users.filter((element) => {
                // if (!chat[0]) {
                //     return element           //use kar sktey hai baad mey
                // }
                // else {
                //     return element._id === UserId
                // }
                return element._id === UserId        //login user not shown
            })

            if (!chat[0]) {
                setchat(chat.concat(MyChat))
            }
            else {
                //algo for duplicate
                let count = 0
                for (const element of chat) {
                    if (element._id === MyChat[0]._id) {
                        Toast('User already added', '', 'warning', 1000, 'bottom')
                        count++
                        break
                    }
                }
                if (count === 0) {
                    setchat(chat.concat(MyChat))
                    Toast('User Added', ' ', 'success', 1000, 'bottom')
                }
            }
            setload(false)


        } catch (error) {
            Toast('Error', error.message, 'error', 1000, 'bottom')
        }
    }

    //fetch all Chats of Logined User
    const fetchChats = async () => {
        setload(true)
        const response = await axios.get("/api/chats", {
            headers: {
                'auth-token': JSON.parse(localStorage.getItem('UserInfo')).token
            }
        })
        const chats = response.data

        let arr = []
        const loginedUser = JSON.parse(localStorage.getItem('UserInfo')).id
        for (const value of chats) {
            if (!value.isGroupChat) {
                if (value.users[1]._id !== loginedUser) {  //logic to pervent chat display of logined user.
                    arr.push(value.users[1])
                }
                else {
                    arr.push(value.users[0])
                }
            }
            else {
                //For Groupchats
                arr.push(value)
            }
        }
        setchat(chat.concat(arr))
        setload(false)
    }
    //To create GroupChat
    const createGroupChat = async (groupChatName) => {
        setload(true)
        const PeoplesId = People.map((element) => {
            return element._id
        })
        try {
            const { data } = await axios.post('/api/chats/group', JSON.stringify({
                name: groupChatName,
                users: JSON.stringify(PeoplesId)
            }), {
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': JSON.parse(localStorage.getItem('UserInfo')).token
                }
            })
            console.log(data)
            setchat([data, ...chat])
            setload(false)
            Toast('Chat created successfully', '', 'success', 1000, 'bottom')
        } catch (error) {
            console.log(error.message)
            setload(false)
        }
    }
    //To Add and remove user from Group
    const Add_RemoveUserFrommGroupChat = async (identifier) => {
        setload(true)
        if (identifier === 'People') {
            try {
                const { data } = await axios.put('/api/chats/groupadd_remove', JSON.stringify({
                    chatId: selectChat._id,
                    UserIdToSET: JSON.stringify(People),
                }), {
                    headers: {
                        'Content-Type': 'application/json',
                        'auth-token': JSON.parse(localStorage.getItem('UserInfo')).token
                    }
                })
                setload(false)
                if (data === 'Not authorized') {
                    Toast('Only GroupAdmin Allowed to perform such actions', '', 'error', 1000, 'bottom')
                }
                else {
                    Toast('UsersChanged', '', 'success', 1000, 'bottom')
                    selectChat.users = People                 //need to manupulate setchat because see line no 116
                    setselectChat(selectChat)

                }
            } catch (error) {
                console.log(error.message)
                setload(false)
            }
        }
        else if (identifier === 'oneUser') {
            try {
                await axios.put('/api/chats/groupadd_remove', JSON.stringify({
                    chatId: selectChat._id,
                    UserIdToRemove: user.id,
                }), {
                    headers: {
                        'Content-Type': 'application/json',
                        'auth-token': JSON.parse(localStorage.getItem('UserInfo')).token
                    }
                })
                console.log(People)
                const newPeople = People.filter((element) => {
                    return element._id !== user.id
                })
                selectChat.users = newPeople                 //need to manupulate setchat because see line no 116
                setselectChat(selectChat)
                setPeople([...newPeople])
                const newchat = chat.filter((element) => {
                    return element._id !== selectChat._id
                })
                setchat([...newchat])
                setload(false)
                Toast('You successfully leaved this Chat', '', 'success', 1000, 'bottom')

            } catch (error) {
                console.log(error.message)
                setload(false)
            }
        }
    }
    //To all message of GroupChat or one-on-one Chat
    const FetchAllMessages = async () => {
        try {
            const { data } = await axios.get(`/api/messages/allchats?chatId=${selectChat._id}&GroupChat=${selectChat.isGroupChat}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': user.token
                }
            })
            setchatcontent(data)
        } catch (error) {
            console.log(error.message)
        }
    }
    return (
        <chatContext.Provider value={{ user, setuser, Toast, accessChats, chat, setchat, load, setload, fetchChats, add, People, setPeople, remove, createGroupChat, selectChat, setselectChat, Add_RemoveUserFrommGroupChat, chatcontent, setchatcontent, FetchAllMessages, TypingIndicator, setTypingIndicator }}>{children}</chatContext.Provider>
    )
}
export const UseContextAPI = () => {
    return useContext(chatContext)
}
export default ChatState  //Now wrap ChatState on any component to get access any State or functions in any hierarcy of that component.
//Usually we warp in on index.js or App.js file give access of  State or functions in all app components