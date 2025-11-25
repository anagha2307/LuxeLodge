import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import { GoogleLogin } from '@react-oauth/google'
import { jwtDecode } from "jwt-decode"

const Auth = ({ register }) => {
  const [viewPasswordStatus, setViewPasswordStatus] = useState(false)
  const [userDetails, setUserDetails] = useState({ username: '', email: '', password: '' })

  const handleRegister = () => {
    const { username, email, password } = userDetails
    if (!username || !email || !password) {
      toast.info("Please fill the form completely")
      return
    }
    toast.success("Registration successful")
  }

  const handleLogin = () => {
    const { email, password } = userDetails
    if (!email || !password) {
      toast.info("Please fill the form completely")
      return
    }
    toast.success("Login successful")
  }

  const handleGoogleLogin = (credentialResponse) => {
    const credential = credentialResponse.credential
    const details = jwtDecode(credential)
    console.log("Google User:", details)
    toast.success("Google Login Successful")
  }

  return (
    <div className='bg-transparent min-h-screen w-full bg-cover flex flex-col items-center justify-center'>     
      <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.33)' }} className='rounded px-4 py-3 w-95 flex justify-center items-center flex-col border border-gray-300'>    
        <img width={'100px'} src="https://static.vecteezy.com/system/resources/previews/019/879/198/non_2x/user-icon-on-transparent-background-free-png.png" alt="" />
        <h1 className='text-3xl font-bold text-login mt-3'>{register ? 'Register' : 'Login'}</h1>
        {register && (
          <input 
            onChange={(e) => setUserDetails({ ...userDetails, username: e.target.value })}
            value={userDetails.username}
            type="text" 
            className='placeholder-gray-600 border border-gray-300 w-full p-3 mt-4 rounded'
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.47)' }}
            placeholder='Enter your name' 
          />
        )}
        <input
          onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
          value={userDetails.email}
          type="text"
          className='placeholder-gray-600 w-full p-3 my-5 rounded'
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.47)' }}
          placeholder='Enter your email'
        />
        <div className='flex items-center w-full'>
          <input
            onChange={(e) => setUserDetails({ ...userDetails, password: e.target.value })}
            value={userDetails.password}
            type={viewPasswordStatus ? "text" : "password"}
            className='placeholder-gray-600 w-full p-3 rounded'
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.47)' }}
            placeholder='Enter your password'
          />
          {
          !viewPasswordStatus ?
            <FontAwesomeIcon 
              icon={faEye} 
              style={{ marginLeft: '-30px' }} 
              onClick={() => setViewPasswordStatus(true)} 
              className='text-gray-700 cursor-pointer'
            /> :
            <FontAwesomeIcon 
              icon={faEyeSlash} 
              style={{ marginLeft: '-30px' }} 
              onClick={() => setViewPasswordStatus(false)} 
              className='text-gray-700 cursor-pointer'
            />
          }
        </div>
        {
        !register && (
          <div className='flex justify-between items-center text-xs w-full my-2'>
            <p className='text-yellow-800'>*Never share your password.</p>
            <Link className='text-blue-500 underline'>Forgot password?</Link>
          </div>
        )}
        {
        register ? (
          <button 
            type='button' 
            onClick={handleRegister} 
            className='w-full bg-green-700 text-gray-200 px-5 py-2 text-xl cursor-pointer'
          >
            Register
          </button>
        ) : (
          <button 
            onClick={handleLogin} 
            className='w-full bg-green-700 text-gray-200 px-5 py-2 text-xl cursor-pointer'
          >
            Login
          </button>
        )}
        {
        !register && (
          <>
            <p className='text-lg my-3 text-white'>-----------or-----------</p>
            <GoogleLogin
              onSuccess={credentialResponse => handleGoogleLogin(credentialResponse)}
              onError={() => console.log('Google Login Failed')}
            />
          </>
        )}
        <p className='text-white mt-3'>
          {register ? "Already a user?" : "New user?"}
          <Link to={register ? '/login' : '/register'} className='text-blue-500 underline ml-1'>
            {register ? "Login" : "Register"}
          </Link>
        </p>
      </div>
      <ToastContainer theme="colored" />
    </div>
  )
}
export default Auth
