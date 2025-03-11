import React from 'react';
import Sidebar from './Sidebar';
import logoimage from '../assets/react.svg';
import { FaRegBell } from "react-icons/fa";
import { HiVideoCamera } from "react-icons/hi2";
import { FaFileAlt } from "react-icons/fa";
import { IoBagRemoveSharp } from "react-icons/io5";
import { BsPeopleFill } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import { IoCodeSlashOutline } from "react-icons/io5";
import { FaPencilRuler } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";




const Dashboard = () => {
    return (
        <div className='flex w-full'>
            <Sidebar />
            <div className='flex-1 p-4 dash flex-col'>
                {/* first row */}
                <div className='flex justify-between dash1'>
                    <div>
                        <p className="text-3xl font-bold">Welcome back, John!</p>
                        <p className='text-gray-500 dash2'>Master Your Skill with AI</p>
                    </div>
                    <div className='flex justify-center items-center gap-4'>
                        <FaRegBell className='text-3xl' />
                        <img src={logoimage} alt="profilepic" className='border-2 w-[50px] h-[50px] rounded-full border-gray-300' />
                    </div>
                </div>
                {/* second row */}
                <div className='flex items-center justify-between dash1'>
                    <div className='flex data items-center justify-between gap-5 border-2 border-gray-300'>
                        <div>
                            <p>Total Interviews</p>
                            <p className='text-2xl font-bold'>1,234</p>
                        </div>
                        <div className='text-2xl rounded-full dashicon'>
                            <HiVideoCamera className='text-blue-500' />
                        </div>

                    </div>
                    <div className='flex data items-center justify-between gap-5 border-2 border-gray-300'>
                        <div><p>Total Resumes Analyzed</p>
                            <p className='text-2xl font-bold'>865</p>
                        </div>
                        <div className='text-2xl rounded-full dashicon'>
                            <FaFileAlt className='text-green-500' />
                        </div>

                    </div>
                    <div className='flex data items-center justify-between gap-5 border-2 border-gray-300'>
                        <div><p>Active Jobs</p>
                            <p className='text-2xl font-bold'>45</p>
                        </div>
                        <div className='text-2xl rounded-full dashicon'>
                            <IoBagRemoveSharp className='text-purple-500' />
                        </div>

                    </div>
                    <div className='flex data items-center justify-between gap-5 border-2 border-gray-300'>
                        <div><p>Selected Candidates</p>
                            <p className='text-2xl font-bold'>128</p>
                        </div>
                        <div className='text-2xl rounded-full dashicon'>
                            <BsPeopleFill className='text-amber-500' />
                        </div>

                    </div>
                </div>

                {/* third row */}
                <div className='flex items-center justify-between recent'>
                    <div className=' w-[620px] h-[300px] rounded-2xl border-2 border-gray-200 recent1'>
                        <div className='flex justify-between   '>
                            <div>
                                <p className='text-3xl'>Recent Interviews</p>
                            </div>
                            <div>
                                <NavLink className='text-2xl text-blue-400'>View All</NavLink>
                            </div>
                        </div>
                        <div>
                            <div className='flex items-center justify-between frontend bg-gray-100 rounded-2xl'>
                                <div className='flex gap-2 items-center'>
                                    <div>
                                        <img src={logoimage} alt="" className='border-2 border-gray-300 w-[50px] h-[50px] rounded-full' />
                                    </div>
                                    <div>
                                        <p className='text-xl'>Sarah Johnson</p>
                                        <p className='text-gray-400'>Frontend Developer</p>
                                    </div>
                                </div>
                                <div>
                                    <p>Completed</p>
                                </div>
                            </div>
                            <div className='flex items-center justify-between frontend bg-gray-100 rounded-2xl'>
                                <div className='flex gap-2 items-center'>
                                    <div>
                                        <img src={logoimage} alt="" className='border-2 border-gray-300 w-[50px] h-[50px] rounded-full' />
                                    </div>
                                    <div>
                                        <p className='text-xl'>Mike Peters</p>
                                        <p className='text-gray-400'>UX Designer</p>
                                    </div>
                                </div>
                                <div>
                                    <p>Pending</p>
                                </div>
                            </div>

                        </div>


                    </div>
                    <div className=' w-[620px] h-[300px] rounded-2xl border-2 border-gray-200 recent1'>
                        <div className='flex justify-between   '>
                            <div>
                                <p className='text-3xl'>Recent Applications</p>
                            </div>
                            <div>
                                <NavLink className='text-2xl text-blue-400'>View All</NavLink>
                            </div>
                        </div>
                        <div>
                            <div className='flex items-center justify-between frontend bg-gray-100 rounded-2xl'>
                                <div className='flex gap-2 items-center'>
                                    <div className='bg-blue-100 w-12 h-12 flex items-center justify-center rounded-full'>
                                        <IoCodeSlashOutline className='text-3xl' />
                                    </div>
                                    <div>
                                        <p>Senior Backend Developer</p>
                                        <p>15 new application</p>
                                    </div>
                                </div>
                                <div>
                                    <span><IoIosArrowForward /></span>
                                </div>
                            </div>
                            <div className='flex items-center justify-between frontend bg-gray-100 rounded-2xl'>
                                <div className='flex gap-2 items-center'>
                                    <div className='bg-purple-100 w-12 h-12 flex items-center justify-center rounded-full'>
                                        <FaPencilRuler className=' text-3xl rounded-full' />
                                    </div>
                                    <div>
                                        <p>Product Designer</p>
                                        <p>8 new application</p>
                                    </div>
                                </div>
                                <div>
                                    <span><IoIosArrowForward /></span>
                                </div>
                            </div>

                        </div>


                    </div>
                </div>

            </div>

        </div>
    );
};

export default Dashboard;
