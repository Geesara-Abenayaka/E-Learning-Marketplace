import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import '../Cart/Cart.css'
import Card from '../Card/Card'
import Header from '../Header/Header'
import axiosClient from '../../utills/client';

function Cart() {
  const navigate = useNavigate();
  const handleBuyNow = async() => {
      const user=JSON.parse(localStorage.getItem('user'));
      if(!user){
        alert('Please log in to purchase courses!');
        return; 
      }
      try{
        for(const item of cartItems){
          await axiosClient.post('/api/purchase', {
            userEmail: user.email,
            productId: item._id,
          });
        }
        alert('Purchase successful!');
        setCartItems([]);
        localStorage.removeItem('cart');
        navigate('/mycourses');
      } catch (err) {
        alert('Purchase failed. Please try again.');
      }
  }
  const [cartItems, setCartItems] = useState([]);
  const cancelItem = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  }

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  return (
    <div >
      <Navbar />
      <div className='my-cart'>My Cart</div>
      <hr className='uio' />
      <div className='cohio'>
        {(cartItems.length === 0) ? (
          <div className='empty-cart'>Your cart is empty.</div>
        ) : (
          cartItems.map((item, index) => (
            <div key={index} className='lol'>
              <Card
                name={item.name}
                tutor={item.tutor}
                price={`$${item.price}`}
                img={item.img}
              />
              <button
                className='cancel-btn'
                onClick={() => cancelItem(index)}
              >
                Cancel
              </button>
            </div>
          ))
        )}


      </div>
      <button className='buy-now' onClick={handleBuyNow}>Buy Now</button>
      <Header />

    </div>
  )
}

export default Cart
