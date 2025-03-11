import React from 'react'
import './Card.css'
import { IoColorPalette } from "react-icons/io5";

const Card1 = () => {
  return (
    <div className='head-resume'>
      <div className="resume">
        <div className='resume1'>
          <h2>Build Your Professional Resume</h2>
          <p>Create stunning resumes that stand out and get you hired</p>
        </div>
        <div className='resume2'>
          <div className='resume21'>
            <img src="" alt="Image" />
          </div>
          <div className='resume3'>
            <div className='resume31'>
              <p><IoColorPalette className='icon1' /> AI-Powered Writing</p>
              <span>Lorem ipsum dolor sit amet.</span>
              <p><IoColorPalette className='icon1'/> Customized Templates</p>
              <span>Lorem ipsum dolor sit amet.</span>
              <p><IoColorPalette className='icon1'/> Quick Generation</p>
              <span>Lorem ipsum dolor sit amet.</span>
              <div>
              <button className='join'>Join the Waitlist</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card1
