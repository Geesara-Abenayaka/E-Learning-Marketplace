import React from 'react'
import axios from 'axios';
import Packages from '../../Components/Packages/Packages'
import Header from '../Header/Header';
import { useState,useEffect } from 'react';
import Navbar from '../../Components/Navbar/Navbar'
import { GiArtificialHive } from "react-icons/gi";
import { BiCertification } from "react-icons/bi";
import { FaBrain } from "react-icons/fa";
import { GiLevelThreeAdvanced } from "react-icons/gi";
import p1 from '../../assets/p1.webp'
import './Home.css'
import Card from '../../Components/Card/Card';
import Model from '../Model/Model';
import { MdNavigateNext } from "react-icons/md";
import { GoArrowRight } from "react-icons/go";
import b1 from '../../assets/b1.svg'
import b2 from '../../assets/b2.svg'
import b3 from '../../assets/b3.svg'
import b4 from '../../assets/b4.svg'
import b5 from '../../assets/b5.svg'
import b6 from '../../assets/b6.svg'
import b7 from '../../assets/b7.svg'
import b8 from '../../assets/b8.svg'
import d1 from '../../assets/d1.png'
import d2 from '../../assets/d2.png'
import d3 from '../../assets/d3.jpg'

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/product');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    
    fetchProducts();

  }, []);
  const [activeTab, setActiveTab] = useState("b1");
  const [hoveredCard, setHoveredCard] = useState(null);


  const tabs = [
    { id: "b1", label: "Artificial Intelligence (AI)" },
    { id: "b2", label: "Python" },
    { id: "b3", label: "Machine Learning" },
    { id: "b4", label: "AI Agents and Agentic AI" },
    { id: "b5", label: "Cyber Security" },
    { id: "b6", label: "Amazon AWS" },
  ]
  return (

    <div>
      <Navbar />
      <div className='ai-era-div'>
        <p ><div className='ai-era'>Reimagine your career in the<br /> AI era<br /></div>
          <div className='ai-era-desc'> Future-proof your skills with Personal Plan. Get access to a variety of<br /> fresh content from real-world experts.</div>

          <div className='avd'><GiArtificialHive className='ai-icon' />
            <div className='abd'><b>Learn</b> AI and more</div>
            <BiCertification className='certi-icon' />

            <div className='abd'><b>Prep</b> for a certification</div>

          </div>

          <div className='avd'><FaBrain className='ai-icon' />
            <div className='abd'><b>Practice</b> with AI coaching</div>
            <GiLevelThreeAdvanced className='adv-icon' />
            <div className='abd'><b>Advance</b> your career</div>
          </div>

          <button className='lrn-btn'>Learn more</button>
          <div className='prc'>Starting at $10.00/month</div>
        </p>
        <div><img src={p1} alt='p1img' className='p1img' /></div>

      </div>
      <div className='skill-topic'>Skils to transform your career and life</div>
      <div className='skill-topic-desc'>From critical skills to technical topics, Udemy supports your professional development.
      </div>
      <br />
      <br />
      <div className='tabs'>
        {tabs.map((i) => (
          <div
            key={i.id}
            className={`btn-itm ${activeTab === i.id ? 'active' : ''}`}
            onClick={() => setActiveTab(i.id)}
          >
            {i.label}
          </div>
        ))}
      </div>
      <hr />
      <div className='cards-container'>
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className='card-div'
            onMouseEnter={() => setHoveredCard(i)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <Card name="Course Name" tutor="Tutor Name" price="$9.99" img={d1} />
            {hoveredCard === i && (
              i % 4 == 0
                ? <div className='loweena'><Model /></div>
                : <div><Model /></div>
            )}


          </div>
        ))}

      </div>
      <div className='next-btn'>
        <button className="next-button"><MdNavigateNext className='aaa' /></button>
      </div>

      <div className='show-all-courses'>Show All Artificial Intelligence (AI) Courses<GoArrowRight className='goarrowright' /> </div>

      <div className='brands'>
        <p className='brand-desc'>Trusted by over 17,000 companies and millions of learners around the world</p>
        <div className='brand-img'>
          <img src={b1} alt='b1' className='bimg' />
          <img src={b2} alt='b2' className='bimg' />
          <img src={b3} alt='b3' className='bimg' />
          <img src={b4} alt='b4' className='bimg' />
          <img src={b5} alt='b5' className='bimg' />
          <img src={b6} alt='b6' className='bimg' />
          <img src={b7} alt='b7' className='bimg' />
          <img src={b8} alt='b8' className='bimg' />
        </div>
      </div>
      <div className='display-no'>
        <div className='box-1'>
          <div className='get-certify'>Get certified and get<br />ahead in your career</div>
          <div className='prep-certify'>Prep for certifications with comprehensive<br />courses, practice tests, and special offers on exam<br />vouchers. </div>
          <button className='certi-btn'>Explore certification and vouchers<GoArrowRight className='goarrowright1' /></button>
        </div>
        <div className='hhh'> 
          <img src={d1} alt='p1img' className='d1img2' />
          <div className='compTia'>CompTIA</div>
          <div className='eee'>Cloud,Networking,<br/>Cybersecurity</div>
        </div>  
        <div className='hhh1'> 
          <img src={d2} alt='p1img' className='d1img2' />
          <div className='compTia'>AWS</div>
          <div className='eee'>Cloud,AI,Coding,<br/>Networking</div>
        </div>  
        <div className='hhh2'> 
          <img src={d3} alt='p1img' className='d1img2' />
          <div className='compTia'>PMI</div>
          <div className='eee'>Project & Program <br/>Management</div>
        </div>  
      </div>
      <div className='lll'>
        <div className='grow'>Grow your team's skills and your business</div><br/>
        <div className='Reach'>Reach goals faster with one of our plans or programs. Try one free today or contact sales to learn more.</div>
      </div>
      <Packages />
      <br/>
      <br/>
      <br/>
      <Header/>
    </div>

  )
}

export default Home
