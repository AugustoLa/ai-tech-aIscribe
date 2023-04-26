import React from 'react'

import { useNavigate } from 'react-router-dom'


import BlogComposer from '../../../../assets/img/blog-comp.svg'
import Story from '../../../../assets/img/story.svg'
import Blog from '../../../../assets/img/blog.svg'
import Essay from '../../../../assets/img/document.svg'
import Job from '../../../../assets/img/job.svg'
import Instagram from '../../../../assets/img/instagram.svg'
import ContentList from '../../../../assets/img/list.svg'
import Twitter from '../../../../assets/img/twitter.svg'




function ComposeComp() {
    const navigate = useNavigate()

    const sections = [
        {
            title: 'Blog Composer',
            description: "Ideal for marketers and reporters. Create long form blogposts and articles for SEO, website blogs, media articles and more. Put your SEO on autopilot and pump out content faster than ever before",
            img: BlogComposer,
            to: '/template/blog-composer',
        },
        {
            title: 'Short Story',
            description: 'End writer block by creating short stories with a simple prompt. Useful for writers or to create night time stories for the kids',
            img: Story,
            to: '/template/short-story',
        },
        {
            title: 'Blog Section',
            description: 'Write an individual section for an article or blogpost',
            img: Blog,
            to: '/template/blog-section',
        },
        {
            title: 'Essay',
            description: 'Get inspired with essays of any length written entirely from a simple prompt',
            img: Essay,
            to: '/template/essay',
        },
        {
            title: 'Job Description',
            description: 'Useful for people in HR: Create a job description in seconds for any role, end the back and forth between manager and the people team',
            img: Job,
            to: '/template/job-description',
        },
        {
            title: 'Instagram Caption',
            description: 'Can’t put words to a photo? Create Instagram captions by simply giving crear.ai the image you are posting and a simple prompt',
            img: Instagram,
            to: '/template/instagram-caption',
        },
        {
            title: 'Content List',
            description: 'Make quick listicles out of a simple title. How about 7 ways to write better content?',
            img: ContentList,
            to: '/template/content-list',
        },
        {
            title: 'Tweet Composer',
            description: 'Your Twitter ghostwriter is finally here. Tell us what you want to tweet about and we’ll make the tweets in seconds',
            img: Twitter,
            to: '/template/tweet',
        },
    ]

    return (
        <div className='justify-center lg:ml-4 xl:mt-[13rem]  items-center w-full text-center lg:mt-[5rem] md:mt-[1rem]'>
            <h1 className='font-bold text-xl my-8'>Select a compose template</h1>
            <div className='p-4 grid lg:grid-cols-4 md:grid-cols-2 gap-y-4 sm:grid-cols-1'>
                {sections.map((infos) => {
                    return (
                        <div onClick={() => navigate(infos.to)} className='rounded-md bg-gray-100 text-end items-end shadow-2xl md:max-h-[20rem] md:min-h-[15rem] md:max-w-[20rem] mx-2'>
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