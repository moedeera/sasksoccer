"use client";
import { useContext, useState } from "react";
import "./Navbar.css";
import arrow from "./chevron.png";

import { GlobalContext } from "@/app/context/GlobalContext";
import Link from "next/link";
import Image from "next/image";
import { SideMenu } from "../SideMenu/SideMenu";

const Navbar2 = () => {
  const { headerLinks, websiteInfo } = useContext(GlobalContext);

  const [sideMenu, setSideMenu] = useState(false);
  let pages = ["Home", "Leagues", "Latest", "News", "Shop"];

  return (
    <div className="navbar-container">
      <div className="upper-navbar-container">
        <div className="upper px-2 py-1 flex justify-between items-center h-full">
          <div className="header-container">
            {/* <Image src={logo} alt="logo" width={25} /> */}
            <div>
              <p>{websiteInfo.title}</p>
            </div>
          </div>

          <Link
            className="btn login-button hidden md:flex border-2 rounded-md px-4 py-2 text-white "
            href={"/login"}
          >
            Login
          </Link>

          <div
            className="mr-2 max-w-16 p-1 h-10 md:hidden "
            onClick={() => {
              // setSideMenu(true);
            }}
          >
            <SideMenu text={"Menu"} />
          </div>
        </div>
      </div>

      <div className="lower-navbar-container">
        {" "}
        <div className="lower px-2">
          <div className=" flex gap-x-14 items-center  h-full">
            {headerLinks.map((page, index) => (
              <>
                {page.case === "all" && (
                  <Link
                    key={index}
                    href={page.Link}
                    className="flex gap-x-1 justify-center items-center"
                  >
                    {page.name}
                  </Link>
                )}
              </>
            ))}
          </div>
        </div>
      </div>

      <div
        className={
          sideMenu
            ? "side-menu side-menu-show flex flex-col gap-y-10 py-3 md:hidden"
            : "side-menu flex flex-col gap-y-10 py-3 md:hidden"
        }
      >
        {headerLinks.map((page, index) => (
          <Link
            onClick={() => {
              setSideMenu(false);
            }}
            key={index}
            href={page.Link}
          >
            {page.name}
          </Link>
        ))}

        <div
          className="btn border-2 rounded-sm max-w-16 p-1 h-10 md:hidden "
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
