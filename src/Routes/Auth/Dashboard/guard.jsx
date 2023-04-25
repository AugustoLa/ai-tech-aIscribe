<div className='flex'>
<div className="h-screen flex-1 p-7">
    <Routes>
        <Route exact path="" element={<AiFriend />} />
        <Route exact path="better-email" element={<BetterEmail />} />
        <Route exact path="compose-anything" element={<ComposeAnything />} />
        <Route exact path="transform-text" element={<TransformText />} />
    </Routes>
</div>
<div onClick={handleBar} className='block md:hidden'>
    {sideBar ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
</div>
<div className={`${open ? 'w-60' : 'w-20'} duration-500 h-screen bg-gray-400 border-left relative `}>
    <h1 className={`${!open && 'text-sm'} text-center text-2xl font-bold text-[#00df9a] m-4`}>Alscribe.</h1>
    <BiChevronRight onClick={() => setOpen(!open)} className={`${!open && 'rotate-180'} absolute cursor-pointer h-7 -left-3 rounded-full top-9 w-7 border-2 bg-white`} />
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