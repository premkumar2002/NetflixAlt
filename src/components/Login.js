import React, { useState } from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);

  const toogleSignIn = () =>{
    setIsSignInForm(!isSignInForm);
  }

  return (
    <div>
      <Header />
      <div className="absolute inset-0">
        <img 
          src="https://assets.nflxext.com/ffe/siteui/vlv3/74d734ca-0eab-4cd9-871f-bca01823d872/web/IN-en-20241021-TRIFECTA-perspective_2277eb50-9da3-4fdf-adbe-74db0e9ee2cf_medium.jpg" 
          alt="Login"
          className='w-full h-full'
        />
      </div>
      <form className="absolute bg-black max-w-lg w-full px-16 pt-10 py-32 mx-auto left-0 right-0 my-44 text-white bg-opacity-75">
        <h1 className='m-2 py-2 text-3xl font-bold'>{!isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {isSignInForm && (
          <input type="text" placeholder="Full name" className='px-4 py-4 m-2 w-full rounded-md bg-transparent border border-gray-500'/>
        )}
        <input type="text" placeholder="Email or mobile numer" className='px-4 py-4 m-2 w-full rounded-md bg-transparent border border-gray-500'/>
        <input type="password" placeholder="Password" className='px-4 py-4 m-2 w-full rounded-md bg-transparent border border-gray-500'/>
        {isSignInForm && (
          <input type="password" placeholder="Confirm password" className='px-4 py-4 m-2 w-full rounded-md bg-transparent border border-gray-500'/> 
        )}
        <button className='border border-red-700 bg-red-700 py-2 m-2 w-full rounded-md'>{!isSignInForm ? "Sign In" : "Sign Up"}</button>
        {<p className='text-gray-400 text-center'>OR</p>}
        <button className='border border-gray-500 font-bold bg-gray-400 w-full m-2 py-2 rounded-md bg-transparent '>Use a sign-in code</button>
        <Link><p className='text-center m-4'>Forgot Password?</p></Link>
        <p className="cursor-pointer" onClick={toogleSignIn}>{!isSignInForm ? "New to Netflix? Sign Up" : "Already a member? Sign In"}</p>
        <p className='pt-4 text-gray-500'>This page is protected by Google reCAPTCHA to ensure you're not a bot. <Link className='text-blue-700'>Learn more.</Link></p>
        
      </form>
    </div>
  )
}

export default Login