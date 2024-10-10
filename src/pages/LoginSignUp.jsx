import React from 'react'
import './CSS/LoginSignUp.css'

const LoginSignUp = () => {
  return (
    <div className="loginSignUp">
      <div className="loginSignUpContainer">
        <h1>SignUp</h1>
        <div className="loginSignUpForm">
          <input type="text" placeholder='Enter name' />
          <input type="email" placeholder='Enter email' />
          <input type="password" placeholder='Enter password' />
        </div>
        <button>Continue</button>
        <p className='loginSignUpLogin'>Already have an account? <span>Login here</span></p>
        <div className="loginSignUpHere">
          <input type="checkbox" />
          <p>By Continuing, i agree to the terms of use and privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignUp