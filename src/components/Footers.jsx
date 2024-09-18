import React from 'react';

function Footers() {
  return (
    <footer className="bg-[#191C1F] text-gray-400 py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-white mb-4">Stay in the loop</h3>
          <div className="flex">
            <input
              type="email"
              placeholder="Your e-mail"
              className="p-2 w-full rounded-l bg-gray-800 text-white placeholder-gray-500 focus:outline-none"
            />
            <button className="p-2 bg-gray-700 rounded-r text-white hover:bg-gray-600">
              →
            </button>
          </div>
        </div>

        <div>
          <h3 className="text-white mb-4">Marketplace</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:text-white">Explore</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-white">Blog</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-white flex items-center">
                Jobs
                <span className="bg-gray-600 text-xs text-white ml-2 px-2 py-1 rounded">We&apos;re hiring!</span>
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-white">Help center</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white mb-4">Links</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:text-white">Stampick API</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-white">Bug bounty</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-white">Become a partner</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white mb-4">Join us</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:text-white">X</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-white">Instagram</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-white">Discord</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-white">Farcaster</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between text-gray-500">
          <p>© Stampick, Inc.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white">Community guidelines</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Privacy policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footers;
