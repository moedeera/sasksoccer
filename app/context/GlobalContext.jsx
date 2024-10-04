"use client";
import { createContext, useContext, useState } from "react";
import image1 from "../../assets/images/logo-white.png";
// Create context
export const GlobalContext = createContext();

// Create a provider
export function GlobalProvider({ children }) {
  const [unreadCount, setUnreadCount] = useState(0);

  const websiteInfo = {
    // mainColor: "#169873",
    mainColor: "#169873c0",
    secondaryColor: "#44ABFF",
    AlternateColor1: "#E3F0FF",
    AlternateColor2: "#6A7798",
    light: "#FFFFFF",
    dark: "#000000",
    title: "SaskSoccerHub",
    mainLine: "Saskatoon Soccer News",
    tagLine: "Your go-to stop for anything saskatoon soccer related.",
    logo: image1,
  };

  const links = [
    { name: "Profile", link: "/profile" },
    { name: "Your Follows", link: "/following" },
  ];

  const headerLinks = [
    {
      name: "Home",
      Link: "/",
      case: "all",
      subLinks: [],
    },
    {
      name: "Leagues",
      Link: "/leagues",
      case: "all",
      subLinks: [
        { name: "All", link: "/leagues" },
        { name: "Mens Boarded", link: "/leagues/mens-boarded" },
        ,
        { name: "Mens Turf 2024", link: "/leagues/mens-turf-2024" },
        ,
        { name: "Womens Boarded 2024", link: "/leagues/womens-boarded-2024" },
        { name: "Womens Turf 2024", link: "/leagues/womans-turf-2024" },
      ],
    },
    {
      name: "Latest",
      Link: "/latest",
      case: "all",
      subLinks: [],
    },
    {
      name: "Community",
      Link: "/community",
      case: "all",
      subLinks: [],
    },
    { name: "Shop", Link: "/shop", case: "all", subLinks: [] },
    { name: "Contact", Link: "/contact", case: "all", subLinks: [] },
    // { name: "My Dashboard", Link: "/myportal", case: "login" },
  ];

  return (
    <GlobalContext.Provider
      value={{
        unreadCount,
        setUnreadCount,
        headerLinks,
        websiteInfo,
        links,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

// Create a custom hook to access context
export function useGlobalContext() {
  return useContext(GlobalContext);
}
