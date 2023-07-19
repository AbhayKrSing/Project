import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
const Home = ({ actionCreator }) => {
    const dispatch = useDispatch()
    const User = useSelector(state => state.User)
    const logout = () => {
        dispatch(actionCreator.logout())
    }
    useEffect(() => {
        if (User) {
            console.log(User)
        }
        else {
            console.log('UserLogout.')
        }
    }, [User])
    return (

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={logout}>
            Logout
        </button>


    )
}

export default Home
