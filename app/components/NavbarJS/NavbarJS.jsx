"use client";
import { useState } from "react";
import "./NavbarJS.css";
import UpperNavbarJS from "./UpperNavbarJS";
import LowerNavBarJS from "./LowerNavBarJS";

const NavbarJS = () => {
  const [menuActive, setMenuActive] = useState(false);
  return (
    <div className="mb-navbar-container">
      <UpperNavbarJS setState={setMenuActive} state={menuActive} />
      <LowerNavBarJS />
      <div
        className={
          menuActive
            ? "mb-navbar-side-menu "
            : "mb-navbar-side-menu navbar-menu-hide"
        }
      >
        <div
          className="border text-2xl w-max px-4"
          onClick={() => {
            setMenuActive(false);
          }}
        >
          X
        </div>
        <div>Links</div>
      </div>
    </div>
  );
};

export default NavbarJS;
