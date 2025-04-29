"use client";

import React, { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    console.log("hello");
  }, []);
  return (
    <div className="component-container">
      <div className="text-xl">Search</div>
    </div>
  );
}
