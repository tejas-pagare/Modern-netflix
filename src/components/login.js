import React, { useState } from 'react'
import Header from './Header'

function Login() {
  const [isSignInForm,SetSignInForm] = useState(true);
  const toogleSignInForm = ()=>{
      SetSignInForm(!isSignInForm);
  };
  return (
    <div className='relative'>
    <Header/>
    
    <div className='absolute'>
      <img src='https://assets.nflxext.com/ffe/siteui/vlv3/04bef84d-51f6-401e-9b8e-4a521cbce3c5/null/IN-en-20240903-TRIFECTA-perspective_0d3aac9c-578f-4e3c-8aa8-bbf4a392269b_medium.jpg'/>
    </div>
    <form className='bg-black w-full lg:w-[30%] bg-opacity-[85%] absolute  left-[50%] right-[50%] -translate-x-[50%] translate-y-[40%] overflow-hidden flex items-start justify-center flex-col gap-8 py-12 px-8 text-white'>
    
    <h1 className='text-white text-3xl font-bold'>{isSignInForm ? "Sign In" : "Sign Up"} </h1>
    {isSignInForm ? null: <input className='border-[0.5px] border-gray-600 px-2 py-3  bg-transparent block outline-none w-[100%]  font-medium rounded-[4px]' type='text' placeholder='Enter Username'>
      </input>}
      <input className='border-[0.5px] border-gray-600 px-2 py-3  bg-transparent block outline-none w-[100%]  font-medium rounded-[4px]' type='text' placeholder='Enter Email'>
      </input>
      <input className='border-[0.5px] border-gray-600 px-2 py-3  bg-transparent block outline-none w-[100%]  font-medium rounded-[4px]' type='password' placeholder='Enter Password'></input>
      <button className=' bg-red-700 text-white px-2 py-2  block w-[100%] font-medium rounded-[4px] '>{isSignInForm ? "Sign In" : "Sign Up"}</button>
      <p onClick={toogleSignInForm} className=' text-sm font-normal cursor-pointer'>
      {isSignInForm ? "New to Netflix? Sign Up Now!": "Already a user? Sign In Now!"}
    
      </p>
    </form>
    </div>
  )
}

export default Login
