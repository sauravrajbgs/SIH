'use client'
import React from 'react'
import SearchBar from './SearchBar'
import Link from 'next/link';
import { Popup, usePopup } from '@/components/ui/popup';

function Navbar() {
  const { isPopUpOpen, togglePopUp } = usePopup();
  const items = [
    "Collections",
    "Stamp 1",
    "Stamp 2",
    "Stamp 3",
    "User 1",
    "User 2",
    "User 3",
  ];

  const user = {
    name: 'John Doe',
    image: 'https://randomuser.me/api/portraits/men/75.jpg', // Online profile image
  };

  return (
    <>
      {/* Popup Component */}
      <Popup isPopUpOpen={isPopUpOpen} togglePopUp={togglePopUp}>
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="relative flex flex-col md:flex-row w-[95vw] md:w-[60vw] bg-white shadow-2xl mx-auto overflow-hidden transform transition-all duration-300 scale-100">
            {/* Close Button (X) */}
            <button
              onClick={togglePopUp}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Left Side: Image Section */}
            <div className="hidden md:flex md:w-1/2 bg-white items-center justify-center ml-4">
              <img
                src="https://as1.ftcdn.net/v2/jpg/09/48/49/10/1000_F_948491028_hT5MoRnZkLn6fpDmlimYVFlE3mOoLoN6.jpg"
                alt="Stamp Magnifying Glass"
                className="object-cover w-[90%] h-[90%] rounded-lg"
              />
            </div>

            {/* Right Side: Form Section */}
            <div className="flex-1 p-8 mr-2 mt-2">
              <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Sign In</h2>
              <form className="space-y-5">
                
                {/* Email Input */}
                <div>
                  <label className="block mb-2 text-md font-medium text-gray-700" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="w-full px-4 py-3 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    type="email"
                    placeholder="Example@email.com"
                  />
                </div>

                {/* Password Input */}
                <div>
                  <label className="block mb-2 text-md font-medium text-gray-700" htmlFor="password">
                    Password
                  </label>
                  <input
                    className="w-full px-4 py-3 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    type="password"
                    placeholder="At least 8 characters"
                  />
                </div>

                {/* Password and Account Links */}
                <div className="flex justify-between items-center text-sm">
                  <a href="/ForgetPassword" className="text-indigo-600 hover:underline">
                    Forgot Password?
                  </a>
                  <a href="/createaccount" className="text-indigo-600 hover:underline ">
                    Create Account?
                  </a>
                </div>

                {/* Sign in Button */}
                <button className="w-full bg-[#0d2e48] text-white py-3 rounded-lg hover:bg-[#12324e] transition duration-200 text-lg font-semibold">
                  Sign In
                </button>

                {/* Sign in as Organisation */}
                <a href="/createaccount" className="text-indigo-600 text-md hover:underline text-center font-semibold block mt-4">
                  Sign In as an Organisation?
                </a>
              </form>

  {/* Or Divider */}
  <div className="flex items-center my-6">
    <div className="flex-grow border-t border-gray-300"></div>
    <span className="text-md text-gray-800 mx-4">Or</span>
    <div className="flex-grow border-t border-gray-300"></div>
  </div>

  {/* Google Sign in Button */}
  <button className="w-full flex items-center justify-center text-gray-900 font-semibold bg-white border border-gray-300 py-3 rounded-md hover:bg-gray-100 transition duration-200">
    <img
      src="https://img.icons8.com/color/16/000000/google-logo.png"
      alt="Google Icon"
      className="mr-2"
    />
    Sign in with Google
  </button>
</div>

          </div>
        </div>
      </Popup>

      <div className="flex p-3 items-center text-sm justify-between">
        <div className="flex space-x-4 items-center">
          <Link href="/">
            <img src="/images/logo.svg" alt="Logo" />
          </Link>
          <SearchBar items={items} />
          <div className="flex px-6 gap-6 font-medium text-gray-400">
            <a className="cursor-pointer">Virtual Exhibition</a>
            <Link href="/Seller" className="cursor-pointer">
              Sell
            </Link>
            <a className="cursor-pointer">Drop</a>
            <a className="cursor-pointer">Spotlight</a>
          </div>
        </div>

        <div className="flex space-x-4 text-xs text-black font-bold items-center">
          <button
            className="px-3 py-2 rounded-full text-black bg-[#FFFFFF] transition hover:bg-amber-500"
            onClick={togglePopUp}
          >
            SIGN IN
          </button>
          <button className="px-3 py-2 rounded-full bg-[#FAFF02] hover:bg-gray-600 hover:text-white shadow text-black transition">
            SMARTSCAN
          </button>
          <Link href="/Seller">
            <img className="rounded-full w-10" src={user.image} alt="User" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
