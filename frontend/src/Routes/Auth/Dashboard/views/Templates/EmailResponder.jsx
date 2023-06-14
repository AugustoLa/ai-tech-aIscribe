import React from 'react'
import { useNavigate } from 'react-router-dom';

import { BiHappy, BiWinkTongue, BiWinkSmile } from "react-icons/bi";
import { AiOutlineArrowLeft } from "react-icons/ai";

function Tweet() {

  const navigate = useNavigate()

  const handleClick = () => {
    return navigate('/better-email')
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
            <label className='text-sm text-[#1d2340] pb-2 font-bold'>Email to Respond</label>
            <textarea className='py-2 h-48 text-sm pl-2 mb-6 border border-[#b8c7e5] bg-white rounded-lg w-full px-2'
            placeholder='email to respond here'></textarea>
            <label className='text-sm text-[#1d2340] pb-2 font-bold'>Name the people you're addressing</label>
            <input className='text-sm pl-2 mb-6 border border-[#b8c7e5] bg-white rounded-lg h-12 w-full px-2'
              type='text' placeholder='ex: John Doe' />
            <label className='text-sm text-[#1d2340] pb-2 font-bold'>You want to respond</label>
            <input className='text-sm pl-2 mb-6 border border-[#b8c7e5] bg-white rounded-lg h-12 w-full px-2'
              type='text' placeholder='ex: Say thanks' />
            <label className='text-sm text-[#1d2340] pb-2 font-bold'>Voice Tone</label>
            <div className='flex flex-col justify-between mb-2'>
              <div className='mb-2 border bg-white border-[#E6EDFA] w-full rounded-lg h-10 px-2 flex flex-row justify-between items-center  '>
                <label className='flex items-center justify-between w-full h-full cursor-pointer'>
                  <input type='radio' name='formality' value='informal' className='cursor-pointer'></input>
                  <div className='flex items-center'>
                    <span className='text-[#144b9e] mr-2'>Informal</span>
                    <span className='text-xl text-black'>
                      <BiWinkTongue className='' />
                    </span>
                  </div>
                </label>
              </div>
              <div className='mb-2 border bg-white border-[#E6EDFA] w-full rounded-lg h-10 px-2 flex flex-row justify-between items-center'>
                <label className='flex items-center justify-between w-full h-full cursor-pointer'>
                  <input type='radio' name='formality' value='formal' className='cursor-pointer'></input>
                  <div className='flex items-center'>
                    <span className='text-[#144b9e] mr-2'>Formal</span>
                    <span className='text-xl text-black'>
                      <BiHappy className='' />
                    </span>
                  </div>
                </label>
              </div>
              <div className='mb-2 border bg-white border-[#E6EDFA] w-full rounded-lg h-10 px-2 flex flex-row justify-between items-center'>
                <label className='flex items-center justify-between w-full h-full cursor-pointer'>
                  <input type='radio' name='formality' value='casual' className='cursor-pointer'></input>
                  <div className='flex items-center'>
                    <span className='text-[#144b9e] mr-2'>Casual</span>
                    <span className='text-xl text-black'>
                      <BiWinkSmile className='' />
                    </span>
                  </div>
                </label>
              </div>
            </div>
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