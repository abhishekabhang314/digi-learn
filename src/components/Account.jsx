import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom'
import './account.css';

function Account() {
  return (
    <div className='account min-h-screen w-full'>
        <Navbar />
        <div className="account-container">
            <div class="heading">
                <h1>
                    Account <span>Information</span>
                </h1>
            </div>
            <div className="inner-account-container">
                <div className="left">
                    <div className="upper-container">
                        <div class="leftf">  
                            <div class="leftf1">
                                <h2>Your Profile</h2>
                                <img src="temp.jpg" />
                                <h2>Username</h2>
                            </div>

                            <div class="leftf2">
                                <div className="text-container">
                                    <h3>C++</h3>
                                    <h3>Java</h3>
                                    <h3>React</h3>
                                </div>
                                <button><h3>Add Skills +</h3></button>
                            </div>
                        </div>
                        <div class="rightf">
                            <div class="fields">
                                <h2>Email</h2>
                                <div class="lower">
                                    <h3>abc@gmail.com</h3>
                                </div>
                            </div>
                            <div class="fields">
                                <h2>Education</h2>
                                <div class="lower">
                                    <h3>Add educational background to get personalized recommendations</h3>
                                </div>
                            </div>
                            <div class="fields">
                                <h2>Projects</h2>
                                <div class="lower">
                                    <h3>Add your projects here</h3> 
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Account