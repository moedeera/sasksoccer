"use client";
import React from "react";
import LoginFormComponent from "../components/LoginFormComponent/LoginFormComponent";
import Landing from "../components/Landing/Landing";
import { useSession } from "next-auth/react";

const page = () => {
  const { data: session } = useSession();
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
