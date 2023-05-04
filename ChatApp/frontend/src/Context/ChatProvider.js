//boiler plate code
import { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const chatContext = createContext()

const ChatState = ({ children }) => {
    const [user, setuser] = useState(JSON.parse(localStorage.getItem('UserInfo')))
    const navigate = useNavigate()
    useEffect(() => {
        if (user.success) {

        }
        else {
            navigate('/')
        }
        //so whenever navigate function changes it get triggers
        // eslint-disable-next-line
    }, [navigate])

    return (
        <chatContext.Provider value={{ user, setuser }}>{children}</chatContext.Provider>
    )
}
export const UseContextAPI = () => {
    return useContext(chatContext)
}
export default ChatState  //Now wrap ChatState on any component to get access any State or functions in any hierarcy of that component.
//Usually we warp in on index.js or App.js file give access of  State or functions in all app components