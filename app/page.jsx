import React from "react";

import { Cards } from "../components/Card/Card";
import Landing from "./components/Landing/Landing";
import Block1 from "./components/Block1/Block1";

import CarouselComponent from "./components/Slide/CarouselComponent";

import Banner from "./components/Banner/Banner";

import {
  block1HomePage,
  block1HomePageFall,
  block1HomePageSpring,
  block1HomePageWinter,
  homeCardsData,
  homeCarouselData,
  homeLandingInfo,
} from "../assets/Info/Info";
import LoadingBars from "./components/LoadingBars/LoadingBars";
import Slideshow from "./components/SlideShow/SlideShow";
import IndoorSeasonInfo from "./leagues/IndoorSeasonInfo";
import OutdoorSeasonInfo from "./leagues/OutdoorSeasonInfo";

const HomePage = () => {
  const slides = [
    {
      header: "Saskatoon Soccer News & Updates",
      paragraph: "",
      image:
        "https://images.pexels.com/photos/9519554/pexels-photo-9519554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      button: "Learn More",
    },
    {
      header: "Indoor Season Is here",
      paragraph: "Click here for more information on registration deadlines.",
      image:
        "https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg?auto=compress&cs=tinysrgb&w=600",
      button: "Discover",
    },
    {
      header: "Slide 3 Header",
      paragraph: "This is the third slide.",
      image:
        "https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg?auto=compress&cs=tinysrgb&w=600",
      button: "Get Started",
    },
  ];

  return (
    <div>
      {/* <Slideshow slides={slides} /> */}
      {/* <div className="homepage-landing-slideshow"></div> */}
      <Landing data={homeLandingInfo} />

      <div className="">
        {" "}
        <Cards data={homeCardsData} />
        <CarouselComponent data={homeCarouselData} />
        <Block1 info={block1HomePageSpring} />
        {/* <Block2 data={homepageInfo} /> */}
        {/* <IndoorSeasonInfo /> */}
        <OutdoorSeasonInfo />
        <Banner />
      </div>
    </div>
  );
};

export default HomePage;
