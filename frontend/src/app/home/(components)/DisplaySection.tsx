import FadeInImageBox from "@/components/FadeInImageBox";
import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

function DisplaySection() {
  return (
    <Flex justifyContent={"space-between"} gap={10}>
      <FadeInImageBox
        alt={"Image"}
        src={
          "https://louris.wpbingosite.com/wp-content/uploads/2025/04/images.jpg"
        }
      />

      <div className=" flex flex-col gap-13">
        <div className=" object-cover overflow-hidden">
          <Image
            className=" w-full h-full "
            alt="image"
            src="http://louris.wpbingosite.com/wp-content/uploads/2025/04/lookbook.jpg"
          />
        </div>
        <div className="flex flex-col gap-6">
          <Heading fontWeight={"normal"}>Classic Watches</Heading>
          <Text textStyle="paragraph" className="">
            From the first mechanical watches to modern smartwatches,
            <br />
            watchmaking…
          </Text>
        </div>
      </div>
    </Flex>
  );
}

export default DisplaySection;
