import React from 'react'

const BenefitCard = (props) => {
  return (
    <div className="benefit-card">
      <div className="icon">{props.icon} </div>
      <h2 className="title">Task Completed</h2>
      <p className="description">
        Your action was successful. You can proceed with the next steps.
      </p>
    </div>
  )
}

export default BenefitCard
