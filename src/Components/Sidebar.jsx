import React, { useState } from 'react';
import logo from '../assets/maitri-logo.png';
import { NavLink } from 'react-router-dom';
import { FiHome } from "react-icons/fi";
import logoimage from '../assets/MAITRI AI LOGO 3.png';

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { CiCircleQuestion } from "react-icons/ci";
import { IoLogOutOutline } from "react-icons/io5";
import { IoBagRemoveSharp } from "react-icons/io5";
import { BsPeopleFill } from "react-icons/bs";
import { FaFileAlt } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { TbReportAnalytics } from "react-icons/tb";

const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <>
        <div className={`flex flex-col justify-between h-[1000px] border-r border-gray-200 rounded-2xl transition-all duration-300  ${isCollapsed ? "w-20" : "w-74"}`}>

        
        <div className="relative">

            {/* Toggle Button */}
            <button
                onClick={() => setIsCollapsed(!isCollapsed)}
                className={`absolute top-5 transition-all duration-300 border-gray-300 rounded-lg shadow-md bg-white border-1 cursor-pointer ${isCollapsed ? "-right-5" : "-right-3"
                    }`}
            >
                {isCollapsed ? (
                    <IoIosArrowForward size={28} className="text-black-300" />
                ) : (
                    <IoIosArrowBack size={28} className="text-black-300" />
                )}
            </button>

            



            {/* Sidebar Content */}
            <div className={`flex flex-col gap-2 transition-all duration-300 ${isCollapsed ? "items-center" : "items-start pl-4"}`}>
                <div className="flex items-center justify-center mt-4">

                    {isCollapsed ? (
                        <img src={logoimage} alt="Collapsed Logo" className="w-[50px] h-[50px] mt-5" />
                    ) : (
                        <img src={logo} alt="Expanded Logo" className="w-[200px] sidebarlogo transition-all duration-300" />
                    )}
                </div>
                <hr className={`w-[80%] flex items-center bg-gray-300 border-none h-[1.2px] justify-center sidebarlogo ${isCollapsed ? "sidebarsmalllogo" : ""} `} />
                <h2 className={`text-gray-400 ${isCollapsed ? "main1" : "main"} `}>MAIN</h2>
                <nav className="w-full sidenav">
                    <ul className="flex flex-col gap-4">
                        <li>
                            <NavLink
                                to="/dashboard"
                                className={({ isActive }) =>
                                    `${isActive ? (isCollapsed ? "collapsed-active" : "activeside") : ""} 
                                        flex items-center gap-2 sidebarbtn ${isCollapsed ? "sidebarbtnsm" : "w-[80%]"}`
                                }
                            >
                                <FiHome size={24} />
                                {!isCollapsed && <span>Dashboard</span>}
                            </NavLink>

                        </li>
                        <li>
                            <NavLink to="/jobposting" className={({ isActive }) => `${isActive ? (isCollapsed ? "collapsed-active" : "activeside") : ""} 
                                        flex items-center gap-2 sidebarbtn ${isCollapsed ? "sidebarbtnsm" : "w-[80%]"}`
                            }>
                                <IoBagRemoveSharp size={24} />
                                {!isCollapsed && <span>Job Posting</span>}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/candidatescreening" className={({ isActive }) => `${isActive ? (isCollapsed ? "collapsed-active" : "activeside") : ""} 
                                        flex items-center gap-2 sidebarbtn ${isCollapsed ? "sidebarbtnsm" : "w-[80%]"}`
                            }>
                                <BsPeopleFill size={24} />
                                {!isCollapsed && <span>Candidate Screening</span>}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/resumeanalysis" className={({ isActive }) => `${isActive ? (isCollapsed ? "collapsed-active" : "activeside") : ""} 
                                        flex items-center gap-2 sidebarbtn ${isCollapsed ? "sidebarbtnsm" : "w-[80%]"}`
                            }>
                                <FaFileAlt size={24} />
                                {!isCollapsed && <span>Resume Analysis</span>}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/selectedcandidate" className={({ isActive }) => `${isActive ? (isCollapsed ? "collapsed-active" : "activeside") : ""} 
                                        flex items-center gap-2 sidebarbtn ${isCollapsed ? "sidebarbtnsm" : "w-[80%]"}`
                            }>
                                <IoIosPeople size={24} />
                                {!isCollapsed && <span>Selected Candidates</span>}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/interviewreport" className={({ isActive }) => `${isActive ? (isCollapsed ? "collapsed-active" : "activeside") : ""} 
                                        flex items-center gap-2 sidebarbtn ${isCollapsed ? "sidebarbtnsm" : "w-[80%]"}`
                            }>
                                <TbReportAnalytics size={24} />
                                {!isCollapsed && <span>Interview Report</span>}
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        <div className="flex flex-col justify-end mb-4 gap-4 sidebarlogo">
                <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800">
                    <CiCircleQuestion size={24} />
                    {!isCollapsed && <span>Help</span>}
                </button>
                <NavLink to="/logout" className="flex items-center gap-2 text-red-500">
                    <IoLogOutOutline size={24} />
                    {!isCollapsed && <span>Logout Account</span>}
                </NavLink>
            </div>
        </div>
        </>
    );
};

export default Sidebar;
