"use client";

import React, { useState, useEffect } from "react";

import Block4 from "../components/Block4/Block4";
import { Cards } from "@/components/Card/Card";
import { createOwnLeague, currentData, openerContent } from "./leaguesInfo";
import Block1 from "../components/Block1/Block1";

import CardSkeleton from "../components/CardSkeleton/CardSkeleton";
import Landing from "../components/Landing/Landing";

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
      <div className="component-container modified-container mt-10 p-4">
        <div className="h3-header text-2xl font-bold mb-4">
          Indoor Season 2024-25
        </div>
        <div className="">
          <p className="text-base">
            {" "}
            Saskatoon Adult and youth Soccer both have their indoor season
            starting around this October. For more information on each you can
            visit their respective websites at{" "}
            <a
              className="underline"
              href="https://www.saskatoonadultsoccer.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              saskatoonadultsoccer.com
            </a>{" "}
            &{" "}
            <a
              className="underline"
              href="https://saskatoonyouthsoccer.ca/"
              target="_blank"
              rel="noopener noreferrer"
            >
              saskatoonyouthsoccer.ca
            </a>
          </p>
        </div>
      </div>

      <Block4 data={openerContent} />

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
