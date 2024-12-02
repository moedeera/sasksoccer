"use client";

import React, { useContext, useEffect, useRef, useState } from "react";
import { GlobalContext } from "@/app/context/GlobalContext";
import Link from "next/link";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { BsFillCaretDownFill } from "react-icons/bs";

const LowerNavBarJS = () => {
  const containerRef = useRef(null);
  const { headerLinks, suggestionList } = useContext(GlobalContext);
  const [selected, setSelected] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setSelected(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      const results = suggestionList.filter((item) =>
        item.keywords.some((keyword) => keyword.includes(query))
      );
      setFilteredSuggestions(results);
    } else {
      setFilteredSuggestions([]);
    }
  }, [searchQuery]);

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
        <div className="mb-lower-searchbar-container">
          <div className="mb-lower-navbar-search-bar">
            <input
              className="no-focus-border"
              name="myInput"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
            />
            <FaMagnifyingGlass style={{ cursor: "pointer" }} />
          </div>
          {filteredSuggestions.length > 0 && (
            <div className="mb-searchbar-drop-down">
              {filteredSuggestions.map((suggestion, index) => (
                <Link
                  key={index}
                  className="searchbar-suggestion"
                  href={suggestion.link}
                  onClick={() => {
                    setFilteredSuggestions("");
                    setSearchQuery("");
                  }}
                >
                  {suggestion.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LowerNavBarJS;
