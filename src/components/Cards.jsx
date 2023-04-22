import React from 'react'
import { Link } from 'react-router-dom'

function Cards() {
    return (
        <div className='py-[10rem] px-4 bg-white mx-4 rounded-b-xl'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
                <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 items-center'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src='https://placehold.co/600x400/gray/white' alt='placeholder' />
                    <h2 className='font-bold text-2xl text-center py-8'>TRIAL PACKAGE</h2>
                    <p className='text-center text-4xl font-bold'>FREE</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 mt-8 border-b mx-8'>100 words</p>
                        <p className='py-2 border-b mx-8'>1 Grated User</p>
                        <p className='py-2 border-b mx-8'>Send up 5 archives</p>
                    </div>
                    <Link to=''>
                        <button className='text-[#00df9a] bg-black w-[200px] rounded-md font-medium my-6 mx-auto py-3'>Get Started</button>
                    </Link>
                </div>
                <div className='w-full shadow-xl flex bg-gray-200 flex-col p-4 md:m-0 my-8 rounded-lg hover:scale-105 duration-300 items-center'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src='https://placehold.co/600x400/orange/white' alt='placeholder' />
                    <h2 className='font-bold text-2xl text-center py-8'>OFFICE PACKAGE</h2>
                    <p className='text-center text-4xl font-bold'>$999</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 mt-8 border-b mx-8'>1000 words</p>
                        <p className='py-2 border-b mx-8'>4 Grated User</p>
                        <p className='py-2 border-b mx-8'>Send up 20 archives</p>
                    </div>
                    <Link to=''>
                        <button className='bg-[#00df9a] text-black w-[200px] rounded-md font-medium my-6 mx-auto py-3'>Get Started</button>

                    </Link>
                </div>
                <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 items-center'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src='https://placehold.co/600x400/purple/white' alt='placeholder' />
                    <h2 className='font-bold text-2xl text-center py-8'>ENTERPRISE PACKAGE</h2>
                    <p className='text-center text-4xl font-bold'>$9999</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 mt-8 border-b mx-8'>Unlimited words</p>
                        <p className='py-2 border-b mx-8'>20 Grated User</p>
                        <p className='py-2 border-b mx-8'>Send up unlimited archives</p>
                    </div>
                    <Link to=''>
                        <button className='text-[#00df9a] bg-black w-[200px] rounded-md font-medium my-6 mx-auto py-3'>Get Started</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Cards