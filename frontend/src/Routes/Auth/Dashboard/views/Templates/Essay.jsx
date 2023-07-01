import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

import { BiHappyHeartEyes, BiHappy, BiHappyBeaming, BiLaugh, BiWinkTongue, BiWinkSmile } from "react-icons/bi";
import { AiOutlineArrowLeft } from "react-icons/ai";

function Essay() {

    //States
    const [title, setTitle] = useState('');
    const [loading, setLoading] = useState(false)
    const [voiceTone, setVoiceTone] = useState('informal');
    const [keywords, setKeywords] = useState('');
    const [sectionQuantity, setSectionQuantity] = useState('one');
    const [creativityLevel, setCreativityLevel] = useState('creative');
    const [compose, setCompose] = useState([{
        user: 'bot',
        message: ''
    }])
    const [responses, setResponses] = useState({
        title: '',
        message1: '',
        message2: '',
        message3: '',
        message4: '',
    });

    const url = "http://localhost:9000/api"


    const sendTextToAPI = async (text, state) => {
        const message = [
            ...compose,
            { user: 'me', message: text }
        ].map((msg) => msg.message).join('\n');

        try {
            const { data } = await axios.post(url, {
                message: message
            });

            setResponses(prevResponses => ({
                ...prevResponses,
                [state]: data.message
            }));
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    const handleSubmit = async () => {
        setResponses({
            title: '',
            message1: '',
            message2: '',
            message3: '',
            message4: '',
        });

        const titleMessage = `Rewrite the following word with all words in capital letters: ${title}`;
        await sendTextToAPI(titleMessage, 'title');

        const quantity = parseInt(sectionQuantity);

        for (let i = 0; i < quantity; i++) {
            const textMessage = `Generate a cohesive essay with these following keyword: ${keywords}, ${title}. This text should be with a ${voiceTone} voice tone`;
            await sendTextToAPI(textMessage, `message${i + 1}`);
        }
        setLoading(false);
    };



    const navigate = useNavigate()

    const handleNavigate = () => {
        return navigate('/compose-anything')
    }

    return (
        <div className='flex md:flex-row xs:flex-col items-center w-full min-h-full px-6 py-6'>
            <div className='h-[32rem] lg:h-[50rem] md:h-[40rem] w-full lg:w-11/12 flex justify-center mt-6 md:mt-0'>
                <div className='relative drop-shadow-lg px-8 py-8 bg-[#FFFFFF] border border-[59ACFF] rounded-lg w-11/12 overflow-y-auto text-end'>
                    <p className='text-[#48547d] m-2 text-center font-bold text-xl'>
                        {responses.title}
                    </p>
                    <p className='text-[#48547d] m-2 text-md'>
                        {responses.message1}
                    </p>
                    <p className='text-[#48547d] m-2 text-md'>
                        {responses.message2}
                    </p>
                    <p className='text-[#48547d] m-2 text-md'>
                        {responses.message3}
                    </p>
                    <p className='text-[#48547d] m-2 text-md'>
                        {responses.message4}
                    </p>
                </div>
            </div>
            <div className='flex flex-col items-center h-full w-80 text-end xs:mt-5'>
                <div className='w-full'>
                    <div className='flex flex-row justify-between items-center mb-6'>
                        <div className='bg-blue-600/40 hover:bg-blue-400 rounded-full h-5 w-5 justify-center items-center flex'>
                            <AiOutlineArrowLeft onClick={handleNavigate} className='cursor-pointer '></AiOutlineArrowLeft>
                        </div>
                        <span className='pl-2'>Choose Template</span>
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-sm text-[#1d2340] pb-2 font-bold'>Essay Topic</label>
                        <input className='text-sm pl-2 mb-6 border border-[#b8c7e5] bg-white rounded-lg h-12 w-full px-2'
                            type='text' placeholder='ex: The future of education with AI' value={title} onChange={(e) => setTitle(e.target.value)} />
                        <label className='text-sm text-[#1d2340] pb-2 font-bold'>Voice Tone</label>
                        <div className='flex flex-col justify-between mb-2'>
                            <div className='mb-2 border bg-white border-[#E6EDFA] w-full rounded-lg h-10 px-2 flex flex-row justify-between items-center  '>
                                <label className='flex items-center justify-between w-full h-full cursor-pointer'>
                                    <input type='radio' name='formality' value='informal' className='cursor-pointer' onChange={(e) => setVoiceTone(e.target.value)}></input>
                                    <div className='flex items-center'>
                                        <span className='text-[#144b9e] mr-2'>Informal</span>
                                        <span className='text-xl text-black'>
                                            <BiWinkTongue className='' />
                                        </span>
                                    </div>
                                </label>
                            </div>
                            <div className='mb-2 border bg-white border-[#E6EDFA] w-full rounded-lg h-10 px-2 flex flex-row justify-between items-center'>
                                <label className='flex items-center justify-between w-full h-full cursor-pointer'>
                                    <input type='radio' name='formality' value='formal' className='cursor-pointer' onChange={(e) => setVoiceTone(e.target.value)}></input>
                                    <div className='flex items-center'>
                                        <span className='text-[#144b9e] mr-2'>Formal</span>
                                        <span className='text-xl text-black'>
                                            <BiHappy className='' />
                                        </span>
                                    </div>
                                </label>
                            </div>
                            <div className='mb-2 border bg-white border-[#E6EDFA] w-full rounded-lg h-10 px-2 flex flex-row justify-between items-center'>
                                <label className='flex items-center justify-between w-full h-full cursor-pointer'>
                                    <input type='radio' name='formality' value='casual' className='cursor-pointer' onChange={(e) => setVoiceTone(e.target.value)}></input>
                                    <div className='flex items-center'>
                                        <span className='text-[#144b9e] mr-2'>Casual</span>
                                        <span className='text-xl text-black'>
                                            <BiWinkSmile className='' />
                                        </span>
                                    </div>
                                </label>
                            </div>
                        </div>
                        <label className='text-sm text-[#1d2340] pb-2 font-bold'>Keywords</label>
                        <input className='text-sm pl-2 mb-6 border border-[#b8c7e5] bg-white rounded-lg h-12 w-full px-2'
                            type='text' placeholder='ex: AI, education, tech, future, research'></input>
                        <label className='text-sm text-[#1d2340] pb-2 font-bold'>Creativity Level</label>
                        <div className='flex flex-col justify-between mb-2'>
                            <div className='mb-2 border bg-white border-[#E6EDFA] w-full rounded-lg h-10 px-2 flex flex-row justify-between items-center'>
                                <label className='flex items-center justify-between w-full h-full cursor-pointer'>
                                    <input type='radio' name='creativity' value='creative' className='cursor-pointer' onChange={(e) => setCreativityLevel(e.target.value)}></input>
                                    <div className='flex items-center'>
                                        <span className='text-[#144b9e] mr-2'>Creative</span>
                                        <span className='text-xl text-black'>
                                            <BiHappyBeaming className='' />
                                        </span>
                                    </div>
                                </label>
                            </div>
                            <div className='mb-2 border bg-white border-[#E6EDFA] w-full rounded-lg h-10 px-2 flex flex-row justify-between items-center'>
                                <label className='flex items-center justify-between w-full h-full cursor-pointer'>
                                    <input type='radio' name='creativity' value='more-creative' className='cursor-pointer' onChange={(e) => setCreativityLevel(e.target.value)}></input>
                                    <div className='flex items-center'>
                                        <span className='text-[#144b9e] mr-2'>More Creative</span>
                                        <span className='text-xl text-black'>
                                            <BiHappyHeartEyes className='' />
                                        </span>
                                    </div>
                                </label>
                            </div>
                            <div className='mb-6 border bg-white border-[#E6EDFA] w-full rounded-lg h-10 px-2 flex flex-row justify-between items-center'>
                                <label className='flex items-center justify-between w-full h-full cursor-pointer'>
                                    <input type='radio' name='creativity' value='most-creative' className='cursor-pointer' onChange={(e) => setCreativityLevel(e.target.value)}></input>
                                    <div className='flex items-center'>
                                        <span className='text-[#144b9e] mr-2'>Most Creative</span>
                                        <span className='text-xl text-black'>
                                            <BiLaugh className='' />
                                        </span>
                                    </div>
                                </label>
                            </div>
                        </div>
                        <label className='text-sm text-[#1d2340] pb-2 font-bold'>Section Quantity</label>
                        <div className='flex flex-col justify-between mb-2'>
                            <div className='mb-2 border bg-white border-[#E6EDFA] w-full rounded-lg h-10 px-2 flex flex-row justify-between items-center'>
                                <label className='flex items-center justify-between w-full h-full cursor-pointer'>
                                    <input type='radio' name='sections' value='1' className='cursor-pointer' onChange={(e) => setSectionQuantity(e.target.value)}></input>
                                    <div className='flex items-center'>
                                        <span className='text-[#144b9e] mr-2'>1</span>
                                    </div>
                                </label>
                            </div>
                            <div className='mb-2 border bg-white border-[#E6EDFA] w-full rounded-lg h-10 px-2 flex flex-row justify-between items-center'>
                                <label className='flex items-center justify-between w-full h-full cursor-pointer'>
                                    <input type='radio' name='sections' value='2' className='cursor-pointer' onChange={(e) => setSectionQuantity(e.target.value)}></input>
                                    <div className='flex items-center'>
                                        <span className='text-[#144b9e] mr-2'>2</span>
                                    </div>
                                </label>
                            </div>
                            <div className='mb-2 border bg-white border-[#E6EDFA] w-full rounded-lg h-10 px-2 flex flex-row justify-between items-center'>
                                <label className='flex items-center justify-between w-full h-full cursor-pointer'>
                                    <input type='radio' name='sections' value='3' className='cursor-pointer' onChange={(e) => setSectionQuantity(e.target.value)}></input>
                                    <div className='flex items-center'>
                                        <span className='text-[#144b9e] mr-2'>3</span>
                                    </div>
                                </label>
                            </div>
                            <div className='mb-2 border bg-white border-[#E6EDFA] w-full rounded-lg h-10 px-2 flex flex-row justify-between items-center'>
                                <label className='flex items-center justify-between w-full h-full cursor-pointer'>
                                    <input type='radio' name='sections' value='4' className='cursor-pointer' onChange={(e) => setSectionQuantity(e.target.value)}></input>
                                    <div className='flex items-center'>
                                        <span className='text-[#144b9e] mr-2'>4</span>
                                    </div>
                                </label>
                            </div>
                        </div>

                        <div className='w-full'>
                            <button className='flex items-center justify-center bg-[#59acff] w-full h-10 rounded-md' onClick={handleSubmit}>
                                <span className='text-white'>Generate</span>
                            </button>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Essay