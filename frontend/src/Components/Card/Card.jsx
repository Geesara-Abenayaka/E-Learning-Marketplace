import React from 'react'
import './Card.css'
import c1 from '../../assets/c1.png'
import { FaStar } from "react-icons/fa";

function Card(
    {name,
    tutor,
    price,
    img,}
) {
    return (
        <div className='card-wrap'>
            <img src={img} className='c-img' /><br />
            <div className='c-title'>{name}</div>
            <div className='c-owner'>{tutor}</div>
            <div className='c-btn-div'>
                <div className='c1btn1'>Bestseller</div>
                <div className='c1btn2'><FaStar className='fastar' /> 4.5</div>
                <div className='c1btn2'>1,202 rating</div>
            </div>
            <div className='c1price'>
                <div className='new-val'>{price}</div>
                <div className='old-val'>$34.99</div>
            </div>

        </div>
    )
}

export default Card
