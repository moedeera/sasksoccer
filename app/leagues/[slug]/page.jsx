"use client";

import Block4 from "@/app/components/Block4/Block4";
import Landing from "@/app/components/Landing/Landing";
import TableComponent from "@/app/components/Table/TableComponent";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { errorReportInfo } from "./info";
import { fetchLeague } from "@/app/utlils/request";
import Spinner from "@/app/components/Spinner";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const LeaguePage = () => {
  const { data: session } = useSession();
  const { slug } = useParams();

  const [league, setLeague] = useState(null);
  const [groups, setGroups] = useState(false);
  const [groupAssortedTeams, setGroupAssortedTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [assortedTeams, setAssortedTeams] = useState([]);

  const leaguePageHeader = {
    title: `${slug.replace(/-/g, " ")}`,
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
    const fetchAndSort = async () => {
      await fetchLeagueData();
    };

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

    const sortAndGroupTeams = (teams) => {
      // Sort teams based on points, goal differential, and goals for
      const sortedTeams = teams.sort((a, b) => {
        if (b.points !== a.points) return b.points - a.points;
        if (b.goal_differential !== a.goal_differential)
          return b.goal_differential - a.goal_differential;
        return b.goals_for - a.goals_for;
      });

      // Create an object to hold the assorted teams by group
      const groupedTeams = {};

      sortedTeams.forEach((team) => {
        if (team.group) {
          if (!groupedTeams[team.group]) {
            groupedTeams[team.group] = {
              name: team.group,
              assorted_teams: [],
            };
          }
          groupedTeams[team.group].assorted_teams.push(team);
        }
      });

      // Convert the grouped teams object into an array
      const assortedTeams = Object.values(groupedTeams);

      // Add an object for all teams
      assortedTeams.push({
        name: "all",
        assorted_teams: sortedTeams,
      });
      console.log(assortedTeams);
      // Update the state
      setGroupAssortedTeams(assortedTeams);
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
          sortAndGroupTeams(teamsWithStats);
        }

        // console.log(leagueData, session);
        setLeague(leagueData);
      } catch (error) {
        console.error("Error fetching league", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    if (league === null) {
      fetchAndSort();
    }
  }, [slug, session]);

  return (
    <div>
      <Landing data={leaguePageHeader} />
      {error ? (
        <h3>An Error Occured</h3>
      ) : (
        <>
          {loading && league?.teams && !error ? (
            <Spinner />
          ) : (
            <div className="component-container">
              <div className="flex gap-3 mb-5 ">
                <h3 className="h3-header text-4xl font-bold py-3">
                  {league?.description}{" "}
                </h3>
                {session && league && session.user.name === league.admin && (
                  <Link href={`/leagues/${slug}/edit`}>
                    <Button>Edit</Button>
                  </Link>
                )}
              </div>
              {groupAssortedTeams.forEach(() => (
                <h1>Hello</h1>
              ))}
              {groupAssortedTeams.length === 0 ? (
                <>
                  <Spinner />
                </>
              ) : (
                <>
                  {groupAssortedTeams.map(
                    (group, index) =>
                      group.name !== "all" && (
                        <div key={index} className="mb-8">
                          <h3 className="text-2xl mb-3">{group.name}</h3>
                          <TableComponent data={group.assorted_teams} />
                        </div>
                      )
                  )}
                </>
              )}
            </div>
          )}
        </>
      )}

      <Block4 data={errorReportInfo} />
    </div>
  );
};

export default LeaguePage;
