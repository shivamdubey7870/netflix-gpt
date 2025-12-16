import React, { useState } from 'react'
import Header from './Header'


const Login = () => {
  const[signin,setsignin]=useState(true)
  const handleClick=()=>{
     setsignin(!signin)
  }
  return (
    <div>
     
      <Header/>
      
            <div   style={{
        backgroundImage:
          "url('https://assets.nflxext.com/ffe/siteui/vlv3/c81956f1-5750-454c-9b3c-7a4d990d3d06/web/IN-en-20251208-TRIFECTA-perspective_d69f5f82-9a35-45d7-a7b6-9af6e0643bf5_large.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        
        height: "100vh",
      }} ></div>
      <form className='w-3/12 absolute top-[27%] left-[38%] bg-black text-white pb-5 pt-3 bg-opacity-80'>
      <h1 className='font-bold text-3xl px-2 py-2 pb-4'>{signin?"Sign In":"Sign Up"}</h1>
     {!signin &&  <input type='text' placeholder='Full Name' className='p-2 m-2 w-[95%] mb-4 bg-gray-500' />}
      {!signin &&  <input type='number' placeholder='Phone No' className='p-2 m-2 w-[95%] mb-4 bg-gray-500' />}
              <input type='text' placeholder='Email Address' className='p-2 m-2 w-[95%] mb-4 bg-gray-500' />
      <input type='password' placeholder='Password' className='p-2 m-2 w-[95%] mb-4 bg-gray-500' />
       <button className='p-4 m-2.5  bg-red-700 w-[95%]'>{signin?"Sign In":"Sign Up"}</button>
       <p className='pl-2 cursor-pointer' onClick={handleClick}>{signin?"New to Netflix?Sign Up Now":"Already registered Sign In"}</p>
   
  
      </form>
    </div>
  )
}

export default Login