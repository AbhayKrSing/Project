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
    const [loading, setloading] = useState(false)
    useEffect(() => {
        if (user === null) {
            navigate('/')
        }
        else {
            navigate('/chats')
        }
        // eslint-disable-next-line
    }, [location.pathname])
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
    const accessChats = async (UserId) => {
        setloading(true)
        try {
            const { data } = await axios.post('/api/chats', {
                "userId": UserId
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': JSON.parse(localStorage.getItem('UserInfo')).token
                }
            })
            if (!data.isGroupChat) {
                setchat(data.users)
                localStorage.setItem('Chat', (data.users[1]._id))
                setloading(false)
            }
            else {
                setchat(user.concat(chat))
                localStorage.setItem('groupChat', JSON.stringify(data.users))
                setloading(false)
            }

        } catch (error) {
            Toast('Error', error.message, 'error', 1000, 'bottom')
        }
    }

    return (
        <chatContext.Provider value={{ user, setuser, Toast, accessChats, chat, setchat, loading }}>{children}</chatContext.Provider>
    )
}
export const UseContextAPI = () => {
    return useContext(chatContext)
}
export default ChatState  //Now wrap ChatState on any component to get access any State or functions in any hierarcy of that component.
//Usually we warp in on index.js or App.js file give access of  State or functions in all app components