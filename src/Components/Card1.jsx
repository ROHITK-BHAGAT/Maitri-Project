import React from 'react'
import './Card.css'
import img from '../assets/react.svg';

const Card1 = () => {
  return (
    <div className='head-resume'>
      <div className="resume">
        <div className='resume1'>
        <h2 className="">Build Your Professional Resume</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, labore?</p>
        </div>
      <div className='resume2'>
        <div className='resume21'>
            <img src={img} alt="" />
        </div>
        <div>
            <div>
                <p>AI-POWERED</p>
                <p>AI-POWERED</p>
                <p>AI-POWERED</p>
                <button className='join'>Join</button>
            </div>
        </div>
      </div>
    
    

    </div>
    </div>
    
  )
}

export default Card1
