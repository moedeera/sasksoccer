"use client";

import React, { useState, useEffect } from "react";

import Block4 from "../components/Block4/Block4";
import { Cards } from "@/components/Card/Card";
import { createOwnLeague, currentData, openerContent } from "./leaguesInfo";
import Block1 from "../components/Block1/Block1";
import Spinner from "../components/Spinner";
import Landing2 from "../components/Landing2/Landing2";
import { Skeleton } from "@/components/ui/skeleton";
import CardSkeleton from "../components/CardSkeleton/CardSkeleton";

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
  const [pageSize, setPageSize] = useState(6);
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
      <Landing2 data={pageHeader} />
      <Block4 data={openerContent} />

      {!loading ? (
        <>
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
