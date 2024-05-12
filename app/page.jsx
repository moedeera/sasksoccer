import React from "react";
import Hero from "./components/Hero";
import InfoBoxes from "./components/InfoBoxes";

import { Cards } from "@/components/Card/Card";
import Landing from "./components/Landing/Landing";

const HomePage = () => {
  return (
    <div>
      {/* <Hero /> */}
      <Landing />
      <Cards />
      <InfoBoxes />
      {/* <FeaturedProperties />
      <HomeProperties /> */}
    </div>
  );
};

export default HomePage;
