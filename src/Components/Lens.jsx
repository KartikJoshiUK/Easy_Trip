import { Typography } from 'antd';
import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';

const Lens = () => {
  const [cameraOn, setCameraOn] = useState(false);
  const [info, setInfo] = useState("");
  
  const webcamRef = useRef(null);
  const [imgurl,setimgurl] = useState(null);
  const toggleCamera = () => {
    setCameraOn((prevCameraOn) => !prevCameraOn);
  };

  const captureScreenshot = () => {
    const screenshot = webcamRef.current.getScreenshot();
    console.log('Screenshot:', screenshot);
    setimgurl(screenshot)
  };

  const API_KEY = "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";
  const handle=async(prompt)=>{
    const apiRequestBody = {
        "model": "gpt-3.5-turbo",
        "messages": [
       { role: 'assistant', content: prompt} // The messages from our chat with ChatGPT
        ]
      }
    
    await fetch("https://api.openai.com/v1/chat/completions", 
    {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + API_KEY,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(apiRequestBody)
    }).then((data) => {
      return data.json();
    }).then((data) => {
      const content = data.choices[0].message.content;
      setInfo(content)
      console.log(content);
      console.log(data);
    });

  }


const getResult = async() => {
const url = `https://real-time-lens-data.p.rapidapi.com/search?url=${imgurl}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'afee9d604emsh533255d244a3bd2p1726f3jsne9cd529742ef',
		'X-RapidAPI-Host': 'real-time-lens-data.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options); 
	const result = await response.json();
  const title = result.data.searched_object.detections[0].label;
	console.log(title);
  await handle(title)
} catch (error) {
	console.error(error);
}
  
}

  return (
    <div className='flex'>
      <div className="w-1/2 bg-gradient-to-r from-teal-400 to-blue-500 p-4 rounded-md text-white flex h-screen items-center justify-center flex-col">
        <div className=' p6'>
    
      
      {cameraOn ? (
        <div className="w-64 h-48">
          <Webcam audio={false} ref={webcamRef} screenshotFormat="image/png" mirrored={true} />
        </div>
      ) : (
        <div className="w-64 h-48 bg-gray-300 flex justify-center items-center rounded-md">
          <p className="text-gray-500">Camera is off</p>
        </div>
      )}
      <p className="text-lg mt-4 color-red-500">Capture and share special moments with Lens!</p>
      <div className="flex mt-4">
        <button
          className={`bg-${cameraOn ? 'red' : 'green'}-500 hover:bg-${cameraOn ? 'red' : 'green'}-600 text-white py-2 px-4 rounded-md mr-2`}
          onClick={toggleCamera}
        >
          {cameraOn ? 'Turn Off Camera' : 'Turn On Camera'}
        </button>
        {cameraOn && (<>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md" onClick={captureScreenshot}>
            Capture Screenshot
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md" onClick={()=>{
            const url = `https://real-time-lens-data.p.rapidapi.com/search?url=${imgurl}`;
            console.log(imgurl);
          }}>
            Search
          </button>
          </>
        )}
      </div>
          <img src={imgurl} className='h-[200px] w-[250px] rounded-md top-11' />
      </div>
    </div>
    <div>{info}</div>
    </div>
  );
};

export default Lens;
