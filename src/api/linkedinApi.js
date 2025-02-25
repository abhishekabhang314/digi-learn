const CLIENT_ID = '775q985uikss4t';
const REDIRECT_URI = 'http://localhost:5173/linkedin';
const CLIENT_SECRET = 'WPL_AP1.TUvebosCzqGbsiv9.uzzKCg==';

export const authenticateWithLinkedIn = () => {
  const authUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=r_liteprofile%20r_emailaddress%20w_member_social`;
  window.location.href = authUrl;
};

export const fetchAccessToken = async (code) => {
  const response = await fetch('https://www.linkedin.com/oauth/v2/accessToken', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      code,
      redirect_uri: REDIRECT_URI,
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
    }),
  });
  const data = await response.json();
  return data.access_token;
};

export const fetchUserProfile = async (token) => {
  const response = await fetch('https://api.linkedin.com/v2/me', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const profile = await response.json();
  return profile;
};
