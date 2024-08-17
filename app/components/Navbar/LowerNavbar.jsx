import { GlobalContext } from "@/app/context/GlobalContext";
import Link from "next/link";
import React, { useContext, useEffect, useRef, useState } from "react";
import { FaCaretDown } from "react-icons/fa";

const LowerNavbar = () => {
  const containerRef = useRef(null);
  const [dropDown, setDropDown] = useState(false);
  const [currentPage, setCurrentPage] = useState(null);
  const { headerLinks, websiteInfo } = useContext(GlobalContext);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the clicked target is not inside the container
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setDropDown(false);
      }
    };

    // Attach the event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [sublink, setSublink] = useState("/");

  useEffect(() => {
    // Check if running on client side
    if (typeof window !== "undefined") {
      const pathname = window.location.pathname;

      // Extract the sublink
      const extractedSublink = pathname.split("/").filter(Boolean).join("/");

      setSublink(`/${extractedSublink}`);
      setCurrentPage(`/${extractedSublink}`);

      console.log("Sublink:", extractedSublink);
    }
  }, []); // Empty dependency array means this effect runs only on mount
  return (
    <div ref={containerRef} className="lower-navbar-container">
      {" "}
      <div className="lower  text-sm ">
        <div className=" flex  items-center h-full ">
          {headerLinks.map((page, index) => (
            <div
              className="link-container   h-full relative  text-left"
              key={index}
              style={
                currentPage === page.Link
                  ? {
                      backgroundColor: "darkslategray",
                      color: "white",
                    }
                  : { backgroundColor: "white", color: "black" }
              }
            >
              {page.case === "all" && (
                <div
                  href={page.Link}
                  className="flex gap-1  relative justify-center items-center h-full w-28  hover:bg-gray-600 hover:text-white cursor-pointer"
                >
                  {page.subLinks.length > 0 ? (
                    <>
                      {" "}
                      <div
                        className=" h-4/5 w-full px-4 flex justify-center items-center gap-x-2"
                        onClick={() => {
                          setDropDown(true);
                        }}
                      >
                        {page.name}
                        <FaCaretDown />
                      </div>
                    </>
                  ) : (
                    <>
                      <Link
                        onClick={() => {
                          setCurrentPage(page.Link);
                        }}
                        href={page.Link}
                        className="pl-1"
                      >
                        {page.name}
                      </Link>
                    </>
                  )}

                  {dropDown && page.subLinks.length > 0 && (
                    <div className="lower-navbar-dropdown text-black h-full">
                      {page.subLinks.map((subLink, index) => (
                        <Link
                          key={index}
                          href={subLink.link}
                          onClick={() => {
                            setDropDown(false);
                            setCurrentPage(page.Link);
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
