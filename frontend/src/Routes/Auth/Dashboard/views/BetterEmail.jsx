import React from 'react'

import { useNavigate } from 'react-router-dom'

import Email from '../../../../assets/img/template-img/email.svg'
import ColdEmail from '../../../../assets/img/template-img/cold-email.svg'

function ComposeComp() {
  const navigate = useNavigate()

  const sections = [
    {
      title: 'Email Responder',
      description: "Tell crear.ai what email you need to respond to and a rough idea of what you want to say. We’ll give you a professional response in seconds",
      img: Email,
      to: '/template/email-responder',
    },
    {
      title: 'Cold Email',
      description: 'Ideal for sales teams. Send cold emails faster without losing conversion. This template allows you to reach out to anyone from any company.',
      img: ColdEmail,
      to: '/template/cold-email',
    },
  ]

  return (
    <div className='xl:mt-[13rem] flex flex-col items-center w-full text-center lg:mt-[5rem] md:mt-[1rem]'>
      <h1 className='font-bold text-xl my-8'>Select a compose template</h1>
      <div className='p-4 grid md:grid-cols-2 gap-y-4 sm:grid-cols-1'>
        {sections.map((infos) => {
          return (
            <div onClick={() => navigate(infos.to)} className='items- rounded-md bg-gray-100 text-end shadow-2xl md:max-h-[20rem] md:min-h-[15rem] md:max-w-[20rem] mx-2'>
              <div className='mx-2 py-3 flex flex-col items-end'>
                <img className='h-10 rounded-2xl p-2 bg-blue-400/60' src={infos.img}></img>
                <h2 className=' text-xl font-semibold text-gray-700'>{infos.title}</h2>
                <p className=' text-gray-500'>{infos.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ComposeComp