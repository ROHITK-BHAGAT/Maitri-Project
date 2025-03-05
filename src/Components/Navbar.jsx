import React from 'react'
import logo from '../assets/maitri-logo.png';

const Navbar = () => {
  return (
    <div className='nav'>
      <img src={logo} alt="logo" />
      <button className='btn'>Book a Demo</button>
    </div>
  )
}

export default Navbar
