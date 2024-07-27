import React from "react";
import Landing from "../components/Landing/Landing";
import Block4 from "../components/Block4/Block4";
import { latestOpener } from "./latestInfo";
import CarouselComponent from "../components/Slide/CarouselComponent";
import Block3 from "../components/Block3/Block3";
import { homeCarouselData } from "@/assets/Info/Info";

const page = () => {
  const leaguePageHeader = {
    title: "Latest",
    content: null,
    button: null,
    mini: true,
  };

  return (
    <div>
      <Landing data={leaguePageHeader} />
      <Block4 data={latestOpener} />
      <CarouselComponent data={homeCarouselData} />
      {/* <Block3 /> */}
    </div>
  );
};

export default page;
