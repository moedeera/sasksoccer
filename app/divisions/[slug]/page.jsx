"use client";
import { formatGames, parseSoccerData } from "@/app/utlils/functions";
import React, { useState } from "react";

const randomPlaceHolderImages = [
  "https://images.pexels.com/photos/47343/the-ball-stadion-horn-corner-47343.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/54567/pexels-photo-54567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/209841/pexels-photo-209841.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

const Page = () => {
  const [league, setLeague] = useState({
    name: "",
    type: "",
    description: "",
    teams: [],
    groups: false,
    games: [],
    images: [randomPlaceHolderImages[0]],
    isFeatured: false,
    createdAt: null,
    updatedAt: null,
  });

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

  const handleSubmit = async () => {
    if (!name || !description || type === "") {
      setError("All fields are required.");
      console.log(name, description, type);
      return;
    }

    if (teams.length < 2) {
      setError("A minimum of 2 teams is required.");
      return;
    }

    if (teams.some((team) => team.name === "")) {
      setError("Team names cannot be empty.");
      return;
    }

    const currentDate = new Date();
    const newLeague = {
      name: name,
      groups: groups,
      description: description,
      type: type,
      teams: teams,
      images: league.images[0],
      isFeatured: false,
      createdAt: currentDate,
      updatedAt: currentDate,
    };

    try {
      const response = await fetch("/api/leagues", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newLeague),
      });

      if (!response.ok) {
        throw new Error("Failed to save league");
      }

      const result = await response.json();
      console.log(result); // For demonstration purposes

      setError(""); // Clear any existing error
      router.push(`/leagues/${result.slug}`);
    } catch (error) {
      console.error(error);
      setError("An error occurred while saving the league.");
    }
  };

  console.log("Formatted Games:", formattedGames);
  return <div className="bg-black h-screen">Slug page</div>;
};

export default Page;
