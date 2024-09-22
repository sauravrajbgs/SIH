'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function NoticeBanner() {
  const textRef = useRef(null);

  // Use useEffect to create the infinite scrolling effect
  useEffect(() => {
    const textElement = textRef.current;
    let scrollAmount = 0;

    const scrollText = () => {
      scrollAmount += 1;
      textElement.style.transform = `translateX(-${scrollAmount}px)`;

      // Reset the scroll when the text goes off the screen
      if (scrollAmount >= textElement.scrollWidth) {
        scrollAmount = -window.innerWidth;
      }

      requestAnimationFrame(scrollText);
    };

    scrollText(); // Start scrolling when the component mounts

    return () => cancelAnimationFrame(scrollText); // Cleanup on unmount
  }, []);

  return (
    <div className='w-full flex justify-between items-center text-black font-semibold text-sm'>
   
    <div className=" top-0 left-0 w-full bg-yellow-500 bg-opacity-80 z-50 h-8 flex items-center overflow-hidden">
      <div className="flex whitespace-nowrap">
        
        <p
          ref={textRef}
          className=" animate-marquee px-4"
        >
          🚨 Click to view the 3D vitual stamp exhibiton by the nearest postal circle 🚨
          
        </p>
      </div>
    </div>
    <div className='w-1/5 text-center bg-yellow-500 bg-opacity-80 h-8 flex items-center justify-center'><a href='https://stamp-exhibition.vercel.app/' target='blank'><Image 
          src='/images/click-here.gif' 
          alt='3D Virtual Exhibition' 
          width={70} 
          height={10} 
        /></a></div>
    </div>
  );
}
