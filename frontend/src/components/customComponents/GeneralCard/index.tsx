"use client";
import { Badge } from "@/components/ui/badge";
import { ArrowRightLeft, Heart, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "../Button";

const badges: { varient: "hot" | "discount"; value: string }[] = [
  { varient: "hot", value: "HOT" },
  { varient: "discount", value: "17% OFF" },
];

const ActionButtons = [
  {
    icon: <Search size={22} />,
    label: "Search",
    action: () => console.log("Search clicked"),
  },
  {
    icon: <Heart size={22} />,
    label: "Wishlist",
    action: () => console.log("Wishlist clicked"),
  },
  {
    icon: <ArrowRightLeft size={22} />,
    label: "Compare",
    action: () => console.log("Compare clicked"),
  },
];

interface GeneralCardProps {
  hasButton?: boolean;
}

function GeneralCard({ hasButton = false }: GeneralCardProps) {
  return (
    <div className="group overflow-hidden  w-full mx-auto">
      <div className="relative w-full aspect-[5/6]">
        {/* Badges */}
        <div className="absolute z-10 left-3 top-3 flex flex-col gap-1">
          {badges.map((badge, index) => (
            <Badge
              key={`badge-${index}`}
              className="w-full outline-0 border-0"
              variant={badge.varient}
            >
              {badge.value}
            </Badge>
          ))}
        </div>

        {/* Action buttons */}
        <div className="absolute z-10 right-[-50px] group-hover:right-3 transition-all duration-300 top-3 flex flex-col gap-1">
          {ActionButtons.map((item, index) => (
            <button
              key={`actionButton-${index}`}
              onClick={item.action}
              className="bg-white p-2 hover:bg-gray-50"
            >
              {item.icon}
            </button>
          ))}
        </div>

        {/* Add to cart button */}
        {hasButton && (
          <div className="absolute z-10 left-1/2 top-1/2 -translate-x-1/2 translate-y-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:-translate-y-1/2 transition-all duration-300">
            <Button varient="primary">Add to cart</Button>
          </div>
        )}

        {/* Images */}
        <Image
          src="https://louris.wpbingosite.com/wp-content/uploads/2020/02/bering-titanium-sunray-orange-10-600x720.jpg"
          alt="Product Image 1"
          fill
          className="object-cover transition-opacity duration-300 group-hover:opacity-0"
        />
        <Image
          src="https://louris.wpbingosite.com/wp-content/uploads/2020/12/fossil-3-hand-sports-2-600x720.jpg"
          alt="Product Image 2"
          fill
          className="object-cover transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        />
      </div>

      {/* Text section */}
      <div className="flex flex-col mt-4 gap-1">
        <Link href="" className="uppercase text-gray-400 font-semibold text-xs">
          Womens&apos;s
        </Link>
        <Link href="" className="font-semibold">
          Bering Aurora Collection
        </Link>
        <div className="font-semibold flex gap-1 mt-1">
          <span className="text-gray-400 line-through">$240</span>
          <span>$200.00</span>
        </div>
      </div>
    </div>
  );
}

export default GeneralCard;
