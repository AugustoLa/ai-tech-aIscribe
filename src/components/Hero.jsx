import React from 'react'
import Typed from 'react-typed'

function Hero() {
    return (
        <div className='text-white'>
            <div className='max-w-[800px] mx-auto text-center justify-center flex flex-col mt-[-96px] w-full h-screen'>
                <p className='text-[#00df9a] font-bold p-2'>GROWING WITH AI-GPT ANALYTICS</p>
                <h1 className='md:text7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow Grow independently.</h1>
                <div className='flex justify-center items-center'>
                    <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
                        GROW WITH AI
                    </p>
                    <Typed
                        className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
                        strings={['TWEETS', 'TEXTS', 'RESUME']} typeSpeed={120} backSpeed={140} loop />
                </div>
                <p className='md:text-2xl text-xl font-bold text-gray-500'>Monitor your networks, increase your bids, lorem ipsum etc</p>
                <button className='bg-[#00df9a] text-black w-[200px] rounded-md font-medium my-6 mx-auto py-3'>Get Started</button>
            </div>
        </div>
    )
}

export default Hero