import React from 'react'
import HCard from './HCard'
import CardSlider from './CardSlider'
import BCard from './BCard'
import Footer from './Footer'
import Navbar from './Navbar'
import { NavLink } from 'react-router-dom'
// import video from '../assets/banner-bg-video.mp4';


const Home = () => {
  return (
   <>
   <Navbar/>
    <div className="hero-container">
      <h1 className="hero-title">
        UPGRADE YOUR HIRING <br />
        GAME WITH <br />
        <span className="highlight">MAITRI AI INTERVIEWER</span>
      </h1>
      <NavLink to="/login"><button className="hero-btn">Get started</button></NavLink>
      
    </div>

    <div className='hiring-process'>
        <h1>Transform Your Hiring Process</h1>
        <p>Streameline recruitment with AI-powered tools designed for modern bussiness</p>
    </div>
    <HCard/>

    <div className='feature'>
        <h3>Upcoming features</h3>
    </div>
    <CardSlider/>

    <div className='work'>
        <div >
        <h3>See How It Works</h3>
        <p>Lorem ipsum dolor sit.</p>
        </div>
        <div>
        <video autoPlay muted loop  className="background-video">
            <source src="https://syh.crextal.com/videos/banner-bg-video.mp4" type="video/mp4" />
            </video>
        </div>
    </div>

    <BCard/>
    <Footer/>
    </>
    
  )
}

export default Home
