"use client";
import { formatGames, parseSoccerData } from "@/app/utlils/functions";
import React from "react";

const page = () => {
  // Example usage
  const input = `Mon, Oct. 07, 2024 7:30 PM\tTrail Appliance\tFlamingo FC (3)\tFulchester United (1)\t\tPrint
Mon, Oct. 07, 2024 8:30 PM\tTrail Appliance\tGalacticos FC (1)\tSparta FC (10)\t\tPrint
Mon, Oct. 07, 2024 9:30 PM\tTrail Appliance\tNLA FC (7)\tVikings Turf (3)\t\tPrint
Wed, Oct. 16, 2024 9:15 PM\tKavia Auto Body\tSparta FC (4)\tNLA FC (6)\t\tPrint`;

  const teamStats = parseSoccerData(input);
  console.log("Team Stats:", teamStats);

  const formattedGames = formatGames(input);
  console.log("Formatted Games:", formattedGames);
  return <div className="bg-black h-screen">Slug page</div>;
};

export default page;
