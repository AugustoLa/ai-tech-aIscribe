import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import { AiFillFacebook } from 'react-icons/ai'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import loginImg from '../assets/img/bg-login-image.jpg'




function Login() {

    const navigate = useNavigate()

    const handleLogin = () => {
        return navigate('/aifriend')
    }

    return (
        <>
            <Navbar></Navbar>
            <div className='relative w-full h-screen bg-zinc-900/90'>
                <img className='absolute w-full h-full object-cover mix-blend-overlay' src={loginImg}></img>
                <div className='flex justify-center items-center h-full relative'>
                    <form className='max-w-[400px] w-full mx-auto p-4 rounded-xl bg-gray-100'>
                        <h2 className='text-4xl font-bold py-8 text-center'>ALSCRIBE.</h2>
                        <div className='flex justify-between py-8'>
                            <Link to='https://www.facebook.com/'>
                                <p className='border shadow-lg hover:shadow-xl px-6 py-2  flex items-center'><AiFillFacebook className='mr-2' />Facebook</p>
                            </Link>
                            <Link to='https://www.google.com/'>
                                <p className='border shadow-lg hover:shadow-xl px-6 py-2  flex items-center'><FcGoogle className='mr-2' />Google</p>
                            </Link>
                        </div>
                        <div className='flex flex-col mb-4'>
                            <label className='text-end'>Username</label>
                            <input className='border  bg-gray-200 p-2' type='text'></input>
                        </div>
                        <div className='flex flex-col'>
                            <label className='text-end'>Password</label>
                            <input className='border  bg-gray-200 p-2' type='password'></input>
                        </div>
                        <button onClick={handleLogin} className='w-full py-3 mt-8 bg-[#00df9a] rounded-sm font-medium hover:bg-[#44ad9a] '>Sign In</button>
                        <p className='flex items-cend justify-end mt-2'>Remember me <input className='ml-1' type="checkbox" /></p>
                        <p className='text-center mt-8'>Not a member? <Link to='' className='text-[#00df9a] hover:text-[#44ad9a]'>Sign up now</Link></p>
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default Login