import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

function Login() {
  const navigate = useNavigate();
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
            
            const { uid, email, displayName,photoURL } = user;
  
            dispatch(addUser({ uid, email, displayName, photoURL }));
            navigate("/browser");
            // ...
          }).catch((error) => {
            // An error occurred
            // ...
            setErrorMsg(error.message);
          });
          //console.log(user)
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
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
  return (
    <div className='relative'>
      <Header />
      <div className='h-[100vh]'>
        <img className='w-full h-full object-cover absolute inset-0' src='https://assets.nflxext.com/ffe/siteui/vlv3/04bef84d-51f6-401e-9b8e-4a521cbce3c5/null/IN-en-20240903-TRIFECTA-perspective_0d3aac9c-578f-4e3c-8aa8-bbf4a392269b_medium.jpg' />
      </div>
      <form onSubmit={(e) => e.preventDefault()} className='bg-black w-80 lg:mt-4 bg-opacity-[85%] absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]  flex items-start justify-center flex-col gap-8 py-12 px-8 text-white z-10 overflow-hidden'>
        <h1 className='text-white text-3xl font-bold'>{isSignInForm ? "Sign In" : "Sign Up"} </h1>
        {!isSignInForm && (
          <input ref={name} className='border-[0.5px] border-gray-600 px-2 py-3 bg-transparent block outline-none w-[100%] font-medium rounded-[4px]' type='text' placeholder='Enter Username' />
        )}
        <input ref={email} className='border-[0.5px] border-gray-600 px-2 py-3 bg-transparent block outline-none w-[100%] font-medium rounded-[4px]' type='text' placeholder='Enter Email' />
        <input ref={password} className='border-[0.5px] border-gray-600 px-2 py-3 bg-transparent block outline-none w-[100%] font-medium rounded-[4px]' type='password' placeholder='Enter Password' />
        <button onClick={handleButtonClick} className='bg-red-700 text-white px-2 py-2 block w-[100%] font-medium rounded-[4px]'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p>
          {errorMsg ? <span className='text-red-600'>{errorMsg}</span> : null}
        </p>
        <p onClick={toogleSignInForm} className='text-sm font-normal cursor-pointer'>
          {isSignInForm ? "New to Netflix? Sign Up Now!" : "Already a user? Sign In Now!"}
        </p>
      </form>
    </div>


  )
}

export default Login
