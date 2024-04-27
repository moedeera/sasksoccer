"use client";
import React, { useContext } from "react";
import PropertySearchForm from "./PropertySearchForm";
import { useGlobalContext } from "../context/GlobalContext";

const Hero = () => {
  const { websiteInfo } = useGlobalContext();

  return (
    <section className="py-20 mb-4 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
            {websiteInfo.mainLine}
          </h1>
          <p className="my-4 text-xl text-blue-700">{websiteInfo.tagLine}</p>
        </div>
        <PropertySearchForm />
      </div>
    </section>
  );
};
export default Hero;
