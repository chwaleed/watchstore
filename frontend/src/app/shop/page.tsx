import AppWrapper from "@/components/customComponents/AppWrapper";
import GeneralCard from "@/components/customComponents/GeneralCard";
import React from "react";

function Shop() {
  return (
    <AppWrapper className="">
      <h1>Shop</h1>
      <div className="grid grid-cols-2 md:grid-cols-3  gap-6 lg:gap-20">
        {Array.from({ length: 12 }).map((_, index) => (
          <div className="  xl:w-[460px] " key={index}>
            <GeneralCard />
          </div>
        ))}
      </div>
    </AppWrapper>
  );
}

export default Shop;
