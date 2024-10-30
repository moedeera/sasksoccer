"use client";

import React, { useContext, useState } from "react";
import { GlobalContext } from "@/app/context/GlobalContext";
import Link from "next/link";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { BsFillCaretDownFill } from "react-icons/bs";

const LowerNavBarJS = () => {
  const { headerLinks } = useContext(GlobalContext);
  const [selected, setSelected] = useState(null);

  return (
    <div className="mb-lower-navbar-container">
      <div className="mb-lower-navbar">
        <div className="mb-lower-navbar-links">
          <Link
            href={"/"}
            onClick={() => {
              setSelected(null);
            }}
          >
            Home
          </Link>{" "}
          {headerLinks.map(
            (link, index) =>
              index > 0 && (
                <div
                  onClick={() => {
                    setSelected(link.name);
                    console.log("testing:", link.name, selected);
                  }}
                  key={index}
                  href={link.Link}
                  className={
                    selected === link.name
                      ? "mb-links selected-link"
                      : "mb-links"
                  }
                >
                  {link.name}
                  <BsFillCaretDownFill
                    style={{ fontSize: "10px", marginLeft: "3px" }}
                  />
                  <div
                    className={
                      selected === link.name && "mb-lower-navbar-dropdown"
                    }
                  ></div>
                </div>
              )
          )}
        </div>
        <div className="mb-lower-navbar-search-bar">
          {" "}
          <input className="no-focus-border" name="myInput" type="text" />{" "}
          <FaMagnifyingGlass style={{ cursor: "pointer" }} />
        </div>
      </div>
    </div>
  );
};

export default LowerNavBarJS;
