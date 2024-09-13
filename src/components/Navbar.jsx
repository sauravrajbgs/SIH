import React from 'react'
import Image from 'next/image'
import { Logo } from '@/utils/images'
import { SearchBar } from './SearchBar'

function Navbar() {
  return (
    
    <div className='flex space-x-4 p-3'>
        <img src="  /images/logo.svg"/>
        <SearchBar/>
    </div>
    
  )
}

export default Navbar