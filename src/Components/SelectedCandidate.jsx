import React from 'react'
import Sidebar from './Sidebar'
import { FaRegBell } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import logoimage from '../assets/react.svg';
import CandidateCard from './CandidateCard';



const SelectedCandidate = () => {
  return (
    <div className='flex w-full'>
        <Sidebar />
        <div className='flex-1 flex-col dash'>
          {/* first row */}
          <div className='flex justify-between dash1'>
            <div>
              <p className="text-3xl font-bold">Selected Candidates</p>
              
            </div>
            <div className='flex justify-center items-center gap-4'>
              <FaRegBell className='text-3xl' />
              <img src={logoimage} alt="profilepic" className='border-2 w-[50px] h-[50px] rounded-full border-gray-300' />
            </div>
          </div>
          {/* second row */}
          <div className="flex items-center justify-between dash1 searchjob">
            <div className="flex items-center border border-gray-300 rounded-lg w-[60%] p-2">
              <IoIosSearch className="text-gray-500 text-3xl" />
              <input
                type="text"
                placeholder="Search jobs..."
                className="flex-grow pl-2 text-2xl border-none outline-none search2"
              />
            </div>
            <div>
              
            </div>
          </div>
          {/* data of candidate */}
          <div className='flex flex-col dash1'>
            {/* Table Header */}
                  <div className=" candi1 grid grid-cols-6 gap-10 text-lg py-3 text-gray-600 font-semibold border-b border-gray-300">
                    <p>Name</p>
                    <p>Status</p>
                    <p>Email</p>
                    <p>Phone</p>
                    <p>Score</p>
                    <p>Action</p>
                  </div>
          <CandidateCard/>
          <CandidateCard/>
          
          
          </div>
          </div>
    </div>
  )
}

export default SelectedCandidate
