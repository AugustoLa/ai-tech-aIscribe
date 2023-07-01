import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AiOutlineArrowLeft, AiOutlineLoading3Quarters } from 'react-icons/ai';

function JobDescription() {
  // States
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [require, setRequire] = useState('');
  const [detail, setDetail] = useState('');
  const [compose, setCompose] = useState([
    {
      user: 'bot',
      message: '',
    },
  ]);
  const [responses, setResponses] = useState({
    message: '',
  });

  const url = 'http://localhost:9000/api';

  const sendTextToAPI = async (text, state) => {
    const message = [
      ...compose,
      { user: 'me', message: text },
    ]
      .map((msg) => msg.message)
      .join('\n');

    try {
      const { data } = await axios.post(url, {
        message: message,
      });

      setResponses((prevResponses) => ({
        ...prevResponses,
        [state]: data.message,
      }));
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleSubmit = async () => {
    if (name && position && require && detail) {
      setLoading(true);
      setResponses({
        message: '',
      });

      const jobDesc = `You are making a job description. The job description should have the company name '${name}', 
      position title '${position}', requirements '${require}' and some offer details ${detail} `;
      await sendTextToAPI(jobDesc, 'message');
      setLoading(false);
    }
  };

  const navigate = useNavigate();

  const handleNavigate = () => {
    return navigate('/compose-anything');
  };

  return (
    <div className="flex md:flex-row xs:flex-col items-center w-full min-h-full px-6 py-6">
      <div className="h-[32rem] lg:h-[50rem] md:h-[40rem] w-full lg:w-11/12 flex justify-center mt-6 md:mt-0">
        <div className="relative drop-shadow-lg px-8 py-8 bg-white border border-blue-500 rounded-lg w-11/12 text-end overflow-y-auto">
          {responses.message.split('\n').map((line, index) => (
            <p key={index} className="text-blue-900 mb-1">
              {line}
            </p>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center h-full w-80 text-end xs:mt-5">
        <div className="w-full">
          <div className="flex flex-row justify-between items-center mb-6">
            <div className="bg-blue-600/40 hover:bg-blue-400 rounded-full h-5 w-5 justify-center items-center flex">
              <AiOutlineArrowLeft onClick={handleNavigate} className="cursor-pointer"></AiOutlineArrowLeft>
            </div>
            <span className="pl-2">Choose Template</span>
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-blue-900 pb-2 font-bold">Company Name</label>
            <input
              className="text-sm pl-2 mb-6 border border-blue-300 bg-white rounded-lg h-12 w-full px-2"
              type="text"
              placeholder="ex: Alscribe"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label className="text-sm text-blue-900 pb-2 font-bold">Position Title</label>
            <input
              className="text-sm pl-2 mb-6 border border-blue-300 bg-white rounded-lg h-12 w-full px-2"
              type="text"
              placeholder="ex: software engineer"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            />
            <label className="text-sm text-blue-900 pb-2 font-bold">Requirements</label>
            <textarea
              className="py-2 h-48 text-sm pl-2 mb-6 border border-blue-300 bg-white rounded-lg w-full px-2"
              placeholder="ex: list of requirements"
              value={require}
              onChange={(e) => setRequire(e.target.value)}
            ></textarea>
            <label className="text-sm text-blue-900 pb-2 font-bold">Offer Details</label>
            <textarea
              className="py-2 h-48 text-sm pl-2 mb-6 border border-blue-300 bg-white rounded-lg w-full px-2"
              placeholder="ex: benefits, salary, etc"
              value={detail}
              onChange={(e) => setDetail(e.target.value)}
            ></textarea>
            <div className="w-full">
              <button
                className={`flex items-center justify-center bg-blue-500 w-full h-10 rounded-md ${!name || !position || !require || !detail ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={handleSubmit}
                disabled={!name || !position || !require || !detail}
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
  );
}

export default JobDescription;