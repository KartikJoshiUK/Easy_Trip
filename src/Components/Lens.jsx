import { Typography } from 'antd';
import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';

const Lens = () => {
  const [cameraOn, setCameraOn] = useState(false);
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

  return (
    <div className="bg-gradient-to-r h-full from-teal-400 to-blue-500 p-4 rounded-md text-white flex">
        <div className='relative left-[150px]'>
      <Typography.Title level={3}>Tourist-Lens</Typography.Title>
      
      {cameraOn ? (
        <div className="w-64 h-48 relative">
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
        {cameraOn && (
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md" onClick={captureScreenshot}>
            Capture Screenshot
          </button>
        )}
      </div>
      </div>
      <img src={imgurl} className='h-[200px] w-[250px] rounded-md relative left-[250px] top-11' />
    </div>
  );
};

export default Lens;
