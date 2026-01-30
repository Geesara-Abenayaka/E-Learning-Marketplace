import React from 'react'
import Navbar from '../Navbar/Navbar'
import '../Cart/Cart.css'
import Card from '../Card/Card'

function Cart() {
  return (
    <div >
      <Navbar/>
      <div className='my-cart'>My Cart</div>
      <hr className='uio'/>
      <div className='tyh'><div className='jkl'><Card /><br>
      </br>
      <button className='cancel-btn'>Cancel</button>
      </div></div>
      
      
      <button className='buy-now'>Buy Now</button>
    </div>
  )
}

export default Cart
