"use client"

import React, { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';

const Text = () => {
  const bannerContents = useMemo(() => [
    {
      title: 'WEBER WATCHES',
      text: "Experience the Future of Timekeeping with our Revolutionary Smartwatches that Redefine Innovation. Combining classic craftsmanship with cutting-edge technology, each timepiece tells a story of excellence.",
      image: '/Banner.jpg',
    },
    {
      title: "LUXURY COLLECTION",
      text: "Discover our premium selection of meticulously handcrafted timepieces, where traditional watchmaking meets contemporary design. Each watch represents the pinnacle of luxury and sophistication.",
      image: '/ai-nuclear-energy-future-innovation-disruptive-technology.jpg',
    },
    {
      title: "SMART FEATURES",
      text: "Stay connected with advanced technology that seamlessly integrates into your lifestyle. From health monitoring to instant notifications, our smart features enhance your daily experience without compromising on style.",
      image: '/zero.jpg',
    }
  ], []);

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === bannerContents.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full h-screen">
      <div
        className="w-full h-screen flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat transition-all duration-500 ease-in-out"
        style={{
          backgroundImage: `url(${bannerContents[currentIndex].image})`,
        }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-20 px-4 sm:px-8">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-6 text-center transform transition-all duration-500 ease-in-out">
            {bannerContents[currentIndex].title}
          </h1>
          <p className="text-base sm:text-lg text-center transform transition-all duration-500 ease-in-out w-full sm:w-3/4 md:w-1/2 px-2 sm:px-4">
            {bannerContents[currentIndex].text}
          </p>
          <div className="mt-6 sm:mt-8">
            <button
              onClick={nextSlide}
              className="bg-[#ccad2f] text-white px-6 py-2 rounded-lg transition-colors duration-300 hover:bg-[#F29595]"
            >
              Next &#x2192;
            </button>
          </div>
        </div>

        <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>

        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-30">
          {bannerContents.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-[#ccad2f]' : 'bg-white bg-opacity-50'}`}
            />
          ))}
        </div>
      </div>

      {bannerContents.map((item, index) => (
        <Image 
          key={index}
          src={item.image} 
          alt={item.title} 
          width={1000}
          height={600}
          loading="lazy"
          className="hidden"
        />
      ))}
    </div>
  );
};

export default Text;