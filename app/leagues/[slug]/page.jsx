"use client";

import Block4 from "../../components/Block4/Block4";

import TableComponent from "../../components/Table/TableComponent";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { errorReportInfo } from "./info";
import { fetchLeague } from "../../utlils/request";
import Spinner from "../../components/Spinner";
import { useSession } from "next-auth/react";
import { Button } from "../../../components/ui/button";
import Link from "next/link";
import {
  formatDateToString,
  reorganizeTeamsByGroupNumber,
} from "../../../app/utlils/functions";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";
import BookMarkButton from "../../components/BookMarkButton";
import { Tabs, TabsList, TabsTrigger } from "../../../components/ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";
import Landing2 from "../../components/Landing2/Landing2";

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
      <Landing2 data={leaguePageHeader} />

      {error ? (
        <h3>An Error Occured</h3>
      ) : (
        <>
          {loading && league?.teams && !error ? (
            <Spinner />
          ) : (
            <div className="component-container">
              <small className=" py-1 text-xs">
                {formatDateToString(league?.updatedAt)}
              </small>
              <div className="flex flex-col gap-3 mb-5 ">
                <div className="flex flex-col">
                  {" "}
                  <h3 className="h3-header text-4xl font-bold py-2 mb-1">
                    {league?.description}{" "}
                  </h3>
                  <p className="w-1/2 tracking-wide">
                    Note that the standings displayed below are based only on
                    regular season games and do not take into consideration
                    exhibition or playoff games
                  </p>
                </div>

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
                    <div className="text-base">View</div>

                    <Select
                      className="mb-24 border border-black"
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
                      <SelectContent style={{ border: "1px solid black" }}>
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
                    <div className="overflow-x-scroll grid mt-4 md:grid-cols-2 gap-2 ">
                      {teamsInView.map(
                        (group, index) =>
                          group.name !== "All" && (
                            <div
                              key={index}
                              className="mb-8  border bg-gray-200"
                            >
                              <div className="px-1 py-3 ">
                                {" "}
                                <h3 className="text-2xl text-xl font-bold">
                                  {league.groups && group.name}
                                </h3>
                              </div>

                              <Tabs
                                defaultValue="playoffs"
                                className="md:block md:w-full border pb-1 mb-4"
                              >
                                <div className=" py-1">
                                  <TabsList className="flex justify-start  md:grid md:w-full md:grid-cols-4 gap-1 bg-gray-200 mb-1">
                                    <TabsTrigger
                                      className="color-black"
                                      value="standings"
                                      style={{
                                        border:
                                          "2px solid rgba(128,128,128,0.65)",
                                        color: "black",
                                      }}
                                    >
                                      Standings
                                    </TabsTrigger>
                                    <TabsTrigger
                                      className="color-black"
                                      value="playoffs"
                                      style={{
                                        border:
                                          "2px solid rgba(128,128,128,0.65)",
                                        color: "black",
                                      }}
                                    >
                                      Playoffs
                                    </TabsTrigger>
                                  </TabsList>
                                </div>

                                <div className="">
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
                                            <div className="bg-white border border-gray-400 rounded px-1 py-4 my-1 text-center">
                                              {" "}
                                              Final: <br />
                                              <span className="font-bold tracking-wider">
                                                {detail.final}
                                              </span>
                                            </div>
                                            {group.assorted_teams.length >
                                              3 && (
                                              <>
                                                {" "}
                                                Semi-Finals
                                                <div className="flex gap-2 w-full">
                                                  <div className="bg-amber-100 w-full border border-gray-400 rounded p-1 my-1">
                                                    {" "}
                                                    Semi-final 1: <br />
                                                    <span className="font-bold">
                                                      {detail.playoffs1}
                                                    </span>
                                                  </div>
                                                  <div className="bg-amber-100 w-full border border-gray-400 rounded p-1 my-1 ">
                                                    {" "}
                                                    Semi-final 2: <br />
                                                    <span className="font-bold">
                                                      {detail.playoffs2}
                                                    </span>
                                                  </div>
                                                </div>
                                              </>
                                            )}
                                          </div>
                                        )
                                    )}
                                  </TabsContent>
                                </div>
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
                                      <div>Details:</div>
                                      <div>
                                        {" "}
                                        Playoff Champions:{" "}
                                        <span className="font-bold">
                                          {detail.winner}
                                        </span>
                                      </div>
                                      <div className="bg-white border border-gray-400 rounded px-1 py-4 my-1">
                                        {" "}
                                        Final: <br />
                                        <span className="font-bold  tracking-wider">
                                          {detail.final}
                                        </span>
                                      </div>
                                      {group.assorted_teams.length > 5 && (
                                        <>
                                          Semi-Finals
                                          <div className="flex gap-4">
                                            {" "}
                                            <div className="bg-amber-100 w-full border border-gray-400 rounded p-1 my-1">
                                              {" "}
                                              Semi-final 1: <br />
                                              <span className="font-bold">
                                                {detail.playoffs1}
                                              </span>
                                            </div>
                                            <div className="bg-amber-100 w-full border border-gray-400 rounded p-1 my-1 ">
                                              {" "}
                                              Semi-final 2: <br />
                                              <span className="font-bold">
                                                {detail.playoffs2}
                                              </span>
                                            </div>
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
