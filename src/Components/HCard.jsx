import React from 'react'
import HiringCard from './HiringCard'
import { FaRobot } from "react-icons/fa";
import { MdPhotoCameraFront } from "react-icons/md";
import { GiHighlighter } from "react-icons/gi";
import { MdOutlineEdgesensorHigh } from "react-icons/md";
import { GiHighKick } from "react-icons/gi";
import { PiHighDefinitionFill } from "react-icons/pi";

const HCard = () => {
  return (
    <div className='hiring'>
      <HiringCard
      icon={<FaRobot/>}
      />
      <HiringCard
      icon={<MdPhotoCameraFront/>}
      />
      <HiringCard
      icon={<GiHighlighter/>}
      />
      <HiringCard
      icon={<MdOutlineEdgesensorHigh/>}
      />
      <HiringCard
      icon={<GiHighKick/>}
      />
    <HiringCard
    icon={<PiHighDefinitionFill/>}
    />


    </div>
  )
}

export default HCard
