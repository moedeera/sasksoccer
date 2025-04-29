import React from "react";
import Landing from "../components/Landing/Landing";
import Block4 from "../components/Block4/Block4";
import { GlitchesFix, latestOpener } from "./latestInfo";
import CarouselComponent from "../components/Slide/CarouselComponent";
import Block3 from "../components/Block3/Block3";
import { homeCarouselData } from "../../assets/Info/Info";
import Landing2 from "../components/Landing2/Landing2";

export default function Page() {
  const leaguePageHeader = {
    title: "Latest",
    content: null,
    button: null,
    mini: true,
  };

  return (
    <div>
      <Landing2 data={leaguePageHeader} />
      <Block4 data={GlitchesFix} />
      <Block4 data={latestOpener} />
      <CarouselComponent data={homeCarouselData} />
      {/* <Block3 /> */}
    </div>
  );
}
