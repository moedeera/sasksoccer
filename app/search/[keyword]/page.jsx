"use client";

import { useParams } from "next/navigation";
import React, { useEffect } from "react";

const Page = () => {
  const { keyword } = useParams();
  useEffect(() => {
    console.log("hello");
  }, []);
  return (
    <div className="component-container">
      <div className="">
        Search results for{" "}
        <span className="font-bold text-cyan-600">{keyword}</span>{" "}
      </div>
    </div>
  );
};

export default Page;
