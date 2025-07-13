"use client";
import { createSystem, defaultConfig } from "@chakra-ui/react";
// import { Jost } from "next/font/google";

// const JostFont = Jost({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
//   variable: "--font-jost",
// });
// const textStyles = {
//   paragraph: {
//     description: "The Paragrah text style - used in paragraphs",
//     fontFamily: JostFont.style.fontFamily,
//     fontSize: "18px",
//     color: "gray.400",
//   },
//   h1: {
//     description: "The 1 Heading text style  used in paragraphs",
//     fontFamily: JostFont.style.fontFamily,
//     fontSize: "38px",
//     lineHeight: "30px",
//   },
// };

// const theme = extendTheme({
//   textStyles,
// });

export const theme = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        heading: { value: `'Figtree', sans-serif` },
        body: { value: `'Figtree', sans-serif` },
      },
    },
  },
});
export default theme;
