// Brandbutton.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Brandbutton = ({ buttons }) => {
  const navigate = useNavigate();

  const handleClick = (destination) => {
    // Navigate to the specified destination
    navigate(destination);
  };

  return (
    <>
    <div className=''>
      <h1 className='text-3xl font-bold'>Car <span className='text-sky-400'>Brand</span> </h1>
    </div>
    <div style={{ display: "flex", flexDirection: "row" }}>
      
      {buttons.map((button, index) => (
        <button
          key={index}
          className="text-sm border border-solid bg-sky-400 text-white py-3 h-8 rounded-md flex-col items-center justify-center hover:bg-white hover:text-sky-400 my-14" // Modified classes
          style={{ width: "150px", display: "flex",flexDirection:"row",justifyContent:"center" }} // Adjusted style
          onClick={() => handleClick(button.destination)}
        >
          {button.label}
        </button>
      ))}
    </div>
    </>
    
  );
};

export default Brandbutton;
