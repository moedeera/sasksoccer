"use client";
import { useEffect, useState } from "react";
import "./Landing.css";
import Link from "next/link";

const Landing = ({ data }) => {
  return (
    <div className={data?.mini ? "landing landing-mini" : "landing"}>
      <div
        className="landing-image"
        style={
          data.image && {
            backgroundImage: `url(https://cdn.pixabay.com/photo/2019/10/29/07/33/soccer-4586282_1280.jpg)`,
          }
        }
      ></div>
      <div className="landing-container">
        <div className="landing-content">
          <h1 className="capitalize w-4/5  text-4xl md:text-5xl lg:text-6xl ">
            {data.title}
          </h1>
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
