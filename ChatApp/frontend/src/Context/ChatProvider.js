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
    useEffect(() => {
        if (user === null) {
            navigate('/')
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
            if (value.users[1]._id !== loginedUser) {  //logic to pervent chat display of logined user.
                arr.push(value.users[1])
            }
            else {
                arr.push(value.users[0])
            }
        }
        setchat(chat.concat(arr))
        setload(false)
    }

    return (
        <chatContext.Provider value={{ user, setuser, Toast, accessChats, chat, setchat, load, fetchChats, add, People, setPeople, remove }}>{children}</chatContext.Provider>
    )
}
export const UseContextAPI = () => {
    return useContext(chatContext)
}
export default ChatState  //Now wrap ChatState on any component to get access any State or functions in any hierarcy of that component.
//Usually we warp in on index.js or App.js file give access of  State or functions in all app components