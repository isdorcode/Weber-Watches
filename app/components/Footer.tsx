import React from 'react';
import Link from 'next/link';

function Footer() {
  return (
    <>
      <footer className="bg-zinc-800 text-white py-10 px-6 md:px-14 lg:flex lg:flex-row justify-between items-start">
        <div className="mb-4">
          <Link href="/" className="mb-6 md:mb-0">
            <span className="font-bold text-2xl sm:text-4xl">WEBER-WATCHES</span>
            <p className="text-white pt-2 font-normal">Call Now : +263 78342 1962</p>
          </Link>
        </div>

        {/* Footer List */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm mb-8">
          <div>
            <h4 className="font-semibold text-lg mb-4">Home</h4>
            <ul>
              <li className="hover:text-gray-400 mb-2">Newest</li>
              <li className="hover:text-gray-400 mb-2">Popular</li>
              <li className="hover:text-gray-400">Trending</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Newest</h4>
            <ul>
              <li className="hover:text-gray-400 mb-2">Men</li>
              <li className="hover:text-gray-400 mb-2">Ladies</li>
              <li className="hover:text-gray-400">Unisex</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Popular</h4>
            <ul>
              <li className="hover:text-gray-400 mb-2">Hot Deals</li>
              <li className="hover:text-gray-400 mb-2">Prices</li>
              <li className="hover:text-gray-400">Order</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">All Categories</h4>
            <ul>
              <li className="hover:text-gray-400 mb-2">Men</li>
              <li className="hover:text-gray-400">Ladies</li>
            </ul>
          </div>
        </div>
      </footer>

      <div className="px-6 ml-0 sm:ml-8 grid grid-cols-3 gap-4 text-sm py-6 text-black">
        <span>Terms & Conditions</span>
        <span>Privacy Policy</span>
        <span>Copyrights 2024 @ WeberWatches. All Rights Reserved</span>
      </div>
    </>
  );
}

export default Footer;
