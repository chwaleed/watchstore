import GeneralCarousel from "@/components/Carousel";
import { Box } from "@chakra-ui/react";
import React from "react";

const Images = [
  {
    alt: "First Image",
    src: "https://img.freepik.com/free-photo/portrait-young-woman-blue-wall_176420-3051.jpg?t=st=1752269027~exp=1752272627~hmac=34ede8d3cb04ac987abcb846d528237123e681430e25b08d6023ef161245a280&w=1380",
  },
  {
    alt: "First Image",
    src: "https://img.freepik.com/free-photo/portrait-young-woman-blue-wall_176420-3051.jpg?t=st=1752269027~exp=1752272627~hmac=34ede8d3cb04ac987abcb846d528237123e681430e25b08d6023ef161245a280&w=1380",
  },
  {
    alt: "First Image",
    src: "https://img.freepik.com/free-photo/portrait-young-woman-blue-wall_176420-3051.jpg?t=st=1752269027~exp=1752272627~hmac=34ede8d3cb04ac987abcb846d528237123e681430e25b08d6023ef161245a280&w=1380",
  },
];

function Hero() {
  return (
    <GeneralCarousel>
      {Images.map((image, index) => (
        <Box
          key={index}
          h={"90vh"}
          w={"100%"}
          bgRepeat={"no-repeat"}
          bgSize={"cover"}
          className="max-h-[90vh]  mb-20"
          bgImage={`url(${image.src})`}
        ></Box>
      ))}
    </GeneralCarousel>
  );
}

export default Hero;
