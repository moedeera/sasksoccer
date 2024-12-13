"use client";
import React, { useEffect, useState } from "react";
import { formatGames, parseSoccerData } from "../utlils/functions";
import Landing from "../components/Landing/Landing";
import IndoorSeasonInfo from "../leagues/IndoorSeasonInfo";
import CardSkeleton from "../components/CardSkeleton/CardSkeleton";
import { Cards } from "@/components/Card/Card";

const Page = () => {
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
  // console.log("Team Stats:", teamStats);

  const formattedGames = formatGames(input);

  const randomPlaceHolderImages = [
    "https://images.pexels.com/photos/47343/the-ball-stadion-horn-corner-47343.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/54567/pexels-photo-54567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/209841/pexels-photo-209841.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];
  const [leagues, setLeagues] = useState({
    name: "Men's 2024-2025 Boarded",
    type: "Mens",
    description: "Mens 2024-2025 Boarded Divisions",
    category: "indoor",
    categories: ["indoor", "boarded", "mens"],
    slug: "mensboarded2425",
    details: [
      {
        group: "Mens Boarded ",
        description: "Mens Boarded Masters",
        games: "",
        completed: false,
        winner: "n/a",
        runnerUp: "n/a",
        playoffs1: "n/a",
        playoffs2: "n/a",
        final: "tba",
        link: "",
      },
      {
        group: "Mens Boarded ",
        description: "Mens Boarded 1 ",
        games: "",
        completed: false,
        winner: "n/a",
        runnerUp: "n/a",
        playoffs1: "n/a",
        playoffs2: "n/a",
        final: "tba",
        link: "",
      },
      {
        group: "Mens Boarded ",
        description: "Mens Boarded 2",
        games: "",
        completed: false,
        winner: "n/a",
        runnerUp: "n/a",
        playoffs1: "n/a",
        playoffs2: "n/a",
        final: "tba",
        link: "",
      },
      {
        group: "Mens Boarded ",
        description: "Mens Boarded 3",
        games: "",
        completed: false,
        winner: "n/a",
        runnerUp: "n/a",
        playoffs1: "n/a",
        playoffs2: "n/a",
        final: "tba",
        link: "",
      },
    ],
    images: [randomPlaceHolderImages[0]],
    isFeatured: false,
    createdAt: null,
    updatedAt: null,
  });
  const [loading, setLoading] = useState(true);
  const pageHeader = {
    title: "Leagues",

    button: null,
    mini: true,
    image:
      "/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage0.c1c04e41.jpg&w=640&q=75",
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("/api/leaguedata", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(leagues),
      });

      if (!response.ok) {
        throw new Error("Failed to save league");
      }

      const result = await response.json();
      console.log(result); // For demonstration purposes

      // setError(""); // Clear any existing error
      // router.push(`/leagues/${result.slug}`);
    } catch (error) {
      console.error(error);
      // setError("An error occurred while saving the league.");
    }
  };

  useEffect(() => {
    const handleGET = async () => {
      try {
        const response = await fetch("/api/leaguedata", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch leagues");
        }

        const result = await response.json();
        setLoading(false);
        setLeagues(result);

        console.log(result); // For demonstration purposes

        // setError(""); // Clear any existing error
        // router.push(`/leagues/${result.slug}`);
      } catch (error) {
        console.error(error);
        // setError("An error occurred while saving the league.");
      }
    };
    handleGET();
  }, []);

  return (
    <div className="">
      <button
        onClick={() => {
          handleSubmit();
        }}
      >
        Post
      </button>
      <Landing data={pageHeader} />
      <IndoorSeasonInfo />
      <div className="h3-header text-3xl font-bold text-center ">
        Indoor Leagues 2024-2025
        {loading ? (
          <>
            <CardSkeleton />
          </>
        ) : (
          <Cards data={leagues} directory={"divisions"} />
        )}
      </div>
    </div>
  );
};

export default Page;
