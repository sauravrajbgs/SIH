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
    
    <div className='flex  p-3 items-center text-sm justify-between'>
      <Popup isPopUpOpen={isPopUpOpen} togglePopUp={togglePopUp}>
  


 

   <div className="flex h-screen">
  
      <div className="flex-1 hidden md:flex items-center justify-center bg-gray-100">
        <img
          src="https://as1.ftcdn.net/v2/jpg/09/48/49/10/1000_F_948491028_hT5MoRnZkLn6fpDmlimYVFlE3mOoLoN6.jpg" // Replace with actual image path
          alt="Stamp Magnifying Glass"
          className="w-full h-full object-cover"
        />
      </div>


      <div className="flex-1 flex items-center justify-center p-6">
        <div className="max-w-md w-full">
          <h2 className="text-2xl font-semibold mb-6">Sign in</h2>
          <form>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium" htmlFor="email">
                Email
              </label>
              <input
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                type="email"
                placeholder="Example@email.com"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium" htmlFor="password">
                Password
              </label>
              <input
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                type="password"
                placeholder="At least 8 characters"
              />
            </div>
            <div className="flex justify-between items-center mb-4">
              <a href="/ForgetPassword" className="text-indigo-600 text-sm hover:underline">
                Forgot Password?
              </a>
              <a href="/createaccount" className="text-indigo-600 text-sm hover:underline">
                Create Account?
              </a>
            </div>
            <button className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-200">
              Sign in
            </button>
            <a href="/createaccount" className="text-indigo-600 text-sm hover:underline text-center align-middle">
                Sign in as an Organisation?
              </a>
          </form>
          <div className="my-6 text-center">
            <span className="text-sm text-gray-500">Or</span>
          </div>
          <button className="w-full text-red-500 bg-white border border-gray-300 py-2 rounded-md hover:bg-gray-100 transition duration-200 flex justify-center items-center">
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
      <div className='flex space-x-4 items-center'>
        <Link href='/'>
        <img src="  /images/logo.svg"/>
        </Link>
        <SearchBar items={items}/>
        <div className='flex px-6 gap-6 font-medium text-gray-400'>
          <a className='cursor-pointer'>Virtual Exhibiton</a>
          <Link href='/Seller' className='cursor-pointer'>Sell</Link>
          <a className='cursor-pointer'>Drop</a>
          <a className='cursor-pointer'>Spotlight</a>
        </div>   
        </div>   
        
        <div className='flex space-x-4 text-xs text-black font-bold items-center'>
        <button className=' px-3 py-2 rounded-full text-black bg-[#FFFFFF] transition hover:bg-amber-500 ' onClick={togglePopUp}>SIGN IN</button> 
        <button className=' px-3 py-2 rounded-full  bg-[#FAFF02] hover:bg-gray-600 hover:text-white shadow text-black transition'>SMARTSCAN</button>
        <Link href='/Seller'> 
        <img className='rounded-full w-10' src={user.image}/>
       </Link>

        </div>
        
    </div>
    </>
    
  )
}

export default Navbar