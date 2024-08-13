import React from "react";

import { Cards } from "@/components/Card/Card";
import Landing from "./components/Landing/Landing";
import Block1 from "./components/Block1/Block1";

import CarouselComponent from "./components/Slide/CarouselComponent";

import Block2 from "./components/Block2/Block2";

import { homepageInfo } from "./homepagecontent";
import Banner from "./components/Banner/Banner";

import {
  block1HomePage,
  homeCardsData,
  homeCarouselData,
  homeLandingInfo,
} from "@/assets/Info/Info";

const HomePage = () => {
  return (
    <div>
      <Landing data={homeLandingInfo} />
      <div className="">
        {" "}
        <Cards data={homeCardsData} />
        <CarouselComponent data={homeCarouselData} />
        <Block1 data={block1HomePage} />
        <Block2 data={homepageInfo} />
        <Banner />
      </div>
    </div>
  );
};

export default HomePage;
