import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
const Login = ({ actionCreator }) => {
    const dispatch = useDispatch()
    const emailref = useRef()
    const passwordref = useRef()
    const handlesubmit = async (e) => {
        e.preventDefault()
        dispatch(actionCreator.login(emailref.current.value, passwordref.current.value));
    }
    const navigate = useNavigate()
    const User = useSelector((state) => state.User)
    useEffect(() => {
        if (User) {
            navigate('/')
        }
        else {
            navigate('/login')
        }
        // eslint-disable-next-line
    }, [User])
    return (
        <>
            <div className='mx-auto md:mr-52 pt-28'>
                <div className='w-full flex justify-end items-center'>
                    <div className="w-full max-w-xl">
                        <form className="bg-white shadow-md rounded-t-lg rounded-bl-lg px-8 pt-8 pb-8 mb-4 max-h-[60vh]" onSubmit={handlesubmit}>
                            <h1 className="text-3xl text-lg-20">Login</h1>
                            <div className='my-6'>
                                <div className="mb-6">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                        Username
                                    </label>
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Username" ref={emailref} />
                                </div>
                                <div className="mb-6">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                        Password
                                    </label>
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" ref={passwordref} />
                                </div>
                                <div className="flex flex-col md:flex-row items-center justify-between">
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4 md:mb-0 md:mr-4" type="submit">
                                        Sign In
                                    </button>
                                    <Link className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                                        Forgot Password?
                                    </Link>
                                </div>

                            </div>
                        </form>
                        <p className="text-center text-xs text-white">
                            <span className='mx-2'>
                                Create an account ??
                            </span>

                            <span className='text-blue-900 text-lg'>
                                <Link to="/signup">Signup</Link>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
