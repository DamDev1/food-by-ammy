import React, { useState } from 'react';
import { Star, Plus, Heart, Clock, Flame, Award, ShoppingCart } from 'lucide-react';

interface Dish {
  id: number;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  cookTime: string;
  isSpicy: boolean;
  isBestseller: boolean;
  isNew?: boolean;
  tags: string[];
}

interface FeaturedDishesProps {}

export default function FeaturedDishes() {
  const [favorites, setFavorites] = useState<Set<number>>(new Set());
  const [cart, setCart] = useState<{[key: number]: number}>({});

  const featuredDishes: Dish[] = [
    {
      id: 1,
      name: "Premium Jollof Rice",
      description: "Our signature aromatic Jollof rice cooked with premium long-grain rice, fresh tomatoes, and traditional spices. Served with tender chicken and plantain.",
      price: 3500,
      originalPrice: 4000,
      image: "🍚",
      rating: 4.9,
      reviews: 1250,
      cookTime: "20 mins",
      isSpicy: true,
      isBestseller: true,
      tags: ["Rice", "Chicken", "Spicy"]
    },
    {
      id: 2,
      name: "Spicy Pepper Soup",
      description: "Traditional Nigerian pepper soup with fresh catfish, aromatic herbs, and authentic spices. Perfect for any weather and guaranteed to warm your soul.",
      price: 2800,
      image: "🍲",
      rating: 4.8,
      reviews: 890,
      cookTime: "25 mins",
      isSpicy: true,
      isBestseller: true,
      tags: ["Soup", "Fish", "Traditional"]
    },
    {
      id: 3,
      name: "Coconut Rice Combo",
      description: "Creamy coconut rice cooked in rich coconut milk with vegetables, served with grilled chicken, moi moi, and sweet plantain slices.",
      price: 3200,
      image: "🥥",
      rating: 4.7,
      reviews: 654,
      cookTime: "22 mins",
      isSpicy: false,
      isBestseller: false,
      isNew: true,
      tags: ["Rice", "Coconut", "Combo"]
    },
    {
      id: 4,
      name: "Ofada Rice Special",
      description: "Local Ofada rice served with our famous green pepper sauce (ata rodo), assorted meat, and boiled eggs. An authentic Nigerian delicacy.",
      price: 4200,
      image: "🌾",
      rating: 4.9,
      reviews: 432,
      cookTime: "30 mins",
      isSpicy: true,
      isBestseller: true,
      tags: ["Local Rice", "Pepper Sauce", "Traditional"]
    },
    {
      id: 5,
      name: "Mixed Grill Platter",
      description: "Succulent grilled chicken, beef suya, and fish with Jollof rice, coleslaw, and our signature spicy sauce. Perfect for sharing!",
      price: 5500,
      originalPrice: 6200,
      image: "🍖",
      rating: 4.8,
      reviews: 721,
      cookTime: "35 mins",
      isSpicy: true,
      isBestseller: false,
      tags: ["Grilled", "Mixed", "Sharing"]
    },
    {
      id: 6,
      name: "Vegetable Fried Rice",
      description: "Colorful fried rice loaded with fresh vegetables, green peas, carrots, and sweet corn. A healthy and delicious option for everyone.",
      price: 2500,
      image: "🥕",
      rating: 4.6,
      reviews: 298,
      cookTime: "18 mins",
      isSpicy: false,
      isBestseller: false,
      tags: ["Vegetarian", "Healthy", "Rice"]
    }
  ];

  const toggleFavorite = (dishId: number) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(dishId)) {
        newFavorites.delete(dishId);
      } else {
        newFavorites.add(dishId);
      }
      return newFavorites;
    });
  };

  const addToCart = (dishId: number) => {
    setCart(prev => ({
      ...prev,
      [dishId]: (prev[dishId] || 0) + 1
    }));
  };

  const formatPrice = (price: number) => {
    return `₦${price.toLocaleString()}`;
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-orange-100 rounded-full px-4 py-2 mb-4">
            <Award className="h-5 w-5 text-orange-600 mr-2" />
            <span className="text-orange-800 font-semibold">Most Popular</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Featured
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent block">
              Delicacies
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our customers' favorite dishes, crafted with authentic Nigerian flavors 
            and the finest ingredients. Each dish tells a story of tradition and taste.
          </p>
        </div>

        {/* Featured Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredDishes.map((dish) => (
            <div key={dish.id} className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:scale-105">
              {/* Image Section */}
              <div className="relative h-48 bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center">
                <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                  {dish.image}
                </div>
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {dish.isBestseller && (
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center">
                      <Flame className="h-3 w-3 mr-1" />
                      Bestseller
                    </span>
                  )}
                  {dish.isNew && (
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      New
                    </span>
                  )}
                  {dish.originalPrice && (
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      Sale
                    </span>
                  )}
                </div>

                {/* Favorite Button */}
                <button
                  onClick={() => toggleFavorite(dish.id)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <Heart 
                    className={`h-5 w-5 ${favorites.has(dish.id) 
                      ? 'text-red-500 fill-current' 
                      : 'text-gray-400 hover:text-red-400'
                    }`} 
                  />
                </button>
              </div>

              {/* Content Section */}
              <div className="p-6">
                {/* Title and Rating */}
                <div className="mb-3">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                      {dish.name}
                    </h3>
                    {dish.isSpicy && (
                      <div className="flex items-center text-red-500">
                        <span className="text-sm mr-1">🌶️</span>
                        <span className="text-xs font-medium">Spicy</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex text-yellow-400 mr-2">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${i < Math.floor(dish.rating) ? 'fill-current' : ''}`} 
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">
                        {dish.rating} ({dish.reviews})
                      </span>
                    </div>
                    
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="h-4 w-4 mr-1" />
                      {dish.cookTime}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-4 line-clamp-3 text-sm leading-relaxed">
                  {dish.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {dish.tags.slice(0, 3).map((tag, index) => (
                    <span 
                      key={index}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Price and Actions */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-gray-900">
                      {formatPrice(dish.price)}
                    </span>
                    {dish.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">
                        {formatPrice(dish.originalPrice)}
                      </span>
                    )}
                  </div>
                  
                  <button
                    onClick={() => addToCart(dish.id)}
                    className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-4 py-2 rounded-full flex items-center space-x-2 font-semibold transition-all duration-200 hover:scale-105 shadow-lg"
                  >
                    <ShoppingCart className="h-4 w-4" />
                    <span>Add</span>
                    {cart[dish.id] && (
                      <span className="bg-white text-orange-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                        {cart[dish.id]}
                      </span>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-white hover:bg-gray-50 text-gray-800 px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-xl border-2 border-gray-200 hover:border-orange-300 transition-all duration-300 inline-flex items-center">
            View Full Menu
            <Plus className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}