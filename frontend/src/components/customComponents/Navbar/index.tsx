import React from "react";
import { RenderNavigation } from "./components/RenderNavigation";
import Image from "next/image";

function Navbar() {
  return (
    <div className="flex justify-between items-center h-[100px] ">
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
    </div>
  );
}

export default Navbar;
