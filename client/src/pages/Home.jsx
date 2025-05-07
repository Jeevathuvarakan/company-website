import React from "react";
import HeroBanner from "../components/HeroBanner";
import HomeAbout from "../components/HomeAbout";
import Footer from "../components/Footer";
import HomeImpect from "../components/HomeImpect";

function Home() {
  return (
    <div className="">
      <HeroBanner />
      <HomeAbout/>
      <HomeImpect/>
    </div>
  );
}

export default Home;
