import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './home.css'

function Navbar() {
  let navigate = useNavigate();
    const [menuVisible, setMenuVisible] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
        if (!menuVisible) {
          gsap.to(".menu-container", { duration: 0.5, x: 0, opacity: 1, display: 'flex' });
          document.body.style.overflowX = 'hidden'; // Prevent horizontal scroll
        } else {
          gsap.to(".menu-container", { duration: 0.5, x: 300, opacity: 0, display: 'none' });
          document.body.style.overflowX = 'auto'; // Restore horizontal scroll
        }
      };
    
      const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
          setMenuVisible(false);
          gsap.to(".menu-container", { duration: 0.5, x: 300, opacity: 0, display: 'none' });
        }
      };
    
      useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, []);
    
      const handleLogout = () => {
        localStorage.removeItem('userName');
        localStorage.removeItem('authToken'); // Remove authentication token
        navigate('/signin');
      };
    
  return (
    <div>
        <div ref={menuRef} className="menu-container overflow-x-hidden" style={{ transform: 'translateX(300px)', opacity: 0, display: 'none', zIndex: 1 }}>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <div className="border-div"></div>
                <li><Link to="/community">Community</Link></li>
                <div className="border-div"></div>
                <li><Link to="/linkedin">LinkedIn Learning</Link></li>
                <div className="border-div"></div>
                <li><Link to="/certificate">Certificates</Link></li>
            </ul>
        </div>
        <nav className="navbar">
            <div className="logo">
                <a href="/home">DigiLearn</a>
            </div>
            <div className="menu">
                <ul>
                    <li><button onClick={handleLogout}>Logout</button></li>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/courses">Courses</Link></li>
                    <li><Link to="/account">Account</Link></li>
                    <li><button className='menu-button' onClick={toggleMenu} style={{ zIndex: 2 }}><i className="ri-menu-4-line"></i></button></li>
                </ul>
            </div>
      </nav> 
    </div>
  )
}

export default Navbar