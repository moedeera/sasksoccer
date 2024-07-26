import React from "react";
import Landing from "../components/Landing/Landing";
import ContactForm from "../components/Contact/ContactForm";

const page = () => {
  const pageHeader = {
    title: "Contact",
    content: null,
    button: null,
    mini: true,
    image:
      "/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage0.c1c04e41.jpg&w=640&q=75",
  };
  return (
    <div>
      <Landing data={pageHeader} />
      <ContactForm />
    </div>
  );
};

export default page;
