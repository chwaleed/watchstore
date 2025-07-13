"use client";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function GeneralCarousel({ children }: { children: React.ReactNode[] }) {
  return (
    <Carousel
      showArrows={false}
      showStatus={false}
      dynamicHeight
      className="w-full  "
    >
      {children}
    </Carousel>
  );
}

export default GeneralCarousel;
