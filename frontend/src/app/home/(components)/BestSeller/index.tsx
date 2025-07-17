import GeneralCard from "@/components/customComponents/GeneralCard";
import React from "react";

function BestSeller() {
  return (
    <div className="">
      <h1 className="text-center text-[30px] font-[620]">BEST SELLER</h1>
      <div className=" grid mt-10 grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <GeneralCard key={index} />
        ))}
      </div>
    </div>
  );
}

export default BestSeller;
