import Image from "next/image";
import React from "react";
import Button from "../Button";

interface CardType {
  width?: number;
  actionBtnText?: string | null;
  imageLink: string;
}

function AnimatedCard({
  width = 580,
  actionBtnText = null,
  imageLink,
}: CardType) {
  return (
    <div
      className="relative group overflow-hidden"
      style={{ width: width, display: "inline-block" }}
    >
      <Image
        src={imageLink}
        alt="Image"
        width={width}
        height={0}
        className="transition-transform duration-500 ease-in-out group-hover:scale-105 w-full h-auto"
        style={{ objectFit: "contain" }}
      />
      {actionBtnText && (
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <Button varient="secondary" text={actionBtnText} />
        </div>
      )}
    </div>
  );
}

export default AnimatedCard;
