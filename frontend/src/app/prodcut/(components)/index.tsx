"use client";
import React, { useState } from "react";
import {
  Heart,
  Search,
  User,
  ShoppingCart,
  ChevronLeft,
  ChevronRight,
  Share2,
  GitCompare,
  Minus,
  Plus,
  Star,
  Truck,
} from "lucide-react";
import Image from "next/image";
import Button from "@/components/customComponents/Button";

const ProductDetailPage = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Sample product images
  const productImages = [
    "https://louris.wpbingosite.com/wp-content/uploads/2020/12/g-shock-digital-3.jpg",
    "https://louris.wpbingosite.com/wp-content/uploads/2020/12/g-shock-digital.jpg",
    "https://louris.wpbingosite.com/wp-content/uploads/2020/12/g-shock-digital-4.jpg",
  ];

  const handleQuantityChange = (action) => {
    if (action === "increment") {
      setQuantity((prev) => prev + 1);
    } else if (action === "decrement" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleImageSelect = (index) => {
    setSelectedImage(index);
  };

  const handlePrevImage = () => {
    setSelectedImage((prev) =>
      prev === 0 ? productImages.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setSelectedImage((prev) =>
      prev === productImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="max-w-[425px]   bg-white">
      {/* Main Content */}
      <div className="mt-10">
        <div className="flex">
          {/* Left Column - Product Gallery (40%) */}
          <div className="lg:col-span-3 flex-1">
            <div className="flex flex-col-reverse lg:flex-row gap-4">
              {/* Thumbnails */}
              <div className="flex flex-row lg:flex-col gap-2 lg:w-20">
                {productImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => handleImageSelect(index)}
                    className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImage === index
                        ? "border-black"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <Image
                      width={200}
                      height={200}
                      src={image}
                      alt={`Product view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

              {/* Main Image */}
              <div className="flex-1 relative">
                <div className="rounded-lg min-w-[400px] h-[500px] lg:h-[600px] xl:h-[700px] overflow-hidden bg-gray-100">
                  <Image
                    fill={true}
                    src={productImages[selectedImage]}
                    alt="Main product view"
                    className="w-full h-full object-cover"
                  />

                  <button
                    onClick={handlePrevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 transition-colors"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 transition-colors"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Product Details (60%) */}
          <div className="mt-8 ml-7 flex-1 lg:mt-0 lg:col-span-3">
            {/* Title */}
            <h1 className="h2 mb-3">G-SHOCK DIGITAL</h1>

            {/* Rating */}
            <div className="flex items-center mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-600">(24 reviews)</span>
            </div>

            {/* Pricing */}
            <div className="flex items-center gap-4 mb-4">
              <span className="text-2xl font-semibold text-gray-900">
                $80.00
              </span>
              <span className="text-xl text-gray-500 line-through">
                $100.00
              </span>
              <span className="bg-red-500 text-white px-2 py-1 text-sm font-semibold rounded">
                20% OFF
              </span>
            </div>

            {/* Description */}
            <div className="mb-6">
              <p className="text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </div>

            {/* Quantity and Buttons */}
            <div className="space-y-4 mb-6">
              {/* Quantity Selector */}
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-gray-900">
                  Quantity:
                </span>
                <div className="flex items-center border border-gray-300 ">
                  <button
                    onClick={() => handleQuantityChange("decrement")}
                    className="p-2 hover:bg-gray-50 transition-colors"
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) =>
                      setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                    }
                    className="w-12 text-center border-0 focus:ring-0 border-none focus:outline-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [-moz-appearance:textfield]"
                    min="1"
                  />
                  <button
                    onClick={() => handleQuantityChange("increment")}
                    className="p-2 hover:bg-gray-50 transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  varient="primary"
                  className="flex-1 border-2 !bg-black text-white  !py-4 border-none hover:!bg-gray-900 justify-center "
                >
                  ADD TO CART
                </Button>
                <Button
                  varient="primary"
                  className="flex-1 border-2 border-black justify-center"
                >
                  BUY NOW
                </Button>
              </div>

              {/* Action Icons */}
              <div className="flex items-center gap-4 pt-2">
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-red-500 transition-colors"
                >
                  <Heart
                    className={`h-4 w-4 ${
                      isWishlisted ? "fill-red-500 text-red-500" : ""
                    }`}
                  />
                  Wishlist
                </button>
                <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  <GitCompare className="h-4 w-4" />
                  Compare
                </button>
                <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  <Share2 className="h-4 w-4" />
                  Share
                </button>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="mb-6">
              <p className="text-sm text-gray-600 mb-3">
                Accepted Payment Methods:
              </p>
              <div className="flex flex-wrap gap-2">
                <div className="bg-gray-100 px-3 py-1 rounded text-xs font-medium">
                  Mastercard
                </div>
                <div className="bg-gray-100 px-3 py-1 rounded text-xs font-medium">
                  Apple Pay
                </div>
                <div className="bg-gray-100 px-3 py-1 rounded text-xs font-medium">
                  Visa
                </div>
                <div className="bg-gray-100 px-3 py-1 rounded text-xs font-medium">
                  Amex
                </div>
                <div className="bg-gray-100 px-3 py-1 rounded text-xs font-medium">
                  PayPal
                </div>
                <div className="bg-gray-100 px-3 py-1 rounded text-xs font-medium">
                  Stripe
                </div>
                <div className="bg-gray-100 px-3 py-1 rounded text-xs font-medium">
                  Clearpay
                </div>
              </div>
            </div>

            {/* Shipping Info */}
            <div className="border-t border-gray-200 pt-6">
              <div className="flex items-center gap-3 mb-3">
                <Truck className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium text-gray-900">
                  Free worldwide shipping on orders over $100
                </span>
              </div>
              <div className="text-sm text-gray-600 mb-4">
                <span className="font-medium">Delivery:</span> 3-7 Working Days
                <a href="#" className="text-black hover:underline ml-2">
                  View shipping details
                </a>
              </div>

              {/* Product Meta */}
              <div className="text-sm text-gray-600 space-y-1">
                <p>
                  <span className="font-medium">SKU:</span> D2300-S2
                </p>
                <p>
                  <span className="font-medium">Categories:</span>
                  <a href="#" className="text-black hover:underline ml-1">
                    Daniel Wellington
                  </a>
                  ,
                  <a href="#" className="text-black hover:underline ml-1">
                    Maserati
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
