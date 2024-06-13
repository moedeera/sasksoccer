"use client";
import { useEffect, useState } from "react";
import "./Landing.css";
import Link from "next/link";
const img = "./soccer.jpeg";

const Landing = ({ data }) => {
  let defaultInfo = {
    title: "Currently Under Construction",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum,`,
    button: true,
    buttonLink: "/",
    buttonName: "Read More",
    mini: false,
  };
  const [info, setInfo] = useState({
    title: null,
    content: null,
    button: false,
    mini: true,
  });

  useEffect(() => {
    if (data && data !== null) {
      setInfo(data);
    } else {
      setInfo(defaultInfo);
    }
  }, []);

  return (
    <div className={info?.mini ? "landing landing-mini" : "landing"}>
      <div className="landing-image"></div>
      <div className="landing-container">
        <div className="landing-content">
          <h1 className="capitalize">{info.title}</h1>
          <p className="w-4/5 md:w-">{info.content}</p>
          {info.button && (
            <Link className="btn" href={info.buttonLink}>
              {info.buttonName}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Landing;
