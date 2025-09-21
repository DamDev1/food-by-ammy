import React, { useState, useEffect } from 'react';
import { Star, Clock, Truck, Award, ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Authentic Nigerian Jollof Rice",
      subtitle: "Made with love, served with pride",
      image: "🍚",
      color: "from-orange-600 to-red-600"
    },
    {
      title: "Fresh Pepper Soup & More",
      subtitle: "Traditional recipes, modern delivery",
      image: "🍲", 
      color: "from-red-600 to-pink-600"
    },
    {
      title: "Fast Delivery to Your Door",
      subtitle: "Hot meals delivered in 30 minutes",
      image: "🚚",
      color: "from-green-600 to-teal-600"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 text-6xl">🌶️</div>
        <div className="absolute top-40 right-20 text-4xl">🍅</div>
        <div className="absolute bottom-40 left-20 text-5xl">🧅</div>
        <div className="absolute bottom-20 right-10 text-6xl">🥕</div>
        <div className="absolute top-60 left-1/2 text-3xl">🌿</div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center bg-white rounded-full px-4 py-2 shadow-lg">
              <Award className="h-5 w-5 text-yellow-500 mr-2" />
              <span className="text-sm font-semibold text-gray-800">#1 Jollof in Ibadan</span>
            </div>

            {/* Main Content */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Craving
                <span className={`bg-gradient-to-r ${slides[currentSlide].color} bg-clip-text text-transparent block`}>
                  {slides[currentSlide].title.split(' ').slice(-2).join(' ')}
                </span>
                <span className="text-3xl lg:text-4xl text-gray-600 block mt-2">
                  {slides[currentSlide].subtitle}
                </span>
              </h1>

              <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
                Experience the authentic taste of Nigeria with our perfectly spiced Jollof rice, 
                pepper soup, and traditional delicacies. Order now and taste the difference!
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-8 py-4">
                <div className="flex items-center space-x-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <span className="text-gray-700 font-semibold">4.9 (2,500+ reviews)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-orange-600" />
                  <span className="text-gray-700 font-semibold">30 min delivery</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-4 rounded-full text-lg font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
                  Order Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button className="group bg-white hover:bg-gray-50 text-gray-800 px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-xl border-2 border-gray-200 hover:border-orange-300 transition-all duration-300 flex items-center justify-center">
                  <Play className="mr-2 h-5 w-5 text-orange-600" />
                  Watch Story
                </button>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            {/* Main Food Display */}
            <div className="relative">
              <div className={`w-80 h-80 mx-auto bg-gradient-to-br ${slides[currentSlide].color} rounded-full shadow-2xl flex items-center justify-center text-9xl animate-pulse`}>
                {slides[currentSlide].image}
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -top-4 -left-4 bg-white rounded-2xl p-4 shadow-xl animate-bounce">
                <div className="flex items-center space-x-2">
                  <Truck className="h-6 w-6 text-green-600" />
                  <div>
                    <p className="font-bold text-gray-800">Free Delivery</p>
                    <p className="text-sm text-gray-600">Orders above ₦5,000</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-xl">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                  <div>
                    <p className="font-bold text-gray-800">Live Tracking</p>
                    <p className="text-sm text-gray-600">Real-time updates</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-orange-600 w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Features Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white/80 backdrop-blur rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🔥</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Fresh & Hot</h3>
            <p className="text-gray-600">Cooked to order and delivered steaming hot to your door</p>
          </div>

          <div className="bg-white/80 backdrop-blur rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">✅</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Quality Guaranteed</h3>
            <p className="text-gray-600">Premium ingredients and traditional cooking methods</p>
          </div>

          <div className="bg-white/80 backdrop-blur rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">💝</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Made with Love</h3>
            <p className="text-gray-600">Every dish is prepared with care and authentic flavors</p>
          </div>
        </div>
      </div>
    </section>
  );
}