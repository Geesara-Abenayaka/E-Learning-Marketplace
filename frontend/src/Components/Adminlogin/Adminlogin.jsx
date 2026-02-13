import React, { useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import loginimg from '../../assets/loginimg.webp';
import googleimg from '../../assets/google.png';
import facebookimg from '../../assets/facebook.png';
import appleimg from '../../assets/apple.png';
import '../Login/Login.css';
import './Adminlogin.css';
import { useNavigate } from 'react-router-dom';
import axiosClient from '../../utills/client';

function Adminlogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    setError('');
    if (!email || !password) {
      setError('Please enter email and password');
      return;
    }

    try {
      const response = await axiosClient.post('/api/adminlogin', {
        email,
        password,
      });

      // Save admin info in localStorage
      localStorage.setItem('admin', JSON.stringify(response.data.admin));

      // Redirect to admin dashboard
      navigate('/admindashboard');
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.error || 'Login failed');
    }
  };

  return (
    <div>
      <Navbar />
      <div className='login-container'>
        <img src={loginimg} className='login-image' alt='Login Image' />
        <div>
          <p className='login-heading1'>Admin Login</p>

          <input
            type='email'
            className='email-input'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type='password'
            className='password-input'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />

          {error && <p style={{ color: 'red', marginTop: '5px' }}>{error}</p>}

          <label className='checkbox-label'>
            <input type='checkbox' className='checkbox-input' />
            <div className='checkbox-text'>
              Send me special offers, personalized recommendations, and
              <p className='bottom-topic'>learning tips.</p>
            </div>
          </label>

          <button className='continue-button' onClick={handleLogin}>
            Continue
          </button>

          <div className='hr-text'>
            <hr id='hr1' />
            <hr id='hr2' />
          </div>

          <div className='other-signup-options'>
            <button className='google-button'>
              <img src={googleimg} alt='Google' className='google-img' />
            </button>
            <button className='facebook-button'>
              <img src={facebookimg} alt='Facebook' className='facebook-img' />
            </button>
            <button className='apple-button'>
              <img src={appleimg} alt='Apple' className='apple-img' />
            </button>
          </div>

          <p className='login-bottom-text'>
            By signing up, you agree to our Terms of Use and Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Adminlogin;
