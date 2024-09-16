import React from 'react'

function Subscribe() {
  return (
    <div className="relative bg-[#1A3A47] text-white py-8 px-6 md:px-10 rounded-lg w-full height-[242px]  mt-5 mx-auto">
      <div className="flex flex-col md:flex-row md:justify-space-around gap-64 md:items-center">
        
        <div className="mb-6 md:mb-0 text-left">
          <h2 className="text-2xl font-bold">Stay in the loop</h2>
          <p className="text-lg">Get the latest insights</p>
        </div>

        
        <div className="max-w-lg w-full">
          <form className="flex gap-4 ">
            <input
              type="email"
              placeholder="Your e-mail"
              className="py-[15.96px]  rounded-[16px] px-[15px] w-[418px] h-[48px] bg-gray-800 text-gray-300 placeholder-gray-400 focus:outline-none"
            />
            <button
              type="submit"
              className= " text-black py-[9px] px-[19px] bg-white w-[100px] h-[48px]  rounded-[16px] border-[1px] font-semibold hover:bg-gray-200"
            >
              Sign up
            </button>
          </form>
          <p className="text-gray-400 text-sm mt-4">
            By clicking send youll receive occasional emails from Stampick. You
            always have the choice to unsubscribe within every email you receive.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Subscribe