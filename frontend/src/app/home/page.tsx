// import AppWrapper from "@/components/customComponents/AppWrapper";
import Navbar from "@/components/customComponents/Navbar";
import React from "react";
import Hero from "./(components)/Hero";
import AppWrapper from "@/components/customComponents/AppWrapper";
import Info from "./(components)/info";
import GeneralCard from "@/components/customComponents/GeneralCard";

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
        <GeneralCard />
      </AppWrapper>
    </div>
  );
}

export default Home;
