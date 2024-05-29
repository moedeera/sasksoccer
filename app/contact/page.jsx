import React from "react";
import Landing from "../components/Landing/Landing";
import ContactForm from "../components/Contact/ContactForm";

const page = () => {
  const pageHeader = {
    title: "Contact",
    content: null,
    button: null,
    mini: true,
  };
  return (
    <div>
      <Landing data={pageHeader} />
      <ContactForm />
    </div>
  );
};

export default page;
