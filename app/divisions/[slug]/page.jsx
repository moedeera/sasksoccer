"use client";

import SingleTable from "../../components/Table/SingleTable";

import {
  calculatePointsAndDifferential,
  parseSoccerData,
  sortTeams,
} from "../../utlils/functions";
import { fetchLeagueData } from "../../utlils/request";
import { useSession } from "next-auth/react";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = () => {
  const { data: session } = useSession();
  const { slug } = useParams();
  const [league, setLeague] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [sortedD1, setSortedD1] = useState();
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

        // console.log(formatGames(leagueData.details[1].games));
        // console.log(parseSoccerData(leagueData.details[1].games));
        let rawData = parseSoccerData(leagueData.details[0].games);
        let processedData = calculatePointsAndDifferential(rawData);
        let sortedLeague = sortTeams(processedData);
        console.log(
          "raw data:",
          rawData,
          "processed data:",
          processedData,
          "sortedLeague:",
          sortedLeague
        );
        setSortedD1(sortedLeague);
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
    <div className="component-container ">
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
          <SingleTable teamsInfo={sortedD1} />
        </div>
      ))}
    </div>
  );
};

export default Page;
