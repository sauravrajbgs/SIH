import React from 'react'

function PhilatelicResources() {
  return (
    <div className="bg-[#282C4B] w-114xl h-56xl p-3xl flex  items-start justify-start rounded-3xl ">
   <div className=' pt-32'>
   <div className="text-white text-3xl font-bold mb-8 text-left w-full max-w-5xl px-4">
      PHILATELIC VIDEOS AND RESOURCES FOR OUR COMMUNITY
    </div>

    
    <div className="w-full max-w-5xl px-4 mb-8 h-full">
      <button className="bg-white text-indigo-900 py-2 px-4 rounded-full hover:bg-gray-300">
        Explore StamPick
      </button>
    </div>

   </div>
   
 <div>
 <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 w-full max-w-8xl px-4 h-full p-8 ">
      
      <a
        href="https://www.youtube.com/watch?v=example1"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600  overflow-hidden shadow-lg w-full  lg:w-1/3 p-3 rounded-md "
      >
        <img
          src="https://media.gettyimages.com/id/576896452/vector/mysore-palace.jpg?s=612x612&w=0&k=20&c=iQFcjLsvLUyAIj7cCcElWrNbJKeNFLDISyroM07Bq20="  
          alt="Postage Stamp Collection"
          className="w-full h-40 object-cover rounded-md"
        />
        <div className="p-6 text-white">
          <h3 className="text-lg font-bold">My Postage Stamp Collection</h3>
          <p className="mt-2 text-sm">
            A walk through of my postage stamp albums, plus resources for where I get my stamps.
          </p>
        </div>
      </a>

      
      <a
        href="https://www.youtube.com/watch?v=example2"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-black rounded-lg overflow-hidden shadow-lg w-full lg:w-1/3 p-3 "
      >
        <img
          src="https://media.gettyimages.com/id/165790385/vector/india-stamp.jpg?s=612x612&w=0&k=20&c=ktBNJyUT0zA2LmsHdoHwXjR7Pwg9nEjYDNXxs_MmqNU="

          alt="Introduction to Stamp Collecting"
          className="w-full h-40 object-cover"
        />
        <div className="p-6 text-white">
          <h3 className="text-lg font-bold">Introduction to Stamp Collecting</h3>
          <p className="mt-2 text-sm">
            Stamp collecting helps introduce the collector to geography, history, and art. Stamps are miniature gateways to the world.
          </p>
        </div>
      </a>

      
      <a
        href="https://www.youtube.com/watch?v=example3"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-red-600 rounded-lg overflow-hidden shadow-lg w-full lg:w-1/3 p-3 "
      >
        <img
          src="https://as2.ftcdn.net/v2/jpg/05/35/64/57/1000_F_535645774_Exwl4P1KSGBBsWJIhggiJNFRp4nH6Nz5.jpg"  
          alt="Dhara Stamps"
          className="w-full h-40 object-cover"
        />
        <div className="p-6 text-white">
          <h3 className="text-lg font-bold">Dhara Stamps - Online Store</h3>
          <p className="mt-2 text-sm">
            Dhara Stamps is an E-commerce portal for philately products and collectors.
          </p>
        </div>
      </a>
    </div>
 </div>
   
  </div>
  )
}

export default PhilatelicResources