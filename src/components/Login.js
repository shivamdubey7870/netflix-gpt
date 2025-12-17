import React, { useState ,useRef} from 'react'
import Header from './Header'
import checkValidation from "../utils/validate";
import {createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../utils/firebase";
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const[signin,setsignin]=useState(true)
  const [errorMessage,seterrorMessage]=useState();
  const navigate=useNavigate();
  const handleClick=()=>{
     setsignin(!signin)
  }
  const email=useRef()
  const password=useRef()
  const name=useRef()
  const handleForm=()=>{
 
  const message=checkValidation(email.current.value,password.current.value)
  seterrorMessage(message)

  if(message) return;

  //sign in/sign up
 if(!signin){
  //sign up
  createUserWithEmailAndPassword(auth, email.current.value,password.current.value )
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(auth.currentUser, {
  displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
}).then(() => {
  // Profile updated!
  // ...
}).catch((error) => {
  // An error occurred
  // ...
});
      navigate("/browse")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrorMessage(errorCode+"-"+errorMessage)
    // ..
  });

 }else{
  //sign in
   signInWithEmailAndPassword(auth,email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
      navigate("/browse")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrorMessage(errorCode+"-"+errorMessage)
  });
 }

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
      <form onSubmit={(e)=>e.preventDefault()} className='w-3/12 absolute top-[27%] left-[38%] bg-black text-white pb-5 pt-3 bg-opacity-80'>
      <h1 className='font-bold text-3xl px-2 py-2 pb-4'>{signin?"Sign In":"Sign Up"}</h1>
     {!signin &&  <input type='text' placeholder='Full Name' className='p-2 m-2 w-[95%] mb-4 bg-gray-500' />}
      {!signin &&  <input type='number' placeholder='Phone No' className='p-2 m-2 w-[95%] mb-4 bg-gray-500' />}
              <input ref={email} type='text' placeholder='Email Address' className='p-2 m-2 w-[95%] mb-4 bg-gray-500' />
      <input ref={password} type='password' placeholder='Password' className='p-2 m-2 w-[95%] mb-4 bg-gray-500' />
      <h1 className='text-red-600 pl-4' >{errorMessage}</h1>
       <button className='p-4 m-2.5  bg-red-700 w-[95%]' onClick={handleForm} >{signin?"Sign In":"Sign Up"}</button>
       <p className='pl-2 cursor-pointer' onClick={handleClick}>{signin?"New to Netflix?Sign Up Now":"Already registered Sign In"}</p>
   
  
      </form>
    </div>
  )
}

export default Login