import React from 'react'

function ComposeComp() {

    const sections = [
        {
            title: 'Blog Composer',
            description: "Ideal for marketers and reporters. Create long form blogposts and articles for SEO, website blogs, media articles and more. Put your SEO on autopilot and pump out content faster than ever before",
            img: '',
            to: '',
        },
        {
            title: 'Short Story',
            description: 'End writer block by creating short stories with a simple prompt. Useful for writers or to create night time stories for the kids',
            img: '',
            to: '',
        },
        {
            title: 'Blog Section',
            description: 'Write an individual section for an article or blogpost',
            img: '',
            to: '',
        },
        {
            title: 'Essay',
            description: 'Get inspired with essays of any length written entirely from a simple prompt',
            img: '',
            to: '',
        },
        {
            title: 'Job Description',
            description: 'Useful for people in HR: Create a job description in seconds for any role, end the back and forth between manager and the people team',
            img: '',
            to: '',
        },
        {
            title: 'Instagram Caption',
            description: 'Can’t put words to a photo? Create Instagram captions by simply giving crear.ai the image you are posting and a simple prompt',
            img: '',
            to: '',
        },
        {
            title: 'Content List',
            description: 'Make quick listicles out of a simple title. How about 7 ways to write better content?',
            img: '',
            to: '',
        },
        {
            title: 'Tweet Composer',
            description: 'Your Twitter ghostwriter is finally here. Tell us what you want to tweet about and we’ll make the tweets in seconds',
            img: '',
            to: '',
        },
    ]

    return (
        <div className='justify-center lg:ml-4 items-center w-full text-center md:mt-[13rem]'>
            <h1 className='font-bold text-xl my-8'>Select a compose template</h1>
            <div className='p-4 border grid lg:grid-cols-4 md:grid-cols-2 gap-y-4 sm:grid-cols-1'>
                {sections.map((infos) => {
                    return (
                        <div className='border rounded-md bg-gray-100 text-end shadow-2xl md:max-w-[20rem] mx-2'>
                            <div className='mx-2 my-4'>
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