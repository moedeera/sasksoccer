import React from "react";
import Hero from "./components/Hero";
import InfoBoxes from "./components/InfoBoxes";

import { Cards } from "@/components/Card/Card";
import Landing from "./components/Landing/Landing";
import Block1 from "./components/Block1/Block1";
import Calendar from "./components/Calendar/Calendar";
import CarouselComponent from "./components/Slide/CarouselComponent";

const HomePage = () => {
  return (
    <div>
      {/* <Hero /> */}
      <Landing />
      <Cards />
      <CarouselComponent />
      <Block1 />
      <Calendar />
      {/* <FeaturedProperties />
      <HomeProperties /> */}
    </div>
  );
};

export default HomePage;
