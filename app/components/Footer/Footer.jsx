import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import logo from "../Navbar/logo-no-background.png";
import { Input } from "@/components/ui/input";

const FooterComponent = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 mt-4">
          <Link href={"/"}>
            <Image className="" src={logo} alt="" width={300} height={300} />
          </Link>
          <p className="text-sm mt-2 max-w-80">
            <div>
              Dedicated to connecting soccer enthusiast in and around Saskatoon.
              For more content and latest updates, follow us on social media{" "}
            </div>
            <div className="flex justify-between space-x-4 mt-4 md:h-44">
              <Link href={"/"}>
                {" "}
                <FaFacebook className="w-8 h-8" />
              </Link>
              <Link href={"/"}>
                {" "}
                <FaTwitter className="w-8 h-8" />
              </Link>
              <Link href={"/"}>
                {" "}
                <FaInstagram className="w-8 h-8" />
              </Link>
              <Link href={"/"}>
                {" "}
                <FaLinkedin className="w-8 h-8" />
              </Link>
            </div>
          </p>
        </div>
        <div className="hidden md:flex flex-col w-full md:w-1/4 px-4 h-80">
          <div
            className="mb-3 w-1/4"
            style={{ borderBottom: "3px solid gray" }}
          >
            {" "}
            Links
          </div>
          <div className="flex gap-20 w-full ">
            {" "}
            <nav className="flex flex-col gap-y-4 text-sm text-slate-400">
              <a href="/" className="hover:underline">
                Home
              </a>
              <a href="/about" className="hover:underline">
                About Us
              </a>
              <a href="/latest" className="hover:underline">
                Latest
              </a>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </nav>
            <nav className="flex flex-col gap-y-4 text-sm text-slate-400">
              <a href="/" className="hover:underline">
                Community
              </a>
              <a href="/about" className="hover:underline">
                Privacy Policy
              </a>
              <a href="/latest" className="hover:underline">
                Careers
              </a>
              <a href="/contact" className="hover:underline">
                Disclaimer
              </a>
            </nav>
          </div>
        </div>
        <div className="w-full md:w-1/3 h-80">
          {" "}
          <div className="text-2xl font-bold">Subscribe</div>
          <div>
            {" "}
            Interested in keeping up to date with latest news and updates?. Sign
            up for our weekly newsletter.
          </div>
          <Input className="my-3" placeholder="Enter in your email" />
          <button className="btn">Sign Up</button>
        </div>
      </div>
      <div className="text-center mt-8 text-sm text-gray-400">
        &copy; 2024 SaskSoccerHub. All rights reserved.
      </div>
    </footer>
  );
};

export default FooterComponent;
