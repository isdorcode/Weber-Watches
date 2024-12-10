'use client';

import React, { useState, useEffect } from 'react';
import { ShoppingCart, ChevronLeft, ChevronRight } from 'lucide-react';

const watches = [
  { id: 1, name: "Plain Silicon", price: 69.90, image: '/white.png', category: "Basic", description: "Sleek and simple silicon watch for everyday use", stock: 10 },
  { id: 3, name: "Redmi Silicon", price: 54.89, image: '/pank2.png', category: "Budget", description: "Affordable smart watch with essential features", stock: 15 },
  { id: 2, name: "Apple X8 Ultra", price: 65.99, image: '/white.png', category: "Premium", description: "Advanced smart features with elegant design", stock: 8 },
  { id: 4, name: "Smart Watch X8", price: 45.58, image: '/pank2.png', category: "Budget", description: "Budget-friendly option with core smart features", stock: 12 },
  { id: 6, name: "Fitness Tracker Elite", price: 59.50, image: '/white.png', category: "Sports", description: "Specialized fitness tracking with comprehensive metrics", stock: 20 },
  { id: 5, name: "Apple SmartWatch Pro", price: 89.99, image: '/pank2.png', category: "Premium", description: "Professional-grade smartwatch with advanced tracking", stock: 5 },
];

function Popular() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cart, setCart] = useState({});
  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(watches.length / itemsPerSlide);

  // Load the cart from localStorage on initial render
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || {};
    setCart(savedCart);
  }, []);

  // Update localStorage whenever the cart changes
  useEffect(() => {
    if (Object.keys(cart).length > 0) {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const addToCart = (watchId) => {
    const updatedCart = { ...cart };
    const currentQuantity = updatedCart[watchId] || 0;
    const watch = watches.find((w) => w.id === watchId);

    if (currentQuantity < watch.stock) {
      updatedCart[watchId] = currentQuantity + 1;
      setCart(updatedCart);
    }
  };

  const getCurrentSlideItems = () => {
    const startIndex = currentSlide * itemsPerSlide;
    const endIndex = startIndex + itemsPerSlide;
    return watches.slice(startIndex, endIndex);
  };

  return (
    <div className="bg-white py-10">
      <h2 className="text-4xl text-black text-center font-bold pb-5">Popular Watches</h2>

      <div className="relative max-w-6xl mx-auto">
        <div className="carousel-container overflow-hidden">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {getCurrentSlideItems().map((watch) => (
              <li
                key={watch.id}
                className="flex flex-col items-center justify-between p-6 rounded-2xl shadow-lg bg-white transform transition-all duration-300 hover:scale-105"
              >
                <h4 className="text-yellow-600 text-lg font-medium mb-4">{watch.name}</h4>
                <img
                  src={watch.image}
                  alt={watch.name}
                  className="h-56 w-full object-contain"
                />
                <p className="text-lg font-bold my-3 text-black">${watch.price.toFixed(2)}</p>
                <div className="flex gap-4">
                  <button
                    className="flex items-center gap-2 text-sm text-yellow-600 border-2 border-yellow-600 py-2 px-4 rounded-xl hover:bg-yellow-600 hover:text-white transition-colors duration-300"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    Buy Now
                  </button>
                  <button
                    onClick={() => addToCart(watch.id)}
                    className="bg-yellow-600 hover:bg-yellow-700 p-2 rounded-full"
                  >
                    <ShoppingCart className="w-6 h-6 text-white" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
        >
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
        >
          <ChevronRight className="w-6 h-6 text-gray-800" />
        </button>
      </div>
    </div>
  );
}

export default Popular;
