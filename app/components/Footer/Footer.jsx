import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const FooterComponent = () => {
  return (
    <footer className="bg-green-900 text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-bold">SaskSoccerHub</h2>
          <p className="text-sm mt-2">
            Connecting soccer enthusiasts in Saskatoon
          </p>
        </div>
        <div className="mb-4 md:mb-0">
          <nav className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
            <a href="#" className="hover:underline">
              Home
            </a>
            <a href="#" className="hover:underline">
              About Us
            </a>
            <a href="#" className="hover:underline">
              Events
            </a>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </nav>
        </div>
        <div className="flex space-x-4">
          <Button variant="ghost" as="a" href="https://facebook.com">
            <FaFacebook className="w-5 h-5" />
          </Button>
          <Button variant="ghost" as="a" href="https://twitter.com">
            <FaTwitter className="w-5 h-5" />
          </Button>
          <Button variant="ghost" as="a" href="https://instagram.com">
            <FaInstagram className="w-5 h-5" />
          </Button>
          <Button variant="ghost" as="a" href="https://linkedin.com">
            <FaLinkedin className="w-5 h-5" />
          </Button>
        </div>
      </div>
      <div className="text-center mt-8 text-sm text-gray-400">
        &copy; 2024 SaskSoccerHub. All rights reserved.
      </div>
    </footer>
  );
};

export default FooterComponent;
