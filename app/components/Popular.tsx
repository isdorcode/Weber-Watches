'use client';

import React, { useState, useEffect } from 'react';
import { ShoppingCart, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

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
  const [showCartPopup, setShowCartPopup] = useState(false);
  const [addedToCartId, setAddedToCartId] = useState(null);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);
  const totalSlides = Math.ceil(watches.length / itemsPerSlide);

  // Handle window resize for responsive itemsPerSlide
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerSlide(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerSlide(2);
      } else {
        setItemsPerSlide(3);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial call to set itemsPerSlide based on current window size
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const addToCart = (watchId) => {
    setCart((prevCart) => {
      const currentQuantity = prevCart[watchId] || 0;
      const watch = watches.find(w => w.id === watchId);

      if (currentQuantity < watch.stock) {
        setAddedToCartId(watchId);
        setTimeout(() => setAddedToCartId(null), 2000);

        return {
          ...prevCart,
          [watchId]: currentQuantity + 1
        };
      }
      return prevCart;
    });
    setShowCartPopup(true);
    setTimeout(() => setShowCartPopup(false), 3000);
  };

  const getCurrentSlideItems = () => {
    const startIndex = currentSlide * itemsPerSlide;
    const endIndex = startIndex + itemsPerSlide;
    return watches.slice(startIndex, endIndex);
  };

  const getTotalItems = () => {
    return Object.values(cart).reduce((sum, quantity) => sum + quantity, 0);
  };

  return (
    <div className="bg-white py-10 relative">
      <h2 className="text-4xl text-black text-center font-bold pb-5">Popular Watches</h2>

      {/* Cart Summary */}
      <div className="absolute top-4 right-4 flex items-center gap-2">
        <div className="relative">
          <ShoppingCart className="w-6 h-6 text-yellow-600" />
          {getTotalItems() > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
              {getTotalItems()}
            </span>
          )}
        </div>
      </div>

      {/* Cart Popup */}
      {showCartPopup && (
        <div className="fixed top-4 right-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded z-50">
          Item added to cart!
        </div>
      )}

      <div className="relative max-w-6xl mx-auto px-4">
        <div className="carousel-container overflow-hidden">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {getCurrentSlideItems().map((watch) => (
              <li 
                key={watch.id}
                className="flex flex-col items-center justify-between p-6 rounded-2xl shadow-lg transform transition-all duration-300 hover:shadow-xl hover:scale-102 bg-white"
              >
                <div className="relative w-full">
                  <h4 className="text-yellow-600 text-lg font-medium mb-4">{watch.name}</h4>
                  <Image 
                    src={watch.image} 
                    alt={watch.name} 
                    className="h-56 w-full object-contain" 
                    loading="lazy"
                  />
                  {addedToCartId === watch.id && (
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white px-4 py-2 rounded-full">
                      Added to Cart!
                    </div>
                  )}
                </div>

                <div className="w-full mt-4">
                  <p className="text-gray-600 text-center">WEBERWATCHES</p>
                  <p className="text-xl font-bold text-center my-3 text-black">${watch.price.toFixed(2)}</p>

                  <div className="flex items-center justify-between gap-4">
                    <button 
                      className="flex-1 w-10 text-sm text-yellow-600 border-2 border-yellow-600 py-2 px-4 rounded-xl hover:bg-yellow-600 hover:text-white transition-colors duration-300"
                    >
                      Buy Now
                    </button>
                    <button
                      onClick={() => addToCart(watch.id)}
                      disabled={cart[watch.id] >= watch.stock}
                      className={`p-2 rounded-full ${cart[watch.id] >= watch.stock ? 'bg-gray-400 cursor-not-allowed' : 'bg-yellow-600 hover:bg-yellow-700'} transition-colors duration-300`}
                    >
                      <ShoppingCart className="w-6 h-6 text-white" />
                    </button>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    {watch.stock - (cart[watch.id] || 0)} items left in stock
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
        >
          <ChevronLeft className="w-6 h-6 text-yellow-600" />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
        >
          <ChevronRight className="w-6 h-6 text-yellow-600" />
        </button>
      </div>
    </div>
  );
}

export default Popular;
