'use client'
import React from 'react'
import { useState } from 'react';

function page() {
    const [emailSent, setEmailSent] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!emailSent) {
        // Simulate sending reset link
        console.log(`Sending password reset link to ${email}`);
        setEmailSent(true);
      } else {
        if (password === confirmPassword) {
          // Simulate password update
          console.log("Password updated successfully");
        } else {
          console.log("Passwords do not match");
        }
      }
    };
  
   

  return (
    <div className="flex h-screen">
    {/* Left section - image */}
    <div className="flex-1 hidden md:flex items-center justify-center bg-gray-100">
      <img
        src="https://as1.ftcdn.net/v2/jpg/09/48/49/10/1000_F_948491028_hT5MoRnZkLn6fpDmlimYVFlE3mOoLoN6.jpg" // Replace with the actual image path
        alt="Stamp Magnifying Glass"
        className="w-full h-full object-cover"
      />
    </div>

    {/* Right section - form */}
    <div className="flex-1 flex items-center justify-center p-6">
      <div className="max-w-md w-full">
        {!emailSent ? (
          <>
            <h2 className="text-2xl font-semibold mb-6">Forgot Password?</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium" htmlFor="email">
                  Enter your email address
                </label>
                <input
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  type="email"
                  placeholder="Example@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-200"
              >
                Send Reset Link
              </button>
            </form>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-semibold mb-6">Reset Your Password</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium" htmlFor="password">
                  New Password
                </label>
                <input
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  type="password"
                  placeholder="At least 8 characters"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium" htmlFor="confirmPassword">
                  Confirm New Password
                </label>
                <input
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  type="password"
                  placeholder="Re-enter new password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-200"
              >
                Update Password
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  </div>
);
}

export default page