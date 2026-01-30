import React from 'react'
import './Navbar.css'
import { CiSearch } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import companylogo from '../../assets/images.png'
import {Link} from 'react-router-dom'


function Navbar() {
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

      
      <Link to='/'><button className='login-button'>Log in</button></Link>
      <Link to='/signup'><button className='signup-button'>Sign up</button></Link>
      
      
        
      
    </div>
  )
}

export default Navbar
