"use client";

import Link from "next/link";

import "./Block1.css";
import { useState, useEffect } from "react";

const Block1 = ({ data }) => {
  const defaultInfo = {
    reverse: true,
    title: "Summer Soccer Is Here",
    date: "May 21 2024",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum,
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`,
    buttonText: "Read More",
    buttonLink: "/",
    image:
      "https://images.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  };
  const [info, setInfo] = useState(defaultInfo);

  useEffect(() => {
    if (data) {
      setInfo(data);
    }
  }, []);

  return (
    <div className="component-container ">
      <div className="block1">
        {info.reverse ? (
          <>
            {" "}
            <div className="text py-4 px-2">
              <div className="text-3xl font-bold h3-header">{info.title}</div>
              <small>{info.date}</small>
              <p className="py-3  pr-2">{info.content}</p>
              {info.buttonLink && (
                <Link href={info.buttonLink} className="btn">
                  {info.buttonText}
                </Link>
              )}
            </div>
            <div
              className="block-1-image w-full h-full  "
              style={{ backgroundImage: `url(${info.image})` }}
            ></div>
          </>
        ) : (
          <>
            <div
              className="block-1-image w-full h-full  "
              style={{ backgroundImage: `url(${info.image})` }}
            ></div>
            <div className="text py-3 px-2">
              <div className="text-3xl font-bold h3-header">{info.title}</div>
              <small>{info.date}</small>
              <p className="py-3  pr-2">{info.content}</p>
              {info.buttonLink && (
                <Link href={info.buttonLink} className="btn">
                  {info.buttonText}
                </Link>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Block1;
