import React from 'react'

function Card() {

  const holderInfos = [
    {
      info: 'First info title',
      title: 'Placeholder',
      src: 'https://placehold.co/600x400',
      text: 'lorem'
    },
    {
      info: 'Second info title',
      title: 'Placeholder',
      src: 'https://placehold.co/600x400',
      text: 'lorem'
    },
  ]
  return (
    <div className='w=full bg-white py-16 px-4 rounded-t-xl mx-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        {holderInfos.map((infos, index) => {
          return (
            <div className='flex flex-col justify-center md:mr-4 text-end'>
              <p key={index} className={`text-blue-400 uppercase font-bold ${index === 0 ? '' : ''}`}>{infos.info}</p>
              <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
                {infos.title}
              </h1>
              <p className=''>
                lorem
              </p>
              <img className='w-[500px] mx-auto py-4'
                src={infos.src} alt='placeholder'></img>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Card