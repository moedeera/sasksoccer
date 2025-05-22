import React from "react";
import "./Hero.css";
import Link from "next/link";

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
        <div className="upper-hero-content">
          <div className="text-5xl lg:text-6xl font-extrabold text-yellow-400">
            Summer Soccer Is Here
          </div>
          <div className="text-lg mt-4 md:hidden">
            Outdoor Seasons and Tournaments Have Started. Make sure to not miss
            out on all the summer leagues. Adult, Youth and Co-ed Leagues are
            all running. Click on our league directory for more details.
          </div>
          <div className="hidden md:block text-lg mt-4 w-4/5">
            Summer soccer in Saskatoon is officially underway. The outdoor
            season for youth, adult, and coed leagues has kicked off across the
            city’s fields—bringing together athletes of all ages and abilities.
            From skill-building youth programs to competitive adult divisions
            and fun, social coed matches, there’s a place for everyone to join a
            team, stay active, and soak up the summer sun.,
          </div>
          <div className="hidden md:block text-lg mt-4 w-4/5">
            Registration is now open—don’t miss your chance to be part of
            another amazing season of soccer this summer.
          </div>
        </div>
        <div className="upper-hero-banner">Hello</div>
      </div>
      <div className="lower-hero-landing">
        <div className="hero-landing-content">
          {newsFeed.map((news, index) => (
            <Link
              key={index}
              href={news.link}
              className="hero-landing-card relative   p-3   h-4/5 md:h-40 lg:h-60   my-auto mx-auto w-full flex flex-col justify-center items-center"
            >
              <div className="w-4/5 text-center font-bold"> {news.name}</div>

              <div className="hero-landing-content-banner"></div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
