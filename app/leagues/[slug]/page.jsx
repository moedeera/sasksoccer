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
import { reorganizeTeamsByGroupNumber } from "@/app/utlils/functions";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import BookMarkButton from "@/app/components/BookMarkButton";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { TabsContent } from "@radix-ui/react-tabs";

const LeaguePage = () => {
  const { data: session } = useSession();
  const { slug } = useParams();

  const [league, setLeague] = useState(null);
  const [teamsInView, setTeamsInView] = useState(false);
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
        name: "All",
        assorted_teams: sortedTeams,
      });

      // Update the state
      const reorganizedTeams = reorganizeTeamsByGroupNumber(assortedTeams);
      setGroupAssortedTeams(reorganizedTeams);
      setTeamsInView(reorganizedTeams);
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

              {groupAssortedTeams.length === 0 ? (
                <>
                  <Spinner />
                </>
              ) : (
                <>
                  <div className="flex items-center gap-4">
                    <BookMarkButton league={league} />
                    <div className="text-base">Filter by league</div>

                    <Select
                      className="mb-24 border"
                      defaultValue={"All"}
                      onValueChange={(value) => {
                        if (value.name === "all" || value.name === "All") {
                          setTeamsInView(
                            groupAssortedTeams.filter(
                              (group) => group.name !== "all"
                            )
                          );

                          return;
                        }
                        // Search for the team with the matching name in the groupAssortedTeams array
                        const matchingTeam = groupAssortedTeams.filter(
                          (team) => team.name === value.name
                        );
                        let matchingTeamArray = [matchingTeam];
                        // Update the teamsInView state with the matching team, or set it to false if no match is found
                        setTeamsInView(matchingTeam || false);
                      }}
                    >
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="All" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {groupAssortedTeams.map((group, index) => (
                            <SelectItem
                              key={index}
                              value={group}
                              className="capitalize"
                            >
                              {group.name}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  {teamsInView.length > 1 ? (
                    <div className="overflow-x-scroll grid mt-4 md:grid-cols-2 gap-2">
                      {teamsInView.map(
                        (group, index) =>
                          group.name !== "All" && (
                            <div key={index} className="mb-8  border">
                              <div className="px-1 py-3 bg-gray-200">
                                {" "}
                                <h3 className="text-2xl text-xl font-bold">
                                  {league.groups && group.name}
                                </h3>
                                <small className="border py-1 text-xs">
                                  Last updated August 29 2024
                                </small>
                              </div>

                              <Tabs
                                defaultValue="standings"
                                className="md:block md:w-full  pb-1"
                              >
                                <TabsList className="flex justify-start  md:grid md:w-full md:grid-cols-4 gap-1 bg-gray-200">
                                  <TabsTrigger
                                    value="standings"
                                    style={{
                                      border:
                                        "2px solid rgba(128,128,128,0.65)",
                                    }}
                                  >
                                    Standings
                                  </TabsTrigger>
                                  <TabsTrigger
                                    value="playoffs"
                                    style={{
                                      border:
                                        "2px solid rgba(128,128,128,0.65)",
                                    }}
                                  >
                                    Playoffs
                                  </TabsTrigger>
                                </TabsList>
                                <TabsContent
                                  value="standings"
                                  className="w-full"
                                >
                                  {" "}
                                  <TableComponent
                                    data={group.assorted_teams}
                                    leagueDetails={league?.details}
                                    name={group.name}
                                  />
                                </TabsContent>
                                <TabsContent value="playoffs">
                                  {league.details.map(
                                    (detail, index) =>
                                      detail.group === group.name &&
                                      detail.completed && (
                                        <div
                                          key={index}
                                          className="bg-gray-200 p-3 text-sm"
                                        >
                                          <div>
                                            {" "}
                                            Playoff Champions:{" "}
                                            <span className="font-bold">
                                              {detail.winner}
                                            </span>
                                          </div>
                                          <div className="border border-gray-400 rounded p-1 my-1">
                                            {" "}
                                            Final: <br />
                                            <span className="font-bold">
                                              {detail.final}
                                            </span>
                                          </div>
                                          {group.assorted_teams.length > 5 && (
                                            <>
                                              {" "}
                                              <div className="border border-gray-400 rounded p-1 my-1">
                                                {" "}
                                                Semi-final 1: <br />
                                                <span className="font-bold">
                                                  {detail.playoffs1}
                                                </span>
                                              </div>
                                              <div className="border border-gray-400 rounded p-1 my-1 ">
                                                {" "}
                                                Semi-final 2: <br />
                                                <span className="font-bold">
                                                  {detail.playoffs2}
                                                </span>
                                              </div>
                                            </>
                                          )}
                                        </div>
                                      )
                                  )}
                                </TabsContent>
                              </Tabs>
                            </div>
                          )
                      )}
                    </div>
                  ) : (
                    <div className="overflow-x-scroll grid mt-4  border">
                      {teamsInView.map(
                        (group, index) =>
                          group.name !== "all" && (
                            <div key={index} className="mb-8">
                              <h3 className="text-2xl  px-1 py-3 text-xl bg-gray-100 font-bold">
                                {league.groups && group.name}
                              </h3>

                              <TableComponent
                                data={group.assorted_teams}
                                leagueDetails={league?.details}
                                name={group.name}
                              />
                              {league.details.map(
                                (detail, index) =>
                                  detail.group === group.name &&
                                  detail.completed && (
                                    <div
                                      key={index}
                                      className="bg-gray-200 p-3 text-sm"
                                    >
                                      <div>
                                        {" "}
                                        Playoff Champions:{" "}
                                        <span className="font-bold">
                                          {detail.winner}
                                        </span>
                                      </div>
                                      <div className="border border-gray-400 rounded p-1 my-1">
                                        {" "}
                                        Final: <br />
                                        <span className="font-bold">
                                          {detail.final}
                                        </span>
                                      </div>
                                      {group.assorted_teams.length > 5 && (
                                        <>
                                          {" "}
                                          <div className="border border-gray-400 rounded p-1 my-1">
                                            {" "}
                                            Semi-final 1: <br />
                                            <span className="font-bold">
                                              {detail.playoffs1}
                                            </span>
                                          </div>
                                          <div className="border border-gray-400 rounded p-1 my-1 ">
                                            {" "}
                                            Semi-final 2: <br />
                                            <span className="font-bold">
                                              {detail.playoffs2}
                                            </span>
                                          </div>
                                        </>
                                      )}
                                    </div>
                                  )
                              )}
                            </div>
                          )
                      )}
                    </div>
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
