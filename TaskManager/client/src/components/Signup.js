import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import * as actionCreator from '../state/actionCreator'
import { useDispatch } from 'react-redux'
const Signup = () => {
    const emailref = useRef()
    const passwordref = useRef()
    const cpasswordref = useRef()
    const dispatch = useDispatch()
    const handlesubmit = (e) => {
        e.preventDefault()
        if (cpasswordref.current.value !== passwordref.current.value) {
            throw new Error('Password not matched with current password');
        }
        dispatch(actionCreator.signup(emailref.current.value, passwordref.current.value))
    }
    return (
        <div className='mx-auto md:mr-52 pt-14'>
            <div className='w-full flex justify-end items-center'>
                <div className="w-full max-w-xl">
                    <form className="bg-white shadow-md rounded-t-lg rounded-bl-lg px-8 pt-8 pb-8 mb-4 max-h-[70vh]" onSubmit={handlesubmit}>
                        <h1 className="text-3xl text-lg-20">SignUp</h1>
                        <div className='my-6'>
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                    Email
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="email" placeholder="Email" ref={emailref} />
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                    Password
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" ref={passwordref} />
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                    Confirm Password
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="cpassword" type="password" ref={cpasswordref} />
                            </div>
                            <div className="flex flex-col md:flex-row items-center justify-between">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4 md:mb-0 md:mr-4" type="submit">
                                    Sign Up
                                </button>
                            </div>

                        </div>

                    </form>
                    <p className="text-center text-xs text-white">
                        <span className='mx-2'>
                            Already have an account ??
                        </span>

                        <span className='text-blue-900 text-lg'>
                            <Link to="/login">Login</Link>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Signup
