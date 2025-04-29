import React from "react";
import Landing2 from "../components/Landing2/Landing2";
import Block1 from "../components/Block1/Block1";
import { AboutPageMainInfo, communityPageData } from "../community/info";
import Block2 from "../components/Block2/Block2";
import ContactForm from "../components/Contact/ContactForm";

export const page = () => {
  const pageHeader = {
    title: "About Us",
    content: null,
    button: null,
    mini: true,
  };
  return (
    <div>
      <Landing2 data={pageHeader} />
      <Block1 info={AboutPageMainInfo} />
      <Block2 data={communityPageData} />
      <ContactForm />
    </div>
  );
};
