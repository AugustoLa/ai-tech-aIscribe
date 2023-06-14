import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import loginImg from '../assets/img/bg-login-image.jpg';

function Register() {
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const navigate = useNavigate();
    const onSubmit = () => {
        navigate('/aifriend');
    };
    const formConfig = {
        date: {
            required: 'Date is required',
        },
        email: {
            required: 'Email is required',
            pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Invalid email address',
            },
        },
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
            <div className='relative w-full h-screen bg-zinc-900/90'>
                <img
                    className='absolute w-full h-full object-cover mix-blend-overlay'
                    src={loginImg}></img>
                <section className='flex flex-col justify-center items-center h-full relative'>
                    <form
                        className='max-w-[400px] w-full mx-auto p-4 rounded-xl bg-gray-100'
                        onSubmit={handleSubmit(onSubmit)}>
                        <h1 className='font-bold text-center text-4xl py-4'>
                            REGISTER
                        </h1>
                        <div className='flex flex-col mb-4'>
                            <label
                                htmlFor='date'
                                className='text-end'>
                                Date of birth
                            </label>
                            <input
                                type='date'
                                id='date'
                                name='date'
                                className={`bg-gray-200 border p-2 ${errors.date &&
                                    'focus:border-red-500 focus:ring-red-500 border-red-500'
                                    }`}
                                {...register('date', formConfig.date)}
                            />
                            {errors.birthdate && (
                                <span className='text-red-500'>
                                    {errors.birthdate.message}
                                </span>
                            )}
                        </div>
                        <div className='flex flex-col mb-4'>
                            <label
                                htmlFor='email'
                                className='text-end'>
                                Email
                            </label>
                            <input
                                type='email'
                                id='email'
                                name='email'
                                className={`bg-gray-200 border p-2 ${errors.email &&
                                    'focus:border-red-500 focus:ring-red-500 border-red-500'
                                    }`}
                                {...register('email', formConfig.email)}
                            />
                            {errors.email && (
                                <span className='text-red-500'>
                                    {errors.email.message}
                                </span>
                            )}
                        </div>
                        <div className='flex flex-col mb-4'>
                            <label
                                htmlFor='username'
                                className='text-end'>
                                Username
                            </label>
                            <input
                                type='text'
                                id='username'
                                name='username'
                                className={`bg-gray-200 border p-2 ${errors.username &&
                                    'focus:border-red-500 focus:ring-red-500 border-red-500'
                                    }`}
                                {...register('username', formConfig.username)}
                            />
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
                                    }`}
                                type='password'
                                name='password'
                                {...register('password', formConfig.password)}
                            />
                            {errors.password && (
                                <span className='text-red-500'>
                                    {errors.password.message}
                                </span>
                            )}
                        </div>
                        <button className='w-full py-3 mt-8 bg-[#00df9a] rounded-sm font-medium hover:bg-[#44ad9a] '>
                            Sign Up
                        </button>
                        <p className='text-center mt-8'>
                            Already a member?{' '}
                            <Link
                                to='/login'
                                className='text-[#00df9a] hover:text-[#44ad9a]'>
                                Login now
                            </Link>
                        </p>
                    </form>
                </section>
            </div>
        </>
    );
}

export default Register;
