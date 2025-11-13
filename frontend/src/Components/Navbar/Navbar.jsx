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
      <p className='explore-text'>Explore</p>
      <div className='search-wrapper'>
        <CiSearch className='search-icon' />
        <input type="text" className='search-input' placeholder='Search for anything' />
      </div>
      <p className='explore-text'>Plans & Pricing</p>
      <p className='explore-text'>SkillStack Business</p>
      <p className='explore-text'>Teach on SkillStack</p>
      <BsCart3 className='cart-icon'/>
      <Link to='/'><button className='login-button'>Log in</button></Link>
      <Link to='/signup'><button className='signup-button'>Sign up</button></Link>
      
      
        
      
    </div>
  )
}

export default Navbar
