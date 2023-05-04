import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { AiFillFacebook } from 'react-icons/ai';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import loginImg from '../assets/img/bg-login-image.jpg';

function Login() {
    const { register, handleSubmit, formState: { errors }, } = useForm();

    const navigate = useNavigate();
    const onSubmit = () => {
        navigate('/aifriend');
    };
    const formConfig = {
        username: {
            required: 'Username is required',
            minLength: {
                value: 6,
                message: 'Username must be at least 6 characters long',
            },
        },
        password: {
            required: 'Password is required',
            minLength: {
                value: 8,
                message: 'Password must be at least 8 characters long',
            },
        },
    };

    return (
        <>
            <Navbar></Navbar>
            <div className='relative w-full h-screen bg-zinc-900/90'>
                <img
                    className='absolute w-full h-full object-cover mix-blend-overlay'
                    src={loginImg}></img>
                <div className='flex justify-center items-center h-full relative'>
                    <form onSubmit={handleSubmit(onSubmit)} className='max-w-[400px] w-full mx-auto p-4 rounded-xl bg-gray-100'>
                        <h2 className='text-4xl font-bold py-8 text-center'>
                            ALSCRIBE.
                        </h2>
                        <div className='flex justify-between py-8'>
                            <Link to='https://www.facebook.com/'>
                                <p className='border shadow-lg hover:shadow-xl px-6 py-2  flex items-center'>
                                    <AiFillFacebook className='mr-2' />
                                    Facebook
                                </p>
                            </Link>
                            <Link to='https://www.google.com/'>
                                <p className='border shadow-lg hover:shadow-xl px-6 py-2  flex items-center'>
                                    <FcGoogle className='mr-2' />
                                    Google
                                </p>
                            </Link>
                        </div>
                        <div className='flex flex-col mb-4'>
                            <label htmlFor='username' className='text-end'>
                                Username
                            </label>
                            <input type='text' id='username' name='username' className={`bg-gray-200 border p-2 ${errors.username &&
                                'focus:border-red-500 focus:ring-red-500 border-red-500'}`}
                                {...register('username', formConfig.username)} />
                            {errors.username && (
                                <span className='text-red-500'>
                                    {errors.username.message}
                                </span>
                            )}
                        </div>
                        <div className='flex flex-col'>
                            <label
                                htmlFor='password'
                                className='text-end'>
                                Password
                            </label>
                            <input
                                className={`bg-gray-200 border p-2 ${errors.password &&
                                    'focus:border-red-500 focus:ring-red-500 border-red-500'
                                    }`} type='password' name='password'
                                {...register('password', formConfig.password)} />
                            {errors.password && (
                                <span className='text-red-500'>
                                    {errors.password.message}
                                </span>
                            )}
                        </div>
                        <button className='w-full py-3 mt-8 bg-[#00df9a] rounded-sm font-medium hover:bg-[#44ad9a] '>
                            Sign In
                        </button>
                        <p className='flex items-cend justify-end mt-2'>
                            Remember me{' '}
                            <input
                                className='ml-1'
                                type='checkbox'
                            />
                        </p>
                        <p className='text-center mt-8'>
                            Not a member?{' '}
                            <Link
                                to='/register'
                                className='text-[#00df9a] hover:text-[#44ad9a]'>
                                Sign up now
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
}

export default Login;
