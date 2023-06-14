import React from 'react'
import { useNavigate } from 'react-router-dom';

import { BiHappy, BiWinkTongue, BiWinkSmile } from "react-icons/bi";
import { AiOutlineArrowLeft } from "react-icons/ai";

function Tweet() {

  const navigate = useNavigate()

  const handleClick = () => {
    return navigate('/compose-anything')
  }

  return (
    <div className='flex md:flex-row xs:flex-col items-center w-full min-h-full px-6 py-6'>
      <div className='h-[32rem] lg:h-[50rem] md:h-[40rem] w-full lg:w-11/12 flex justify-center mt-6 md:mt-0'>
        <div className='relative drop-shadow-lg px-8 py-8 bg-[#FFFFFF] border border-[59ACFF] rounded-lg w-11/12'>
          <p className='text-[#48547d] h-[100%]'></p>
        </div>  
      </div>
      <div className='flex flex-col items-center h-full w-80 text-end xs:mt-5'>
        <div className='w-full'>
          <div className='flex flex-row justify-between items-center mb-6'>
            <div className='bg-blue-600/40 hover:bg-blue-400 rounded-full h-5 w-5 justify-center items-center flex'>
              <AiOutlineArrowLeft onClick={handleClick} className='cursor-pointer '></AiOutlineArrowLeft>
            </div>
            <span className='pl-2'>Choose Template</span>
          </div>
          <form className='flex flex-col'>
            <label className='text-sm text-[#1d2340] pb-2 font-bold'>Company Name</label>
            <input className='text-sm pl-2 mb-6 border border-[#b8c7e5] bg-white rounded-lg h-12 w-full px-2'
              type='text' placeholder='ex: Alscribe' />
            <label className='text-sm text-[#1d2340] pb-2 font-bold'>Position Title</label>
            <input className='text-sm pl-2 mb-6 border border-[#b8c7e5] bg-white rounded-lg h-12 w-full px-2'
              type='text' placeholder='ex: software engineer' />
            <label className='text-sm text-[#1d2340] pb-2 font-bold'>Requirements</label>
            <textarea className='py-2 h-48 text-sm pl-2 mb-6 border border-[#b8c7e5] bg-white rounded-lg w-full px-2'
            placeholder='ex: list of requirements'></textarea>
            <label className='text-sm text-[#1d2340] pb-2 font-bold'>Offer Details</label>
            <textarea className='py-2 h-48 text-sm pl-2 mb-6 border border-[#b8c7e5] bg-white rounded-lg w-full px-2'
            placeholder='ex: benefits, salary, etc'></textarea>
            <div className='w-full'>
              <button className='flex items-center justify-center bg-[#59acff] w-full h-10 rounded-md'>
                <span className='text-white'>Generate</span>
              </button>
            </div>
          </form>

        </div>
      </div>

    </div>
  )
}

export default Tweet