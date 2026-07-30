import React from 'react'

import { useNavigate } from 'react-router-dom'



// Compose Anything

import BlogComposer from '../../../../../assets/img/template-img/blog-comp.svg'
import Blog from '../../../../../assets/img/template-img/blog.svg'
import ContentList from '../../../../../assets/img/template-img/list.svg'
import Essay from '../../../../../assets/img/template-img/document.svg'
import Job from '../../../../../assets/img/template-img/job.svg'
import Instagram from '../../../../../assets/img/template-img/instagram.svg'
import Story from '../../../../../assets/img/template-img/story.svg'
import Twitter from '../../../../../assets/img/template-img/twitter.svg'

// Better email

import Email from '../../../../../assets/img/template-img/email.svg'
import ColdEmail from '../../../../../assets/img/template-img/cold-email.svg'

// Transform text

import Translate from '../../../../../assets/img/template-img/language.svg'
import Summarize from '../../../../../assets/img/template-img/summarize.svg'
import Quote from '../../../../../assets/img/template-img/quote.svg'




function ComposeComp() {
    const navigate = useNavigate()

    const sections = [

        // Transform text

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

        // Better Email

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

        // Compose Anything

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
        <div className='xl:mt-[2rem] flex flex-col items-center w-full text-center md:mt-[1rem]'>
            <h1 className='font-bold text-xl my-8'>Select a compose template</h1>
            <div className='p-4 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-4 sm:grid-cols-1'>
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