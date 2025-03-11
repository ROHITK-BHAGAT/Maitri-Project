import React from 'react'
import Sidebar from './Sidebar'
import logoimage from '../assets/react.svg';
import { FaRegBell } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";


const JobPosting = () => {
  return (
    <>
      <div className='flex w-full'>
        <Sidebar />
        <div className='flex-1 flex-col dash'>
          {/* first row */}
          <div className='flex justify-between dash1'>
            <div>
              <p className="text-3xl font-bold">HR Job Portal</p>
              <p className='text-gray-500 dash2 text-xl'>Manage and track all your job postings</p>
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
              <button className="bg-blue-500 text-white text-xl px-6 py-2 rounded-lg hover:bg-blue-600 search2 cursor-pointer">
                +Create New Job
              </button>
            </div>
          </div>
          {/* third row */}
          <div className='flex items-center justify-between dash1'>
          <div className=' w-[350px] h-[180px] flex flex-col justify-between border-1 border-gray-200 rounded-2xl draft1 '>
            <div className='flex items-center justify-between '>
              <div>
                <p className='text-gray-400'>Draft</p>
              </div>
              <div>
                <p className='text-gray-400'>12</p>
              </div>
            </div>
            <div>
            <p className='text-3xl'>8 Jobs</p>
            <p className='text-gray-400'>Last updated 2h ago</p>
            </div>
            
          </div>
          <div className='w-[350px] h-[180px] flex flex-col justify-between border-1 border-gray-200  rounded-2xl draft1'>
            <div className='flex items-center justify-between '>
              <div>
                <p className='text-gray-400'>Published</p>
              </div>
              <div>
                <p className='text-green-400 '>Active</p>
              </div>
            </div>
            <div>
            <p className='text-3xl'>24 Jobs</p>
            <p className='text-gray-400'>Last updated 30m ago</p>
            </div>
            
          </div>
          <div className='w-[350px] h-[180px] flex flex-col justify-between  border-1 border-gray-200  rounded-2xl draft1'>
            <div className='flex items-center justify-between'>
              <div>
                <p className='text-gray-400'>Closed</p>
              </div>
              <div>
                <p className='text-red-400'>16</p>
              </div>
            </div>
            <div>
            <p className='text-3xl'>32 Jobs</p>
            <p className='text-gray-400'>Last updated 1day ago</p>
            </div>
            
          </div>
          </div>

          {/* 4th row */}
          <div className=' dash1 h-[320px] rounded-2xl posting flex flex-col justify-between border-1 border-gray-200'>
            <div className='flex '>
              <p className='text-2xl'>Recent Job Posting</p>
            </div>
            <hr className='text-gray-200'/>
            <div className='flex items-center justify-between'>
              <div className='flex flex-col justify-between'>
              <div>
                <p className='text-2xl'>Senior UX Designer</p>
              </div>
              <div className='flex items-center gap-2 text-gray-300'>
                <span><FaLocationDot/></span><span>remote</span> <span>full time </span> <span>$ 80k-120k</span>
              </div>
              </div>
              <div>
                <p className='text-green-400'>Published</p>
              </div>
            </div>
            <hr className='text-gray-200'/>
            <div className='flex items-center justify-between'>
              <div className='flex flex-col justify-between'>
              <div>
                <p className='text-2xl'>Fronted Developer </p>
              </div>
              <div className='flex items-center gap-2 text-gray-300'>
                <span><FaLocationDot/></span><span>New York</span> <span>full time </span> <span>$ 70k-90k</span>
              </div>
              </div>
              <div>
                <p>Draft</p>
              </div>
            </div>
            <hr className='text-gray-200'/>
            <div className='flex items-center justify-between'>
              <div className='flex flex-col justify-between'>
              <div>
                <p className='text-2xl'>Product Manager</p>
              </div>
              <div className='flex items-center gap-2 text-gray-300'>
                <span><FaLocationDot/></span><span>San Francisco</span> <span>full time </span> <span>$ 100k-140k</span>
              </div>
              </div>
              <div>
                <p className='text-red-500'>Closed</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default JobPosting
