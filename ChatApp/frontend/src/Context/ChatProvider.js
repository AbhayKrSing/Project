//boiler plate code
import { useToast } from '@chakra-ui/react'
import { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const chatContext = createContext()

const ChatState = ({ children }) => {
    const toast = useToast()
    const navigate = useNavigate();
    const location = useLocation();
    const [user, setuser] = useState(localStorage.getItem('UserInfo'))
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

    return (
        <chatContext.Provider value={{ user, setuser, Toast }}>{children}</chatContext.Provider>
    )
}
export const UseContextAPI = () => {
    return useContext(chatContext)
}
export default ChatState  //Now wrap ChatState on any component to get access any State or functions in any hierarcy of that component.
//Usually we warp in on index.js or App.js file give access of  State or functions in all app components