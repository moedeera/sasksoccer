import Block1 from "@/app/components/Block1/Block1";
import Landing from "@/app/components/Landing/Landing";
import React from "react";

export const page = () => {
  const pageHeader = {
    title: "Casual Meetups starting soon...",
    content: null,
    button: null,
    mini: true,
  };

  return (
    <div>
      <Landing data={pageHeader} />
      <Block1 />
    </div>
  );
};
