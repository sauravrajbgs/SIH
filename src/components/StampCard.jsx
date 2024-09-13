// components/StampCard.js
import React from 'react';

const StampCard = ({ stamp }) => {
  return (
    <div className='bg-[#191C1E] p-2 border border-gray-300 border-opacity-10 rounded-md flex flex-col items-center space-y-4 text-sm'>
    <div className="bg-[#222528] text-white rounded-md flex  w-full justify-center">
      <img
        src={stamp.image}
        alt={stamp.name}
        className="h-52"
      />
    </div>
      
        <h3 className=" font-semibold mb-2">{stamp.name}</h3>
        <div className="flex justify-between items-center text-xs text-gray-300 font- mb-2 opacity-70 bg-[#222528] w-full px-4 py-1 rounded-md">
            <div className='flex flex-col space-y-1'>
          <span>Minting: </span><span className='font-semibold text-white opacity-100'>{stamp.minting}</span>
          </div>
          <div className='flex flex-col space-y-1'>
          <span className="">Price:</span><span className='opacity-100 text-white'> Rs. {stamp.price}</span>
          </div>
        </div>
      </div>
   
  );
};

export default StampCard;
