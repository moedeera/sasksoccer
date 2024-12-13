"use client";

import React, { useEffect } from "react";

const Page = () => {
  useEffect(() => {
    console.log("hello");
  }, []);
  return <div>page</div>;
};

export default Page;
