import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Login from './Login.tsx'
import Signup from './Signup.tsx'
import AuthRouter from './AuthRoute.tsx'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDltUwsAWMxhWtTyaOGd3d2_4v5dqTDH9E",
  authDomain: "auth-login-12158.firebaseapp.com",
  projectId: "auth-login-12158",
  storageBucket: "auth-login-12158.firebasestorage.app",
  messagingSenderId: "179849734251",
  appId: "1:179849734251:web:e5c6cc5a7ca11e47b4692e"
};
initializeApp(firebaseConfig);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <BrowserRouter> */}
      <Router>
        <Routes>
          <Route path="/" element={<AuthRouter><App/></AuthRouter>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
      </Router>
    {/* </BrowserRouter> */}
  </StrictMode>,
)
