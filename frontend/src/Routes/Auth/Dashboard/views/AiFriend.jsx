import React from 'react'

function AiFriend() {

    return (
        <div className='flex flex-col justify-center items-center h-full'>
            <div className='w-full flex flex-col justify-center bg-slate-400 max-w-[1200px] max-h-[800px] rounded-lg m-4 p-4'>
                <img src='https://picsum.photos/200/300' className='rounded-full my-4 mx-auto h-40 w-40 mb-5 border-4 hover:border-dotted border-blue-500 ' />
                <p className='text-start w-full rounded-md bg-slate-200 m-4 mx-auto p-4 text-gray-900 font-bold text-xl'>
                    Hi, my name's Lorem, how can i help you?
                </p>
                <p className='text-end w-full m-4 mx-auto p-4 text-gray-700 font-semibold text-xl'>
                    Hello Lorem
                </p>
                <input className='max-w-[1150px] w-full mx-auto my-3 p-4 rounded-xl bg-gray-100 shadow-2xl'></input>
            </div>

        </div>
    )
}

export default AiFriend