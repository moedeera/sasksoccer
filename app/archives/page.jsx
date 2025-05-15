"use client";
import React, { useEffect, useState } from "react";
import Landing2 from "../components/Landing2/Landing2";
import CardSkeleton from "../components/CardSkeleton/CardSkeleton";
import { Cards } from "../../components/Card/Card";

export default function Page() {
  const pageHeader = {
    title: "League Archives",
    content: `A list of results for prior year leagues and tournaments`,
    button: null,
    mini: true,
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
          data.leagues.filter(
            (league) => league.category === "indoor" && league.year === 2024
          )
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
      <Landing2 data={pageHeader} />
      <div className="h3-header text-3xl font-bold text-center mt-20">
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
      <div className="h3-header text-3xl font-bold text-center ">
        Outdoor League Results for 2024
      </div>
      {loading ? (
        <>
          <CardSkeleton />
          <CardSkeleton />
        </>
      ) : (
        <Cards
          data={leagues?.filter((league) => league.category === "outdoor")}
        />
      )}
    </div>
  );
}
