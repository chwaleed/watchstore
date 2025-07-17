"use client";
import { Badge } from "@/components/ui/badge";
import { ArrowRightLeft, Heart, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "../Button";

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

const ActionButtons = [
  {
    icon: <Search size={22} />,
    label: "Search",
    action: () => console.log("Search clicked"),
  },
  {
    icon: <Heart size={22} />,
    label: "Wishlist",
    action: () => console.log("Search clicked"),
  },
  {
    icon: <ArrowRightLeft size={22} />,
    label: "Compare",
    action: () => console.log("Search clicked"),
  },
];

function GeneralCard() {
  return (
    <div className="overflow-hidden group w-[327px]">
      <div className="relative group">
        <div className="absolute z-10 left-3 top-3 flex flex-col gap-1">
          {badges.map((badge, index) => (
            <Badge
              key={`badge-${index}`}
              className="w-full outline-0 border-0 "
              variant={badge.varient || "default"}
            >
              {badge.value}
            </Badge>
          ))}
        </div>
        <div className="absolute z-10 right-[-50px] group-hover:right-3  transition-all ease-in-out duration-200  top-3 flex flex-col gap-1">
          {ActionButtons.map((items, index) => (
            <button
              key={`actionButton-${index}`}
              onClick={items.action}
              className="bg-white p-2 hover:bg-gray-50 hover:cursor-pointer"
            >
              {items.icon}
            </button>
          ))}
        </div>
        <div className="absolute z-10 left-[50%] top-[50%] translate-y-[50%] opacity-0  invisible translate-x-[-50%]   group-hover:block group-hover:translate-y-[-50%] group-hover:visible group-hover:opacity-100 transition-all ease-in-out duration-200 ">
          <Button varient="primary" text={"Add to cart"} />
        </div>
        <div className="relative overflow-hidden">
          <Image
            className="transition-opacity duration-300 ease-in-out group-hover:opacity-0"
            src="https://louris.wpbingosite.com/wp-content/uploads/2020/02/bering-titanium-sunray-orange-10-600x720.jpg"
            alt="Product Image 1"
            width={327}
            height={405}
          />

          <Image
            className="absolute z-0 inset-0 transition-opacity duration-300 ease-in-out opacity-0  group-hover:opacity-100 "
            src="https://louris.wpbingosite.com/wp-content/uploads/2020/12/fossil-3-hand-sports-2-600x720.jpg"
            alt="Product Image 2"
            width={327}
            height={405}
          />
        </div>
      </div>

      <div className="flex flex-col mt-4 gap-1">
        <Link
          href={""}
          className="uppercase text-gray-400 font-semibold text-xs"
        >
          Womens&apos;s
        </Link>
        <Link href={""} className="font-semibold">
          Bering Aurora Collection
        </Link>
        <div className="font-semibold flex gap-1 mt-1">
          <span className=" text-gray-400 line-through  ">$240</span>
          <span>$200.00</span>
        </div>
      </div>
    </div>
  );
}

export default GeneralCard;
