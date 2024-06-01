"use client";
import { useEffect, useState } from "react";
import "./Landing.css";
import Link from "next/link";
const img = "./soccer.jpeg";

const Landing = ({ data }) => {
  let defaultInfo = {
    title: "Saskatoon Soccer News",
    content: ` Take a tour of Canada's only synchrotron research facility, for
    free! Take a tour of Canada's only synchrotron research facility,
    for free! Take a tour of Canada's only synchrotron research
    facility, for free! Take a tour of Canada's only synchrotron
    research facility, for free!`,
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
          <p className="w-4/5">{info.content}</p>
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
