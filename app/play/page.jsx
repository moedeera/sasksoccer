import React from "react";
import Landing from "../components/Landing/Landing";
import Block1 from "../components/Block1/Block1";

const page = () => {
  const pageHeader = {
    title: "Getting active in the game",
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

export default page;
