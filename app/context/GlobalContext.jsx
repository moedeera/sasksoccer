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
    { name: "Messages", link: "/messages" },
    { name: "Create", link: "/leagues/create" },
    { name: "Profile", link: "/profile" },
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
        { name: "Mens Full Field 2024", link: "/leagues/men's-outdoor-2024" },
        {
          name: "Women's Full Field 2024",
          link: "/leagues/women's-outdoor-2024",
        },
        { name: "Mens Legends 2024", link: "/leagues/men's-masters-2024" },
        { name: "Mens Masters 2024", link: "/leagues/men's-masters-2024" },
        {
          name: "Mens Half field 2024",
          link: "/leagues/men's-half-field-2024",
        },
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
