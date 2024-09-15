import React from 'react'
import SearchBar from './SearchBar'
import Link from 'next/link';





function Navbar() {
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
    
    <div className='flex  p-3 items-center text-sm justify-between '>
      <div className='flex space-x-4 items-center'>
        <img src="  /images/logo.svg"/>
        <SearchBar items={items}/>
        <div className='flex px-6 gap-6 font-medium text-gray-400'>
          <a className='cursor-pointer'>Virtual Exhibiton</a>
          <Link href='/Seller' className='cursor-pointer'>Sell</Link>
          <a className='cursor-pointer'>Drop</a>
          <a className='cursor-pointer'>Spotlight</a>
        </div>   
        </div>   
        <div className='flex space-x-4 text-xs text-black font-bold'>
        <Link href='/Signin'><button className='p-2 rounded-full text-black bg-[#FFFFFF]'>SIGN IN</button></Link> 
        <Link href='/AiScan'> <button className='p-2 rounded-full  bg-[#dadb72]'>SMARTSCAN</button></Link> 
        <Link href='/SidebarDemo'> 
        <img className='rounded-full w-10' src={user.image}/>
       </Link>
        </div>
    </div>
    
  )
}

export default Navbar