"use client";
import { extendTheme } from "@chakra-ui/react";
import { Jost } from "next/font/google";

const JostFont = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jost",
});
console.log(JostFont);
const textStyles = {
  paragraph: {
    description: "The Paragrah text style - used in paragraphs",
    fontFamily: JostFont.style.fontFamily,
    fontSize: "14px",
    lineHeight: "30px",
    color: "black",
  },
  h1: {
    description: "The 1 Heading text style - used in paragraphs",
    fontFamily: JostFont.style.fontFamily,
    fontSize: "38px",
    lineHeight: "30px",
  },
};

const theme = extendTheme({
  textStyles,
});

export default theme;
