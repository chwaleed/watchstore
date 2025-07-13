"use client";
import Navbar from "@/components/Navbar";
import Wrapper from "@/components/Wrapper";
import Hero from "./(components)/Hero";
import DisplaySection from "./(components)/DisplaySection";
import BestSeller from "./(components)/BestSeller";

function Home() {
  return (
    <div>
      {/* <Wrapper>
        <Navbar />
      </Wrapper>
      <Hero /> */}

      <Wrapper>
        <div className="mt-20">
          <DisplaySection />
        </div>
        <div className="mt-20">
          <BestSeller />
        </div>
      </Wrapper>
    </div>
  );
}

export default Home;
