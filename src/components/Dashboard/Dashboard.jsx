
import React, { useState } from "react";

function Dashboard() {

  
  return (
<<<<<<< HEAD
    <div class="isolate  px-3  bg-white  w-full ">
 <div className='mx-auto max-w-2xl text-center m-3'>
       <h2 class="text-3xl font-bold tracking-tight text-black sm:text-4xl">Personal Information</h2>
    </div>
    <form action="#" method="POST" class="mx-auto mt-8 max-w-xl sm:mt-4">
    <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 mt-4">
      <div>
        <label for="first-name" class="block text-sm font-semibold leading-6 text-black">First name</label>
        <div class="mt-2.5">
          <input type="text" name="first-name" id="first-name" autocomplete="given-name" className=" bg-none block w-full rounded-md border-0 px-3.5 py-2 text-white-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div>
        <label for="last-name" class="block text-sm font-semibold leading-6 text-gray-900">Last name</label>
        <div class="mt-2.5">
          <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <h2 className=" text-sm font-semibold leading-6 text-black block mt-1">Select Your Gender</h2>

{/* Gender Selection */}
<div className="flex flex-wrap gap-2 mt-2">
  <label className="flex items-center">
    <input
      type="radio"
      name="gender"
      value="Male"
      
      
      className="mr-2"
    />
    Male
  </label>

  <label className="flex items-center">
    <input
      type="radio"
      name="gender"
      value="Female"
     
      
      className="mr-2"
    />
    Female
  </label>
</div>
      
      <div class="sm:col-span-2 mt-0">
        <label for="email" class="block text-sm font-semibold leading-6 text-gray-900">Email</label>
        <div class="mt-1">
          <input type="email" name="email" id="email" autocomplete="email" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div class="sm:col-span-2">
        <label for="phone-number" class="block text-sm font-semibold leading-6 text-gray-900">Phone number</label>
        <div class="relative mt-2.5">
          <div class="absolute inset-y-0 left-0 flex items-center">
            <label for="country" class="sr-only">Country</label>
            <select id="country" name="country" class="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
              <option>US</option>
              <option>CA</option>
              <option>EU</option>
              <option>IND+91</option>
            </select>
            {/* <svg class="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
            </svg> */}
          </div>
          <input type="tel" name="phone-number" id="phone-number" autocomplete="tel" class="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div class="sm:col-span-2 ">
      <div className="max-w-4xl mx-auto p-6 mt-0">
      <h2 className="text-2xl font-bold mt-0">FAQs</h2>

      {/* FAQ Items */}
      <div className="space-y-4">
        {/* FAQ 1 */}
        <div>
          <h3 className="font-medium text-md">
            What happens when I update my email address (or mobile number)?
          </h3>
          <p className="text-gray-700 mt-0 text-sm">
            Your login email id (or mobile number) changes, likewise. You'll receive all your account related communication on your updated email address (or mobile number).
          </p>
        </div>

        {/* FAQ 2 */}
        <div>
          <h3 className="font-medium text-md">
            When will my Flipkart account be updated with the new email address (or mobile number)?
          </h3>
          <p className="text-gray-700 mt-0 text-sm">
            It happens as soon as you confirm the verification code sent to your email (or mobile) and save the changes.
          </p>
        </div>
        </div>

        {/* Action Links */}
      <div className="mt-8">
        <a
          href="#"
          className="text-blue-600 hover:underline mr-4"
        >
          Deactivate Account
        </a>
        <a
          href="#"
          className="text-red-500 hover:underline"
        >
          Delete Account
        </a>
      </div>

      {/* Optional: Bottom graphic
      <div className="mt-12">
        {/* You can use an image or SVG here for the graphic similar to what Flipkart has */}
       
      
    </div> 
    
        
      </div>
    </div>
    
  </form>
    </div>
   
=======
    <div>Hello</div>
>>>>>>> 6e29d623ce0ccad5c2b51724009768bebe8e1e32
  )
}

export default Dashboard