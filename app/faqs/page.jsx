import React from "react";
import Landing from "../components/Landing/Landing";

const page = () => {
  const pageHeader = {
    title: "Frequently asked questions",
    content: null,
    button: null,
    mini: true,
  };

  return (
    <div>
      <Landing data={pageHeader} />
    </div>
  );
};

export default page;
