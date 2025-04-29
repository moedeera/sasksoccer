import React from "react";
import Landing from "../components/Landing/Landing";
import { Cards } from "../../components/Card/Card";
import { homeCardsData, playCardsData } from "../../assets/Info/Info";

export const page = () => {
  const pageHeader = {
    title: "Getting active in the game",
    content: `Whether it's for health, competition, or just fun, you can always have a good time playing soccer. `,
    button: null,
    mini: true,
  };

  const data = {
    reverse: true,
    title: "Get involved, Get Active",
    date: "May 21 2024",
    content: `Whether it's for health, competition, or just fun, you can always have a good time playing soccer. `,
    // buttonText: "Read More",
    // buttonLink: "/",
    image:
      "https://images.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  };
  return (
    <div>
      <Landing data={pageHeader} />

      <Cards data={playCardsData} />
    </div>
  );
};
