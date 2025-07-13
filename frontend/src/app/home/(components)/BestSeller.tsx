import ProductCard from "@/components/ProductCard";
import { Center, Heading } from "@chakra-ui/react";
import React from "react";

function BestSeller() {
  return (
    <div>
      <Center>
        <Heading fontWeight={"medium"}>BEST SELLER</Heading>
      </Center>
      <div className="mb-20">
        <ProductCard />
      </div>
    </div>
  );
}

export default BestSeller;
