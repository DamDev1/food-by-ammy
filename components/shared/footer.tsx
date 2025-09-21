"use client"
import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Facebook, 
  Twitter, 
  Instagram, 
  MessageCircle,
  Send,
  Star,
  Award,
  Shield,
  Truck,
  Heart,
  ChevronUp
} from 'lucide-react';

interface FooterProps {}

export default function Footer(){
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(true);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'About Us', href: '#about' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
    { name: 'Track Order', href: '#track' }
  ];

  const menuCategories = [
    { name: 'Jollof Rice', href: '#jollof' },
    { name: 'Pepper Soup', href: '#pepper-soup' },
    { name: 'Rice Dishes', href: '#rice' },
    { name: 'Grilled Items', href: '#grilled' },
    { name: 'Vegetarian', href: '#vegetarian' },
    { name: 'Drinks', href: '#drinks' }
  ];

  const policies = [
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Terms of Service', href: '#terms' },
    { name: 'Refund Policy', href: '#refunds' },
    { name: 'Delivery Terms', href: '#delivery' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Food Safety', href: '#safety' }
  ];

  const deliveryAreas = [
    'UI Area', 'Bodija', 'Jericho', 'Ring Road', 
    'Dugbe', 'Agbowo', 'Sango', 'Mokola'
  ];

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-20 text-4xl">🍚</div>
        <div className="absolute top-32 right-16 text-3xl">🌶️</div>
        <div className="absolute bottom-40 left-12 text-5xl">🍲</div>
        <div className="absolute bottom-16 right-24 text-4xl">🥕</div>
        <div className="absolute top-64 left-1/3 text-3xl">🍅</div>
        <div className="absolute bottom-72 right-1/3 text-4xl">🧅</div>
      </div>

      <div className="relative">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-3 rounded-full mr-3">
                  <div className="text-2xl font-bold">🍚</div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Food By Ammy</h3>
                  <p className="text-gray-400">Authentic Jollof & More</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Serving authentic Nigerian cuisine with love since 2012. 
                From our family kitchen to your table, experience the true taste of home.
              </p>

              {/* Awards & Certifications */}
              <div className="space-y-3">
                <div className="flex items-center text-sm">
                  <Award className="h-4 w-4 text-yellow-500 mr-2" />
                  <span className="text-gray-300">Best Jollof Rice - Lagos 2025</span>
                </div>
                <div className="flex items-center text-sm">
                  <Shield className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-gray-300">NAFDAC Certified Kitchen</span>
                </div>
                <div className="flex items-center text-sm">
                  <Star className="h-4 w-4 text-blue-500 mr-2" />
                  <span className="text-gray-300">4.9/5 Customer Rating</span>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex space-x-4 mt-6">
                <a href="#" className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-pink-600 hover:bg-pink-700 rounded-full flex items-center justify-center transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-blue-400 hover:bg-blue-500 rounded-full flex items-center justify-center transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center transition-colors">
                  <MessageCircle className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-orange-400">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-gray-300 hover:text-orange-400 transition-colors duration-200 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>

              <h4 className="text-lg font-bold mb-4 mt-8 text-orange-400">Menu Categories</h4>
              <ul className="space-y-2">
                {menuCategories.slice(0, 4).map((category, index) => (
                  <li key={index}>
                    <a 
                      href={category.href} 
                      className="text-gray-300 hover:text-orange-400 transition-colors duration-200 text-sm"
                    >
                      {category.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-orange-400">Contact Us</h4>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300">+234 123 456 7890</p>
                    <p className="text-gray-300">+234 987 654 3210</p>
                    <p className="text-xs text-gray-500 mt-1">Available 24/7 for orders</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300">orders@mamaskitchen.ng</p>
                    <p className="text-gray-300">support@mamaskitchen.ng</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300">123 Lagos-Lagos Expressway,</p>
                    <p className="text-gray-300">Jericho GRA, Lagos,</p>
                    <p className="text-gray-300">Oyo State, Nigeria</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300">Mon - Sun: 9:00 AM - 10:00 PM</p>
                    <p className="text-xs text-gray-500 mt-1">We're open every day!</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Truck className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 font-semibold">Free Delivery</p>
                    <p className="text-xs text-gray-500 mt-1">Orders above ₦5,000</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter & Delivery Areas */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-orange-400">Stay Updated</h4>
              
              {/* Newsletter */}
              <div className="mb-8">
                <p className="text-gray-300 text-sm mb-4">
                  Get exclusive deals, new menu items, and cooking tips!
                </p>
                <div className="flex">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
                  />
                  <button
                    onClick={handleNewsletterSubmit}
                    className="bg-orange-600 hover:bg-orange-700 px-4 py-2 rounded-r-lg transition-colors duration-200"
                  >
                    <Send className="h-5 w-5" />
                  </button>
                </div>
                {subscribed && (
                  <p className="text-green-400 text-sm mt-2">✓ Successfully subscribed!</p>
                )}
              </div>

              {/* Delivery Areas */}
              <h5 className="text-md font-semibold mb-4 text-orange-400">We Deliver To:</h5>
              <div className="grid grid-cols-2 gap-2">
                {deliveryAreas.map((area, index) => (
                  <div key={index} className="text-gray-300 text-sm flex items-center">
                    <span className="w-1 h-1 bg-orange-500 rounded-full mr-2"></span>
                    {area}
                  </div>
                ))}
              </div>

              {/* App Download */}
              {/* <div className="mt-6">
                <h5 className="text-md font-semibold mb-3 text-orange-400">Download Our App</h5>
                <div className="flex space-x-3">
                  <button className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg text-sm transition-colors">
                    📱 iOS App
                  </button>
                  <button className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg text-sm transition-colors">
                    🤖 Android
                  </button>
                </div>
              </div> */}
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Legal Links */}
              <div>
                <h5 className="font-semibold mb-4 text-orange-400">Legal & Policies</h5>
                <div className="grid grid-cols-2 gap-2">
                  {policies.map((policy, index) => (
                    <a 
                      key={index}
                      href={policy.href} 
                      className="text-gray-400 hover:text-orange-400 text-sm transition-colors"
                    >
                      {policy.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* Payment Methods */}
              <div>
                <h5 className="font-semibold mb-4 text-orange-400">Payment Methods</h5>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-800 px-3 py-1 rounded text-sm">💳 Card</span>
                  <span className="bg-gray-800 px-3 py-1 rounded text-sm">📱 Transfer</span>
                  <span className="bg-gray-800 px-3 py-1 rounded text-sm">💰 Cash</span>
                  <span className="bg-gray-800 px-3 py-1 rounded text-sm">🏦 USSD</span>
                </div>
              </div>

              {/* Customer Service */}
              <div>
                <h5 className="font-semibold mb-4 text-orange-400">Need Help?</h5>
                <div className="space-y-2">
                  <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm w-full transition-colors flex items-center justify-center">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    WhatsApp Support
                  </button>
                  <p className="text-xs text-gray-400">Available 9 AM - 9 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-8 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center mb-4 md:mb-0">
                <Heart className="h-4 w-4 text-red-500 mr-2" />
                <p className="text-gray-400 text-sm">
                  © 2025 Food By Ammy. Made with love in Lagos, Nigeria.
                </p>
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <span>All rights reserved</span>
                <span>•</span>
                <span>Serving Nigeria since 2012</span>
                <span>•</span>
                <span className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-500 mr-1" />
                  4.9/5 Rating
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-12 h-12 bg-orange-600 hover:bg-orange-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 z-50"
          >
            <ChevronUp className="h-6 w-6" />
          </button>
        )}
      </div>
    </footer>
  );
}