import Image from "next/image";
import React from "react";

function AnimatedCard({ width = 580 }) {
  return (
    <div
      className="relative group overflow-hidden"
      style={{ width: width, display: "inline-block" }}
    >
      <Image
        src="https://louris.wpbingosite.com/wp-content/uploads/2025/04/images.jpg"
        alt="Image"
        width={width}
        height={0}
        className="transition-transform duration-500 ease-in-out group-hover:scale-105 w-full h-auto"
        style={{ objectFit: "contain" }}
      />
    </div>
  );
}

export default AnimatedCard;
