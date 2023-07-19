import React from 'react'
import { useSelector } from 'react-redux'
import Login from './Login'
const ProtectedRoute = ({ children }) => {
    const User = useSelector((state) => state.User)
    return (
        <>
            {User ? children : <Login />}
        </>
    )
}

export default ProtectedRoute
