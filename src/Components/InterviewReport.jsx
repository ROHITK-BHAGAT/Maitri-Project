import React from 'react'
import Sidebar from './Sidebar'
import { FaRegBell } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import logoimage from '../assets/react.svg';
import InterviewReportCard from './InterviewReportCard';

const InterviewReport = () => {
  return (
    <div className='flex w-full'>
        <Sidebar />
        <div className='flex-1 flex-col dash'>
          {/* first row */}
          <div className='flex justify-between dash1'>
            <div>
              <p className="text-3xl font-bold">Interview Reports</p>
              <p className='text-gray-500 dash2 text-xl'>View and manage interview reports</p>
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
                  <div className=" candi1 grid grid-cols-5 text-lg gap-10 py-3 text-gray-600 font-semibold border-b border-gray-300">
                    <p>Candidate Name</p>
                    <p>Created On</p>
                    <p>Interview Report</p>
                    <p>Resume</p>
                    <p>Video</p>
                    
                  </div>
          <InterviewReportCard/>
          <InterviewReportCard/>
          <InterviewReportCard/>
          <InterviewReportCard/>
          <InterviewReportCard/>
          
          
          
          </div>
          </div>
    </div>
  )
}

export default InterviewReport
