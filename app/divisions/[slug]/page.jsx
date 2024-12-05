"use client";
import { formatGames, parseSoccerData } from "@/app/utlils/functions";
import React from "react";

const page = () => {
  // Example usage
  const input = `Tue, Oct. 08, 2024 7:30 PM	Trail Appliance	Ubuntu Fc (5)	ASTRA U23 (2)		Print
Tue, Oct. 08, 2024 8:30 PM	Trail Appliance	Simba Khukuri FC (2)	Galaxy TFC (7)		Print
Tue, Oct. 15, 2024 9:15 PM	Kavia Auto Body	Galaxy TFC (7)	ASTRA U23 (7)		Print
Tue, Oct. 15, 2024 10:15 PM	Kavia Auto Body	Simba Khukuri FC (1)	Ubuntu Fc (2)		Print
Tue, Oct. 22, 2024 8:30 PM	Trail Appliance	Ubuntu Fc (5)	Galaxy TFC (6)		Print
Tue, Oct. 22, 2024 9:30 PM	Trail Appliance	ASTRA U23 (5)	Simba Khukuri FC (0)		Print
Tue, Oct. 29, 2024 9:15 PM	Kavia Auto Body	Galaxy TFC (4)	Simba Khukuri FC (3)		Print
Tue, Oct. 29, 2024 10:15 PM	Kavia Auto Body	ASTRA U23 (2)	Ubuntu Fc (5)		Print
Tue, Nov. 05, 2024 8:30 PM	Trail Appliance	Ubuntu Fc (6)	Simba Khukuri FC (1)		Print
Tue, Nov. 05, 2024 9:30 PM	Trail Appliance	ASTRA U23 (5)	Galaxy TFC (6)		Print
Tue, Nov. 12, 2024 9:00 PM	Kavia Auto Body	Simba Khukuri FC (3)	ASTRA U23 (4)		Print
Tue, Nov. 12, 2024 10:00 PM	Kavia Auto Body	Galaxy TFC (6)	Ubuntu Fc (6)		Print
Tue, Nov. 19, 2024 8:30 PM	Trail Appliance	Ubuntu Fc (3)	ASTRA U23 (5)		Print
Tue, Nov. 19, 2024 9:30 PM	Trail Appliance	Simba Khukuri FC (6)	Galaxy TFC (6)		Print
Tue, Dec. 03, 2024 9:00 PM	Kavia Auto Body	Simba Khukuri FC (0)	Ubuntu Fc (1)		Print
Tue, Dec. 03, 2024 10:00 PM	Kavia Auto Body	Galaxy TFC (4)	ASTRA U23 (5)		Print`;

  const teamStats = parseSoccerData(input);
  console.log("Team Stats:", teamStats);

  const formattedGames = formatGames(input);
  console.log("Formatted Games:", formattedGames);
  return <div className="bg-black h-screen">Slug page</div>;
};

export default page;
