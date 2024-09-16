import React from 'react'

function Footers() {        
  return (
    <footer class="bg-[#191C1F] text-gray-400 py-10">
  <div class="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
   
    <div>
      <h3 class="text-white mb-4">Stay in the loop</h3>
      <div class="flex">
        <input
          type="email"
          placeholder="Your e-mail"
          class="p-2 w-full rounded-l bg-gray-800 text-white placeholder-gray-500 focus:outline-none"
        />
        <button class="p-2 bg-gray-700 rounded-r text-white hover:bg-gray-600">
          →
        </button>
      </div>
    </div>

  
    <div>
      <h3 class="text-white mb-4">Marketplace</h3>
      <ul>
        <li class="mb-2">
          <a href="#" class="hover:text-white">Explore</a>
        </li>
        <li class="mb-2">
          <a href="#" class="hover:text-white">Blog</a>
        </li>
        <li class="mb-2">
          <a href="#" class="hover:text-white flex items-center">
            Jobs <span class="bg-gray-600 text-xs text-white ml-2 px-2 py-1 rounded">We're hiring!</span>
          </a>
        </li>
        <li class="mb-2">
          <a href="#" class="hover:text-white">Help center</a>
        </li>
      </ul>
    </div>

   
    <div>
      <h3 class="text-white mb-4">Links</h3>
      <ul>
        <li class="mb-2">
          <a href="#" class="hover:text-white">Stampick API</a>
        </li>
        <li class="mb-2">
          <a href="#" class="hover:text-white">Bug bounty</a>
        </li>
        <li class="mb-2">
          <a href="#" class="hover:text-white">Become a partner</a>
        </li>
      </ul>
    </div>

    
    <div>
      <h3 class="text-white mb-4">Join us</h3>
      <ul>
        <li class="mb-2">
          <a href="#" class="hover:text-white">X</a>
        </li>
        <li class="mb-2">
          <a href="#" class="hover:text-white">Instagram</a>
        </li>
        <li class="mb-2">
          <a href="#" class="hover:text-white">Discord</a>
        </li>
        <li class="mb-2">
          <a href="#" class="hover:text-white">Farcaster</a>
        </li>
      </ul>
    </div>
  </div>

  <div class="border-t border-gray-700 mt-8 pt-4">
    <div class="container mx-auto flex flex-col md:flex-row justify-between text-gray-500">
      <p>© Stampick, Inc.</p>
      <div class="flex space-x-4">
        <a href="#" class="hover:text-white">Community guidelines</a>
        <a href="#" class="hover:text-white">Terms</a>
        <a href="#" class="hover:text-white">Privacy policy</a>
      </div>
    </div>
  </div>
</footer>
  )
}

export default Footers