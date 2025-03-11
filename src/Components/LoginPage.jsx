import React from 'react'
import Login from './Login'

const LoginPage = () => {
    return (
        <>
            <Login />
            <div className='flex items-center justify-center '>
                <form className=' w-[510px] h-[350px] rounded-2xl  shadow-2xl login-page '>
                    <div className='flex flex-col items-center justify-center login1-page'>
                        <div>
                            <div className='flex flex-col'>
                                <label className='text-xl'>Email Address<span className="text-red-500">*</span></label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    required
                                    className="writeText shift-placeholder w-[350px] h-[60px] mt-1 p-2  border-2 border-black-500 rounded-md placeholder-gray-500 placeholder:text-lg"
                                />
                            </div>

                            <div className='flex flex-col login2-page'>
                                <label className='text-xl'>Password<span className="text-red-500">*</span></label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Enter your password"
                                    required
                                    className="writeText shift-placeholder w-[350px] h-[60px] mt-1 p-2  border-2 border-black-500 rounded-md placeholder-gray-500 placeholder:text-lg"
                                />
                            </div>

                        </div>
                        <div className='login-btn'>
                            <button
                                type="submit"
                                className=" w-[120px] h-[50px] mt-5 text-2xl  bg-gradient-to-br from-[#6363f3] to-[#f531d1] text-white rounded-md  transition duration-200 px-4 py-3 cursor-pointer"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>




        </>
    )
}

export default LoginPage
