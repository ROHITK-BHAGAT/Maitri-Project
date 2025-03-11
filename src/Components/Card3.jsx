import React from 'react'
import './Card.css'
import { IoPlayCircleOutline } from "react-icons/io5";
import { RiCalendarScheduleFill } from "react-icons/ri";
import { FaCircleCheck } from "react-icons/fa6";
const Card3 = () => {
  return (
    <div className='feedback-resume'>
      <div className="fresume">
        <div className='fresume1'>
          <h2 className="">AI-Powered Interviews</h2>

        </div>
        <div className='resume22'>
          <div className='w-[100%] h-[auto] lg:w-[450px]'>
            <div className='feedback1'>

              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, autem.</p>
              <div className="flex items-center justify-between">
                <p className="flex items-center text-sm lg:text-xl gap-2">
                  <FaCircleCheck /> Structure Format
                </p>
                <p className="flex items-center text-sm  lg:text-xl gap-2">
                  <FaCircleCheck /> Structure Format
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="flex items-center text-sm lg:text-xl gap-2">
                  <FaCircleCheck /> Structure Format
                </p>
                <p className="flex items-center text-sm lg:text-xl gap-2">
                  <FaCircleCheck /> Structure Format
                </p>
              </div>
              <div className='mt-4 flex items-center'>
                <button className='flex  items-center bg-indigo-600 text-white py-2  px-4  text-sm lg:text-2xl rounded-md cursor-pointer'>
                  <RiCalendarScheduleFill className='text-lg lg:text-2xl' />
                  Schedule Demo
                </button>

                <button className='flex items-center bg-white text-black px-5 py-2 text-sm lg:text-2xl border-2 border-blue-400 rounded-md cursor-pointer '><IoPlayCircleOutline className='text-2xl lg:text-xl' />Watch how to work</button>
              </div>
            </div>
          </div>
          <div className=''>

          </div>

        </div>



      </div>
    </div>
  )
}

export default Card3
