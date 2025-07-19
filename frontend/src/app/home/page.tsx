import React from "react";
import Hero from "./(components)/Hero";
import AppWrapper from "@/components/customComponents/AppWrapper";
import Info from "./(components)/info";
import BestSeller from "./(components)/BestSeller";
import Hot from "./(components)/Hot";

import Testimonial from "./(components)/Testimonial";
import Display from "./(components)/Display";

function Home() {
  return (
    <div>
      <section className="Hero-section">
        <Hero />
      </section>

      <AppWrapper className="mt-18 mb-20 flex flex-col gap-24">
        <Info />
        <BestSeller />
        <Hot />
        <Display />
      </AppWrapper>
      <div className="mb-20 pt-10">
        <Testimonial />
      </div>
    </div>
  );
}

export default Home;
