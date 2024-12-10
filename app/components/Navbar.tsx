'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface NavbarProps {
  currentBannerIndex: number;
}

const Navbar: React.FC<NavbarProps> = ({ currentBannerIndex }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Newest', path: '/newest' },
    { name: 'Popular', path: '/popular' },
    { name: 'Products', path: '/products' },
    { name: 'Get in Touch', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <div
        className={`Header flex items-center justify-between px-4 sm:px-6 lg:px-8 ${
          isScrolled ? 'bg-white text-black' : 'bg-white text-gray-800'
        }  w-full z-50 transition-all duration-300 shadow-md h-16 sm:h-20`}
      >
        {/* Logo Section */}
        <div className="flex-shrink-0 w-16 sm:w-32 h-full flex items-center justify-center">
          <img
            src="/Group 22.png"
            alt="logo"
            className="h-12 w-12 sm:w-20 sm:h-20 bg-white object-contain"
          />
        </div>

        {/* Navigation Links - Desktop */}
        <nav className="hidden lg:block flex-grow max-w-3xl mx-auto">
          <ul className="flex justify-center space-x-1">
            {navLinks.map((link) => (
              <li key={link.name} className="relative group px-1">
                <Link href={link.path}>
                  <span className="inline-block font-medium py-2 px-3 rounded-lg transition-colors duration-200 hover:bg-yellow-50 hover:text-yellow-700">
                    {link.name}
                  </span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* User Actions - Desktop */}
        <div className="hidden lg:flex items-center space-x-6">
          <button className="font-medium hover:text-yellow-600 transition-colors duration-200">
            Login
          </button>
          <div className="relative">
            <img
              src="/mage_shopping-cart-fill1.png"
              alt="Cart"
              className="bg-yellow-600 cursor-pointer p-2 rounded-full w-10 h-10 hover:bg-yellow-500 transition-colors duration-200"
            />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleMenu}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-16 sm:top-20 left-0 w-full bg-white z-40 lg:hidden transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <nav className="container mx-auto px-4">
          <ul className="py-2">
            {navLinks.map((link) => (
              <li key={link.name} className="border-b border-gray-100 last:border-none">
                <Link href={link.path}>
                  <span 
                    className="block py-3 px-4 text-gray-800 hover:bg-yellow-50 hover:text-yellow-700 transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="px-4 py-3 border-t border-gray-200">
            <button className="block w-full text-left py-2 text-gray-800 hover:text-yellow-700 transition-colors duration-200">
              Login
            </button>
            <div className="mt-2">
              <img
                src="/mage_shopping-cart-fill1.png"
                alt="Cart"
                className="bg-yellow-600 cursor-pointer p-2 rounded-full w-8 h-8 hover:bg-yellow-500 transition-colors duration-200"
              />
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;