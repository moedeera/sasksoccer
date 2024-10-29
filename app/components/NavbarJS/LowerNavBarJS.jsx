import React, { useContext } from "react";
import { GlobalContext } from "@/app/context/GlobalContext";
import Link from "next/link";

import { BsFillCaretDownFill } from "react-icons/bs";

const LowerNavBarJS = () => {
  const { headerLinks } = useContext(GlobalContext);
  return (
    <div className="mb-lower-navbar-container">
      <div className="mb-lower-navbar">
        {headerLinks.map((link, index) => (
          <Link key={index} href={link.Link}>
            {link.name}
            <BsFillCaretDownFill style={{ fontSize: "10px" }} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LowerNavBarJS;
