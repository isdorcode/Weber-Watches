'use client';

import React, { useState } from 'react';

// Expanded watch categories
const watches = [
  { id: 1, name: "Plain Silicon", price: 69.90, image: '/white.png', category: "Basic", description: "Sleek and simple silicon watch for everyday use" },
  { id: 3, name: "Redmi Silicon", price: 54.89, image: '/pank2.png', category: "Budget", description: "Affordable smart watch with essential features" },
  { id: 2, name: "Apple X8 Ultra", price: 65.99, image: '/white.png', category: "Premium", description: "Advanced smart features with elegant design" },
  { id: 4, name: "Smart Watch X8", price: 45.58, image: '/pank2.png', category: "Budget", description: "Budget-friendly option with core smart features" },
  { id: 6, name: "Fitness Tracker Elite", price: 59.50, image: '/white.png', category: "Sports", description: "Specialized fitness tracking with comprehensive metrics" },
  { id: 5, name: "Apple SmartWatch Pro", price: 89.99, image: '/pank2.png', category: "Premium", description: "Professional-grade smartwatch with advanced tracking" },
];

function Popular() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(watches.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCurrentSlideItems = () => {
    const startIndex = currentSlide * itemsPerSlide;
    const endIndex = startIndex + itemsPerSlide;
    return watches.slice(startIndex, endIndex);
  };

  return (
    <div className="bg-white py-10">
      <h2 className="text-4xl text-black text-center font-bold pb-5">Popular Watches</h2>
      <div className="carousel-container overflow-hidden">
        <div 
          className="grid grid-cols-1 sm:grid-cols-3 items-center place-items-center transition-transform duration-700 ease-in-out"
        >
          {getCurrentSlideItems().map((watch) => (
            <div 
              key={watch.id}
              className="flex flex-col items-center justify-center w-4/5 my-12 shadow-sm shadow-yellow-900 p-4 rounded-2xl transform transition-all duration-300 hover:scale-105"
            >
              <h4 className="text-yellow-600 text-base mb-5 font-medium">{watch.name}</h4>
              <img 
                src={watch.image} 
                alt={watch.name} 
                className="h-56 w-full object-contain" 
                loading="lazy"
              />
              <div className="flex flex-col items-center justify-center">
                <p className="">WEBERWATCHES</p>
                <div className="order-section">
                  <p className="text-lg font-bold text-center my-3 text-black">${watch.price}</p>
                  <div className="flex gap-8">
                    <button 
                      className="text-sm w-32 text-yellow-600 border-2 border-yellow-600 py-1 rounded-xl hover:bg-yellow-600 hover:text-white transition-colors duration-300"
                    >
                      Buy Now
                    </button>
                    <img
                      src="/mage_shopping-cart-fill.png"
                      alt="Add to Cart"
                      className="bg-yellow-600 p-2 rounded-full w-10 h-10 cursor-pointer hover:bg-yellow-700 transition-colors duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="flex justify-around items-center mt-8">
        <img 
          src="/Group 8.png" 
          alt="Previous"
          onClick={prevSlide}
          className="cursor-pointer transform transition-transform duration-300 hover:scale-110"
        />
        <img 
          src="/Group 7.png"  
          alt="Next" 
          onClick={nextSlide}
          className="cursor-pointer transform transition-transform duration-300 hover:scale-110"
        />
      </div>
    </div>
  );
}

export default Popular;
