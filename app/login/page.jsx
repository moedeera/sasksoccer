import React from "react";
import LoginFormComponent from "../components/LoginFormComponent/LoginFormComponent";
import Landing from "../components/Landing/Landing";

const page = () => {
  const pageHeader = {
    title: "Login",
    content: null,
    button: null,
    mini: true,
  };

  return (
    <div>
      <Landing data={pageHeader} />
      <LoginFormComponent />
    </div>
  );
};

export default page;
