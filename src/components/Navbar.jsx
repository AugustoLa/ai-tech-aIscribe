import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className='text-white items-center flex max-w-[1240px] mx-auto px-4 h-24 justify-between'>
            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
            <div className={nav ? 'fixed right-0 top-0 w-[60%] bg-[#000300] h-full border-r border-r-gray-900 ease-in-out duration-500' : 'fixed left-[-100%]'}>
                <Link to='/'>
                    <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>ALSCRIBE.</h1>
                </Link>
                <ul className='uppercase p-4'>
                    <Link to='/Contact'>
                        <li className='p-4 border-b border-gray-600'>Contact</li>
                    </Link>
                    <Link to='/Company'>
                        <li className='p-4 border-b border-gray-600' >Company</li>
                    </Link>
                    <Link to='/Resources'>
                        <li className='p-4 border-b border-gray-600'>Resources</li>
                    </Link>
                    <Link to='/About'>
                        <li className='p-4 border-b border-gray-600'>About</li>
                    </Link>
                </ul>
            </div>
            <ul className='hidden md:flex'>
                <Link to='/Company'>
                    <li className='p-4'>Company</li>
                </Link>
                <Link to='/Resources'>
                    <li className='p-4'>Resources</li>
                </Link>
                <Link to='/About'>
                    <li className='p-4'>About</li>
                </Link>
                <Link to='/Contact'>
                    <li className='p-4'>Contact</li>
                </Link>
            </ul>
            <Link to='/'>
                <h1 className='text-3xl font-bold text-[#00df9a] m-4'>ALSCRIBE.</h1>
            </Link>
        </div>
    )
}

export default Navbar