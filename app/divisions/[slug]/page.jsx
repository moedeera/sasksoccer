"use client";

import { formatGames, parseSoccerData } from "@/app/utlils/functions";
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

        console.log(formatGames(leagueData.details[1].games));
        console.log(parseSoccerData(leagueData.details[1].games));
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
      {league.details.map((detail, index) => (
        <div
          key={index}
          className="flex flex-col gap-2 border border-rounded mb-2 py-3 "
        >
          <h3 className="text-xl mb-3 px-1">{detail.group}</h3>
          <div className="border w-max p-1 bg-slate-300">
            {detail.description}
          </div>
          {/* <div className="border">{formatGames(detail.games)}</div> */}
        </div>
      ))}
    </div>
  );
};

export default Page;
