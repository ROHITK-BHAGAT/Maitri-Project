import React from 'react'
import Sidebar from './Sidebar'
import { FaRegBell } from "react-icons/fa";
import logoimage from '../assets/react.svg';
import { FaCloudArrowUp } from "react-icons/fa6";

const CandidateScreening = () => {
    return (
        <div className='flex w-full'>
            <Sidebar />
            <div className='flex-1 flex-col dash '>
                {/* first row */}
                <div className='flex justify-between dash1'>
                    <div>
                        <p className="text-3xl font-bold">Candidate Screening</p>
                        <p className='text-gray-500 dash2 text-xl'>Upload and screen candidate resumes</p>
                    </div>
                    <div className='flex justify-center items-center gap-4'>
                        <FaRegBell className='text-3xl' />
                        <img src={logoimage} alt="profilepic" className='border-2 w-[50px] h-[50px] rounded-full border-gray-300' />
                    </div>
                </div>

                {/* second row */}
                <div className='flex items-center justify-between gap-6 dash1 dash3 border-2 border-gray-100 submit'>
                    {/* Job Title Input */}
                    <div className='flex flex-col w-[700px] '>
                        <div className='flex flex-col jobtitle'>
                        <label className='text-2xl font-semibold text-gray-700'>Job Title</label>
                        <input
                            type="text"
                            placeholder='Enter job title'
                            className='border border-gray-300 rounded-md p-3 text-2xl focus:outline-none focus:ring-2  screeninput'
                        />
                        </div>
                        <div className='flex flex-col'>
                        <label className='text-2xl font-semibold text-gray-700'>Job Description</label>
                        <textarea
                            type="text"
                            placeholder='Enter job description'
                            className='border border-gray-300 rounded-md p-3 text-2xl focus:outline-none focus:ring-2  screeninput screeninput1'
                        ></textarea>  
                        </div>
                    </div>
                    

                    {/* Upload Resumes Section */}
                    <div>

                    
                    <div className=' h-[400px] flex flex-col items-center justify-center border-2 border-dotted border-gray-500 rounded-lg p-6  w-[500px] space-y-3'>
                        <FaCloudArrowUp className='text-7xl text-blue-700' />
                        <p className='text-4xl font-semibold text-gray-800'>Upload Resumes</p>
                        <p className='text-lg text-center text-gray-600'>
                            Drag & drop your resumes or click to browse
                        </p>
                        <p className='text-lg text-center text-gray-500'>
                            Supports PDF, DOC, DOCX
                        </p>
                        <input type="file" id="myfile" name="myfile" className='hidden' />
                        <label
                            htmlFor="myfile"
                            className='bg-blue-100 text-blue-400 choosefile rounded-md cursor-pointer  transition-colors'
                        >
                            Choose File
                        </label>
                        
                    </div>
                    <div className='flex justify-end searchjob'>
                    <button className='bg-blue-400 text-xl font-bold text-white border-2 border-black-200 rounded-sm cursor-pointer choosefile'>Submit</button>
                    </div>
                    </div>
                    
                    
                    
                </div>
                

            </div>
        </div>
    )
}

export default CandidateScreening
