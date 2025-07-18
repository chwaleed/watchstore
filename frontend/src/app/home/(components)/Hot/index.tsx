import AnimatedCard from "@/components/customComponents/AnimatedCard";
import React from "react";

const cardData = [
  {
    width: 409,
    actionBtnText: "New Arrivals",
    imageLink:
      "https://louris.wpbingosite.com/wp-content/uploads/2025/04/banner-2.jpg",
  },
  {
    width: 560,
    actionBtnText: "For Men",
    imageLink:
      "https://louris.wpbingosite.com/wp-content/uploads/2025/04/banner-3.jpg",
  },
  {
    width: 409,
    actionBtnText: "For Women",
    imageLink:
      "https://louris.wpbingosite.com/wp-content/uploads/2025/04/banner-4.jpg",
  },
];

function Hot() {
  return (
    <div className="flex flex-nowrap justify-between gap-10 ">
      {cardData.map((card, index) => (
        <AnimatedCard key={index} {...card} />
      ))}
    </div>
  );
}

export default Hot;
