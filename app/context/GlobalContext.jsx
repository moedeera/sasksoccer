"use client";
import { createContext, useContext, useState } from "react";
import image1 from "../../assets/images/logo-white.png";
// Create context
export const GlobalContext = createContext();

// Create a provider
export function GlobalProvider({ children }) {
  const [unreadCount, setUnreadCount] = useState(0);

  const websiteInfo = {
    mainColor: "#169873",
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
  const headerLinks = [
    { name: "Home", Link: "/", case: "All" },
    { name: "Login or Register", Link: "/properties", case: "login" },
  ];

  return (
    <GlobalContext.Provider
      value={{
        unreadCount,
        setUnreadCount,
        headerLinks,
        websiteInfo,
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
