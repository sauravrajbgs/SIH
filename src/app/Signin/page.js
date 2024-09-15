import React from 'react'

function page() {
  return (
   <>
   <div className="flex h-screen">
      {/* Left section */}
      <div className="flex-1 hidden md:flex items-center justify-center bg-gray-100">
        <img
          src="https://as1.ftcdn.net/v2/jpg/09/48/49/10/1000_F_948491028_hT5MoRnZkLn6fpDmlimYVFlE3mOoLoN6.jpg" // Replace with actual image path
          alt="Stamp Magnifying Glass"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right section - login form */}
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
                Sign in as a rganisation?
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
   </>
  )
}

export default page 