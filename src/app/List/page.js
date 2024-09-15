'use client'

import React from 'react'
import { useState } from 'react';
function page() {
    const [items, setItems] = useState([
        { id: 1, 
            
            name:"Indera Gandhi",
            Condition:"Good",
            Category:"Old",
             imageUrl: 'https://as1.ftcdn.net/v2/jpg/00/31/52/46/1000_F_31524622_oSm2ozOIqqgznGSlMU1pzwcEJXBU2C5h.jpg',
             description:"Indira Gandhi was the first and, to date, the only female Prime Minister of India. She served as Prime Minister from 1966 to 1977 and again from 1980 until her assassination in 1984. Known for her strong leadership and pivotal role in Indian politics",
             price:"200"
             },
        { id: 2, name:"Indera Gandhi",
            Condition:"Good",
            Category:"Old",
             imageUrl: 'https://as1.ftcdn.net/v2/jpg/00/31/52/46/1000_F_31524622_oSm2ozOIqqgznGSlMU1pzwcEJXBU2C5h.jpg',
             description:"Indira Gandhi was the first and, to date, the only female Prime Minister of India. She served as Prime Minister from 1966 to 1977 and again from 1980 until her assassination in 1984. Known for her strong leadership and pivotal role in Indian politics",
             price:"200"  },
        { id: 3,  name:"Indera Gandhi",
            Condition:"Good",
            Category:"Old",
             imageUrl: 'https://as1.ftcdn.net/v2/jpg/00/31/52/46/1000_F_31524622_oSm2ozOIqqgznGSlMU1pzwcEJXBU2C5h.jpg',
             description:"Indira Gandhi was the first and, to date, the only female Prime Minister of India. She served as Prime Minister from 1966 to 1977 and again from 1980 until her assassination in 1984. Known for her strong leadership and pivotal role in Indian politics",
             price:"200" },
      ]);
  return (
   <>
   <div className="min-h-screen bg-gray-100 p-6">
      <header className="text-3xl font-bold text-center mb-8">
        Seller Dashboard
      </header>
      
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(item => (
            <div key={item.id} className="bg-white p-4 rounded-lg shadow-md  ">
              <img src={item.imageUrl} alt={item.name} className="w-full h-60 object-cover rounded-md mb-4" />
              <h2 className="text-md font-semibold mb-2 text-black">{item.name}</h2>
              <h2 className="text-md font-semibold mb-2 text-black">{item.description}</h2>
              <h2 className="text-md font-semibold mb-2 text-black">{item.Condition}</h2>
              <h2 className="text-md font-semibold mb-2 text-black">{item.Category}</h2>
              <h2 className="text-md font-semibold mb-2 text-black">{item.price}</h2>
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-red-600 transition"
              >
                X
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
   </>
  )
}

export default page