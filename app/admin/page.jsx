import React from "react";
import Landing2 from "../components/Landing2/Landing2";

const page = () => {
  const pageHeader = {
    title: "Admin",

    button: null,
    mini: true,
    image:
      "/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage0.c1c04e41.jpg&w=640&q=75",
  };
  return (
    <div className="bg-black color-white h-min-screen">
      <Landing2 data={pageHeader} />
      <div className="component-container">
        {" "}
        <div className="grid grid-cols-2">
          <div className="border p10 ">
            <div className="text-2xl">Messages</div>
            <div className="text-lg">Read</div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
