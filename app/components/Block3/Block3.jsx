"use client";
import React, { useEffect, useState } from "react";
import image0 from "./150.png";
const Block3 = ({ data }) => {
  const defaultData = {
    text: `A synchrotron produces different kinds of light in order to study the
    structural and chemical properties of materials at the molecular level.
    This is possible by looking at the ways light interacts with the individual
    molecules of a material.The CLS synchrotron produces light by accelerating
    electrons to nearly the speed of light and directing the electrons around a ring.
    The electrons are directed around the ring by a combination of radio frequency waves and powerful electromagnets. When the electrons go around the bends, they give off energy in the form of incredibly bright and highly focused light. Different types of light, primarily infrared and X-ray, are directed down to the end of beamlines, where researchers use the light for their experiments at endstations. Each beamline and endstation at the CLS is designed for a specific type of experiment.`,
    image: image0,
  };

  const [info, setInfo] = useState(defaultData);

  useEffect(() => {
    if (data && data !== null) {
      setInfo(data);
    }
  }, []);

  return (
    <div className="component-container grid grid-cols-2 grid-rows-2 gap-4 p-4">
      <div className="col-span-1 row-span-2 flex items-center justify-center border border-gray-300 p-4">
        <p className="text-center">{info.text}</p>
      </div>
      {/* <div className="col-span-1 row-span-2 flex items-center justify-center border border-gray-300 p-4">
        <p className="text-center">{info.text}</p>
      </div> */}
      <div className="col-span-1 row-span-1 flex items-center justify-center border border-gray-300 p-4">
        <p className="text-center">{info.text}</p>
      </div>
      <div className="col-span-1 row-span-1 flex items-center justify-center border border-gray-300 p-4">
        <img src={info.image} alt="Grid Image" className="max-w-full h-auto" />
      </div>
    </div>
  );
};

export default Block3;
