"use client";
import Image from "next/image";
import { ReactElement } from "react";
import MoreCollectionSlider from "./MoreCollectionSlider";

const StampDetails = ({ product }) => {
  return (
    <div className="bg-[#191C1E] text-white min-h-screen">
      {/* Stamp details */}
      <div className="max-w-5xl mx-auto p-4 m-4 mr-10">
        <div key={product?.id} className="mb-8">
          {/* Main Content */}
          <div className="grid grid-cols-2 gap-8">
            {/* Left Section - Image */}
            <div className="flex justify-center rounded-md p-2 h-[350px]">
              <Image
                src={product?.image}
                alt={product?.title}
                width={product?.width || 300} 
                height={product?.height || 300}
                layout="intrinsic" 
                className="rounded-md"
              />
            </div>

            {/* Right Section - Details */}
            <div className="flex flex-col justify-center">
              <div>
                <h1 className="text-xl font-bold mb-3">{product?.title}</h1>
                <div className="flex flex-col space-x-2 mb-3">
                  <span className="flex flex-row  text-gray-400 text-sm">
                    Rarity
                    <div className="ml-2 bg-[#f6c339] text-[12px] text-black font-bold rounded-full px-2 py-[1px]">
                      {product?.rarity}%
                    </div>
                  </span>
                  <div className="flex flex-row m-4">
                    {/* Creator */}
                    <div className="flex space-x-2 items-center mr-16 mt-1">
                      <div className="w-8 h-8 bg-purple-700 rounded-full mr-1"></div>
                      <div className="flex flex-col">
                        <span className=" text-gray-400 text-[13px]">
                          Creator
                        </span>
                        <span className="text-[14px]">
                          {product?.creator}
                        </span>
                      </div>
                    </div>
                    {/* Owner */}
                    <div className="flex space-x-2 items-center">
                      <div className="w-8 h-8 bg-[#d426d4] rounded-full mr-1"></div>
                      <div className="flex flex-col">
                        <span className="text-gray-400 text-[13px]">
                          Current owner
                        </span>
                        <span className="text-[14px]">
                          {product?.owner}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Partition line */}
                <div className="border border-gray-700"></div>
              </div>
              {/* Options */}
              <div className="flex items-center justify-between text-[13px] text-gray-400 w-[320px]">
                <div className="flex flex-row items-center">
                  <div className="flex items-center m-3">
                    <img src="/images/Heart.svg" alt="heart" className="m-2" />
                    {product?.likes}
                  </div>
                  <div className="flex items-center m-3">
                    <img src="/images/Share.svg" className="m-2" />
                    Share
                  </div>
                  <div className="flex items-center m-3">
                    <img src="/images/Refresh.svg" className="m-1" />
                    Refresh
                  </div>
                </div>
                <div className="m-3">
                  <img src="/images/Ellipsis.svg" className="m-1" />
                </div>
              </div>
              {/* Price */}
              <div className="bg-[#191C1E] p-3 rounded-xl mx-auto w-[350px] border border-gray-800 -ml-3">
                <div className="bg-[#252728] p-2 rounded-xl mb-3">
                  <div className="text-gray-400 text-sm ml-3">Price</div>
                  <div className="text-white text-xl font-semibold ml-3">
                    ₹{product?.price}
                  </div>
                </div>
                <button className="w-full text-lg px-3 py-1 bg-white text-black font-bold rounded-xl hover:text-white hover:bg-slate-600">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-x-24 mt-10">
            {/* Left Section - Overview */}
            <div className="flex flex-col bg-[#191c1e] p-3 rounded-md">
              {/* Overview */}
              <div className="mb-3 w-full">
                <div className="flex justify-start">
                  <h1 className="text-white text-md focus:outline-none border-b-4 border-white pb-1">
                    Overview
                  </h1>
                </div>
                {/* Partition line */}
                <div className="border-b border-gray-700 w-full"></div>
              </div>

              {/* Description */}
              <div className="mb-8 mt-4">
                <h2 className="text-lg font-semibold text-white mb-3">Description</h2>
                <p className="text-gray-200 text-sm">{product?.description}</p>
              </div>
              {/* Details */}
              <div>
                <h2 className="text-lg font-semibold text-white mb-3">Details</h2>
                <div className="bg-[#191c1e] p-3 rounded-md mb-3 border border-gray-700">
                  <div className="flex items-center text-white mb-2">
                    <img src="/images/aptos.svg" className="m-2" />
                    <span className="text-gray-200 text-sm">
                      {product?.shortTitle}
                    </span>
                  </div>
                  <div className="flex items-center text-white mb-2">
                    <img src="/images/aptos.svg" className="m-2" />
                    <span className="text-gray-200 text-sm">
                      Release Date: {product?.releaseDate}
                    </span>
                    <img src="/images/chevron.svg" className="m-2" />
                  </div>
                  <div className="flex items-center text-white">
                    <img src="/images/view.svg" className="m-2" />
                    <span className="text-gray-200 text-sm">View</span>
                    <img src="/images/chevron.svg" className="m-2" />
                  </div>
                  {/* Partition line */}
                  <div className="border border-gray-700 m-3"></div>
                  <div className="text-gray-300 flex flex-row mt-4 text-sm">
                    <img src="/images/Refresh.svg" className="m-1" />
                    {product?.numOfReviews} reviews
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <MoreCollectionSlider />
      </div>
    </div>
  );
};

export default StampDetails;
