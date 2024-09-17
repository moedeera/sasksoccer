"use client";

import React, { useState, useEffect } from "react";

import Block4 from "../components/Block4/Block4";
import { Cards } from "@/components/Card/Card";
import { createOwnLeague, currentData, openerContent } from "./leaguesInfo";
import Block1 from "../components/Block1/Block1";

import CardSkeleton from "../components/CardSkeleton/CardSkeleton";
import Landing from "../components/Landing/Landing";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Link from "next/link";
import IndoorSeasonInfo from "./IndoorSeasonInfo";

const PageComponent = () => {
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
        console.log(data.leagues);
        setLeagues(data.leagues);
        setTotalItems(data.total);
      } catch (error) {
        toast.error("Something went wrong");
      } finally {
        setLoading(false);
      }
    };
    fetchAllLeagues();
  }, [page, pageSize]);

  return (
    <div>
      <Landing data={pageHeader} />
      <IndoorSeasonInfo />

      <Block4 data={openerContent} />
      <div className="h3-header text-3xl font-bold text-center ">
        Summer 2024 Results
      </div>

      {loading ? (
        <>
          <CardSkeleton />
          <CardSkeleton />
        </>
      ) : (
        <Cards data={leagues} />
      )}
      <Block1 data={createOwnLeague} />
    </div>
  );
};

export default PageComponent;
