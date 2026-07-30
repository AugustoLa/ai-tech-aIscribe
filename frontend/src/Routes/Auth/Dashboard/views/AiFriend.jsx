import React, { useState } from 'react';
import axios from 'axios'
import Friend from '../../../../assets/img/aifriend.png';

function AiFriend() {
    //States
    const [inputMsg, setInputMsg] = useState('')
    const [loading, setLoading] = useState(false)
    const [chatMsg, setChatMsg] = useState([{
        user: 'bot',
        message: 'How can i help you?'
    }])

    const url = "http://localhost:9000/api"
    //HandleSubmit
    const handleSubmit = async () => {
        setLoading(true)
        setInputMsg('');
        let newMessage = [...chatMsg, { user: 'me', message: `${inputMsg}` }];
        setChatMsg(newMessage)
        const message = newMessage.map((msg) => msg.message).join('\n')
        try {
            const { data } = await axios.post(url, {
                message: message
            })
            setChatMsg([...newMessage, { user: 'bot', message: `${data.message}` }])
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }
    //onKeyDown
    const onKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            e.stopPropagation()
            handleSubmit()
        }
    }

    //clear chat 

    const clearChat = () => {
        setChatMsg([])
    }

    //HandleScrolling
    return (
        <div className='flex flex-col justify-center items-center h-full md:border-2 border-black'>
            <img
                src={Friend}
                className='rounded-full my-4 mx-auto h-40 w-40 mb-5'
            />
            <div className='overflow-y-auto max-w-[1150px] w-full'>
                {chatMsg.map((message, index) => {
                    return (
                        <div className={`flex flex-col w-full my-2 max-w-[1150px] ${message.user === 'me' ? 'items-end' : 'items-start'}`}>
                            <div key={index}>
                                {message.user === 'me' ? (
                                    <div className='bg-gray-200 rounded-md m-2 mx-auto p-2 text-gray-700 font-semibold text-xl'>
                                        {message.message}
                                    </div>
                                ) : (
                                    <div className='bg-blue-200 rounded-md m-2 mx-auto p-2 text-gray-700 font-semibold text-xl'>
                                        {message.message}
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>


            <div className='max-w-[1200px] w-full flex flex-row items-center justify-center'>
                <input
                    className='xl:max-w-[1150px] lg:max-w-[800px] md:max-w-[500px] w-full mx-auto my-3 p-4 rounded-xl bg-gray-100 shadow-2xl'
                    value={inputMsg} onChange={(e) => setInputMsg(e.target.value)}
                    onKeyDown={onKeyDown}
                />
            </div>
            <div className='flex'>
                <a onClick={clearChat} className='m-2 bg-blue-800 rounded-lg cursor-pointer p-4'>Clear</a>
                {
                    loading ? 'GPT Typing...' :
                        <a onClick={handleSubmit} className='m-2 bg-blue-800 rounded-lg cursor-pointer p-4'>Send</a>
                }
            </div>
        </div>
    );
}

export default AiFriend;
