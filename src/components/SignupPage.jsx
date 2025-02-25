import React from 'react';
import './login.css';
import { Link } from 'react-router-dom';
import GoogleButton from './GoogleButton';


function SignupPage() {
  return (
    <div className='login min-h-screen flex items-center justify-center w-full p-0'>
      <nav className="navbar">
        <div className="logo">
            <a href="/">DigiLearn</a>
        </div>
        <div className="menu">
            <ul>
                <li><Link to="/signin">Signin</Link></li>
                <li><Link to="/parentlogin">Parent Login</Link></li>
            </ul>
        </div>
      </nav> 
      <div className="login-container">
        <div className="heading">
          <h1>
              Create a new <span>Account</span>
          </h1>
        </div>
        <div className="lower-container">
          <div className="left">
            <form action="">
              <div className="input-box">
                <label htmlFor="email">Email Address</label>
                <input type="text" name='email' placeholder="your-email@example.com"/>
              </div>
              <div className="input-box">
                <label htmlFor="password">Password</label>
                <input type="password" name='password' placeholder="your-password"/>
              </div>
              <button type="">Sign Up<i className="ri-arrow-right-line"></i></button>
            </form>
          </div>
          <div className="border-div"></div>
          <div className="right">
            <GoogleButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;