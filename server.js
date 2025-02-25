import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/linkedin/accessToken', async (req, res) => {
    const { code } = req.body;
    const CLIENT_ID = '77jz3cppe39v6x';
    const REDIRECT_URI = 'http://localhost:5173/linkedin-callback';
    const CLIENT_SECRET = 'WPL_AP1.hnoSMoaWmK4Q4WSY.tNLKRw==';

    try {
        const tokenUrl = 'https://www.linkedin.com/oauth/v2/accessToken';
        const response = await fetch(tokenUrl, {
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
        if (data.error) {
            throw new Error(data.error_description);
        }
        res.json(data);
    } catch (error) {
        console.error('Error fetching access token:', error);
        res.status(500).json({ error: error.message });
    }
});

app.get('/linkedin/userProfile', async (req, res) => {
    const { accessToken } = req.query;

    try {
        const profileResponse = await fetch('https://api.linkedin.com/v2/me', {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        const profile = await profileResponse.json();

        const emailResponse = await fetch('https://api.linkedin.com/v2/emailAddress?q=members&projection=(elements*(handle~))', {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        const emailData = await emailResponse.json();

        res.json({
            name: profile.localizedFirstName + ' ' + profile.localizedLastName,
            email: emailData.elements[0]['handle~'].emailAddress,
            profilePicture: profile.profilePicture['displayImage~'].elements[0].identifiers[0].identifier,
        });
    } catch (error) {
        console.error('Error fetching user profile:', error);
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
