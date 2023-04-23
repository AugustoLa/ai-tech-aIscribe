import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BiChevronRight } from 'react-icons/bi'
import { AiOutlineBulb, AiOutlineContainer, AiOutlineAlignRight } from 'react-icons/ai'
import { FaRobot } from 'react-icons/fa'

function Sidebar() {
    const [open, setOpen] = useState(true)
    const Menus = [
        { title: "Ai Friend", src: <FaRobot />, to: '/aifriend' },
        { title: "Compose Anything", src: <AiOutlineBulb />, to: 'compose' },
        { title: "Transform Text", src: <AiOutlineContainer />, to: 'transform' },
        { title: "Write Better Email ", src: <AiOutlineAlignRight />, to: 'betteremail' },
        { title: "Need Help?", src: '', to: '', gap: true, },
        { title: "Change current Alscribe Plan ", src: '', to: '' },
    ];
    return (
        <div className={`${open ? 'w-72' : 'w-20'} duration-500 h-screen bg-black relative text-end `}>
            <h1 className={`${!open && 'text-sm'} text-center text-2xl font-bold text-[#00df9a] m-4`}>Alscribe.</h1>
            <BiChevronRight onClick={() => setOpen(!open)} className={`${!open && 'rotate-180'} absolute cursor-pointer h-7 -left-3 rounded-full top-9 w-7 border-2 bg-white`} />
            <ul className='pt-6'>
                {Menus.map((menu, index) => (
                    <Link to={menu.to}>
                        <li className={`text-white text-end text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-100/10 rounded-md ${menu.gap ? "mt-9" : "mt-2"}`} key={index}>
                            <p>{menu.src}</p>
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                                {menu.title}
                            </span>
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    )
}

export default Sidebar