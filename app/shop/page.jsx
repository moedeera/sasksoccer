import React from "react";

import { Cards } from "../../components/Card/Card";
import { shopCardsData } from "../../assets/Info/Info";
import Landing2 from "../components/Landing2/Landing2";

export default function Page() {
  const pageHeader = {
    title: "Shop",
    content: null,
    button: null,
    mini: true,
  };

  return (
    <div>
      <Landing2 data={pageHeader} />
      <div className="text-3xl font-bold h3-header text-center mt-8  mb-0">
        {" "}
        List of Soccer Shops in Saskatoon{" "}
      </div>
      <Cards data={shopCardsData} />
      {/* <Block1 data={shopInfo} /> */}
    </div>
  );
}
