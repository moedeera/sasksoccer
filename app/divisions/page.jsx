"use client";
import React, { useEffect, useState } from "react";

import Landing from "../components/Landing/Landing";
import IndoorSeasonInfo from "../leagues/IndoorSeasonInfo";
import CardSkeleton from "../components/CardSkeleton/CardSkeleton";
import { Cards } from "../../components/Card/Card";

const Page = () => {
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
