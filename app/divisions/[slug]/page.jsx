"use client";

import { fetchLeagueData } from "@/app/utlils/request";
import { useSession } from "next-auth/react";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = () => {
  const { data: session } = useSession();
  const { slug } = useParams();
  const [league, setLeague] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const leaguePageHeader = {
    title: `${slug.replace(/-/g, " ")}`,
    content: null,
    button: null,
    mini: true,
  };
  // fetch league info
  useEffect(() => {
    const fetchLeague = async () => {
      if (!slug) return;

      try {
        setLoading(true);
        const leagueData = await fetchLeagueData(slug);
        setLeague(leagueData);
      } catch (error) {
        console.error("Error fetching league", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchLeague();
  }, [slug]);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div className="component-container h-screen flex flex-col">
      {leaguePageHeader.title}
      <div>name:{league.name}</div>
      <div>name:{league.name}</div>
    </div>
  );
};

export default Page;
