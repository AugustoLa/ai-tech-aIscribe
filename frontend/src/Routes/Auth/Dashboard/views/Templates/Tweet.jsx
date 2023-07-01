import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

import { BiHappyHeartEyes, BiHappy, BiHappyBeaming, BiLaugh, BiWinkTongue, BiWinkSmile } from "react-icons/bi";
import { AiOutlineArrowLeft, AiOutlineLoading3Quarters } from 'react-icons/ai';

function Tweet() {
    //States
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false)
    const [voiceTone, setVoiceTone] = useState('');
    const [keywords, setKeywords] = useState('');
    const [creativityLevel, setCreativityLevel] = useState('');
    const [compose, setCompose] = useState([{
        user: 'bot',
        message: ''
    }])
    const [responses, setResponses] = useState({
        post: '',

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
            post: '',
        });
        setLoading(true);

        const textMessage = `Giving the following text: ${message}. Generate a ${voiceTone} tweet with these following keyword: ${keywords}`;
        await sendTextToAPI(textMessage, `post`);
        setLoading(false);
    };


    const navigate = useNavigate()

    const handleNavigate = () => {
        return navigate('/compose-anything')
    }

    return (
        <div className='flex md:flex-row xs:flex-col items-center w-full min-h-full px-6 py-6'>
            <div className='h-[32rem] lg:h-[50rem] md:h-[40rem] w-full lg:w-11/12 flex justify-center mt-6 md:mt-0'>
                <div className='relative drop-shadow-lg px-8 py-8 bg-[#FFFFFF] border border-[59ACFF] rounded-lg w-11/12'>
                    <p className='text-[#48547d] h-[100%]'>
                        <p className='text-[#48547d] m-2 text-center font-bold text-xl'>
                            {responses.post}
                        </p>
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
                        <label className='text-sm text-[#1d2340] pb-2 font-bold'>Tweet Description</label>
                        <input className='text-sm pl-2 mb-6 border border-[#b8c7e5] bg-white rounded-lg h-12 w-full px-2'
                            type='text' placeholder='ex: a tweet about the recent SVB event' value={message} onChange={(e) => setMessage(e.target.value)} />
                        <label className='text-sm text-[#1d2340] pb-2 font-bold'>Voice Tone</label>
                        <div className='flex flex-col justify-between mb-2'>
                            <div className='mb-2 border bg-white border-[#E6EDFA] w-full rounded-lg h-10 px-2 flex flex-row justify-between items-center  '>
                                <label className='flex items-center justify-between w-full h-full cursor-pointer'>
                                    <input type='radio' name='formality' value='informal' onChange={(e) => setVoiceTone(e.target.value)} className='cursor-pointer'></input>
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
                                    <input type='radio' name='formality' value='formal' onChange={(e) => setVoiceTone(e.target.value)} className='cursor-pointer'></input>
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
                                    <input type='radio' name='formality' value='casual' onChange={(e) => setVoiceTone(e.target.value)} className='cursor-pointer'></input>
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
                            type='text' placeholder='banking, tech, finance' value={keywords} onChange={(e) => setKeywords(e.target.value)} ></input>
                        <label className='text-sm text-[#1d2340] pb-2 font-bold'>Creativity Level</label>
                        <div className='flex flex-col justify-between mb-2'>
                            <div className='mb-2 border bg-white border-[#E6EDFA] w-full rounded-lg h-10 px-2 flex flex-row justify-between items-center'>
                                <label className='flex items-center justify-between w-full h-full cursor-pointer'>
                                    <input type='radio' name='creativity' value='creative' onChange={(e) => setCreativityLevel(e.target.value)} className='cursor-pointer'></input>
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
                                    <input type='radio' name='creativity' value='more-creative' onChange={(e) => setCreativityLevel(e.target.value)} className='cursor-pointer'></input>
                                    <div className='flex items-center'>
                                        <span className='text-[#144b9e] mr-2'>More Creative</span>
                                        <span className='text-xl text-black'>
                                            <BiHappyHeartEyes className='' />
                                        </span>
                                    </div>
                                </label>
                            </div>
                            <div className='mb-2 border bg-white border-[#E6EDFA] w-full rounded-lg h-10 px-2 flex flex-row justify-between items-center'>
                                <label className='flex items-center justify-between w-full h-full cursor-pointer'>
                                    <input type='radio' name='creativity' value='most-creative' onChange={(e) => setCreativityLevel(e.target.value)} className='cursor-pointer'></input>
                                    <div className='flex items-center'>
                                        <span className='text-[#144b9e] mr-2'>Most Creative</span>
                                        <span className='text-xl text-black'>
                                            <BiLaugh className='' />
                                        </span>
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className='w-full'>
                            <button
                                className={`flex items-center justify-center bg-blue-500 w-full h-10 rounded-md ${!voiceTone || !message || !creativityLevel || !keywords ? 'opacity-50 cursor-not-allowed' : ''}`}
                                onClick={handleSubmit}
                                disabled={!voiceTone || !message || !creativityLevel || !keywords}
                            >
                                {loading ? (
                                    <>
                                        <AiOutlineLoading3Quarters className="animate-spin mx-2"></AiOutlineLoading3Quarters>
                                        <span className="text-white">Loading...</span>
                                    </>
                                ) : (
                                    <>
                                        <span className="text-white">Generate</span>
                                    </>
                                )}
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Tweet