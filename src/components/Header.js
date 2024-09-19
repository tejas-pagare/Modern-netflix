import React, { useEffect, useState } from 'react'
import img from '../utils/Logo.png'
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { addUser, getUser, removeUser } from '../utils/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { SUPORTED_LANGUAGES, USER_AVATAR } from '../utils/constants';
import { resetGptSearch, toggleGptSearchView } from '../utils/gptSlice.js'
import { changeLanguage } from '../utils/configSlice.js';
function Header() {


  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store)=>store.user);
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
      //console.log("user", user);
      if (user) {
        const { uid, email, displayName, photoURl } = user;
        dispatch(addUser({ uid, email, displayName, photoURl }))
        navigate("/browser")

      } else {
        dispatch(removeUser());
        navigate("/");


      }
    })

    //call when component unmount
    return unSubscribe();
  }, [])

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView())
    dispatch(resetGptSearch());
  }
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value))
  }

  const showGptSearch = useSelector((store) => store.gpt.showGptSearchView)
  return (
    <div className='absolute w-full bg-gradient-to-b from-black z-10 p-3 flex justify-between items-center'>
      <img className='h-8   ' src={img} alt='Logo' />
      {<div className='flex gap-2'>
        <select onChange={handleLanguageChange} className='bg-black bg-opacity-60 rounded-md text-white outline-none'>
          {SUPORTED_LANGUAGES.map((index, key) => {
            return <option className={index.identifier} key={key}>{index.language}</option>
          })}
        </select>
       {user&& <button
          onClick={handleGptSearchClick}
          className='px-2 py-1 bg-red-600 font-semibold hover:bg-red-500 text-white rounded-md border-red-700'>{showGptSearch ? "Homepage" : "GPT Search"}</button>}
      { user&& <img className='w-8' src={USER_AVATAR} />}
      { user&& <button onClick={handleSignOut} className='text-white font-semibold'>Sign Out</button>}
      </div>}
    </div>
  )
}

export default Header
