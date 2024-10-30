"use client";
import { useContext, useState } from "react";
import "./NavbarJS.css";
import UpperNavbarJS from "./UpperNavbarJS";
import LowerNavBarJS from "./LowerNavBarJS";
import Link from "next/link";
import { GlobalContext } from "@/app/context/GlobalContext";

const NavbarJS = () => {
  const [menuActive, setMenuActive] = useState(false);
  const { headerLinks } = useContext(GlobalContext);
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
        <div className="pt-4 flex flex-col justify-evenly gap-8 text-lg font-bold">
          {" "}
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
        </div>
      </div>
    </div>
  );
};

export default NavbarJS;
