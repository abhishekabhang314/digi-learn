import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchAccessToken, fetchUserProfile } from '../api/linkedinApi';

function LinkedinCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    if (code) {
      fetchAccessToken(code)
        .then(token => {
          return fetchUserProfile(token);
        })
        .then(profile => {
          navigate('/profile', { state: { userProfile: profile } });
        })
        .catch(err => {
          console.error('Error during authentication:', err);
          navigate('/linkedin', { state: { error: 'Authentication failed. Please try again.' } });
        });
    }
  }, [navigate]);

  return <div>Loading...</div>;
}

export default LinkedinCallback;
