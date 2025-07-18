import Button from "@/components/customComponents/Button";
import Image from "next/image";
import React from "react";

function Display() {
  return (
    <div className="flex justify-between  ">
      <div className="flex-1 flex flex-col justify-center pl-16 items-start gap-4">
        <h1 className="h1">Echoes of Time</h1>
        <p className="p max-w-md">
          Choosing a watch is not just a matter of aesthetics but also related
          to lifestyle, usage needs and budget. Each type of…
        </p>
        <Button
          text="shop now"
          varient="secondary"
          className="border-1 border-black mt-4 "
        />
      </div>
      <div className="flex-1  relative flex justify-end ">
        <Image
          width={650}
          height={0}
          src="https://louris.wpbingosite.com/wp-content/uploads/2025/04/banner-5.jpg"
          alt="Image"
        />
        <div className="bg-[#ECE3D2]  absolute w-full top-0 bottom-0  translate-y-[10%] scale-95   left-[-1.5%] z-[-1] "></div>
      </div>
    </div>
  );
}

export default Display;
