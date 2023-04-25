import React from 'react'

function AiFriend() {

    return (
        <div className='flex flex-col justify-center items-center h-full'>
            <img src='https://picsum.photos/200/300' className='rounded-full h-40 w-40 mb-5 border-4 hover:border-dotted border-[#00df9a] ' />
            <span className='mb-4 text-white font-bold text-xl'>Hi, my name's Lorem</span>
            <input className='max-w-[500px] w-full mx-auto p-4 rounded-xl bg-gray-100'></input>
        </div>
    )
}

export default AiFriend