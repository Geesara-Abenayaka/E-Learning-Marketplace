import React from 'react'
import { useState } from 'react';
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

function Home() {

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
      <div className='skill-topic'>Skills to transform your career and life</div>

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
            <Card />
            {hoveredCard === i && (
              i % 4 == 0
                ? <div className='loweena'><Model /></div>
                : <div><Model /></div>
            )}


          </div>
        ))}


      </div>
      <div className='next-btn'>
        <button className="next-button"><MdNavigateNext className='aaa'/></button>
      </div>


    </div>
  )
}

export default Home
