'use client';


import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules'; // Import the Autoplay module

export default function ResourceSlider() {
  return (
    <div className='h-full w-full relative'>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        autoplay={{
          delay: 2000, // Set the delay for autoplay
          disableOnInteraction: false, // Continue autoplay after interactions
        }}
        onSwiper={(swiper) => {
          // Add mouse hover events to pause and resume autoplay safely
          const swiperEl = swiper.el;
          swiperEl.addEventListener('mouseenter', () => {
            if (swiper.autoplay && swiper.autoplay.stop) {
              swiper.autoplay.stop();
            }
          });
          swiperEl.addEventListener('mouseleave', () => {
            if (swiper.autoplay && swiper.autoplay.start) {
              swiper.autoplay.start();
            }
          });
        }}
        modules={[Autoplay]} // Include the Autoplay module
        className="mySwiper"
      >
        <SwiperSlide className='rounded-lg h'>
          <div className='bg-[#0F0F0F] rounded-lg flex space-y-4 flex-col w-full h-full py-2 px-3'>
            <div className='w-full rounded-lg bg-[#272727]'>
              <Image src={'/spotlight/Resource.svg'} width={100} height={100} alt="Resource" />
            </div>
            <a href='https://google.com' target="blank">
              <div className='font-bold text-left px-2 underline underline-offset-4'>
                Introduction to Stamp Collecting
              </div>
            </a>
            <div className='text-white opacity-45 text-[13px] text-left px-2'>
              What can you call a hobby which teaches so much—in addition to providing fun and pleasure? Stamp collecting helps instruct the collector in geography, biography, history, culture and art. Stamps are miniature gateways to the world.
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='rounded-lg h'>
          <div className='bg-[#0F0F0F] rounded-lg flex space-y-4 flex-col w-full h-full py-2 px-3'>
            <div className='w-full rounded-lg bg-[#272727]'>
              <Image src={'/spotlight/Resource.svg'} width={100} height={100} alt="Resource" />
            </div>
            <a href='https://google.com' target="blank">
              <div className='font-bold text-left px-2 underline underline-offset-4'>
                Introduction to Stamp Collecting
              </div>
            </a>
            <div className='text-white opacity-45 text-[13px] text-left px-2'>
              What can you call a hobby which teaches so much—in addition to providing fun and pleasure? Stamp collecting helps instruct the collector in geography, biography, history, culture and art. Stamps are miniature gateways to the world.
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='rounded-lg h'>
          <div className='bg-[#0F0F0F] rounded-lg flex space-y-4 flex-col w-full h-full py-2 px-3'>
            <div className='w-full rounded-lg bg-[#272727]'>
              <Image src={'/spotlight/Resource.svg'} width={100} height={100} alt="Resource" />
            </div>
            <a href='https://google.com' target="blank">
              <div className='font-bold text-left px-2 underline underline-offset-4'>
                Introduction to Stamp Collecting
              </div>
            </a>
            <div className='text-white opacity-45 text-[13px] text-left px-2'>
              What can you call a hobby which teaches so much—in addition to providing fun and pleasure? Stamp collecting helps instruct the collector in geography, biography, history, culture and art. Stamps are miniature gateways to the world.
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='rounded-lg h'>
          <div className='bg-[#0F0F0F] rounded-lg flex space-y-4 flex-col w-full h-full py-2 px-3'>
            <div className='w-full rounded-lg bg-[#272727]'>
              <Image src={'/spotlight/Resource.svg'} width={100} height={100} alt="Resource" />
            </div>
            <a href='https://google.com' target="blank">
              <div className='font-bold text-left px-2 underline underline-offset-4'>
                Introduction to Stamp Collecting
              </div>
            </a>
            <div className='text-white opacity-45 text-[13px] text-left px-2'>
              What can you call a hobby which teaches so much—in addition to providing fun and pleasure? Stamp collecting helps instruct the collector in geography, biography, history, culture and art. Stamps are miniature gateways to the world.
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='rounded-lg h'>
          <div className='bg-[#0F0F0F] rounded-lg flex space-y-4 flex-col w-full h-full py-2 px-3'>
            <div className='w-full rounded-lg bg-[#272727]'>
              <Image src={'/spotlight/Resource.svg'} width={100} height={100} alt="Resource" />
            </div>
            <a href='https://google.com' target="blank">
              <div className='font-bold text-left px-2 underline underline-offset-4'>
                Introduction to Stamp Collecting
              </div>
            </a>
            <div className='text-white opacity-45 text-[13px] text-left px-2'>
              What can you call a hobby which teaches so much—in addition to providing fun and pleasure? Stamp collecting helps instruct the collector in geography, biography, history, culture and art. Stamps are miniature gateways to the world.
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='rounded-lg h'>
          <div className='bg-[#0F0F0F] rounded-lg flex space-y-4 flex-col w-full h-full py-2 px-3'>
            <div className='w-full rounded-lg bg-[#272727]'>
              <Image src={'/spotlight/Resource.svg'} width={100} height={100} alt="Resource" />
            </div>
            <a href='https://google.com' target="blank">
              <div className='font-bold text-left px-2 underline underline-offset-4'>
                Introduction to Stamp Collecting
              </div>
            </a>
            <div className='text-white opacity-45 text-[13px] text-left px-2'>
              What can you call a hobby which teaches so much—in addition to providing fun and pleasure? Stamp collecting helps instruct the collector in geography, biography, history, culture and art. Stamps are miniature gateways to the world.
            </div>
          </div>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
}
