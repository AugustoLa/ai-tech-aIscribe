import React from 'react'

function Card() {
  return (
    <div className='w=full bg-white py-16 px-4 rounded-t-xl mx-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>

        <div className='flex flex-col justify-center md:ml-4'>
          <p className='text-[#00df9a] uppercase font-bold'>
            Lorem ipsum dolor sit amet.
          </p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            Placeholder
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At, architecto impedit. Minima neque ab tenetur nisi molestias eum, veritatis unde, eaque assumenda, in laboriosam. Quo recusandae quasi sit laborum libero!
          </p>
        </div>
        <img className='w-[500px] mx-auto py-4'
          src="https://placehold.co/600x400" alt='placeholder'></img>
        <hr className='md:hidden h-px my-10 border-0 bg-black' />
        <img className='w-[500px] mx-auto py-4'
          src="https://placehold.co/600x400/000000/FFF" alt='placeholder'></img>
        <div className='flex flex-col justify-center md:ml-4'>
          <p className='text-[#00df9a] uppercase font-bold'>
            Lorem ipsum dolor sit amet.
          </p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            Placeholder
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At, architecto impedit. Minima neque ab tenetur nisi molestias eum, veritatis unde, eaque assumenda, in laboriosam. Quo recusandae quasi sit laborum libero!
          </p>

        </div>
      </div>
      <hr className='h-px mt-10 border-0 bg-black' />
    </div>
  )
}

export default Card