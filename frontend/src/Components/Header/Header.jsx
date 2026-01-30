import React from 'react'
import './Header.css'
import { MdLanguage } from "react-icons/md";
import companylogo from '../../assets/images.png'
function Header() {
  return (
    <div className='yyy'>
        <div className='header'>
      <div className='header3'>
            <div className='header1'>
                About
            </div>
            <div className='header2'>
                About us
                <br/>
                Careers 
                 <br/>
                Contact us
                 <br/>
                Blog
                 <br/>
                Investors
            </div>
      </div>


      <div className='header3'>
            <div className='header1'>
                Discover Udemy
            </div>
            <div className='header2'>
                Get the app
                <br/>
                Teach on Udemy
                 <br/>
                Plans and Pricing
                 <br/>
                Affiliate
                 <br/>
                Help and Support
            </div>
      </div>



      <div className='header3'>
            <div className='header1'>
                Udemy for Business
            </div>
            <div className='header2'>
                Udemy Business

            </div>
      </div>    




      <div className='header3'>
            <div className='header1'>
                Legal & Accessibility
            </div>
            <div className='header2'>
                Accessibility statement
                <br/>
                Privacy policy 
                 <br/>
                Sitemap
                 <br/>
                Terms
            </div>
      </div>
      
    </div>
        
      <hr className="dshsj"/>
      <div className='tyu'>
        <div> © 2026 SkillStack, Inc.</div>
        <div> Cookie settings</div>
        <div > <MdLanguage/> <div className='eng'>English</div></div>

    </div>
       

    </div>
    
  )
}

export default Header   
