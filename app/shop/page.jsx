import React from "react";
import Landing from "../components/Landing/Landing";
import Block1 from "../components/Block1/Block1";
import { shopInfo } from "./data";

const page = () => {
  const pageHeader = {
    title: "Shop",
    content: null,
    button: null,
    mini: true,
  };

  return (
    <div>
      <Landing data={pageHeader} />
      <Block1 data={shopInfo} />
    </div>
  );
};

export default page;
