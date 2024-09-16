import React from 'react';

const Footer = () => {
  return (
    <footer className="text-gray-400 py-4">
      <div className="container mx-auto flex justify-center">
        
        {/* Left Side - Company Name */}
        <div className="text-sm mr-10">
          © StamPick Inc.
        </div>

        {/* Center - Links */}
        <div className='flex flex-col'>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="hover:text-gray-200">Community guidelines</a>
            <a href="#" className="hover:text-gray-200">Terms</a>
            <a href="#" className="hover:text-gray-200">Privacy policy</a>
          </div>
          {/* Dark Mode Toggle */}
          <div className="relative m-5 flex justify-center mr-32">
            <button className="bg-gray-800 text-gray-300 px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-gray-800 hover:text-white">
              <img src='/images/moon.svg'/>
              <span>Dark</span>
              <img src='/images/dropdown.svg' />
            </button>
          </div>
        </div>

        
      </div>
    </footer>
  );
};

export default Footer;
