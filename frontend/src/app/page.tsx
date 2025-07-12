import Navbar from "@/components/Navbar";
import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Box
        h={"90vh"}
        w={"100%"}
        bgPosition="center"
        bgRepeat={"no-repeat"}
        bgSize={"cover"}
        objectFit={"cover"}
        bgColor="red.200"
        bgImage="url(https://img.freepik.com/free-photo/portrait-young-woman-blue-wall_176420-3051.jpg?t=st=1752269027~exp=1752272627~hmac=34ede8d3cb04ac987abcb846d528237123e681430e25b08d6023ef161245a280&w=1380)"
      />
    </div>
  );
}
