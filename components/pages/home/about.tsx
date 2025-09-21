import React, { useState } from 'react';
import { Heart, Users, Clock, Award, ChefHat, Truck, Shield, Star, Play, Quote } from 'lucide-react';

interface AboutUsProps {}

export default function AboutUs(){
  const [activeTab, setActiveTab] = useState('story');
  const [playVideo, setPlayVideo] = useState(false);

  const stats = [
    { icon: Users, label: 'Happy Customers', value: '15,000+', color: 'text-blue-600' },
    { icon: Clock, label: 'Years of Experience', value: '12+', color: 'text-green-600' },
    { icon: Award, label: 'Awards Won', value: '8', color: 'text-yellow-600' },
    { icon: Truck, label: 'Orders Delivered', value: '50,000+', color: 'text-purple-600' }
  ];

  const teamMembers = [
    {
      name: "Ammy",
      role: "Head Chef & Founder",
      imageUrl: "/images/mama-adunni.jpg", // Replace with actual photo path
      description: "30+ years of culinary expertise"
    },
    {
      name: "Chef Kola",
      role: "Traditional Recipes Specialist",
      imageUrl: "/images/chef-kola.jpg", // Replace with actual photo path
      description: "Master of authentic Nigerian cuisine"
    },
    {
      name: "Sister Bisi",
      role: "Quality Control Manager",
      imageUrl: "/images/sister-bisi.jpg", // Replace with actual photo path
      description: "Ensures every meal meets our standards"
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Made with Love",
      description: "Every dish is prepared with genuine care and passion, just like a mother cooks for her family."
    },
    {
      icon: Shield,
      title: "Quality First",
      description: "We use only the freshest ingredients and maintain the highest standards of food safety."
    },
    {
      icon: ChefHat,
      title: "Authentic Recipes",
      description: "Traditional family recipes passed down through generations, preserving Nigerian culinary heritage."
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Hot, fresh meals delivered to your doorstep within 30 minutes, guaranteed."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-orange-100 rounded-full px-4 py-2 mb-4">
            <Heart className="h-5 w-5 text-orange-600 mr-2" />
            <span className="text-orange-800 font-semibold">Our Story</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            About
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent block">
              Food By Ammy
            </span>
          </h2>
        </div>

        {/* Main Story Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          
          {/* Left: Story Content */}
          <div className="space-y-6">
            {/* Tab Navigation */}
            <div className="flex space-x-1 bg-gray-100 rounded-full p-1">
              {[
                { id: 'story', label: 'Our Story', icon: Heart },
                { id: 'mission', label: 'Mission', icon: Award },
                // { id: 'team', label: 'Our Team', icon: Users }
              ].map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-white text-orange-600 shadow-md'
                        : 'text-gray-600 hover:text-orange-600'
                    }`}
                  >
                    <Icon className="h-4 w-4 mr-2" />
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Tab Content */}
            <div className="min-h-[300px]">
              {activeTab === 'story' && (
                <div className="space-y-6 animate-fade-in">
                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 h-8 w-8 text-orange-300" />
                    <blockquote className="text-xl italic text-gray-700 pl-6">
                      "Food is not just nourishment, it's a way to share love, culture, and memories."
                    </blockquote>
                  </div>
                  
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Founded in 2012 by Ammy in the heart of Lagos, Food By Ammy began as a small family restaurant with a simple dream - to share authentic Nigerian flavors with our community.
                  </p>
                  
                  <p className="text-lg text-gray-600 leading-relaxed">
                    What started as home-cooked meals for neighbors has grown into one of Lagos's most beloved food destinations. We've served over 50,000 meals, but we've never forgotten our roots - every dish is still prepared with the same love and care as that very first plate of Jollof rice.
                  </p>
                  
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Today, three generations of our family work together to bring you the authentic taste of Nigeria, delivered fresh to your doorstep. We're not just feeding bodies; we're nourishing souls and preserving our rich culinary heritage.
                  </p>
                </div>
              )}

              {activeTab === 'mission' && (
                <div className="space-y-6 animate-fade-in">
                  <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    To preserve and celebrate Nigerian culinary traditions while making authentic, high-quality Nigerian cuisine accessible to everyone through exceptional food and service.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {values.map((value, index) => {
                      const Icon = value.icon;
                      return (
                        <div key={index} className="bg-white rounded-xl p-4 shadow-lg">
                          <div className="flex items-center mb-3">
                            <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                              <Icon className="h-5 w-5 text-orange-600" />
                            </div>
                            <h4 className="font-bold text-gray-800">{value.title}</h4>
                          </div>
                          <p className="text-sm text-gray-600">{value.description}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {activeTab === 'team' && (
                <div className="space-y-6 animate-fade-in">
                  <h3 className="text-2xl font-bold text-gray-900">Meet Our Team</h3>
                  <p className="text-lg text-gray-600">
                    The heart of Food By Ammy - passionate people dedicated to bringing you the best Nigerian cuisine.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {teamMembers.map((member, index) => (
                      <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
                        <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                          <img 
                            src={member.imageUrl} 
                            alt={member.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              // Fallback to placeholder if image fails to load
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              const parent = target.parentElement;
                              if (parent) {
                                parent.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-orange-200 to-red-200 flex items-center justify-center text-2xl">👩‍🍳</div>';
                              }
                            }}
                          />
                        </div>
                        <h4 className="font-bold text-gray-800 mb-1">{member.name}</h4>
                        <p className="text-orange-600 font-semibold mb-2">{member.role}</p>
                        <p className="text-sm text-gray-600">{member.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right: Visual Content */}
          <div className="relative">
            {/* Main Image/Video Placeholder */}
            <div className="relative bg-gradient-to-br from-orange-200 to-red-200 rounded-3xl overflow-hidden shadow-2xl">
              <div className="aspect-w-16 aspect-h-10 h-80">
                {!playVideo ? (
                  <div className="relative w-full h-full">
                    <img 
                      src="/images/mama-adunni-cooking.jpg" // Replace with actual photo of her cooking
                      alt="Ammy cooking in the kitchen"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback content if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = `
                            <div class="flex flex-col items-center justify-center h-full text-center">
                              <div class="text-8xl mb-4">🏠</div>
                              <button onclick="setPlayVideo(true)" class="bg-white/90 hover:bg-white text-gray-800 px-6 py-3 rounded-full font-semibold flex items-center mx-auto shadow-lg hover:shadow-xl transition-all duration-300">
                                <svg class="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                                </svg>
                                Watch Our Story
                              </button>
                            </div>
                          `;
                        }
                      }}
                    />
                    {/* Play button overlay */}
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <button
                        onClick={() => setPlayVideo(true)}
                        className="bg-white/90 hover:bg-white text-gray-800 px-6 py-3 rounded-full font-semibold flex items-center shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <Play className="h-5 w-5 mr-2" />
                        Watch Our Story
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center p-8 flex flex-col items-center justify-center h-full">
                    <div className="text-6xl mb-4">🎬</div>
                    <p className="text-gray-700 font-semibold">Video Player Would Load Here</p>
                    <button
                      onClick={() => setPlayVideo(false)}
                      className="mt-4 text-orange-600 hover:text-orange-700 font-semibold"
                    >
                      Close Video
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Floating Achievement Cards */}
            <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl">
              <div className="flex items-center space-x-2">
                <Star className="h-6 w-6 text-yellow-500 fill-current" />
                <div>
                  <p className="font-bold text-gray-800">4.9/5</p>
                  <p className="text-sm text-gray-600">Customer Rating</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl">
              <div className="flex items-center space-x-2">
                <Award className="h-6 w-6 text-orange-600" />
                <div>
                  <p className="font-bold text-gray-800">Best Jollof</p>
                  <p className="text-sm text-gray-600">Lagos 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center`}>
                  <Icon className={`h-8 w-8 ${stat.color}`} />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Taste the Difference?</h3>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of satisfied customers who trust us with their meals every day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg">
              Order Now
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300">
              View Menu
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}