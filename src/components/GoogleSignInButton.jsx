import React, { useEffect } from 'react';

const GoogleSignInButton = () => {
  useEffect(() => {
    window.gapi.load('auth2', () => {
      window.gapi.auth2.init({
        client_id: 'YOUR_CLIENT_ID.apps.googleusercontent.com',
      }).then(() => {
        window.gapi.signin2.render('google-signin-button', {
          scope: 'profile email',
          width: 240,
          height: 50,
          longtitle: true,
          theme: 'dark',
        });
      });
    });
  }, []);

  return <div id="google-signin-button"></div>;
};

export default GoogleSignInButton;
