"use client";

import Block4 from "@/app/components/Block4/Block4";
import Landing from "@/app/components/Landing/Landing";
import TableComponent from "@/app/components/Table/TableComponent";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { errorReportInfo } from "./info";
import { fetchLeague } from "@/app/utlils/request";
import Spinner from "@/app/components/Spinner";

const LeaguePage = () => {
  const { slug } = useParams();
  console.log(slug);
  const [league, setLeague] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [assortedTeams, setAssortedTeams] = useState([]);

  const leaguePageHeader = {
    title: `Standings`,
    content: null,
    button: null,
    mini: true,
  };
  const LoadingHeader = {
    title: `Loading...`,
    content: null,
    button: null,
    mini: true,
  };

  useEffect(() => {
    const calculatePointsAndDifferential = (teams) => {
      return teams.map((team) => ({
        ...team,
        points: team.win_total * 3 + team.draw_total,
        goal_differential: team.goals_for - team.goals_against,
      }));
    };

    const sortTeams = (teams) => {
      return teams.sort((a, b) => {
        if (b.points !== a.points) return b.points - a.points;
        if (b.goal_differential !== a.goal_differential)
          return b.goal_differential - a.goal_differential;
        return b.goals_for - a.goals_for;
      });
    };

    const fetchLeagueData = async () => {
      if (!slug) {
        return;
      }
      try {
        const leagueData = await fetchLeague(slug);

        if (leagueData && leagueData.teams) {
          const teamsWithStats = calculatePointsAndDifferential(
            leagueData.teams
          );
          const sortedTeams = sortTeams(teamsWithStats);
          setAssortedTeams(sortedTeams);
        }

        console.log(leagueData);
        setLeague(leagueData);
      } catch (error) {
        console.error("Error fetching league", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    if (league === null) {
      fetchLeagueData();
    }
  }, [slug]);
  return (
    <div>
      {error ? (
        <h3>An Error Occured</h3>
      ) : (
        <>
          {" "}
          {loading && league?.teams && !error ? (
            <Landing data={leaguePageHeader} />
          ) : (
            <Landing data={LoadingHeader} />
          )}
        </>
      )}

      {error ? (
        <h3>An Error Occured</h3>
      ) : (
        <>
          {loading && league?.teams && !error ? (
            <Spinner />
          ) : (
            <div className="component-container">
              <h3 className="mb-3 text-3xl">{league?.name} League</h3>
              <TableComponent data={assortedTeams} />
            </div>
          )}
        </>
      )}

      <Block4 data={errorReportInfo} />
    </div>
  );
};

export default LeaguePage;
