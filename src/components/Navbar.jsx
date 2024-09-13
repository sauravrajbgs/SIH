import React from 'react'
import SearchBar from './SearchBar'






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
  return (
    
    <div className='flex  p-3 items-center text-sm justify-between '>
      <div className='flex space-x-4 items-center'>
        <img src="  /images/logo.svg"/>
        <SearchBar items={items}/>
        <div className='flex px-6 gap-6 font-medium text-gray-400'>
          <a className='cursor-pointer'>Virtual Exhibiton</a>
          <a className='cursor-pointer'>Sell</a>
          <a className='cursor-pointer'>Drop</a>
          <a className='cursor-pointer'>Spotlight</a>
        </div>   
        </div>   
        <div className='flex space-x-4 text-xs text-black font-bold'>
            <div className='p-2 rounded-full bg-[#FFFFFF]'>SIGN IN</div>
            <div className='p-2 rounded-full bg-[#FAFF02]'>SMARTSCAN</div>
        </div>
    </div>
    
  )
}

export default Navbar