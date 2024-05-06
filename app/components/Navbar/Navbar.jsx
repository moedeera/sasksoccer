"use client";
import { useContext, useState } from "react";
import "./Navbar.css";
import { GlobalContext } from "@/app/context/GlobalContext";
import Link from "next/link";

const Navbar2 = () => {
  const { headerLinks, websiteInfo } = useContext(GlobalContext);
  console.log(headerLinks, websiteInfo);
  const [sideMenu, setSideMenu] = useState(false);
  let pages = ["Home", "Leagues", "Latest", "Shop"];

  return (
    <div>
      <div className="upper px-2 py-1 flex justify-between">
        <div>{websiteInfo.title}</div>
        <div
          className="border-2 rounded-sm max-w-16 p-1 h-10 md:hidden "
          onClick={() => {
            setSideMenu(true);
          }}
        >
          Menu
        </div>
      </div>
      <div className="lower px-2">
        <div className=" flex gap-x-2">
          {pages.map((page, index) => (
            <Link key={index} href={"/"}>
              {page}
            </Link>
          ))}
        </div>
      </div>
      <div className={sideMenu ? "side-menu side-menu-show" : "side-menu"}>
        <div
          className="border-2 rounded-sm max-w-16 p-1 h-10 md:hidden "
          onClick={() => {
            setSideMenu(false);
          }}
        >
          Close
        </div>
      </div>
    </div>
  );
};

export default Navbar2;
