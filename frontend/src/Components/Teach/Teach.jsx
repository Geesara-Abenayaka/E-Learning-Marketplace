import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import b1 from '../../assets/b1.webp'
import b2 from '../../assets/b2.webp'
import b3 from '../../assets/b3.webp'
import b4 from '../../assets/b4.webp'
import Header from '../Header/Header'
import '../Teach/Teach.css'
import {Link} from 'react-router-dom'

function Teach() {
    return (
        <div>
            <Navbar />
            <div class="img-crop">
                <img src={b1} class="imgb1"/>
                <div className='teach'>
                    Come teach<br/> with us
                    <div className='teach1'>Become an instructor and change lives <br/>— including your own</div>
                    
                    <Link to='/adminlogin'><button className='get-started'>Get started</button></Link>
                </div>

            </div>
            <div className='iii'>So many reasons to start</div>
            <div className='ghj'>
                <div>
                    <img src={b2} className='b2img'/>
                    <div className='way'>Teach your way</div>
                    <div className='publish'>Publish the course you want, in the way you<br/> want, and always have control of your own<br/>  content.</div>
                </div>
                <div>
                    <img src={b3} className='b2img'/>
                    <div className='way'>Inspire learners</div>
                    <div className='publish'>Teach what you know and help learners explore<br/> their interests, gain new skills, and advance their <br/>careers.</div>
                </div>
                <div>
                    <img src={b4} className='b2img'/>
                    <div className='way'>Get rewarded</div>
                    <div className='publish'>Expand your professional network, build your<br/> expertise, and earn money on each paid<br/>  enrollment.</div>
                </div>
            </div>
            
             <Header/>
        </div>
    )
}

export default Teach
