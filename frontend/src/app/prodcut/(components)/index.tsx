"use client";
import React, { useState } from "react";
import {
  ShoppingCart,
  Heart,
  Star,
  Truck,
  Shield,
  RotateCcw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const WatchProductPage = () => {
  // Sample watch data
  const watch = {
    name: "Classic Heritage Timepiece",
    price: 599,
    originalPrice: 799,
    rating: 4.8,
    reviews: 124,
    description:
      "Crafted with precision and elegance, this timeless watch features a Swiss movement, sapphire crystal glass, and genuine leather strap. Perfect for both formal occasions and everyday wear.",
    features: [
      "Swiss Quartz Movement",
      "Sapphire Crystal Glass",
      "Genuine Italian Leather Strap",
      "Water Resistant 50M",
      "2 Year Warranty",
    ],
  };

  // Sample product images
  const productImages = [
    "https://images.unsplash.com/photo-1523170335258-f5c216dd84a8?w=800&h=800&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&h=800&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=800&h=800&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=800&h=800&fit=crop&crop=center",
  ];

  const [selectedImage, setSelectedImage] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  const handleMouseEnter = () => {
    setIsZoomed(true);
  };

  const handleMouseLeave = () => {
    setIsZoomed(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <nav className="text-sm text-gray-500">
          <span>Home</span> <span className="mx-2">/</span>
          <span>Watches</span> <span className="mx-2">/</span>
          <span className="text-gray-900">{watch.name}</span>
        </nav>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Images */}
          <div className="space-y-6">
            {/* Main Product Image */}
            <div className="relative bg-gray-50 rounded-lg overflow-hidden">
              <div
                className="relative w-full h-96 lg:h-[500px] cursor-zoom-in overflow-hidden"
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Image
                  width={800}
                  height={0}
                  src={
                    "https://louris.wpbingosite.com/wp-content/uploads/2020/12/fossil-3-hand-sports-3.jpg"
                  }
                  alt={watch.name}
                  className={`w-full h-full object-cover transition-transform duration-300 ease-out ${
                    isZoomed ? "scale-150" : "scale-100"
                  }`}
                  style={
                    isZoomed
                      ? {
                          transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`,
                        }
                      : {}
                  }
                />
              </div>
            </div>

            {/* Thumbnail Images */}
            <div className="flex space-x-3 overflow-x-auto pb-2">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                    selectedImage === index
                      ? "border-black shadow-lg"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <Image
                    width={200}
                    height={200}
                    src={
                      "https://louris.wpbingosite.com/wp-content/uploads/2020/12/fossil-3-hand-sports-3.jpg"
                    }
                    alt={`${watch.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column - Product Details */}
          <div className="space-y-6">
            {/* Product Name & Rating */}
            <div>
              <h1 className="text-3xl lg:text-4xl font-light text-gray-900 mb-2">
                {watch.name}
              </h1>
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(watch.rating)
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  {watch.rating} ({watch.reviews} reviews)
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-baseline space-x-3">
              <span className="text-3xl font-light text-gray-900">
                ${watch.price}
              </span>
              <span className="text-xl text-gray-400 line-through">
                ${watch.originalPrice}
              </span>
              <span className="bg-red-100 text-red-800 text-sm px-2 py-1 rounded">
                Save ${watch.originalPrice - watch.price}
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed">{watch.description}</p>

            {/* Features */}
            <div>
              <h3 className="font-medium text-gray-900 mb-3">Key Features</h3>
              <ul className="space-y-2">
                {watch.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center text-sm text-gray-600"
                  >
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4 pt-6">
              <div className="flex flex-col sm:flex-row gap-3">
                <Button className="flex-1 bg-black text-white hover:bg-gray-800 transition-colors duration-200 h-12 text-base font-medium">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 border-black text-black hover:bg-black hover:text-white transition-colors duration-200 h-12 text-base font-medium"
                >
                  Buy Now
                </Button>
              </div>

              <Button
                variant="ghost"
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={`w-full transition-colors duration-200 ${
                  isWishlisted
                    ? "text-red-600 hover:text-red-700"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                <Heart
                  className={`w-5 h-5 mr-2 ${
                    isWishlisted ? "fill-current" : ""
                  }`}
                />
                {isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
              </Button>
            </div>

            {/* Shipping & Returns Info */}
            <div className="border-t border-gray-200 pt-6 space-y-4">
              <div className="flex items-center text-sm text-gray-600">
                <Truck className="w-5 h-5 mr-3 text-gray-400" />
                <span>Free shipping on orders over $50</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <RotateCcw className="w-5 h-5 mr-3 text-gray-400" />
                <span>30-day return policy</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Shield className="w-5 h-5 mr-3 text-gray-400" />
                <span>2-year warranty included</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchProductPage;
