import React, { use, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import loginimg from '../../assets/loginimg.webp'
import googleimg from '../../assets/google.png'
import facebookimg from '../../assets/facebook.png'
import appleimg from '../../assets/apple.png'
import './Login.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import axiosClient from '../../utills/client'




function Login() {
  const navigate = useNavigate();
  const [isChecked, setisChecked] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const handleChange = (e) => {
  //   setisChecked(e.target.checked);
  // }

  const handleLogin = async () => {
  try {
    const res = await axiosClient.get('/api/users');
     const users = res.data;

   
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      localStorage.setItem('user', JSON.stringify({email: user.email}));
      alert('Login successful!');
      navigate('/home'); 
    } else {
      alert('Invalid email or password');
    }
  } catch (err) {
    console.error(err);
    alert('Something went wrong!');
  }
};
  return (
    <div>
      <Navbar />
      <div className='login-container'>
        <img src={loginimg} className='login-image' alt="Login Image" />
        <div>
          <p className='login-heading'>Log In with email</p>
          <input
            type="email"
            className='email-input'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className='password-input'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          {/* <label className='checkbox-label'>
            <input type="checkbox" checked={isChecked} onChange={handleChange} className='checkbox-input' />
            <div className='checkbox-text'>
              Send me special offers, personalized recommendations, and<p className='bottom-topic'>learning tips.</p>
            </div>

          </label> */}
          <button className='continue-button' onClick={handleLogin}>Continue</button>


          <div className='hr-text'>

            <hr id='hr1' />
            <span className='or-text'>Other sign up options</span>
            <hr id='hr2' />
          </div>
          <div className='other-signup-options'>
            <button className='google-button'><img src={googleimg} alt="Google" className='google-img' /></button>
            <button className='facebook-button'><img src={facebookimg} alt="Facebook" className='facebook-img' /></button>
            <button className='apple-button'><img src={appleimg} alt="Apple" className='apple-img' /></button>

          </div>
          {/* <p className='login-bottom-text'>By signing up, you agree to our Terms of Use and Privacy Policy.</p> */}
          <div className='signup-text'>
            Don't have an account? <Link to='/signup'><div className='signup'>Sign up</div></Link>
          </div>



        </div>


      </div>

    </div>
  )
}

export default Login
