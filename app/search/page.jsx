"use client";

import React, { useEffect } from "react";

const Page = () => {
  useEffect(() => {
    console.log("hello");
  }, []);
  return (
    <div className="component-container">
      <div className="text-xl">Search</div>
    </div>
  );
};

export default Page;
