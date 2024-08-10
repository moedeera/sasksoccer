import { GlobalContext } from "@/app/context/GlobalContext";
import Link from "next/link";
import React, { useContext, useEffect, useRef, useState } from "react";
import { FaCaretDown } from "react-icons/fa";

const LowerNavbar = () => {
  const containerRef = useRef(null);
  const [dropDown, setDropDown] = useState(null);
  const { headerLinks, websiteInfo } = useContext(GlobalContext);
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the clicked target is not inside the container
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setDropDown(null);
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
    <div ref={containerRef} className="lower-navbar-container">
      {" "}
      <div className="lower px-2 text-sm ">
        <div className=" flex  items-center h-full ">
          {headerLinks.map((page, index) => (
            <div
              className="link-container h-full relative"
              key={index}
              style={
                dropDown === page.name
                  ? {
                      backgroundColor: "black",
                      color: "white",
                    }
                  : { backgroundColor: "white", color: "black" }
              }
            >
              {page.case === "all" && (
                <div
                  href={page.Link}
                  className="flex gap-1 px-2 relative justify-center items-center h-full w-28  hover:bg-gray-600 hover:text-white cursor-pointer"
                >
                  {page.subLinks.length > 0 ? (
                    <>
                      {" "}
                      <div
                        className=" h-4/5 w-full flex justify-center items-center gap-x-2"
                        onClick={() => {
                          setDropDown(page.name);
                        }}
                      >
                        {page.name}
                        <FaCaretDown />
                      </div>
                    </>
                  ) : (
                    <>
                      <Link href={page.Link}>{page.name}</Link>
                    </>
                  )}

                  {dropDown === page.name && page.subLinks.length > 0 && (
                    <div className="lower-navbar-dropdown text-black h-full">
                      {page.subLinks.map((subLink, index) => (
                        <Link
                          key={index}
                          href={subLink.link}
                          onClick={() => {
                            setDropDown(null);
                          }}
                        >
                          {subLink.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LowerNavbar;
