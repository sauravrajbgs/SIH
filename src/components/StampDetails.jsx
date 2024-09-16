"use client";
import Image from "next/image";
import { ReactElement } from 'react';
import MoreCollection from './MoreCollectionSlider'

const StampDetails = ({product}) => {
    return (
      <div className="bg-[#191C1E] text-white min-h-screen">
        {/* Stamp details */}
        <div className="max-w-5xl mx-auto p-6 m-5">
          <div key={product.id} className="mb-10">
            {/* Main Content */}
            <div className="grid grid-cols-2 gap-10">
              {/* Left Section - Image */}
              <div className="flex justify-center rounded-md p-4">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={300}
                  height={300} // Adjust height for better aspect ratio
                  className="rounded-md"
                />
              </div>
              {/* Right Section - Details */}
              <div className="flex flex-col justify-center">
                <div>
                  <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
                  <div className="flex flex-col space-x-2 mb-4">
                    <span className="flex flex-row font-semibold text-gray-400">
                      Rarity
                      <div className="ml-2 bg-[#f6c339] text-black font-semibold rounded-full text-[12px] px-2 py-[2px]">
                        {product.rarity}%
                      </div>
                    </span>
                    <div className="flex flex-row mt-8 mb-5">
                      {/* Creator */}
                      <div className="flex space-x-2 items-center mr-10">
                        <div className="w-10 h-10 bg-purple-700 rounded-full mr-2"></div>
                        <div className="flex flex-col">
                          <span className="font-semibold text-gray-400 text-[13px]">Creator</span>
                          <span className="font-bold text-[16px]">{product.creator}</span>
                        </div>
                      </div>
                      {/* Owner */}
                      <div className="flex space-x-2 items-center">
                        <div className="w-10 h-10 bg-[#d426d4] rounded-full mr-2"></div>
                        <div className="flex flex-col">
                          <span className="font-semibold text-gray-400 text-[13px]">Current owner</span>
                          <span className="font-semibold text-[16px]">{product.owner}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Partition line */}
                  <div className="border border-gray-700"></div>
                </div>
                {/* Options */}
                <div className="flex items-center justify-between text-[15px] text-gray-400">
                  <div className="flex flex-row items-center">
                    <div className="flex items-center m-4">
                      <img src='/images/Heart.svg' alt='heart' className="m-2" />
                      0
                    </div>
                    <div className="flex items-center m-4">
                      <img src='/images/Share.svg' className="m-2" />
                      Share
                    </div>
                    <div className="flex items-center m-4">
                      <img src='/images/Refresh.svg' className="m-2" />
                      Refresh
                    </div>
                  </div>
                  <div className="m-4">
                    <img src='/images/Ellipsis.svg' className="m-2" />
                  </div>
                </div>
                {/* Price */}
                <div className="bg-[#191C1E] p-4 rounded-2xl mx-auto w-[500px] border border-gray-800">
                  <div className="bg-[#252728] p-4 rounded-2xl mb-4">
                    <div className="text-gray-400 text-sm">Price</div>
                    <div className="text-white text-2xl font-semibold">₹ {product.price}</div>
                  </div>
                  <button className="w-full text-xl px-6 py-3 bg-white text-black font-bold rounded-2xl hover:text-white hover:bg-slate-600">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-x-32">
              {/* Left Section - Overview */}
              <div className="flex flex-col bg-[#191c1e] p-4 rounded-md">
                {/* Overview */}
                <div className="border-b border-gray-700 pb-2 mb-4">
                  <h1 className="text-white text-lg">Overview</h1>
                </div>
                {/* Description */}
                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-white mb-4">Description</h2>
                  <p className="text-gray-200">{product.description}</p>
                </div>
                {/* Details */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">Details</h2>
                  <div className="bg-[#191c1e] p-4 rounded-md mb-4 border border-gray-700">
                    <div className="flex items-center text-white mb-2">
                      <img src='/images/aptos.svg' className="m-3" />
                      <span className="text-gray-200">{product.shortTitle}</span>
                    </div>
                    <div className="flex items-center text-white mb-2">
                      <img src='/images/aptos.svg' className="m-3" />
                      <span className="text-gray-200">Release Date: {product.releaseDate}</span>
                      <img src='/images/chevron.svg' className="m-3" />
                    </div>
                    <div className="flex items-center text-white">
                      <img src='/images/view.svg' className="m-3" />
                      <span className="text-gray-200">View</span>
                      <img src='/images/chevron.svg' className="m-3" />
                    </div>
                    {/* Partition line */}
                    <div className="border border-gray-700 m-4"></div>
                    <div className="text-gray-500 flex flex-row m-2">
                      <img src='/images/Refresh.svg' className="m-1" />
                      {product.numOfReviews} reviews
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <MoreCollection />
        </div>
      </div>
    );
}

export default StampDetails;
