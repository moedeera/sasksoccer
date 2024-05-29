import React from "react";
import Landing from "../components/Landing/Landing";
import Block4 from "../components/Block4/Block4";
import { Cards } from "@/components/Card/Card";
import { createOwnLeague, currentData, openerContent } from "./leaguesInfo";
import Block1 from "../components/Block1/Block1";

const page = () => {
  const pageHeader = {
    title: "Leagues",
    content: null,
    button: null,
    mini: true,
  };

  return (
    <div>
      <Landing data={pageHeader} />
      <Block4 data={openerContent} />
      <Cards data={currentData} />
      <Block1 data={createOwnLeague} />
    </div>
  );
};

export default page;
