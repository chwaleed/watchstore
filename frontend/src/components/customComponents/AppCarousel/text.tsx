"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function FadeCarousel({
  images = [
    "https://louris.wpbingosite.com/wp-content/uploads/2025/04/banner-5.jpg",
    "https://louris.wpbingosite.com/wp-content/uploads/2025/04/banner-3.jpg",
    "https://louris.wpbingosite.com/wp-content/uploads/2025/04/banner-2.jpg",
    "https://louris.wpbingosite.com/wp-content/uploads/2025/04/banner-1.jpg",
  ],
  autoPlay = true,
  interval = 3000,
}) {
  const [current, setCurrent] = useState(0);
  // Initialize isAutoPlay with the autoPlay prop value

  useEffect(() => {
    if (!autoPlay) return;

    const intervalId = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(intervalId);
  }, [autoPlay, interval, images.length]);

  const goToSlide = (index: number) => {
    if (index === current) return;
    setCurrent(index);
  };

  return (
    <div className="relative h-[90vh] w-full overflow-hidden group">
      {/* Images */}
      {images.map((src, index) => (
        <Image
          key={index}
          src={src}
          alt={`Slide ${index}`}
          fill
          className={`transition-opacity duration-1000 ease-in-out ${
            current === index ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{ objectFit: "cover" }}
        />
      ))}

      {/* Dot Navigation */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex space-x-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                current === index
                  ? "bg-white scale-125 shadow-lg"
                  : "bg-white/60 hover:bg-white/80 scale-100"
              } cursor-pointer`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
