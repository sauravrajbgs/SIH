'use client';

import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';


import 'swiper/css';
import 'swiper/css/navigation';


import { Navigation } from 'swiper/modules';



export default function ResourceSlider() {
  return (
    <div className='h-full w-full relative'>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide  className='rounded-lg h'>
            <a href='https://google.com' target="blank"><div className=' bg-[#0F0F0F] rounded-lg flex space-y-4 flex-col w-full h-full  py-2 px-3'>
                <div className='w-full rounded-lg bg-[#272727]'>
                    <Image src={'/spotlight/Resource.svg'} width={100} height={100}></Image>
                </div>
                <div className='font-bold text-left px-2'>
                    Introduction to Stamp Collecting
                </div>
                <div className='text-white opacity-45 text-[13px] text-left px-2'>
                What can you call a hobby which teaches so much—in addition to providing fun and pleasure? Stamp collecting helps instruct the collector in geography, biography, history, culture and art. Stamps are miniature gateways to the world.
                </div>
             </div>
             </a>
        </SwiperSlide>
        <SwiperSlide  className='rounded-lg h'>
            <a href='https://google.com' target="blank"><div className=' bg-[#0F0F0F] rounded-lg flex space-y-4 flex-col w-full h-full  py-2 px-3'>
                <div className='w-full rounded-lg bg-[#272727]'>
                    <Image src={'/spotlight/Resource.svg'} width={100} height={100}></Image>
                </div>
                <div className='font-bold text-left px-2'>
                    Introduction to Stamp Collecting
                </div>
                <div className='text-white opacity-45 text-[13px] text-left px-2'>
                What can you call a hobby which teaches so much—in addition to providing fun and pleasure? Stamp collecting helps instruct the collector in geography, biography, history, culture and art. Stamps are miniature gateways to the world.
                </div>
             </div>
             </a>
        </SwiperSlide>
        <SwiperSlide  className='rounded-lg h'>
            <a href='https://google.com' target="blank"><div className=' bg-[#0F0F0F] rounded-lg flex space-y-4 flex-col w-full h-full  py-2 px-3'>
                <div className='w-full rounded-lg bg-[#272727]'>
                    <Image src={'/spotlight/Resource.svg'} width={100} height={100}></Image>
                </div>
                <div className='font-bold text-left px-2'>
                    Introduction to Stamp Collecting
                </div>
                <div className='text-white opacity-45 text-[13px] text-left px-2'>
                What can you call a hobby which teaches so much—in addition to providing fun and pleasure? Stamp collecting helps instruct the collector in geography, biography, history, culture and art. Stamps are miniature gateways to the world.
                </div>
             </div>
             </a>
        </SwiperSlide>
        <SwiperSlide  className='rounded-lg h'>
            <a href='https://google.com' target="blank"><div className=' bg-[#0F0F0F] rounded-lg flex space-y-4 flex-col w-full h-full  py-2 px-3'>
                <div className='w-full rounded-lg bg-[#272727]'>
                    <Image src={'/spotlight/Resource.svg'} width={100} height={100}></Image>
                </div>
                <div className='font-bold text-left px-2'>
                    Introduction to Stamp Collecting
                </div>
                <div className='text-white opacity-45 text-[13px] text-left px-2'>
                What can you call a hobby which teaches so much—in addition to providing fun and pleasure? Stamp collecting helps instruct the collector in geography, biography, history, culture and art. Stamps are miniature gateways to the world.
                </div>
             </div>
             </a>
        </SwiperSlide>
        <SwiperSlide  className='rounded-lg h'>
            <a href='https://google.com' target="blank"><div className=' bg-[#0F0F0F] rounded-lg flex space-y-4 flex-col w-full h-full  py-2 px-3'>
                <div className='w-full rounded-lg bg-[#272727]'>
                    <Image src={'/spotlight/Resource.svg'} width={100} height={100}></Image>
                </div>
                <div className='font-bold text-left px-2'>
                    Introduction to Stamp Collecting
                </div>
                <div className='text-white opacity-45 text-[13px] text-left px-2'>
                What can you call a hobby which teaches so much—in addition to providing fun and pleasure? Stamp collecting helps instruct the collector in geography, biography, history, culture and art. Stamps are miniature gateways to the world.
                </div>
             </div>
             </a>
        </SwiperSlide>
        

        {/* Navigation Buttons */}
        <div className="swiper-button-next" />
        <div className="swiper-button-prev" />
      </Swiper>
    </div>
  );
}
