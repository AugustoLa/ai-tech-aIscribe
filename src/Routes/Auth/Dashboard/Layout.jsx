import React, { useState } from 'react'
import { useLocation, Route, Routes } from "react-router-dom";
import { Link } from 'react-router-dom'


import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { BiChevronRight } from 'react-icons/bi'
import { AiOutlineBulb, AiOutlineContainer, AiOutlineAlignRight } from 'react-icons/ai'
import { FaRobot } from 'react-icons/fa'


import AiFriend from './views/AiFriend'
import BetterEmail from './views/BetterEmail'
import ComposeAnything from './views/Compose/ComposeAnything'
import TransformText from './views/TransformText'


function Layout() {

    const [open, setOpen] = useState(false)

    const handleBar = () => {
        setOpen(!open)
    }

    const Menus = [
        {
            title: "Ai Friend",
            src: <FaRobot />,
            to: '/aifriend'
        },
        {
            title: "Compose Anything",
            src: <AiOutlineBulb />,
            to: 'compose-anything'
        },
        {
            title: "Transform Text",
            src: <AiOutlineContainer />,
            to: 'transform-text'
        },
        {
            title: "Write Better Email ",
            src: <AiOutlineAlignRight />,
            to: 'better-email'
        },
        {
            title: "Need Help?",
            src: '',
            to: '',
            gap: true,
        },
        {
            title: "Change Plan",
            src: '',
            to: ''
        },
    ];
    return (
        <div onClick={() => {
            handleBar()
        }} className={`flex`}>
            <div className="h-screen flex-1 p-7">
                <Routes>
                    <Route exact path="" element={<AiFriend />} />
                    <Route exact path="better-email" element={<BetterEmail />} />
                    <Route exact path="compose-anything" element={<ComposeAnything />} />
                    <Route exact path="transform-text" element={<TransformText />} />
                </Routes>
            </div>
            <div className={`hidden md:block w-60 duration-500 h-screen bg-gray-100 border border-l-gray-900 border-b-gray-900 relative`}>
                <h1 className={`text-center text-2xl font-bold text-[#00df9a] m-4`}>Alscribe.</h1>
                <ul className='pt-6'>
                    {Menus.map((menu, index) => (
                        <Link to={menu.to}>
                            <li className={` mx-2 gap-x-1 text-sm flex items-center p-2 hover:bg-blue-300/50 rounded-md 
                            border border-gray-700/40 ${menu.gap ? "mt-[50vh]" : "mt-2"}`} key={index}>
                                <p className='mr-auto text-blue-800 text-xl border-f p-2  bg-gray-900/10  rounded-md'>{menu.src}</p>
                                <span className='ml-auto text-gray-500 font-semibold'>
                                    {menu.title}
                                </span>
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
            <div onClick={handleBar} className='absolute m-2 md:hidden'>
                {open ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
            <div className={`${open ? 'fixed right-0 top-0 w-[40%] bg-gray-100 h-full border border-l-gray-900 ease-in-out duration-500' : 'fixed left-[-100%]'} md:hidden`}>
                <h1 className={`text-center text-2xl font-bold text-[#00df9a] m-4`}>Alscribe.</h1>
                <ul className='pt-6'>
                    {Menus.map((menu, index) => (
                        <Link to={menu.to}>
                            <li className={` mx-2 gap-x-1 text-sm flex items-center p-2 hover:bg-blue-300/50 rounded-md ${menu.gap ? "mt-[50vh]" : "mt-2"}`} key={index}>
                                <p className='mr-auto text-blue-800 text-xl border-f p-2  bg-gray-900/10  rounded-md'>{menu.src}</p>
                                <span className='ml-auto text-gray-500 font-semibold'>
                                    {menu.title}
                                </span>
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>

        </div>
    )
}

export default Layout