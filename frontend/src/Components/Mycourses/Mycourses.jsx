import React from 'react'
import '../Mycourses/Mycourses.css'
import Navbar from '../Navbar/Navbar'
import Card from '../Card/Card'

function Mycourses() {
  return (
    <div>
        <Navbar/>
      <div className='my-courses'>My Courses</div>
       <hr className='uio'/>
      <div className='tyh'>
        <div className='jkl'><Card />
      </div>
      </div>
    </div>
  )
}

export default Mycourses
