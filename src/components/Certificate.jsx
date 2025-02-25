import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom'
import './certificate.css';

function Certificate() {
  return (
    <div className="certificate min-h-screen w-full">
        <Navbar />
        <div className="certificate-container">
            <div className="heading">
                <h1>
                    Certificate <span>Section</span>
                </h1>
            </div>
            <div className="inner-container">
                <div className="left">
                    <div className="lower-container">
                        <div class="cards c1">
                            <h2>
                                Chatgpt Complete Guide: Learn GenAI...
                            </h2>
                            <h2 class="course">Udemy</h2>
                        </div>
                        <div class="cards c2">
                            <h2>The Complete AI-Powered Copy Writing</h2>
                            <h2 class="course">Udemy</h2>
                        </div>
                        <div class="cards c3">
                            <h2>Google Data Analytics Ceertificate</h2>
                            <h2 class="course">Coursera</h2>
                        </div>
                        <div class="cards c3">
                            <h2>Build a free website with WordPress</h2>
                            <h2 class="course">Coursera</h2>
                        </div>
                    </div>
                    <div class="lower-container">
                        <div class="cards c1">
                            <h2>
                                Cybersecurity For Beginners
                            </h2>
                            <h2 class="course">Udemy</h2>
                        </div>
                        <div class="cards c2">
                            <h2>Investment Risk Management</h2>
                            <h2 class="course">Linkedin Learning</h2>
                        </div>
                        <div class="cards c3">
                            <h2>Python For Data science</h2>
                            <h2 class="course">Udemy</h2>
                        </div>
                        <div class="cards c3">
                            <h2>Financial Markets</h2>
                            <h2 class="course">Linkedin Learning</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Certificate