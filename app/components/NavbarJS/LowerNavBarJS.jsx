import React, { useContext } from "react";
import { GlobalContext } from "@/app/context/GlobalContext";
import Link from "next/link";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { BsFillCaretDownFill } from "react-icons/bs";

const LowerNavBarJS = () => {
  const { headerLinks } = useContext(GlobalContext);

  return (
    <div className="mb-lower-navbar-container">
      <div className="mb-lower-navbar">
        <div className="mb-lower-navbar-links">
          {headerLinks.map((link, index) => (
            <Link key={index} href={link.Link}>
              {link.name}
              <BsFillCaretDownFill style={{ fontSize: "10px" }} />
            </Link>
          ))}
        </div>
        <div className="mb-lower-navbar-search-bar">
          {" "}
          <div>Search </div> <FaMagnifyingGlass />
        </div>
      </div>
    </div>
  );
};

export default LowerNavBarJS;
