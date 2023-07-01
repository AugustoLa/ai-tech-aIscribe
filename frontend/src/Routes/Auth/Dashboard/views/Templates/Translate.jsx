import React, { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

import { AiOutlineArrowLeft, AiOutlineLoading3Quarters } from 'react-icons/ai';



function Translate() {

  const [message, setMessage] = useState('');
  const [language, setLanguage] = useState('');
  const [loading, setLoading] = useState(false)
  const [compose, setCompose] = useState([{
    user: 'bot',
    message: ''
  }])
  const [responses, setResponses] = useState({
    translate: '',
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
      translate: '',
    });
    setLoading(true);

    const textMessage = `Translate to ${language} the follwing text: ${message}`;
    await sendTextToAPI(textMessage, `translate`);
    setLoading(false);
  };

  const navigate = useNavigate()

  const handleNavigate = () => {
    return navigate('/transform-text')
  }


  return (
    <div className='flex md:flex-row xs:flex-col items-center w-full min-h-full px-6 py-6'>
      <div className='h-[32rem] lg:h-[50rem] md:h-[40rem] w-full lg:w-11/12 flex justify-center mt-6 md:mt-0'>
        <div className='relative drop-shadow-lg px-8 py-8 bg-[#FFFFFF] border border-[59ACFF] rounded-lg w-11/12 text-end overflow-y-auto'>
          <p className='text-[#48547d] h-[100%]'>
            {responses.translate.split('\n').map((line, index) => (
              <p key={index} className='text-[#48547d] mb-1'>
                {line}
              </p>
            ))}
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
            <label className='text-sm text-[#1d2340] pb-2 font-bold'>Text to Translate</label>
            <textarea className='py-2 h-48 text-sm pl-2 mb-6 border border-[#b8c7e5] bg-white rounded-lg w-full px-2'
              placeholder='translate text here' value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
            <label className='text-sm text-[#1d2340] pb-2 font-bold'>Language</label>
            <input className='text-sm pl-2 mb-6 border border-[#b8c7e5] bg-white rounded-lg h-12 w-full px-2'
              type='text' placeholder='ex: Spanish' value={language} onChange={(e) => setLanguage(e.target.value)} />
            <div className='w-full'>
              <button
                className={`flex items-center justify-center bg-blue-500 w-full h-10 rounded-md ${!message || !language ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={handleSubmit}
                disabled={!message || !language}
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

export default Translate