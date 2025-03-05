import React from 'react'
import BenefitCard from './BenefitCard'
import { FaRobot } from "react-icons/fa";
import { MdPhotoCameraFront } from "react-icons/md";
import { GiHighlighter } from "react-icons/gi";

const BCard = () => {
  return (
    <>
    <div className='smart'>
        <h3>Key Benefits of Smart Hirrng</h3>
    </div>
    <div className='hiring'>
      <BenefitCard
      icon={<FaRobot/>}
      />
      <BenefitCard
      icon={<MdPhotoCameraFront/>}
      />
      <BenefitCard
      icon={<GiHighlighter/>}
      />
    </div>

    </>
  )
}

export default BCard
