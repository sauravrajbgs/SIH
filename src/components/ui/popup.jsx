'use client';

import React, { useState } from 'react';


export const usePopup = () => {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  const togglePopUp = () => {
    setIsPopUpOpen(!isPopUpOpen);
  };

  return { isPopUpOpen, togglePopUp };
};

export const Popup = ({ isPopUpOpen, togglePopUp, children }) => {
  if (!isPopUpOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="flex flex-col space-y-1 max-w-2xl ">
        <div onClick={togglePopUp} className="cursor-pointer w-full flex justify-end ">
        <img src="/images/cross.svg" alt="Close" />
        </div>
        <div className="bg-white relative w-auto md:max-h-[85vh] max-h-[60vh] overflow-auto p-6 ">
          <div className="">{children}</div>
        </div>
      </div>
    </div>
  );
};
