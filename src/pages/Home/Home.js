import React from "react";
import Hero from "./Hero/Hero";
import FeaturePies from "./FeaturePies/FeaturePies";


function Home() {
  return (
    <div className="home-container">
      <Hero />
      <FeaturePies />
    </div>
  );
};
export default Home;