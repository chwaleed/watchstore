import React from "react";
import { RenderNavigation } from "./components/RenderNavigation";
import Image from "next/image";
import { Heart, Search, ShoppingCart, User } from "lucide-react";

function Navbar() {
  return (
    <nav className="flex px-56 justify-between border-b border-gray-200 items-center h-[100px] ">
      <Image
        src={
          "https://louris.wpbingosite.com/wp-content/themes/louris/assets/images/logo/logo.svg"
        }
        width={100}
        height={50}
        alt="Logo"
      />
      <RenderNavigation />
      <div className="flex items-center space-x-4">
        <Search className="h-5 w-5 text-gray-700 hover:text-gray-900 cursor-pointer" />
        <User className="h-5 w-5 text-gray-700 hover:text-gray-900 cursor-pointer" />
        <div className="relative">
          <Heart className="h-5 w-5 text-gray-700 hover:text-gray-900 cursor-pointer" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
            0
          </span>
        </div>
        <div className="relative">
          <ShoppingCart className="h-5 w-5 text-gray-700 hover:text-gray-900 cursor-pointer" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
            0
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
