import React from 'react'
import { Link } from 'react-router-dom'

import { AiOutlineRobot } from 'react-icons/ai'
import { BiLogOut } from "react-icons/bi"
import { CgUserList } from 'react-icons/cg'


function AdminBar() {
    return (
        <>
            <div className='bg-blue-500 flex flex-row items-center justify-between h-[5vh] w-full'>
                <div className='flex flex-row m-3'>
                    <Link to=''>
                        <p className='text-xl p-2  bg-gray-300/10 rounded-md'><BiLogOut /></p>
                    </Link>
                </div>
                <div className='flex flex-row m-3'>
                    <Link to='/aifriend'>
                        <p className=' text-xl p-2  bg-gray-300/10 rounded-md'><AiOutlineRobot /></p>
                    </Link>
                    <Link to='/profile'>
                        <p className='ml-4 text-xl p-2  bg-gray-300/10 rounded-md'><CgUserList /></p>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default AdminBar