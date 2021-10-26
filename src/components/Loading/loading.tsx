import React from 'react';
import Lottie from 'react-lottie';
import animationData from "./loadingAssest.json";

export default function App() {
  const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };
  
  return (
    <div>
      <Lottie 
	    options={defaultOptions}
        height={400}
        width={400}
        style={{color: 'white'}}
      />
    </div>
  );
}