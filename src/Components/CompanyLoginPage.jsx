import React from 'react'
import Login from './Login'
import { FaLongArrowAltRight } from "react-icons/fa";

const CompanyLoginPage = () => {
  return (
    <>
      <Login />
      <div className='flex items-center justify-center '>
        <form className=' w-[850px] h-[590px] rounded-2xl shadow-2xl  login-page comp-login-page' autocomplete="off" >
          <div className='flex flex-col items-center justify-center login1-page'>
            <div>
              <div className='flex items-center justify-between gap-12'>
                <div className='flex flex-col'>
                  <label className='text-xl'>Company Name<span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Company Name"
                    required
                    
                    className="shift-placeholder writeText w-[350px] h-[60px] mt-1 p-2  border-2 border-black-500 rounded-md placeholder-gray-500 placeholder:text-lg"
                    />
                </div>
                <div className='flex flex-col'>
                  <label className='text-xl'>Contact Person Name<span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter full name"
                    required
                    className="shift-placeholder writeText w-[350px] h-[60px] mt-1 p-2  border-2 border-black-500 rounded-md placeholder-gray-500 placeholder:text-lg"
                  />
                </div>
              </div>

              <div className='flex flex-col login2-page'>
                <div className='flex items-center justify-between gap-12'>
                  <div className='flex flex-col'>
                    <label className='text-xl'>Business Email<span className="text-red-500">*</span></label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter Business email"
                      required
                      className="shift-placeholder writeText w-[350px] h-[60px] mt-1 p-2  border-2 border-black-500 rounded-md placeholder-gray-500 placeholder:text-lg"
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label className='text-xl'>Phone Number<span className="text-red-500">*</span></label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Enter Phone Number"
                      required
                      className="shift-placeholder writeText w-[350px] h-[60px] mt-1 p-2  border-2 border-black-500 rounded-md placeholder-gray-500 placeholder:text-lg"
                    />
                  </div>
                </div>
              </div>
              <div className='flex flex-col login2-page'>
                <div className='flex items-center justify-between gap-12'>
                  <div className='flex flex-col'>
                    <label className='text-xl'>Company Website<span className="text-red-500">*</span></label>
                    <input
                      type="url"
                      name="website"
                      placeholder="https://example.com"
                      required
                      className="shift-placeholder writeText w-[350px] h-[60px] mt-1 p-2  border-2 border-black-500 rounded-md placeholder-gray-500 placeholder:text-lg"
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label className='text-xl'>Company Size<span className="text-red-500">*</span></label>
                    <select
                      id="company-size"
                      name="company-size"
                      required
                      class="shift-placeholder writeText w-[350px] h-[60px] p-2 border-2 border-gray-500 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                      <option value="">Select Company Size</option>
                      <option value="1-10">1 - 10 employees</option>
                      <option value="11-50">11 - 50 employees</option>
                      <option value="51-200">51 - 200 employees</option>
                      <option value="201-500">201 - 500 employees</option>
                      <option value="500+">500+ employees</option>
                    </select>
                  </div>
                </div>
              </div>
              <div>
                <div className='flex flex-col comp-login'>
                  <label className='text-xl'>Company Description<span className="text-red-500">*</span></label>
                  <textarea
                    type="text"
                    name="text"
                    placeholder="Tell us about your company.."
                    required
                    className=" shift-placeholder writeText company-descp w-[750px] h-[120px] mt-1 p-2 border-2 border-black-500 rounded-md placeholder-gray-500 "
                  ></textarea>
                </div>

              </div>

            </div>
            <div className='login-btn'>
              <button
                type="submit"
                className="w-[220px] h-[50px] mt-5 text-xl bg-gradient-to-br from-[#6363f3] to-[#f531d1] text-white rounded-md transition duration-200 px-4 py-3 cursor-pointer flex items-center justify-center space-x-2"
              >
                Submit Application <FaLongArrowAltRight />
              </button>
            </div>

          </div>
        </form>
      </div>
    </>
  )
}

export default CompanyLoginPage
