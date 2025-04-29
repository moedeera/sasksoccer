"use client";

import React, { useState, useEffect } from "react";
import Block4 from "../components/Block4/Block4";
import { Cards } from "../../components/Card/Card";
import { createOwnLeague, currentData, openerContent } from "./leaguesInfo";
import Block1 from "../components/Block1/Block1";

import CardSkeleton from "../components/CardSkeleton/CardSkeleton";

import Landing2 from "../components/Landing2/Landing2";
import OutdoorSeasonInfo from "./OutdoorSeasonInfo";

export default function Page() {
  const pageHeader = {
    title: "Leagues",

    button: null,
    mini: true,
    image:
      "/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage0.c1c04e41.jpg&w=640&q=75",
  };
  const [leagues, setLeagues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(12);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    const fetchAllLeagues = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `/api/leagues?page=${page}&pageSize=${pageSize}`
        );

        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await res.json();
        // console.log(data.leagues);
        setLeagues(data.leagues);
        setTotalItems(data.total);
        console.log(
          "leagues:",
          data.leagues.filter((league) => league.category === "indoor")
        );
      } catch (error) {
        toast.error("Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    const checkAndUpdateLeagues = async () => {
      try {
        const response = await fetch("/api/leagues/check-and-update", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        console.log("Leagues updated successfully:", data.message);

        return data; // Returns the result to be used elsewhere if needed
      } catch (error) {
        console.error("Failed to update leagues:", error);
        return { error: error.message };
      }
    };

    fetchAllLeagues();
    checkAndUpdateLeagues();
  }, [page, pageSize]);

  return (
    <div>
      {" "}
      <Landing2 data={pageHeader} />
      <OutdoorSeasonInfo />
      <Block4 data={openerContent} />
      <div className="h3-header text-3xl font-bold text-center ">
        Indoor League Results for 2024-2025
      </div>
      {loading ? (
        <>
          <CardSkeleton />
          <CardSkeleton />
        </>
      ) : (
        <Cards
          data={leagues?.filter((league) => league.category === "indoor")}
        />
      )}
    </div>
  );
}
