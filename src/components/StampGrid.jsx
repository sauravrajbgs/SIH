import React from 'react';
import StampCard from './StampCard';

const StampGrid = ({ stamps }) => {
  return (
    <div className='flex flex-col gap-4 items-center w-full'>
    <div className="grid grid-cols-2 sm:grid-cols-4  gap-7 p-4 px-11 w-full">
      {stamps.map((stamp, index) => (
        <StampCard key={index} stamp={stamp} />
      ))}
    </div>
    
    <div className='p-2 rounded-full bg-[#222528] text-white font-semibold w-4/5 text-center mb-4'>View All Collection ➜</div>
    </div>
  );
};

export default StampGrid;
