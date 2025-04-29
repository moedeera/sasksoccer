import React from "react";
import Landing from "../components/Landing/Landing";
import Block1 from "../components/Block1/Block1";
import Block2 from "../components/Block2/Block2";
import { communityPageData, communityPageMainInfo } from "./info";
import ContactForm from "../components/Contact/ContactForm";
import Landing2 from "../components/Landing2/Landing2";

export const page = () => {
  const pageHeader = {
    title: "Join our community",
    content: null,
    button: null,
    mini: true,
  };

  return (
    <div>
      <Landing2 data={pageHeader} />
      <Block1 info={communityPageMainInfo} />
      <Block2 data={communityPageData} />
      <ContactForm />
    </div>
  );
};

export default page;
