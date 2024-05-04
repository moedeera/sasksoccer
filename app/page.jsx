import React from "react";
import Hero from "./components/Hero";
import InfoBoxes from "./components/InfoBoxes";
import HomeProperties from "./components/HomeProperties";
import FeaturedProperties from "./components/FeaturedProperties";
import { Cards } from "@/components/Card/Card";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Cards />
      <InfoBoxes />
      <FeaturedProperties />
      <HomeProperties />
    </>
  );
};

export default HomePage;
