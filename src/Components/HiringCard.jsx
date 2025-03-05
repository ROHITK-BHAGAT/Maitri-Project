import React from 'react'
import './HiringCard.css'


const HiringCard = (props) => {
  return (
    
    
    <div className="card">
      <div className="icon">{props.icon} </div>
      <h2 className="title">Task Completed</h2>
      <p className="description">
        Your action was successful. You can proceed with the next steps.
      </p>
    </div>
    
  )
}

export default HiringCard
