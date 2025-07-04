import { Eye, EyeOff } from 'lucide-react';
import React, { useState } from 'react'

const Login = () => {
  const [showPass , setShowPass] = useState(false);
  const togglePass = () => {
    setShowPass(!showPass)
  }
  return (
    <div className='flex items-center justify-center min-h-screen bg-green-100 px-6 md:px-0' >
      <div className="w-full max-w-md p-8 space-y-4 bg-white shadow-lg rounded-1 ">
        <h2 className="text-2xl font-bold text-center text-gray-800  ">Login Your Account</h2>
      <form className=' space-y-6'  action="">
        {/* email */}
          <div>
            <label htmlFor="email" className='block mb-2 text-sm font-medium text-gray-600'>Email Adress</label>
            <input type="email"  id='email' placeholder='Enter Your Email ' className='w-full px-4 py-2 text-gray-700 bg-gray-50 border border-gray-300 rounded-lg focus:ring focus:ring-red-300  focus:outline-none ' required />
          </div>
          {/* password */}
          <div className="relative">
            <label htmlFor="Password"  className='block mb-2 font-medium text-gray-600' >Enter Your Password </label>
            <div className="flex items-center relative  ">
              <input type={showPass ? "text" : "password"} placeholder='Enter Your Password ' className='w-full px-4 py-2 text-gray-700 border bg-gray-50 border-gray-300 rounded-lg focus:ring-red-300 focus:outline-none ' required/>
              <button type='button' onClick={togglePass } className='absolute insert-y-0 right-3 flex items-center text-gray-300 hover:text-gray-700'>
                {showPass ? <Eye className='w-5 h-5' /> : <EyeOff className='w-5 h-5' /> }
              </button>
            </div>
          </div>
          <button type='submit' className='w-full px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600  focus:outline-none focus:ring focus:ring-red-300' > Login</button>
      </form>
      <div className="text-center">
        <div className="text-sm text-gray-600">
          Don't Have An Account?{" "}
          <a href="#" className='text-red-500 hover:underline'>Sign Up</a>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Login
