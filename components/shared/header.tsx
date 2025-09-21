"use client"

import React, { useState } from 'react';
import { ShoppingCart, Menu, X, Phone, MapPin, Clock } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(3); // Example cart count

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top info bar */}
      <div className="bg-orange-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>+234 123 456 7890</span>
              </div>
              <div className="hidden sm:flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Badagry, Lagos State</span>
              </div>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              <span>Open: 9AM - 10PM Daily</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-3 rounded-full mr-3">
              <div className="text-xl font-bold">🍚</div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Food By Ammy</h1>
              <p className="text-sm text-gray-600">Authentic Jollof & More</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200">
              Home
            </a>
            <a href="#menu" className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200">
              Menu
            </a>
            <a href="#about" className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200">
              About Us
            </a>
            <a href="#contact" className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200">
              Contact
            </a>
          </nav>

          {/* Cart and Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Cart Button */}
            <button className="relative bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center space-x-2">
              <ShoppingCart className="h-5 w-5" />
              <span className="hidden sm:inline">Cart</span>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full h-6 w-6 flex items-center justify-center text-xs font-bold">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-gray-700 hover:text-orange-600 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <a
              href="#home"
              className="block px-3 py-2 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-md transition-colors duration-200"
              onClick={toggleMenu}
            >
              Home
            </a>
            <a
              href="#menu"
              className="block px-3 py-2 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-md transition-colors duration-200"
              onClick={toggleMenu}
            >
              Menu
            </a>
            <a
              href="#about"
              className="block px-3 py-2 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-md transition-colors duration-200"
              onClick={toggleMenu}
            >
              About Us
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-md transition-colors duration-200"
              onClick={toggleMenu}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}