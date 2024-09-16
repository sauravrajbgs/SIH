'use client';

import React, { useState } from 'react';
import { createPortal } from 'react-dom';

export const usePopup = () => {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  const togglePopUp = () => {
    setIsPopUpOpen(!isPopUpOpen);
  };

  return { isPopUpOpen, togglePopUp };
};

export const Popup = ({ isPopUpOpen, togglePopUp, children }) => {
  if (!isPopUpOpen) return null;


  return createPortal(
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[99999]"
      style={{ zIndex: 99999, position: 'fixed' }}
    >
      <div className="relative flex flex-col space-y-1 w-[55vw] md:h-[100vh] h-[80vh] overflow-auto p-6 shadow-lg">
        {/* Popup content */}
        <div className="bg-[#191c1e] relative w-auto md:max-h-[85vh] max-h-[60vh] overflow-auto p-6 scrollbar-hide mt-8">
        <div onClick={togglePopUp} className="cursor-pointer w-full flex justify-end">
          {/* Close button */}
          <img src="/images/cross.svg" alt="Close" className='fixed'/>
        </div>
          <div>{children}</div>
        </div>
      </div>
    </div>,
    document.body
  );
};
