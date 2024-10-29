"use client";

import React, { useContext, useState } from "react";
import { GlobalContext } from "@/app/context/GlobalContext";
import Link from "next/link";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { BsFillCaretDownFill } from "react-icons/bs";
import { Input } from "@/components/ui/input";

const LowerNavBarJS = () => {
  const { headerLinks } = useContext(GlobalContext);
  const { selected, setSelected } = useState(null);

  return (
    <div className="mb-lower-navbar-container">
      <div className="mb-lower-navbar">
        <div className="mb-lower-navbar-links">
          <Link href={"/"}>Home</Link>{" "}
          {headerLinks.map(
            (link, index) =>
              index > 0 && (
                <div
                  onClick={() => {
                    setSelected(link.name);
                  }}
                  key={index}
                  href={link.Link}
                  className="mb-links"
                >
                  {link.name}
                  <BsFillCaretDownFill style={{ fontSize: "10px" }} />
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
