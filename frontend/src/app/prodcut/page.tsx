import AppWrapper from "@/components/customComponents/AppWrapper";
import React from "react";
import WatchProductPage from "./(components)";
import BestSeller from "../home/(components)/BestSeller";

function Product() {
  return (
    <AppWrapper className=" overflow-hidden ">
      <WatchProductPage />
      <div className="mt-10">
        <BestSeller />
      </div>
      <div className="w-full flex justify-center items-center mt-16 hover:text-blue-600">
        <a className="" href="">
          Show More
        </a>
      </div>
    </AppWrapper>
  );
}

export default Product;
