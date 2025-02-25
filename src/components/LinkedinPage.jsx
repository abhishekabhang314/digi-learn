import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import './home.css';
import './linkedin.css';
import { authenticateWithLinkedIn, fetchAccessToken, fetchUserProfile } from '../api/linkedinApi';

function LinkedinPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [accessToken, setAccessToken] = useState(null);
  const [error, setError] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    if (code && !accessToken) {
      fetchAccessToken(code)
        .then(token => {
          setAccessToken(token);
          setAuthenticated(true);
          return fetchUserProfile(token);
        })
        .then(profile => {
          setUserProfile(profile);
          navigate('/profile', { state: { userProfile: profile } });
        })
        .catch(err => {
          console.error('Error during authentication:', err);
          setError('Authentication failed. Please try again.');
        });
    }
  }, [accessToken, navigate]);

  const handleLogin = () => {
    authenticateWithLinkedIn();
  };

  return (
    <div className='linkedin h-screen w-full overflow-x-hidden'>
        <Navbar />
        <div className="linkedin-container">
            <div className="heading">
                <h1>
                    LinkedIn <span>Learning</span>
                </h1>
            </div>
            {!authenticated ? (
              <button onClick={handleLogin}>Login with LinkedIn</button>
            ) : (
              <div>
                {error && <p className="error">{error}</p>}
              </div>
            )}
        </div>
    </div>
  )
}

export default LinkedinPage;