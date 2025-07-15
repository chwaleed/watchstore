"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import React from "react";

function AppCarousel({ styles = "", options = {}, autoPlay = true }) {
  const autoPlayConfig = [
    Autoplay({
      delay: 6000,
    }),
  ];
  return (
    <div>
      <Carousel plugins={(autoPlay && autoPlayConfig) || []} {...options}>
        <CarouselContent className="transition-transform duration-1000 ease-in-out">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div
                className={`relative h-[90vh] w-full overflow-hidden ${styles}`}
              >
                <Image
                  src="https://louris.wpbingosite.com/wp-content/uploads/2025/04/banner-5.jpg"
                  alt="Banner Image"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

export default AppCarousel;
