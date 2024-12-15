"use client";

import React, { useState } from 'react';
import Image from 'next/image';
// Define the Watch interface to type the smartWatches data
interface Watch {
  id: number;
  image: string;
  title: string;
  features: string;
  price: string;
  description: string;
}

// The list of smart watches with the Watch interface
const smartWatches: Watch[] = [
  {
    id: 1,
    image: '/flowers.png',
    title: "Apple Series 4 For Her",
    features: "Bluetooth, GPS & Waterproof",
    price: "$45.79",
    description: "The Apple Series 4 is a perfect blend of style and technology. It's designed for her, offering Bluetooth connectivity, GPS tracking, and is waterproof for all your adventures."
  },

  {
    id: 2,
    image: '/phone.png',
    title: "Samsung S10 Ultra Lacrado",
    features: "Breathable Bands, Camera",
    price: "$45.79",
    description: "The Samsung S10 Ultra features breathable bands and an impressive camera. Ideal for those who love to capture moments on the go."
  },

  {
    id: 3,
    image: '/apple.png',
    title: "Apple Ultra Smart Watch",
    features: "Ip67 Waterproof, GPS & Wifi",
    price: "$45.79",
    description: "The Apple Ultra Smart Watch is built to withstand the elements with IP67 waterproofing. Stay connected with GPS and Wifi capabilities."
  },
];

function TechSavyWatches() {
  // Type the selectedWatch state as Watch or null
  const [selectedWatch, setSelectedWatch] = useState<Watch | null>(null);

  const openModal = (watch: Watch) => {
    setSelectedWatch(watch);
  };

  const closeModal = () => {
    setSelectedWatch(null);
  };

  return (
    <div className="p-5 sm:p-6 sm:py-14 bg-slate-100 relative">
      <h2 className="text-black text-4xl text-center font-bold pb-10">All Tech-savvy Smart watches</h2>

      <div className="md:flex justify-between items-center gap-6 lg:flex-row">
        {smartWatches.map((watch) => (
          <div key={watch.id} className="bg-white p-4 sm:p-6 rounded-lg mb-5">
            <Image src={watch.image} alt={watch.title} className="smart-watch-image" loading="lazy" width={500} height={300}  />
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-base text-black font-medium pt-5 text-center">{watch.title}</h3>
              <p className="text-black font-normal text-base pt-2 text-center">{watch.features}</p>
              <p className="text-3xl text-yellow-600 font-bold pt-3 pb-5">{watch.price}</p>
              <button
                className="text-sm text-yellow-600 border-2 border-yellow-600 px-4 py-1 rounded-lg"
                onClick={() => openModal(watch)}
              >
                View More
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedWatch && (
        <div className="bg-indigo-800 absolute top-96 h-auto m-auto rounded-lg w-full lg:max-w-4xl p-1 sm:p-4" style={{ margin: '-20px' }}>
          <span className="text-white text-3xl cursor-pointer px- sm:px-4 pt-5" onClick={closeModal}>&times;</span>
          <div className="sm:flex sm:flex-row items-start justify-start gap-8 mt-3 p-4">
            <Image
              src={selectedWatch.image}
              alt={selectedWatch.title}
              className="w-full h-56 sm:w-96 sm:h-96 object-cover rounded-lg"
              loading="lazy"
              width={500} height={300} 
            />
            <div className="pt-6">
              <h3 className="text-white text-2xl font-medium pb-2">{selectedWatch.title}</h3>
              <p className="text-white text-base font-normal w-full">{selectedWatch.description}</p>
              <p className="text-3xl text-yellow-600 font-bold pt-3 pb-5">{selectedWatch.price}</p>
              <button className="text-sm text-yellow-600 border-2 border-yellow-600 px-4 py-1 rounded-lg">Checkout</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TechSavyWatches;
