"use client";
import { useEffect, useState } from "react";
import "./Landing.css";
import Link from "next/link";

const Landing = ({ data }) => {
  return (
    <div className={data?.mini ? "landing landing-mini" : "landing"}>
      <div
        className="landing-image"
        style={data.image && { backgroundImage: `url${data.image}` }}
      ></div>
      <div className="landing-container">
        <div className="landing-content">
          <h1 className="capitalize w-4/5 md:w-max">{data.title}</h1>
          <p className="text-white w-4/5 md:w-">{data.content}</p>
          {data.button && (
            <Link className="btn" href={data.buttonLink}>
              {data.buttonName}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Landing;
