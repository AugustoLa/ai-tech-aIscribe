import React from 'react'

import { useNavigate } from 'react-router-dom'


import Translate from '../../../../assets/img/template-img/language.svg'
import Summarize from '../../../../assets/img/template-img/summarize.svg'
import Quote from '../../../../assets/img/template-img/quote.svg'

function ComposeComp() {
    const navigate = useNavigate()

    const sections = [
        {
            title: 'Translate',
            description: "Translate anything including sentences, a 50 page document or an entire book. 25+ languages available",
            img: Translate,
            to: '/template/translate',
        },
        {
            title: 'Rephrase',
            description: 'Paraphrase, expand and compress existing text. Let us say it better for you',
            img: Summarize,
            to: '/template/rephrase',
        },
        {
            title: 'Summarize',
            description: 'Ideal for anyone with no time to read through that really long text. We will give you the 5-10 most important bullets of information from any article, essay, book or piece of content you want summarized',
            img: Quote,
            to: '/template/summarize',
        },
    ]

    return (
        <div className='xl:mt-[13rem] flex flex-col justify-center items-center w-full text-center lg:mt-[5rem] md:mt-[1rem]'>
            <h1 className='font-bold text-xl my-8'>Select a compose template</h1>
            <div className='p-4 grid lg:grid-cols-3 md:grid-cols-2 gap-y-4 sm:grid-cols-1'>
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