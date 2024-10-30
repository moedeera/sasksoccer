"use client";

import React, { useContext, useEffect, useRef, useState } from "react";
import { GlobalContext } from "@/app/context/GlobalContext";
import Link from "next/link";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { BsFillCaretDownFill } from "react-icons/bs";

const LowerNavBarJS = () => {
  const containerRef = useRef(null);
  const { headerLinks } = useContext(GlobalContext);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the clicked target is not inside the container
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setSelected(null);
      }
    };

    // Attach the event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="mb-lower-navbar-container">
      <div className="mb-lower-navbar">
        <div className="mb-lower-navbar-links" ref={containerRef}>
          {headerLinks.map((link, index) =>
            index === 1 ? (
              <div
                onClick={() => {
                  if (selected === link.name) {
                    setSelected(null);
                    return;
                  }
                  setSelected(link.name);
                }}
                key={index}
                href={link.Link}
                className={
                  selected === link.name ? "mb-links selected-link" : "mb-links"
                }
              >
                {link.name}
                <BsFillCaretDownFill
                  style={{ fontSize: "10px", marginLeft: "3px" }}
                />
                <div
                  className={
                    selected === link.name
                      ? "mb-lower-navbar-dropdown"
                      : "hidden"
                  }
                >
                  {link.subLinks.map((sub, index) => (
                    <Link key={index} href={sub.link}>
                      {sub.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={index}
                href={link.Link}
                onClick={() => {
                  setSelected(null);
                }}
              >
                {link.name}
              </Link>
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
