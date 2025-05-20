import React from "react";
import "./Hero.css";

export default function Hero() {
  const newsFeed = [
    {
      id: 1,
      name: "Latest News and Updates",
      image:
        "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "/news",
    },
    {
      id: 2,
      name: "League Standings and Updates",
      image:
        "https://images.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "/leagues",
      button: "View",
    },
    {
      id: 3,
      name: "Upcoming Summer Tournaments",
      image:
        "https://images.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "/news",
    },

    {
      id: 4,
      name: "Join & Become a Member",
      image:
        "https://images.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "/contact",
      button: "join",
    },
  ];
  return (
    <div className="hero-landing  border border-black">
      <div className="upper-hero-landing">
        <div className="upper-hero-content">Hello</div>
        <div className="upper-hero-banner">Hello</div>
      </div>
      <div className="lower-hero-landing">
        <div className="hero-landing-content">
          {newsFeed.map((news, index) => (
            <div
              key={index}
              className="border border-white h-4/5 md:h-40 lg:h-44  my-auto w-4/5 mx-auto flex flex-col justify-center items-center"
            >
              Hello
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
