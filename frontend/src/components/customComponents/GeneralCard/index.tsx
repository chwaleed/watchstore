"use client";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import React from "react";

const badges: {
  varient:
    | "hot"
    | "discount"
    | "default"
    | "secondary"
    | "destructive"
    | "outline";
  value: string;
}[] = [
  {
    varient: "hot",
    value: "HOT",
  },

  {
    varient: "discount",
    value: "17% OFF",
  },
];

function GeneralCard() {
  return (
    <div className="relative w-[327px]">
      <div className="absolute left-3 top-3 flex flex-col gap-1">
        {badges.map((badge, index) => (
          <Badge
            key={`badge-${index}`}
            className="w-full"
            variant={badge.varient || "default"}
          >
            {badge.value}
          </Badge>
        ))}
      </div>
      <div className="absolute right-3 top-3 flex flex-col gap-1">
        {badges.map((badge, index) => (
          <Badge
            key={`badge-${index}`}
            className="w-full"
            variant={badge.varient || "default"}
          >
            {badge.value}
          </Badge>
        ))}
      </div>
      <div className="">
        <Image
          src="https://louris.wpbingosite.com/wp-content/uploads/2020/02/bering-titanium-sunray-orange-10-600x720.jpg"
          alt="Image"
          width={327}
          height={405}
        />
      </div>
      {/* <CardFooter>
        <p>Card Footer</p>
      </CardFooter> */}
    </div>
  );
}

export default GeneralCard;
