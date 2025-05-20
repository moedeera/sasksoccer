"use client";

import "./Landing.css";
import Link from "next/link";
import summer from "./summer1.jpg";
import Image from "next/image";

const Landing = ({ data }) => {
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
    <div className={data?.mini ? "landing landing-mini" : "landing"}>
      <div
        className="landing-image"
        style={
          data.image && {
            backgroundImage: `url(https://cdn.pixabay.com/photo/2024/03/10/05/51/soccer-8624054_1280.jpg)`,
            // backgroundImage: `url(https://images.pexels.com/photos/4036040/pexels-photo-4036040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
          }
        }
      ></div>
      <div className="landing-container">
        <div className="landing-content">
          <div className="capitalize w-4/5  text-4xl md:text-5xl lg:text-7xl align-left font-bold ">
            {data.title}
          </div>
          <p className="text-white w-4/5">{data.content}</p>
          {data?.content2 && (
            <p className="text-white w-4/5 hidden lg:block">{data.content2}</p>
          )}
          <div className="text-left w-4/5">
            {data.button && (
              <Link className="btn text-left" href={data.buttonLink}>
                {data.buttonName}
              </Link>
            )}
          </div>
          <div className="text-xl font-bold">Latest</div>
          <div className="lg:mt-1 h-80  md:h-52 mb-2 lg:h-60 w-4/5 flex flex-col md:flex-row gap-2">
            {newsFeed.map((news, index) => (
              <div
                key={index}
                className="py-4 news-card color-white h-full w-full max-w-96  flex flex-col  justify-center gap-2 items-start pb-4 pl-4 relative"
              >
                <div className="text-white text:sm md:text-xl mb-1 font-bold w-4/5">
                  {news.name}
                </div>
                <div className="text-xs mb-3 text-gray">
                  Last Updated May 01 2025
                </div>
                <Link href={news.link} className="btn">
                  More
                </Link>
                <div
                  className="news-card-banner"
                  style={{
                    backgroundImage: `url(${news.image})`,
                  }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
