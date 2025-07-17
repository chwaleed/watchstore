// import AppWrapper from "@/components/customComponents/AppWrapper";
import Navbar from "@/components/customComponents/Navbar";
import React from "react";
import Hero from "./(components)/Hero";
import AppWrapper from "@/components/customComponents/AppWrapper";
import Info from "./(components)/info";
import BestSeller from "./(components)/BestSeller";
import AnimatedCard from "@/components/customComponents/AnimatedCard";

const cardData = [
  {
    width: 409,
    actionBtnText: "New Arrivals",
    imageLink:
      "https://louris.wpbingosite.com/wp-content/uploads/2025/04/banner-2.jpg",
  },
  {
    width: 560,
    actionBtnText: "For Men",
    imageLink:
      "https://louris.wpbingosite.com/wp-content/uploads/2025/04/banner-3.jpg",
  },
  {
    width: 409,
    actionBtnText: "For Women",
    imageLink:
      "https://louris.wpbingosite.com/wp-content/uploads/2025/04/banner-4.jpg",
  },
];

function Home() {
  return (
    <div className="max-w-screen overflow-hidden ">
      <Navbar />

      <section className="Hero-section">
        <Hero />
      </section>

      <AppWrapper className="mt-18 mb-20 ">
        <Info />
      </AppWrapper>

      <AppWrapper className="mt-18 mb-20">
        <BestSeller />
      </AppWrapper>
      <AppWrapper className="mt-18 mb-20">
        <div className="flex flex-nowrap justify-between gap-10 ">
          {cardData.map((card, index) => (
            <AnimatedCard key={index} {...card} />
          ))}
        </div>
      </AppWrapper>
    </div>
  );
}

export default Home;
