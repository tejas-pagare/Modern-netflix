import React, { useEffect, useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_URL } from '../utils/constants';
import lang from '../utils/languageConstant';

function Login() {
  const navigate = useNavigate();
  const language = useSelector((store) => store.config.language)
  const [isSignInForm, SetSignInForm] = useState(true);
  const toogleSignInForm = () => {
    SetSignInForm(!isSignInForm);
  };
  const name = useRef(null);
  const password = useRef(null);
  const email = useRef(null);
  const dispatch = useDispatch();
  const [errorMsg, setErrorMsg] = useState(null);
  const handleButtonClick = () => {
    //checking paasword validation
    const message = checkValidData(email.current.value, password.current.value);
    if (message) {
      setErrorMsg(message);
      return;
    }
    setErrorMsg(null);
    if (!isSignInForm) {
      //for signUp form

      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
         // console.log(user);
          updateProfile(auth.currentUser, {
            displayName: name.current.value, photoURL: "https://i.pinimg.com/736x/2b/a2/45/2ba2455ca817f7659e9ebfe9d494c5db.jpg"
          }).then(() => {
            // Profile updated!
            
            const { uid, email, displayName,photoURL } = auth.currentUser;
  
            dispatch(addUser({ uid, email, displayName, photoURL }));
            navigate("/browser");
            // ...
          }).catch((error) => {
            
            setErrorMsg(error.message);
          });
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          
          setErrorMsg(errorCode + "-" + errorMessage);
        });

    } else {
      //for signIn form
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // ...
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg("User not Found");
        });

    }



    //console.log(message);



  }

  // useEffect(()=>{
  //   console.log(language);
  // },[])
  return (
    <div className='relative'>
      <Header />
      <div className='h-[100vh]'>
        <img className='w-full h-full object-cover absolute inset-0' src={BG_URL} />
      </div>
      <form onSubmit={(e) => e.preventDefault()} className='bg-black w-80 lg:mt-4 bg-opacity-[85%] absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]  flex items-start justify-center flex-col gap-6 py-12 px-8 text-white z-10 overflow-hidden'>
        <h1 className='text-white text-3xl font-bold'>{isSignInForm ? lang[language].signInButton : lang[language].signUpButton} </h1>
        {!isSignInForm && (
          <input ref={name} className='border-[0.5px] border-gray-600 px-2 py-3 bg-transparent block outline-none w-[100%] font-medium rounded-[4px]' type='text' placeholder={lang[language].username} />
        )}
        <input ref={email} className='border-[0.5px] border-gray-600 px-2 py-3 bg-transparent block outline-none w-[100%] font-medium rounded-[4px]' type='text' placeholder={lang[language].email} />
        <input ref={password} className='border-[0.5px] border-gray-600 px-2 py-3 bg-transparent block outline-none w-[100%] font-medium rounded-[4px]' type='password' placeholder={lang[language].password} />
        <button onClick={handleButtonClick} className='bg-red-700 text-white px-2 py-2 block w-[100%] font-medium rounded-[4px]'>{isSignInForm ? lang[language].signInButton : lang[language].signUpButton}</button>
        <p>
          {errorMsg ? <span className='text-red-600'>{errorMsg}</span> : null}
        </p>
        <p onClick={toogleSignInForm} className='text-sm font-normal cursor-pointer'>
          {/* {isSignInForm ? "New to Netflix? Sign Up Now!" : "Already a user? Sign In Now!"} */}
          {isSignInForm ? lang[language].newToNetflixPara : lang[language].allReadyUserPara}
        </p>
      </form>
    </div>


  )
}

export default Login
