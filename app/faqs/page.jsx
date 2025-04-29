import React from "react";

import Block2 from "../components/Block2/Block2";
import Landing2 from "../components/Landing2/Landing2";

export default function Page() {
  const pageHeader = {
    title: "Frequently asked questions",
    content: null,
    button: null,
    mini: true,
  };

  const homepageInfo = {
    reverse: true,
    title: "Have any questions?",
    date: "May 21 2024",
    content: `If you are looking to enjoy the sport casually, local parks and recreational leagues provide ample opportunities to join pick-up games and meet fellow soccer enthusiasts. For younger players under 18, the city hosts various tournaments that cater to different skill levels, allowing them to showcase their talents and experience the thrill of competition. These tournaments are not only about the game but also foster a sense of community and teamwork among participants.
  
  Volunteering opportunities abound for those who want to support these events. From helping with event organization and setup to coaching and refereeing, volunteers play a crucial role in making these tournaments successful. Getting involved is a rewarding way to contribute to the local soccer scene, meet new people, and support youth sports development in Saskatoon.`,
    // buttonText: "Read More",
    // buttonLink: "/",
    accordion: true,
    image:
      "https://images.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  };

  return (
    <div>
      <Landing2 data={pageHeader} />
      <Block2 data={homepageInfo} />
    </div>
  );
}
