import React, { useEffect, useState } from 'react'
import img from '../utils/Logo.png'
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { addUser, removeUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
import { USER_AVATAR } from '../utils/constants';
function Header() {
  //let [state, setState] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
     // console.log(user);
      if (user) {
        const { uid, email, displayName, photoURl } = user;
        dispatch(addUser({ uid, email, displayName, photoURl }))
        navigate("/browser")
        // setState(user);
      } else {
        dispatch(removeUser());
        navigate("/");
        // setState(null);

      }
    })

    //callwhen component unmount
    return unSubscribe();
  }, [])
  return (
    <div className='absolute w-full bg-gradient-to-b from-black z-10 p-3 flex justify-between items-center'>
      <img className='h-12 p-0  ' src={img} alt='Logo' />
      <div className='flex gap-2'>
        <img className='w-8' src={USER_AVATAR} />
        <button onClick={handleSignOut} className='text-white font-semibold'>Sign Out</button>
      </div>
    </div>
  )
}

export default Header
