
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';

const Toggle = () => {
    const [isToggled, setIsToggled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/");
      }
    });
  }, [navigate]);
  const handleClick=()=>{
    setIsToggled(!isToggled)
  }
  const handleToggle=()=>{
    setIsToggled(!isToggled)
  }

  return (
    <div>
        Toggle
        <button className='p-4 bg-red-700 text-white ml-5' onClick={handleClick}>{isToggled ? "ON" : "OFF"}</button>
        <div className='cursor-pointer' onClick={handleToggle}>
            Recommended to you
            {isToggled && <> <h1>Hello everyone</h1>
             <h1>Hello everyone</h1>
              <h1>Hello everyone</h1>
               <h1>Hello everyone</h1>
                <h1>Hello everyone</h1>
                 <h1>Hello everyone</h1>
                  <h1>Hello everyone</h1>
                  </>
            }
        </div>
    </div>
  )
}

export default Toggle