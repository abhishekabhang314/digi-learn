import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import './profile.css';

function ProfilePage() {
  const location = useLocation();
  const { userProfile } = location.state || {};

  if (!userProfile) {
    return <div>Loading...</div>;
  }

  return (
    <div className='profile h-screen w-full overflow-x-hidden'>
      <Navbar />
      <div className="profile-container">
        <div className="profile-heading">
          <h1>User Profile</h1>
        </div>
        <div className="profile-details">
          <img src={userProfile.profilePicture} alt="Profile" />
          <h2>{userProfile.name}</h2>
          <p>{userProfile.email}</p>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
