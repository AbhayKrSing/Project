import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
    return (
        <div className='mx-auto md:mr-52 pt-28'>
            <div className='w-full flex justify-end items-center'>
                <div className="w-full max-w-xl">
                    <form className="bg-white shadow-md rounded-t-lg rounded-bl-lg px-8 pt-8 pb-8 mb-4 max-h-[60vh]">
                        <h1 className="text-3xl text-lg-20">SignUp</h1>
                        <div className='my-12'>
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                    Email
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="email" placeholder="Email" />
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                    Password
                                </label>
                                <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                                <p className="text-red-500 text-xs italic">Please choose a password.</p>
                            </div>
                            <div className="flex flex-col md:flex-row items-center justify-between">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4 md:mb-0 md:mr-4" type="button">
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
