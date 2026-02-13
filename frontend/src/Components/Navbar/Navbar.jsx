import React, { useState, useEffect } from 'react'
import './Navbar.css'
import { CiSearch } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import companylogo from '../../assets/images.png'
import { Link, useNavigate } from 'react-router-dom'


function Navbar() {
  // const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [user, setUser] = useState(() => {  
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  // useEffect(() => {
  //   const storeduser = localStorage.getItem('user');
  //   if (storeduser) {
  //     setUser(JSON.parse(storeduser));
  //   }
  // }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    alert('Logged out successfully!');
    navigate('/');
  }

  return (
    <div className='navbar-container'>

      <img src={companylogo} className='companylogo' alt="Company Logo" />
      <Link to='/home'><button className='explore-text1'>Explore</button></Link>

      <div className='search-wrapper'>
        <CiSearch className='search-icon' />
        <input type="text" className='search-input' placeholder='Search for anything' />
      </div>
      <Link to='/plans'><button className='explore-text'>Plans & Pricing</button></Link>
      <Link to='/mycourses'><button className='explore-text2'>Your Courses</button></Link>
      <Link to='/teach'><button className='explore-text3'>Teach on SkillStack</button></Link>
      <Link to='/cart'><button className='explore-text4'><BsCart3 /></button></Link>

      {user ? (
        <>
          <div className='login-text'>Logged in as<br /> {user.email}</div>
          <button onClick={handleLogout} className='signup-button1'>Logout</button>
        </>
      ) : (
        <>
          <Link to='/'><button className='login-button'>Log in</button></Link>
          <Link to='/signup'><button className='signup-button'>Sign up</button></Link>
        </>
      )}
    </div>
  )
}

export default Navbar
