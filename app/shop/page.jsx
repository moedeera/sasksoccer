import React from "react";
import Landing from "../components/Landing/Landing";

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
    </div>
  );
};

export default page;
