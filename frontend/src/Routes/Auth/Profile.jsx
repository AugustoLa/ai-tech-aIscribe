import React from 'react'
import AdminBar from '../../components/AdminBar'

function Profile() {

    const user =
    {
        username: "Joseph Banner",
        email: "joseph_banner@gmail.com",
        birth: '04/05/1999',
    }

    return (
        <>
            <AdminBar></AdminBar>
            <div className='h-[95vh] w-full flex items-center justify-center'>
                <div className='flex flex-col items-center justify-center'>
                    <img src='https://picsum.photos/200/300' className='rounded-[4rem] h-60 w-60' />
                    <p className='font-bold text-2xl my-3'>{user.username}</p>
                    <p className='text-xl'>{user.email}</p>
                    <button className='bg-blue-500 w-[15rem] h-[3rem] my-3 rounded-xl'>Change Password</button>
                </div>
            </div>
        </>
    )
}

export default Profile