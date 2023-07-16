import React from 'react'

const Login = () => {
    return (
        <>
            <div className='mx-auto md:mr-52 pt-28'>
                <div className='w-full flex justify-end items-center'>
                    <div className="w-full max-w-xl">
                        <form className="bg-white shadow-md rounded-t-lg rounded-bl-lg px-8 pt-8 pb-8 mb-4 max-h-[60vh]">
                            <div className='my-12'>
                                <div className="mb-6">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                        Username
                                    </label>
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
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
                                        Sign In
                                    </button>
                                    <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                                        Forgot Password?
                                    </a>
                                </div>

                            </div>
                        </form>
                        <p className="text-center text-gray-500 text-xs">
                            &copy;2020 Acme Corp. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
