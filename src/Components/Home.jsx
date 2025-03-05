import React from 'react'
import HCard from './HCard'
import CardSlider from './CardSlider'
import BCard from './BCard'
import Footer from './Footer'
// import video from '../assets/banner-bg-video.mp4';


const Home = () => {
  return (
   <>
    <div className="hero-container">
      <h1 className="hero-title">
        UPGRADE YOUR HIRING <br />
        GAME WITH <br />
        <span className="highlight">MAITRI AI INTERVIEWER</span>
      </h1>
      <button className="hero-btn">Get started</button>
    </div>

    <div className='hiring-process'>
        <h1>Transform Your Hiring Process</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, tempore!</p>
    </div>
    <HCard/>

    <div className='feature'>
        <h3>Upcomming features</h3>
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
