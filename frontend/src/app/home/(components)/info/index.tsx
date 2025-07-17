import AnimatedCard from "@/components/customComponents/AnimatedCard";
import Image from "next/image";
import React from "react";

const cardProps = {
  width: 585,
  imageLink:
    "https://louris.wpbingosite.com/wp-content/uploads/2025/04/images.jpg",
};

function Info() {
  return (
    <div className="flex justify-between">
      <AnimatedCard {...cardProps} />
      <div>
        <div>
          <Image
            height={400}
            width={600}
            className="w-[auto]"
            alt="Image"
            src="https://louris.wpbingosite.com/wp-content/uploads/2025/04/lookbook.jpg"
          />
          <div className="flex flex-col gap-6 mt-10">
            <h1 className="text-5xl ">Classic Watches</h1>
            <p className="text-gray-400 text-lg">
              From the first mechanical watches to modern smartwatches,
              <br />
              watchmaking…
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
