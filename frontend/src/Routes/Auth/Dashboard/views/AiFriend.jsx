import React, { useState } from 'react';
import Friend from '../../../../assets/img/aifriend.png';

function AiFriend() {
    const [messages, setMessages] = useState([
        { type: 'answer', text: "Hi, my name's Lorem, how can I help you?" },
        { type: 'question', text: "Who is Elon Musk" }
    ]);

    const handleInputChange = (event) => {
        if (event.key === 'Enter') {
            const inputValue = event.target.value;
            const newMessage = { type: 'question', text: inputValue };

            setMessages([...messages, newMessage]);
            event.target.value = '';
        }
    };

    return (
        <div className='flex flex-col justify-center items-center h-full md:border-2 border-black'>
            <div className='w-full flex flex-col justify-center max-w-[1200px] rounded-lg m-4 p-4 overflow-y-auto'>
                <img
                    src={Friend}
                    className='rounded-full my-4 mx-auto h-40 w-40 mb-5'
                />
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`${message.type === 'question'
                            ? 'text-end bg-gray-200 rounded-md'
                            : 'text-start'
                            } ${message.type === 'answer' ? 'bg-blue-200 rounded-md' : ''} w-full m-2 mx-auto p-2 text-gray-700 font-semibold text-xl`}
                    >
                        {message.text}
                    </div>
                ))}
            </div>
            <input
                className='xl:max-w-[1150px] lg:max-w-[800px] md:max-w-[500px] w-full mx-auto my-3 p-4 rounded-xl bg-gray-100 shadow-2xl'
                onKeyDown={handleInputChange}
            />
        </div>
    );
}

export default AiFriend;
