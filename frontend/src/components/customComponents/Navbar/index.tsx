import React from "react";
import { RenderNavigation } from "./components/RenderNavigation";
import Image from "next/image";

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
      <h4>Search</h4>
    </nav>
  );
}

export default Navbar;
