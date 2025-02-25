import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import SignupPage from './components/SignupPage';
import LoginPage from './components/LoginPage';
import PageTransition from './components/PageTransition';
import Dashboard from './components/Dashboard.jsx';
import Community from './components/Community.jsx';
import { GoogleOAuthProvider } from '@react-oauth/google';
import LinkedinPage from './components/LinkedinPage.jsx';
import ProfilePage from './components/ProfilePage.jsx';
import LinkedinCallback from './components/LinkedinCallback.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
import Courses from './components/Courses.jsx';
import Account from './components/Account.jsx';
import Certificate from './components/Certificate.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="1080203032530-4t146eqcd8o6e7db75benvn0g44jman1.apps.googleusercontent.com">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <PageTransition>
                <App />
              </PageTransition>
            }
          />
          <Route
            path="/signup"
            element={
              <PageTransition>
                <SignupPage />
              </PageTransition>
            }
          />
          <Route
            path="/account"
            element={
              <PageTransition>
                <Account />
              </PageTransition>
            }
          />
          <Route
            path="/certificate"
            element={
              <PageTransition>
                <Certificate />
              </PageTransition>
            }
          />
          <Route
            path="/courses"
            element={
              <PageTransition>
                <Courses />
              </PageTransition>
            }
          />
          <Route
            path="/signin"
            element={
              <PageTransition>
                <LoginPage />
              </PageTransition>
            }
          />
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <PageTransition>
                  <Dashboard />
                </PageTransition>
              </PrivateRoute>
            }
          />
          <Route
            path="/community"
            element={
              <PrivateRoute>
                <PageTransition>
                  <Community />
                </PageTransition>
              </PrivateRoute>
            }
          />
          <Route
            path="/linkedin"
            element={
              <PrivateRoute>
                <PageTransition>
                  <LinkedinPage />
                </PageTransition>
              </PrivateRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <PageTransition>
                  <ProfilePage />
                </PageTransition>
              </PrivateRoute>
            }
          />
          <Route
            path="/linkedin-callback"
            element={
              <PageTransition>
                <LinkedinCallback />
              </PageTransition>
            }
          />
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  </StrictMode>,
);
