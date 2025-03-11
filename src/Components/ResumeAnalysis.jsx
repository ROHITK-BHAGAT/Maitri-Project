import React from 'react'
import Sidebar from './Sidebar'
import logoimage from '../assets/react.svg';
import { FaRegBell } from "react-icons/fa";
import { FaFileArrowUp } from "react-icons/fa6";
import { BsCheckCircleFill } from "react-icons/bs";
import { RxCrossCircled } from "react-icons/rx";
import ResumeCard from './ResumeCard';


const ResumeAnalysis = () => {
    return (
        <div className='flex w-full'>
            <Sidebar />
            <div className='flex-1 p-4 dash flex-col'>
                {/* first row */}
                <div className='flex justify-between dash1'>
                    <div>
                        <p className="text-3xl font-bold">HR Resume Analytics</p>

                    </div>
                    <div className='flex justify-center items-center gap-4'>
                        <FaRegBell className='text-3xl' />
                        <img src={logoimage} alt="profilepic" className='border-2 w-[50px] h-[50px] rounded-full border-gray-300' />
                    </div>
                </div>
                {/* second row */}
                <div className='flex items-center justify-start gap-5 dash1'>
                    <div className='flex data items-center justify-between gap-5 border-2 border-gray-300'>
                        <div>
                            <p>Upload Resume</p>
                            <p className='text-4xl resumeAnaly'>44</p>
                        </div>
                        <div className='text-2xl rounded-full dashicon'>
                            <FaFileArrowUp className='text-blue-500' />
                        </div>

                    </div>
                    <div className='flex data items-center justify-between gap-5 border-2 border-gray-300'>
                        <div><p>Selected Resumes</p>
                            <p className='text-4xl  text-green-500 resumeAnaly'>19</p>
                        </div>
                        <div className='text-2xl rounded-full dashicon'>
                            <BsCheckCircleFill className='text-green-500' />
                        </div>

                    </div>
                    <div className='flex data items-center justify-between gap-5 border-2 border-gray-300'>
                        <div><p>Rejected Resume</p>
                            <p className='text-4xl  text-red-500 resumeAnaly'>25</p>
                        </div>
                        <div className='text-2xl rounded-full dashicon'>
                            <RxCrossCircled className='text-red-500' />
                        </div>

                    </div>

                </div>
                {/* 3rd row */}
                <div className='flex dash1 resumeSta flex-col gap-20'>
                    <div>
                        <p className='text-2xl '>Resume Statistics</p>
                    </div>

                    <div class="flex items-end  p-6  justify-start gap-20">

                        <div class="flex flex-col items-center">
                            <div class="bg-blue-500 w-25 h-52 rounded-t-md"></div>
                            <p class="mt-2">Uploaded</p>
                        </div>


                        <div class="flex flex-col items-center">
                            <div class="bg-green-500 w-25 h-34 rounded-t-md"></div>
                            <p class="mt-2">Selected</p>
                        </div>


                        <div class="flex flex-col items-center">
                            <div class="bg-red-500 w-25 h-45 rounded-t-md"></div>
                            <p class="mt-2">Rejected</p>
                        </div>


                    </div>
                </div>
                {/* 4th row */}
                <div className=' dash1 resumehead flex items-center justify-start gap-120'>
                    <div>
                        <p className='text-2xl'>Resume Analysis Report</p>
                    </div>
                    <div className='flex gap-5'>
                        <div>
                            <button className='text-2xl text-green-400'>Selected Resume</button>
                        </div>
                        <div>
                            <button className='text-2xl text-red-500'>Rejected Resume</button>
                        </div>

                    </div>
                </div>
                <div className=' dash1 flex items-center justify-start gap-40 resumeAnaly resumeAnaly1 text-2xl text-gray-400'>
                    <div>
                        <p>Name</p>
                    </div>
                    <div>
                        <p>Contact</p>
                    </div>
                    <div>
                        <p>Job Title</p>
                    </div>
                    <div>
                        <p>Status</p>
                    </div>
                    <div>
                        <p>Uploaded At</p>
                    </div>
                </div>
                <ResumeCard />
                <ResumeCard />




            </div>

        </div>
    )
}

export default ResumeAnalysis


