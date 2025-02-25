import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom'
import './courses.css';

function Courses() {
  return (
    <div className='course min-h-screen w-full'>
        <Navbar />
        <div className="course-container">
            <div className="heading">
                <h1>
                    Explore <span>Courses</span>
                </h1>
            </div>
            <div className="input-container">
              <i className="ri-search-line"></i>
              <input type="text" placeholder='search for help' />
            </div>
            <div className="inner-container">
                <div className="right">
                    <div className="card">
                        <img src="./temp.jpg" />
                        <div className="list-container">
                            <ul>
                                <li>100 Days of Code: The Complete Python Pro Bootcamp </li>
                                <li className="price"><b>&#8377;3,299</b></li>
                                <h2><button className="arrow"><b>Linkedin Learning</b></button></h2>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="right">
                    <div className="card">
                        <img src="./temp.jpg" />
                        <div className="list-container">
                            <ul>
                                <li>The Complete Full-Stack Web Development Bootcamp</li>
                                <li className="price"><b>&#8377;3,099</b></li>
                                <h2><button className="arrow"><b>Linkedin Learning</b></button></h2>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="right">
                    <div className="card">
                        <img src="./temp.jpg" />
                        <div className="list-container">
                            <ul>
                                <li>Ultimate AWS Certified Cloud Practioner CLF-C02</li>
                                <li className="price"><b>&#8377;3,299</b></li>
                                <h2><button className="arrow"><b>Linkedin Learning</b></button></h2>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Courses;