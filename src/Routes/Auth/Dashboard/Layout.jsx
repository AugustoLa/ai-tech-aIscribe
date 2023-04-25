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
        <div className='flex'>
            <div className="h-screen flex-1 p-7">
                <Routes>
                    <Route exact path="" element={<AiFriend />} />
                    <Route exact path="better-email" element={<BetterEmail />} />
                    <Route exact path="compose-anything" element={<ComposeAnything />} />
                    <Route exact path="transform-text" element={<TransformText />} />
                </Routes>
            </div>
            <div className={`hidden md:block 'w-60' duration-500 h-screen bg-gray-400 border-l-gray-500 border  relative`}>
                <h1 className={`text-center text-2xl font-bold text-[#00df9a] m-4`}>Alscribe.</h1>
                <ul className={`pt-6 flex flex-col items-end`}>
                    {Menus.map((menu, index) => (
                        <Link to={menu.to}>
                            <li className={` text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-100/10 rounded-md ${menu.gap ? "mt-[60vh]" : "mt-2"}`} key={index}>
                                <span className={`origin-left duration-200`}>
                                    {menu.title}
                                </span>
                                <p>{menu.src}</p>
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
            <div onClick={handleBar} className='absolute m-4 md:hidden'>
                {open ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
            <div className={`${open ? 'fixed right-0 top-0 w-[40%] bg-gray-400 h-full border border-l-gray-900 ease-in-out duration-500' : 'fixed left-[-100%]'} md:hidden`}>
                <h1 className={`${!open && 'text-sm'} text-center text-2xl font-bold text-[#00df9a] m-4`}>Alscribe.</h1>
                <ul className={`pt-6 flex flex-col items-end ${!open && 'items-center'}`}>
                    {Menus.map((menu, index) => (
                        <Link to={menu.to}>
                            <li className={` text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-100/10 rounded-md ${menu.gap ? "mt-[60vh]" : "mt-2"}`} key={index}>
                                <span className={`${!open && "hidden"} origin-left duration-200`}>
                                    {menu.title}
                                </span>
                                <p>{menu.src}</p>
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>

        </div>
    )
}

export default Layout