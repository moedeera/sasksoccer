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
        { name: "Mens Full Field", link: "/leagues/men's-outdoor-2025" },
        { name: "Womens Full Field", link: "/leagues/women's-outdoor-2025" },
        { name: "Mens Half Field", link: "/leagues/men's-half-field-2025" },
        { name: "Womens Half Field", link: "/leagues/women's-half-field-2025" },
        { name: "Previous Seasons", link: "/archives" },
        // { name: "Mens Boarded", link: "/leagues/mens-boarded" },
        // ,
        // { name: "Mens Turf 2024", link: "/leagues/mens-turf-2024" },
        // ,
        // { name: "Womens Boarded", link: "/leagues/womens-boarded-2024" },
        // { name: "Womens Turf 2024", link: "/leagues/womans-turf-2024" },
      ],
    },
    {
      name: "Latest",
      Link: "/news",
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

  const suggestionList = [
    { name: "About", link: "/about", keywords: ["about", "contact", "know"] },
    {
      name: "Contact",
      link: "/contact",
      keywords: ["contact", "email", "message", "number"],
    },
    {
      name: "Home",
      link: "/",
      case: "all",
      keywords: ["home", "homepage", "main"],
    },
    {
      name: "Men's boarded",
      link: "/leagues/mens-boarded",
      keywords: [
        "mens",
        "mens boarded",
        "boarded",
        "league 1",
        "league 2",
        "league 3",
        "division",
        "masters",
      ],
    },
    {
      name: "Women's boarded",
      link: "/leagues/womens-boarded-2024",
      keywords: [
        "womens",
        "boarded",
        "league 1",
        "league 2",
        "league 3",
        "division",
      ],
    },
    {
      name: "Men's Turf",
      link: "/leagues/mens-turf-2024",
      keywords: [
        "mens",
        "turf",
        "Mens",
        "Turf",
        "league 1",
        "league 2",
        "league 3",
        "league 4",
        "league 5",
        "league 6",
        "division",
      ],
    },
    {
      name: "Women's Turf",
      link: "/leagues/womans-turf-2024",
      keywords: ["womens", "turf", "league 1", "masters"],
    },
    {
      name: "Shop",
      link: "/shop",
      keywords: [
        "merch",
        "shop",
        "merchandise",
        "buy",
        "sell",
        "jersey",
        "kits",
      ],
    },
    {
      name: "Latest",
      link: "/latest",
      keywords: ["news", "latest", "upcoming", "blog", "updates"],
    },
    {
      name: "Archives",
      link: "/archives",
      keywords: ["leagues", "archives", "previous", "last", "history"],
    },
    {
      name: "Men's Full Field Outdoor 2024",
      link: "../leagues/men's-outdoor-2024",
      keywords: ["Mens", "outdoor", "2024", "last", "full", "full field"],
    },
    {
      name: "Women's Full Field Outdoor 2024",
      link: "../leagues/women's-outdoor-2024",
      keywords: ["Womens", "outdoor", "2024", "last", "full", "full field"],
    },
    {
      name: "Men's Half Field Outdoor 2024",
      link: "../leagues/men's-half-field-2024",
      keywords: ["Mens", "outdoor", "2024", "last", "half", "field"],
    },
    {
      name: "Women's Half Field Outdoor 2024",
      link: "../leagues/women's-half-field-2024",
      keywords: ["Womens", "outdoor", "2024", "last", "half", "field"],
    },
    {
      name: "Men's Full Field Outdoor 2025",
      link: "../leagues/men's-outdoor-2025",
      keywords: ["Mens", "outdoor", "2025", "last", "full", "full field"],
    },
    {
      name: "Women's Full Field Outdoor 2025",
      link: "../leagues/women's-outdoor-2025",
      keywords: ["Womens", "outdoor", "2025", "last", "full", "full field"],
    },
    {
      name: "Men's Half Field Outdoor 2025",
      link: "../leagues/men's-half-field-2025",
      keywords: ["Mens", "outdoor", "2025", "last", "half", "field"],
    },
    {
      name: "Women's Half Field Outdoor 2025",
      link: "../leagues/women's-half-field-2024",
      keywords: ["Womens", "outdoor", "2025", "last", "half", "field"],
    },
  ];

  return (
    <GlobalContext.Provider
      value={{
        unreadCount,
        setUnreadCount,
        headerLinks,
        websiteInfo,
        links,
        suggestionList,
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
