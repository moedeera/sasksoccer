import { Button } from "@/components/ui/button";
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="w-full py-8 bg-gray-200">
      <div className="component-container text-center">
        <div className="text-3xl font-bold h3-header">
          {" "}
          Follow us on Social Media
        </div>
        <div className="flex gap-10 justify-center py-3">
          <FaFacebook className="w-6 h-6  md:w-10 md:h-10 " />

          <FaTwitter className="w-6 h-6  md:w-10 md:h-10" />

          <FaInstagram className="w-6 h-6  md:w-10 md:h-10" />

          <FaLinkedin className="w-6 h-6  md:w-10 md:h-10" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
