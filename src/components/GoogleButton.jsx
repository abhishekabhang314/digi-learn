import React, { useEffect } from 'react'
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import {jwtDecode} from "jwt-decode";

function GoogleButton() {
  const navigate = useNavigate();

  return (
    <GoogleLogin  
      onSuccess={credentialResponse => {
        const decodedResponse = jwtDecode(credentialResponse.credential);
        const userName = decodedResponse.given_name;
        localStorage.setItem('userName', userName);
        console.log(decodedResponse);
        console.log(credentialResponse);
        navigate('/home');
      }}
      onError={() => {
        console.log('Login Failed');
      }}
      useOneTap
      auto_select
    />
  )
}

export default GoogleButton;