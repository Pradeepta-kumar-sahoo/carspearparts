import React from "react";
import video from "./video1.mp4";
// import Navbar from '../Navbar'

const Frontvideo = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <video className="w-auto h-lvh relative" loop muted autoPlay="autoplay"><h1 className="absolute text-3xl text-black">hiiii</h1>
        <source src={video} />
      </video>
      {/* <Navbar/> */}
    </div>
  );
};

export default Frontvideo;
