'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Import the Link component

const trendingData = {
    '1H': [
      { collector: 'Anand', img: '/profile/james.svg', items: 150, collectibleimg:'/profile/botanical.svg', collectible: 'Botanical Water Colour Collection', price: 'Rs.459' },
      { collector: 'Husain', img: '/profile/james.svg', items: 129, collectibleimg:'/profile/botanical.svg', collectible: 'Legend Of Odisha', price: 'Rs.599' },
      { collector: 'Priyanshu', img: '/profile/james.svg', items: 108, collectibleimg:'/profile/botanical.svg', collectible: 'Aptos', price: 'Rs.249' },
      { collector: 'James', img: '/profile/james.svg', items: 103, collectibleimg:'/profile/botanical.svg', collectible: 'Gangadhar_Meher', price: 'Rs.349' },
      { collector: 'Sami', img: '/profile/james.svg', items: 111, collectibleimg:'/profile/botanical.svg', collectible: 'Abbakka_Chowta', price: 'Rs.409' },
      { collector: 'Pandey', img: '/profile/james.svg', items: 105, collectibleimg:'/profile/botanical.svg', collectible: 'Karpoori_Thakur', price: 'Rs.139' },
      { collector: 'Jumal', img: '/profile/james.svg', items: 102, collectibleimg:'/profile/botanical.svg', collectible: 'New Arrival', price: 'Rs.549' },
    ],
    '1D': [
      { collector: 'Husain', img: '/profile/james.svg', items: 130, collectibleimg:'/profile/botanical.svg', collectible: 'Legend Of Odisha', price: 'Rs.610' },
      { collector: 'Sami', img: '/profile/james.svg', items: 115, collectibleimg:'/profile/botanical.svg', collectible: 'Botanical Water Colour Collection', price: 'Rs.460' },
      { collector: 'Priyanshu', img: '/profile/james.svg', items: 110, collectibleimg:'/profile/botanical.svg', collectible: 'Aptos', price: 'Rs.250' },
      { collector: 'Jumal', img: '/profile/james.svg', items: 109, collectibleimg:'/profile/botanical.svg', collectible: 'Gangadhar_Meher', price: 'Rs.349' },
      { collector: 'James', img: '/profile/james.svg', items: 105, collectibleimg:'/profile/botanical.svg', collectible: 'Chandshekhar', price: 'Rs.999' },
      { collector: 'Pandey', img: '/profile/james.svg', items: 100, collectibleimg:'/profile/botanical.svg', collectible: 'Abbakka_Chowta', price: 'Rs.399' },
      { collector: 'Anand', img: '/profile/james.svg', items: 98, collectibleimg:'/profile/botanical.svg', collectible: 'New Arrival', price: 'Rs.599' },
    ],
    '7D': [
      { collector: 'James', img: '/profile/james.svg', items: 112, collectibleimg:'/profile/botanical.svg', collectible: 'Botanical Water Colour Collection', price: 'Rs.500' },
      { collector: 'Pandey', img: '/profile/james.svg', items: 108, collectibleimg:'/profile/botanical.svg', collectible: 'Gangadhar_Meher', price: 'Rs.349' },
      { collector: 'Anand', img: '/profile/james.svg', items: 107, collectibleimg:'/profile/botanical.svg', collectible: 'Abbakka_Chowta', price: 'Rs.410' },
      { collector: 'Sami', img: '/profile/james.svg', items: 106, collectibleimg:'/profile/botanical.svg', collectible: 'Aptos', price: 'Rs.260' },
      { collector: 'Priyanshu', img: '/profile/james.svg', items: 103, collectibleimg:'/profile/botanical.svg', collectible: 'New Arrival', price: 'Rs.600' },
      { collector: 'Jumal', img: '/profile/james.svg', items: 101, collectibleimg:'/profile/botanical.svg', collectible: 'Legend Of Odisha', price: 'Rs.600' },
      { collector: 'Husain', img: '/profile/james.svg', items: 99, collectibleimg:'/profile/botanical.svg', collectible: 'Karpoori_Thakur', price: 'Rs.150' },
    ],
    '30D': [
      { collector: 'Jumal', img: '/profile/james.svg', items: 118, collectibleimg:'/profile/botanical.svg', collectible: 'Chandshekhar', price: 'Rs.999' },
      { collector: 'Pandey', img: '/profile/james.svg', items: 115, collectibleimg:'/profile/botanical.svg', collectible: 'Karpoori_Thakur', price: 'Rs.139' },
      { collector: 'Husain', img: '/profile/james.svg', items: 114, collectibleimg:'/profile/botanical.svg', collectible: 'Gangadhar_Meher', price: 'Rs.349' },
      { collector: 'Priyanshu', img: '/profile/james.svg', items: 113, collectibleimg:'/profile/botanical.svg', collectible: 'Botanical Water Colour Collection', price: 'Rs.459' },
      { collector: 'James', img: '/profile/james.svg', items: 112, collectibleimg:'/profile/botanical.svg', collectible: 'Legend Of Odisha', price: 'Rs.599' },
      { collector: 'Anand', img: '/profile/james.svg', items: 111, collectibleimg:'/profile/botanical.svg', collectible: 'Aptos', price: 'Rs.249' },
      { collector: 'Sami', img: '/profile/james.svg', items: 110, collectibleimg:'/profile/botanical.svg', collectible: 'Abbakka_Chowta', price: 'Rs.409' },
    ]
  };

