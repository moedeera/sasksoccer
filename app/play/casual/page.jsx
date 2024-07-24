import Block1 from "@/app/components/Block1/Block1";
import Landing from "@/app/components/Landing/Landing";
import React from "react";

export const CasualPlayPage = () => {
  const pageHeader = {
    title: "Casual Meetups starting soon...",
    content: null,
    button: null,
    mini: true,
  };

  const data = {
    reverse: true,
    title: "Play to relieve stress",
    date: "July 21 2024",
    content: `We are excited to announce that we will soon be starting a soccer meetup in Saskatoon for all ages. Join us for fun games through our upcoming official group on Meetup.com! Keep tabs on our "latest" page for more updates. `,
    // buttonText: "Read More",
    // buttonLink: "/",
    image:
      "https://images.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  };
  return (
    <div>
      <Landing data={pageHeader} />
      <Block1 data={data} />
    </div>
  );
};
export default CasualPlayPage;
