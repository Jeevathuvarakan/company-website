import React from "react";
import HeroBanner from "../components/HeroBanner";
import HomeAbout from "../components/HomeAbout";
import Footer from "../components/Footer";
import HomeImpect from "../components/HomeImpect";
import HomeContactUs from "../components/HomeContactUs";
import HomeCarriers from "../components/HomeCarriers";

function Home() {
  return (
    <div className="">
      <HeroBanner />
      <HomeAbout/>
      <HomeImpect/>
      <HomeCarriers/>
      <HomeContactUs/>
    </div>
  );
}

export default Home;
