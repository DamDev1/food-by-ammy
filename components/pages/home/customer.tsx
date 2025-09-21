import React, { useState, useEffect } from 'react';
import { Star, Quote, ThumbsUp, MessageCircle, Filter, ChevronLeft, ChevronRight, Award, Users, TrendingUp } from 'lucide-react';

interface Review {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  date: string;
  review: string;
  dish: string;
  location: string;
  verified: boolean;
  helpful: number;
  images?: string[];
}

interface CustomerReviewsProps {}

export default function CustomerReviews() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [filter, setFilter] = useState('all');
  const [autoPlay, setAutoPlay] = useState(true);

  const reviews: Review[] = [
    {
      id: 1,
      name: "Adebayo Johnson",
      avatar: "👨🏾‍💼",
      rating: 5,
      date: "2 days ago",
      review: "Absolutely amazing! The Jollof rice tastes exactly like my grandmother's recipe. The spices are perfectly balanced, and the rice has that perfect texture - not too soft, not too hard. Delivered hot and fresh to my office. Will definitely order again!",
      dish: "Premium Jollof Rice",
      location: "Bodija, Ibadan",
      verified: true,
      helpful: 23,
      images: ["🍚", "🍗"]
    },
    {
      id: 2,
      name: "Funmi Adebisi",
      avatar: "👩🏾‍💼",
      rating: 5,
      date: "5 days ago",
      review: "I've ordered from Mama's Kitchen over 10 times now, and they never disappoint! The pepper soup is incredibly flavorful - you can taste the fresh herbs and spices. The catfish is always tender and well-seasoned. Plus, they always deliver within the promised time.",
      dish: "Spicy Pepper Soup",
      location: "UI Area, Ibadan",
      verified: true,
      helpful: 31,
      images: ["🍲"]
    },
    {
      id: 3,
      name: "Tunde Okafor",
      avatar: "👨🏾‍🎓",
      rating: 4,
      date: "1 week ago",
      review: "Great food quality and reasonable prices. The Ofada rice with green pepper sauce is authentic and delicious. Only minor issue was the delivery took 45 minutes instead of the promised 30, but the food quality made up for it. Highly recommended!",
      dish: "Ofada Rice Special",
      location: "Agbowo, Ibadan",
      verified: true,
      helpful: 18
    },
    {
      id: 4,
      name: "Blessing Omolola",
      avatar: "👩🏾‍🍳",
      rating: 5,
      date: "1 week ago",
      review: "As someone who loves to cook, I'm very picky about restaurant food. But Mama's Kitchen has won me over! The coconut rice is creamy and perfectly spiced. You can tell they use fresh ingredients and take pride in their cooking. The portion sizes are generous too!",
      dish: "Coconut Rice Combo",
      location: "Dugbe, Ibadan",
      verified: true,
      helpful: 27,
      images: ["🥥", "🍗", "🍌"]
    },
    {
      id: 5,
      name: "Samuel Akindele",
      avatar: "👨🏾‍💻",
      rating: 5,
      date: "2 weeks ago",
      review: "Working from home, I rely on food delivery services a lot. Mama's Kitchen is by far the best I've tried in Ibadan. The food arrives hot, well-packaged, and tastes homemade. The mixed grill platter is perfect for sharing with family. Exceptional service!",
      dish: "Mixed Grill Platter",
      location: "Jericho, Ibadan",
      verified: true,
      helpful: 35
    },
    {
      id: 6,
      name: "Kemi Afolabi",
      avatar: "👩🏾‍⚕️",
      rating: 4,
      date: "3 weeks ago",
      review: "Clean, tasty, and satisfying meals. I appreciate that they use fresh vegetables and quality ingredients. The vegetable fried rice is colorful and nutritious. As a healthcare worker, I value good, healthy food, and Mama's Kitchen delivers on both taste and nutrition.",
      dish: "Vegetable Fried Rice",
      location: "Ring Road, Ibadan",
      verified: true,
      helpful: 22
    }
  ];

  const stats = [
    { icon: Star, label: "Average Rating", value: "4.9/5", color: "text-yellow-500" },
    { icon: Users, label: "Total Reviews", value: "2,847", color: "text-blue-500" },
    { icon: TrendingUp, label: "Satisfied Customers", value: "98%", color: "text-green-500" },
    { icon: Award, label: "5-Star Reviews", value: "89%", color: "text-purple-500" }
  ];

  const filteredReviews = filter === 'all' 
    ? reviews 
    : reviews.filter(review => review.rating === parseInt(filter));

  const reviewsPerSlide = 3;
  const totalSlides = Math.ceil(filteredReviews.length / reviewsPerSlide);

  useEffect(() => {
    if (autoPlay) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [autoPlay, totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  const getCurrentReviews = () => {
    const startIndex = currentSlide * reviewsPerSlide;
    return filteredReviews.slice(startIndex, startIndex + reviewsPerSlide);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-yellow-100 rounded-full px-4 py-2 mb-4">
            <MessageCircle className="h-5 w-5 text-yellow-600 mr-2" />
            <span className="text-yellow-800 font-semibold">Customer Love</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent block">
              Customers Say
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from thousands of satisfied customers 
            who have made Mama's Kitchen their go-to for authentic Nigerian cuisine.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gray-50 flex items-center justify-center">
                  <Icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center justify-between mb-12">
          <div className="flex items-center space-x-4 mb-4 sm:mb-0">
            <Filter className="h-5 w-5 text-gray-500" />
            <span className="text-gray-700 font-medium">Filter by rating:</span>
            <div className="flex space-x-2">
              {['all', '5', '4', '3'].map((rating) => (
                <button
                  key={rating}
                  onClick={() => setFilter(rating)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                    filter === rating
                      ? 'bg-orange-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {rating === 'all' ? 'All Reviews' : `${rating} Stars`}
                </button>
              ))}
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setAutoPlay(!autoPlay)}
              className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                autoPlay ? 'bg-green-100 text-green-700' : 'bg-gray-200 text-gray-700'
              }`}
            >
              {autoPlay ? 'Auto Play On' : 'Auto Play Off'}
            </button>
            
            <div className="flex space-x-2">
              <button
                onClick={prevSlide}
                className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all duration-300"
              >
                <ChevronLeft className="h-5 w-5 text-gray-600" />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all duration-300"
              >
                <ChevronRight className="h-5 w-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>

        {/* Reviews Carousel */}
        <div className="relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getCurrentReviews().map((review) => (
              <div key={review.id} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                
                {/* Review Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-200 to-red-200 rounded-full flex items-center justify-center text-xl mr-4">
                      {review.avatar}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 flex items-center">
                        {review.name}
                        {review.verified && (
                          <div className="ml-2 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs">✓</span>
                          </div>
                        )}
                      </h4>
                      <p className="text-sm text-gray-500">{review.location}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex mb-1">{renderStars(review.rating)}</div>
                    <p className="text-xs text-gray-500">{review.date}</p>
                  </div>
                </div>

                {/* Dish Ordered */}
                <div className="bg-orange-50 rounded-xl p-3 mb-4">
                  <p className="text-sm text-orange-800">
                    <span className="font-semibold">Ordered:</span> {review.dish}
                  </p>
                </div>

                {/* Review Content */}
                <div className="relative mb-6">
                  <Quote className="absolute -top-2 -left-2 h-6 w-6 text-orange-200" />
                  <p className="text-gray-700 leading-relaxed pl-4">
                    {review.review}
                  </p>
                </div>

                {/* Review Images */}
                {review.images && (
                  <div className="flex space-x-2 mb-4">
                    {review.images.map((image, index) => (
                      <div key={index} className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-xl">
                        {image}
                      </div>
                    ))}
                  </div>
                )}

                {/* Review Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <button className="flex items-center text-gray-500 hover:text-orange-600 transition-colors">
                    <ThumbsUp className="h-4 w-4 mr-2" />
                    <span className="text-sm">Helpful ({review.helpful})</span>
                  </button>
                  <div className="text-xs text-gray-400">
                    Verified Purchase
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {[...Array(totalSlides)].map((_, index) => (
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

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Join Our Happy Customers!</h3>
            <p className="text-xl mb-8 opacity-90">
              Experience the taste that has made thousands of customers fall in love with our food.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg">
                Order Your Favorite
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300">
                Leave a Review
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}