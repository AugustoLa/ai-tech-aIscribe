import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

import { BiHappyHeartEyes, BiHappy, BiHappyBeaming, BiLaugh, BiWinkTongue, BiWinkSmile } from "react-icons/bi";
import { AiOutlineArrowLeft } from "react-icons/ai";

function ShortStory() {

    //States
    const [title, setTitle] = useState('');
    const [loading, setLoading] = useState(false)
    const [voiceTone, setVoiceTone] = useState('informal');
    const [plot, setPlot] = useState('');
    const [creativityLevel, setCreativityLevel] = useState('creative');
    const [compose, setCompose] = useState([{
        user: 'bot',
        message: ''
    }])
    const [responses, setResponses] = useState({
        title: '',
        message: '',
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
            message: '',
        });
        setLoading(true);
        const titleMessage = `Write a capitalized history title given this short plot story: ${plot}.`;
        await sendTextToAPI(titleMessage, 'title');

        const textMessage = `Generate a full history using this short context with a ${voiceTone} voice tone: ${plot}`;
        await sendTextToAPI(textMessage, `message`);
        setLoading(false);
    };

    const navigate = useNavigate()

    const handleNavigate = () => {
        return navigate('/compose-anything')
    }

    return (
        <div className='flex md:flex-row xs:flex-col items-center w-full min-h-full px-6 py-6'>
            <div className='h-[32rem] lg:h-[50rem] md:h-[40rem] w-full lg:w-11/12 flex justify-center mt-6 md:mt-0'>
                <div className='relative drop-shadow-lg px-8 py-8 bg-[#FFFFFF] border border-[59ACFF] rounded-lg w-11/12 overflow-y-auto text-end '>
                    <p className='text-[#48547d] m-2 text-center font-bold text-xl'>
                        {responses.title}
                    </p>
                    <p className='text-[#48547d] m-2 text-md'>
                        {responses.message}
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
                        <label className='text-sm text-[#1d2340] pb-2 font-bold'>Short Story Plot</label>
                        <textarea className='py-2 h-48 text-sm pl-2 mb-6 border border-[#b8c7e5] bg-white rounded-lg w-full px-2'
                            placeholder='Piper who is a normal girl during daytime, but a princess of a magical kingdom in her sleep.
            Write about one of her adventures. Make the story have an important life lesson' value={plot} onChange={(e) => setPlot(e.target.value)}></textarea>
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
                            <div className='mb-2 border bg-white border-[#E6EDFA] w-full rounded-lg h-10 px-2 flex flex-row justify-between items-center'>
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

export default ShortStory