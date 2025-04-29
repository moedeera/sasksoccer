import React from "react";
import Landing from "../components/Landing/Landing";
import RegisterForm from "../components/RegisterForm/RegisterForm";

export default function Page() {
  const pageHeader = {
    title: "Register",
    content: null,
    button: null,
    mini: true,
  };
  return (
    <div>
      <Landing data={pageHeader} />
      <RegisterForm />
    </div>
  );
}
