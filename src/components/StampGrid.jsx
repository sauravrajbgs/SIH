// components/StampGrid.js
import React from 'react';
import StampCard from './StampCard';

const StampGrid = ({ stamps }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
      {stamps.map((stamp, index) => (
        <StampCard key={index} stamp={stamp} />
      ))}
    </div>
  );
};

export default StampGrid;
