"use client";
import { useContext, useState } from "react";
import "./Navbar.css";
import React from "react";
import { GlobalContext } from "../../context/GlobalContext";
import Link from "next/link";
import UpperNavbar from "./UpperNavbar";
import LowerNavbar from "./LowerNavbar";

const Navbar2 = () => {
  const { headerLinks } = useContext(GlobalContext);
  const [sideMenu, setSideMenu] = useState(false);

  return (
    <div className="navbar-container">
      <UpperNavbar />

      <LowerNavbar />

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
