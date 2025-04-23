"use client";
import { useContext, useState } from "react";
import "./NavbarJS.css";
import UpperNavbarJS from "./UpperNavbarJS";
import LowerNavBarJS from "./LowerNavBarJS";
import Link from "next/link";
import { GlobalContext } from "../../context/GlobalContext";

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
        <div className="grid grid-cols-2  mt-12 text-sm ">
          <div className="pt-4 flex flex-col  gap-8 ">
            {" "}
            <div className=" pl-2 font-bold">
              Menu <span className="text-gray-400 font-bold text-lg"> | </span>
            </div>
            {headerLinks.map((page, index) => (
              <Link
                onClick={() => {
                  setSideMenu(false);
                }}
                className="pl-2 font-semibold"
                key={index}
                href={page.Link}
              >
                {page.name}
              </Link>
            ))}
          </div>
          <div
            className="pt-4 flex flex-col  gap-8 "
            style={{ borderLeft: "1px solid rgba(128,128,128,0.5)" }}
          >
            {" "}
            <div className=" pl-2 font-bold">
              Leagues{" "}
              <span className="text-gray-400 font-bold text-lg"> | </span>
            </div>
            {headerLinks[1]?.subLinks.map((league, index) => (
              <Link
                onClick={() => {
                  setSideMenu(false);
                }}
                className=" pl-3 font-semibold"
                key={index}
                href={league.link}
              >
                {league.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarJS;
