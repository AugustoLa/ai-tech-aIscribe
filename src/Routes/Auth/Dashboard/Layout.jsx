import React, { useState } from 'react'
import { Outlet } from "react-router-dom";
import { Link } from 'react-router-dom'


import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { AiOutlineBulb, AiOutlineContainer, AiOutlineAlignRight, AiOutlinePhone, AiOutlineRobot, AiOutlineShop } from 'react-icons/ai'
import { AiOutlineArrowLeft } from "react-icons/ai";




function Layout() {

    const [open, setOpen] = useState(false);

    const handleBar = () => {
        setOpen(!open);
    }

    const handleClose = () => {
        if (open) {
            setOpen(false)
        }
    }


    const Menus = [
        {
            title: "Ai Friend",
            src: <AiOutlineRobot />,
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
            title: "See all templates ",
            src: <AiOutlineArrowLeft />,
            to: '/template/all-templates'
        },

        {
            title: "free plan",
            description: 'words to go',
            words: 370 + '/' + 1000,
            progress: '37',
            gap: true
        },
    

        {
            title: "Need Help?",
            src: <AiOutlinePhone />,
            to: '',
            gap: true,
        },
        {
            title: "Change Plan",
            src: <AiOutlineShop />,
            to: ''
        },
    ];
    return (
        <div className={`flex`} onClick={handleClose}  >
            <div className="h-screen flex-1 p-7">
                <Outlet></Outlet>
            </div>
            <div className={`hidden md:block w-60 duration-500 h-screen bg-gray-100 border border-l-gray-900 border-b-gray-900 relative`}>
                <h1 className={`text-center text-2xl font-bold text-black m-4`}>Alscribe.</h1>
                <ul className='pt-6'>
                    {Menus.map((menu, index) => {              
                        if (index === 4) {
                            return (
                                <Link to={menu.to}>
                                <li className={` mx-2 gap-x-1 text-sm flex items-center p-2 ${menu.gap ? "mt-[20vh]" : "mt-2"}`} key={index}>
                                    <p className='mr-auto text-blue-600 text-xl p-2 hover:text-blue-800'>{menu.src}</p>
                                    <span className='ml-auto text-blue-600 hover:text-blue-800'>
                                        {menu.title}
                                    </span>
                                </li>
                            </Link>
                            );
                        } if (index === 5) {
                            return (
                                <li className={`mx-2 text-sm flex flex-col items-end h-[5rem] p-2 rounded-md border border-gray-700/40  ${menu.gap ? "mt-[15vh]" : "mt-2"}`} key={index}>
                                    <span className='text-gray-500 font-semibold'>
                                        {menu.title}
                                    </span>
                                    <div>
                                        <span className='text-gray-500 mr-1'>{menu.words}</span>
                                        <span className='text-gray-500'>{menu.description}</span>
                                    </div>
                                    <div class="w-full bg-gray-200 mt-1 rounded-full h-1.5 rotate-180">
                                        <div class="bg-blue-600 h-1.5 rounded-full" style={{ width: `${menu.progress}%` }}></div>
                                    </div>
                                </li>
                            );
                        } else {
                            return (
                                <Link to={menu.to}>
                                    <li className={` mx-2 gap-x-1 text-sm flex items-center p-2 hover:bg-blue-300/50 rounded-md border border-gray-700/40
                 ${menu.gap ? "mt-[18vh]" : "mt-2"}`} key={index}>
                                        <p className='mr-auto text-blue-800 text-xl border-f p-2  bg-gray-900/10  rounded-md'>{menu.src}</p>
                                        <span className='ml-auto text-gray-500 font-semibold'>
                                            {menu.title}
                                        </span>
                                    </li>
                                </Link>
                            );
                        }

                        
                    })}
                </ul>
            </div>
            <div className='absolute m-2 md:hidden' onClick={handleBar}>
                {open ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
            <div className={`${open ? 'fixed right-0 top-0 w-[40%] bg-gray-100 h-full border border-l-gray-900 ease-in-out duration-500 overflow-auto ' : 'fixed left-[-100%]'} md:hidden`}>
                <h1 className={`text-center text-2xl font-bold text-black m-4`}>Alscribe.</h1>
                <ul className='pt-6'>
                    {Menus.map((menu, index) => {
                        if (index === 4) {
                            return (
                                <Link to={menu.to}>
                                <li className={` mx-2 gap-x-1 text-sm flex items-center p-2 ${menu.gap ? "mt-[20vh]" : "mt-2"}`} key={index}>
                                    <p className='mr-auto text-blue-600 text-xl p-2 hover:text-blue-800'>{menu.src}</p>
                                    <span className='ml-auto text-blue-600 hover:text-blue-800'>
                                        {menu.title}
                                    </span>
                                </li>
                            </Link>
                            )
                        }
                        if (index === 5) {
                            return (
                                <li className={`mx-2 text-sm flex flex-col items-end h-[5rem] p-2 rounded-md border border-gray-700/40  ${menu.gap ? "mt-[2vh]" : "mt-2"}`} key={index}>
                                    <span className='text-gray-500 font-semibold'>
                                        {menu.title}
                                    </span>
                                    <div>
                                        <span className='text-gray-500 mr-1'>{menu.words}</span>
                                        <span className='text-gray-500'>{menu.description}</span>
                                    </div>
                                    <div class="w-full bg-gray-200 mt-1 rounded-full h-1.5">
                                        <div class="bg-blue-600 h-1.5 rounded-full" style={{ width: `${menu.progress}%` }}></div>
                                    </div>
                                </li>
                            );
                        } else {
                            return (
                                <Link to={menu.to}>
                                    <li className={` mx-2 gap-x-1 text-sm flex items-center p-2 hover:bg-blue-300/50 rounded-md border border-gray-700/40
                 ${menu.gap ? "mt-[7vh]" : "mt-2"}`} key={index}>
                                        <p className='mr-auto text-blue-800 text-xl border-f p-2  bg-gray-900/10  rounded-md'>{menu.src}</p>
                                        <span className='ml-auto text-gray-500 font-semibold'>
                                            {menu.title}
                                        </span>
                                    </li>
                                </Link>
                            );
                        }
                    })}
                </ul>
            </div>

        </div>
    )
}

export default Layout