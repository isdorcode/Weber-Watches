"use client";

import React, { useState } from "react";

const Features = [
  { id: 1, image: "/gps tracker.png", description: "GPS Tracker" },
  { id: 2, image: "/waterproof.png", description: "Waterproof Tracker" },
  { id: 3, image: "/camera.png", description: "Camera Tracker" },
];

const Rending = [
  { id: 4, image: "/steam.png", description: "Breathable Silicon Watchband" },
  { id: 5, image: "/alucase.png", description: "Aluminium Case" },
  { id: 6, image: "/fitnes tracker.png", description: "Fitness Tracker" },
];

const Colors = [
  { id: 42, image: "/colors1.png", name: "Heritage Shallow 1900", quality: "This is pure Gold" },
  { id: 54, image: "/colors2.png", name: "Tager Watchers 1934", quality: "This is pure Gold" },
  { id: 26, image: "/colors3.png", name: "Olympic Speed Watch 2015", quality: "This is pure Gold" },
];

const Pending = [
  { id: 1, image: "https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg", btn: "View" },
  { id: 2, image: "https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg", btn: "View" },
  { id: 3, image: "https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg", btn: "View" },
  { id: 4, image: "https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg", btn: "View" },
  { id: 5, image:  "https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg",btn: "View"},
  { id: 6, image: "https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg", btn: "View" },
  { id: 7, image: "https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg", btn: "View"},
  { id: 8, image: "https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg", btn: "View" },
  { id: 9, image: "https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg", btn: "View" },
  { id: 10, image: "https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg",btn: "View" },
  { id: 11, image: "https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg",btn: "View" },
  { id: 12, image: "https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg",btn: "View" },
];


function ForMen() {
  const [activeTab, setActiveTab] = useState("features");

  return (
    <div className="py-12">
      <h2 className="text-center font-bold text-4xl text-black mb-7">For Men</h2>

      {/* Navigation Tabs */}
      <div className="flex items-center justify-center gap-6 sm:gap-14 font-medium text-black">
        <p
          className={`cursor-pointer ${activeTab === "features" ? "font-bold text-yellow-500" : ""}`}
          onClick={() => setActiveTab("features")}
        >
          Features
        </p>
        <p
          className={`cursor-pointer ${activeTab === "colors" ? "font-bold text-yellow-500" : ""}`}
          onClick={() => setActiveTab("colors")}
        >
          Colors
        </p>
        <p
          className={`cursor-pointer ${activeTab === "pending" ? "font-bold text-yellow-500" : ""}`}
          onClick={() => setActiveTab("pending")}
        >
          Pending
        </p>
      </div>

      {/* Content Grid */}
      <div className="py-4">
        {/* Features Section */}
        {activeTab === "features" && (
          <div className="grid grid-cols-1 md:grid-cols-3 items-center place-items-center">
            <div className="flex flex-col items-center justify-center text-sm text-black font-medium">
              {Features.map((feat) => (
                <div key={feat.id} className="flex flex-col items-center justify-center text-sm text-black font-medium">
                  <img src={feat.image} loading="lazy"  alt="Feature image" className="h-14 w-14 object-cover mt-10" />
                  <p className="pt-2">{feat.description}</p>
                </div>
              ))}
            </div>

            <div className="w-full pt-9">
              <img src="/Double watch.png" loading="lazy"  alt="super big image" className="w-full h-auto" />
            </div>

            <div className="flex flex-col items-center justify-center text-sm text-black font-medium">
              {Rending.map((feat) => (
                <div key={feat.id} className="flex flex-col items-center justify-center text-sm text-black font-medium">
                  <img src={feat.image} alt="Rending image" className="h-14 w-14 object-cover mt-10"  loading="lazy" />
                  <p className="pt-2">{feat.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Colors Section */}
        {activeTab === "colors" && (
          <div className="py-10 px-6 sm:px-16 grid grid-cols-1 sm:grid-cols-3 gap-6 items-center place-items-center w-full">
            {Colors.map((color) => (
              <div key={color.id} className="flex flex-col items-center justify-center text-center bg-white shadow-sm shadow-black w-full rounded-lg p-3">
                <p className="pt-2 text-black text-xl font-medium pb-2">{color.name}</p>
                <p className="text-xs text-gray-700">{color.quality}</p>
                <img src={color.image} alt="Color image" className="h-40 w-40 object-cover mt-10"  loading="lazy" />
              </div>
            ))}
          </div>
        )}

        {/* Pending Section */}
        {activeTab === "pending" && (
      <div className="flex justify-center h-80">
      <div className="carousel carousel-center rounded-box min-w-full p-4">
        <ul className="flex space-x-4">
          {Pending.map((item) => (
            <li 
              key={item.id} 
              className="carousel-item relative flex-shrink-0 w-64 overflow-hidden group"
            >
              {/* Container with aspect ratio */}
              <div className="relative w-full h-full rounded-xl">
                {/* Overlay that appears on hover */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl z-10" />
                
                {/* Image */}
                <img 
                  src={item.image} 
                  alt={item.btn}
                  className="h-full w-full object-cover rounded-xl"
                  loading="lazy"
                />
                
                {/* Text Container - Centered with hover effects */}
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <p className="px-4 py-2 text-sm font-medium text-white bg-black/80 border-2 border-yellow-600 
                               rounded-md transform transition-all duration-300
                               group-hover:scale-105 group-hover:bg-yellow-600 group-hover:border-transparent
                               group-hover:text-black">
                    {item.btn}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
        </div>
        </div>
     
        )}
      </div>
    </div>
  );
}

export default ForMen;