const TrendingComponent = () => {
  const [activeTab, setActiveTab] = useState('1D'); 

  return (
    <div className="flex flex-col mt-10 border-white rounded-xl p-6 border border-opacity-10 text-white w-full">
      
      <div className="flex space-x-4 items-center mb-4 border-b-white border-b pb-2 border-opacity-10">
        <h2 className="text-2xl font-semibold">Trending</h2>
        <div className="flex bg-[#222528] rounded-2xl text-xs p-[2px]">
          {['1H', '1D', '7D', '30D'].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 rounded-2xl transition hover:bg-zinc-700 ${
                activeTab === tab ? 'bg-[#191C1F]' : ''
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Collectors Info wrapped in a flex-col container */}
      <div className="flex w-full text-xs justify-between items-center space-x-6 px-7 py-2">
        <div className="flex flex-col w-full text-[13px]">
          {/* First div: Title content */}
          <div className="flex justify-between text-xs mb-3 font-semibold opacity-50">
            <div className="w-1/12">#</div>
            <div className="w-10/12">Collectors</div>
            <div className="w-2/12">Items</div>
          </div>
          {/* Second div: Mapped content */}
          <div className="flex flex-col">
            {trendingData[activeTab].map((item, index) => (
              <div key={index} className="flex items-center py-3 justify-between">
                {/* 1st div: Collector Index */}
                <div className="w-1/12">{index + 1}</div>

                {/* 2nd div: Collector's name and image */}
                <div className="w-10/12 flex items-center space-x-2">
                  <Image src={item.img} width={30} height={30} alt="Collector" />
                  <Link href={`/collectors/${item.collector.toLowerCase()}`} passHref>
                    <div className="hover:underline cursor-pointer">{item.collector}</div>
                  </Link>
                </div>

                {/* 3rd div: Items */}
                <div className="w-2/12">{item.items}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Collectibles Info */}
        <div className="flex flex-col w-full text-[13px] font-medium">
          {/* First div: Title content */}
          <div className="flex justify-between text-xs mb-3 font-semibold opacity-50">
            <div className="w-1/12">#</div>
            <div className="w-10/12">Collectible</div>
            <div className="w-2/12">Price</div>
          </div>
          {/* Second div: Mapped content */}
          <div className="flex flex-col">
            {trendingData[activeTab].map((item, index) => (
              <div key={index} className="flex items-center py-3 justify-between">
                {/* 1st div: Collectible Index */}
                <div className="w-1/12">{index + 1}</div>

                {/* 2nd div: Collectible's name and image */}
                <div className="w-10/12 flex items-center space-x-2">
                  <Image src={item.collectibleimg} width={30} height={30} alt="Collectible" />
                  <Link href={`/collectibles/${item.collectible.toLowerCase().replace(/\s+/g, '-')}`} passHref>
                    <div className="hover:underline cursor-pointer">{item.collectible}</div>
                  </Link>
                </div>

                {/* 3rd div: Price */}
                <div className="w-2/12">{item.price}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3rd Section: View All Button */}
      <div className='flex w-full pt-5 justify-center'>
        <div className='p-3 rounded-2xl bg-[#222528] text-white font-semibold w-4/5 text-center text-xs mb-4 cursor-pointer hover:bg-white hover:text-[#222528] transition'>
          View All Collection ➜
        </div>
      </div>
    </div>
  );
};

export default TrendingComponent;
