import { formatDateFunction } from "@/app/utlils/functions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React, { useEffect, useState } from "react";

const UpdateResults = ({ games, setGames, teams, setTeams, setError }) => {
  // sort teams by group
  const teamsAssortedByGroup = teams.reduce((acc, team) => {
    // Find if the group already exists in the accumulator
    const groupIndex = acc.findIndex((group) => group.name === team.group);

    if (groupIndex === -1) {
      // If the group doesn't exist, create a new group object
      acc.push({
        name: team.group,
        teams: [team],
      });
    } else {
      // If the group exists, push the team into the existing group
      acc[groupIndex].teams.push(team);
    }

    return acc;
  }, []);

  const groups = [];
  teamsAssortedByGroup.forEach((unit) => {
    groups.push(unit.name);
  });
  console.log(groups);
  const [newDetails, setNewDetails] = useState({
    group: "",
    completed: false,
    winner: "TBA",
    runnerUp: "TBA",
    playOffs1: "",
    playOffs2: "",
    final: "",
  });
  const [teamRankings, setTeamRankings] = useState({
    firstPlace: "1st Place Team",
    secondPlace: "2nd Place Team",
    thirdPlace: "3rd Place Team",
    fourthPlace: "4th Place Team",
    firstFinalist: "Winner of SF1 (1st vs 4th)",
    secondFinalist: "Winner of SF2 (2nd vs 3rd)",
  });

  const calculateTeamRating = (team) => {
    return (
      (team.win_total * 3 + team.draw_total) * 10 -
      (team.goals_for - team.goals_against) * 0.1
    );
  };

  const handleNewDetailChange = (value, name) => {
    const newDetail = { ...newDetails, [name]: value };
    setNewDetails(newDetail);
  };

  const [groupsTeams, setGroupsTeams] = useState([]);
  const [playoffResults, setPlayoffResults] = useState({
    playoffResult1: [0, 0],
    playoffResult2: [0, 0],
    finalResult: [0, 0],
  });

  useEffect(() => {
    const matchingGroup = teamsAssortedByGroup.find(
      (group) => group.name === newDetails.group
    );
    if (matchingGroup) {
      const sortedTeams = matchingGroup.teams
        .map((team) => ({
          ...team,
          rating: calculateTeamRating(team),
        }))
        .sort((a, b) => b.rating - a.rating);
      //
      setGroupsTeams(sortedTeams);
      setTeamRankings({
        ...teamRankings,
        firstPlace: sortedTeams[0]?.name || "",
        secondPlace: sortedTeams[1]?.name || "",
        thirdPlace: sortedTeams[2]?.name || "",
        fourthPlace: sortedTeams[3]?.name || "",
      });
      // Set the group teams or perform any operation here
    }
  }, [newDetails]);

  const updatePlayoffResultsAndFinalists = (score, teamName) => {
    if (score === null || !score) {
      console.log("no score");
      return;
    }

    setPlayoffResults((prevResults) => {
      let newPlayoffResults = { ...prevResults };

      if (teamName === teamRankings.firstPlace) {
        // Update the score for the 1st place team in playoffResult1
        newPlayoffResults.playoffResult1[0] = score;
      } else if (teamName === teamRankings.fourthPlace) {
        // Update the score for the 4th place team in playoffResult1
        newPlayoffResults.playoffResult1[1] = score;
      } else if (teamName === teamRankings.secondPlace) {
        // Update the score for the 2nd place team in playoffResult2
        newPlayoffResults.playoffResult2[0] = score;
      } else if (teamName === teamRankings.thirdPlace) {
        // Update the score for the 3rd place team in playoffResult2
        newPlayoffResults.playoffResult2[1] = score;
      }

      // Update the finalists based on the new playoff results
      setTeamRankings((prevRankings) => {
        let newRankings = { ...prevRankings };

        // Determine the winner of SF1 (1st vs 4th)
        if (
          newPlayoffResults.playoffResult1[0] >
          newPlayoffResults.playoffResult1[1]
        ) {
          newRankings.firstFinalist = prevRankings.firstPlace;
        } else if (
          newPlayoffResults.playoffResult1[0] <
          newPlayoffResults.playoffResult1[1]
        ) {
          newRankings.firstFinalist = prevRankings.fourthPlace;
        } else {
          newRankings.firstFinalist = "Winner of SF1 (1st vs 4th)";
        }

        // Determine the winner of SF2 (2nd vs 3rd)
        if (
          newPlayoffResults.playoffResult2[0] >
          newPlayoffResults.playoffResult2[1]
        ) {
          newRankings.secondFinalist = prevRankings.secondPlace;
        } else if (
          newPlayoffResults.playoffResult2[0] <
          newPlayoffResults.playoffResult2[1]
        ) {
          newRankings.secondFinalist = prevRankings.thirdPlace;
        } else {
          newRankings.secondFinalist = "Winner of SF2 (2nd vs 3rd)";
        }

        return newRankings;
      });

      return newPlayoffResults;
    });
  };

  return (
    <div className="flex flex-col gap-3 justify-center">
      <div>
        <div className="flex gap-3 items-center">
          {" "}
          <div className="flex gap-2 items-center">
            <div>Group</div>
            <Select
              defaultValue={""}
              onValueChange={(value) => handleNewDetailChange(value, "group")}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select one" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {groups.map((group, index) => (
                    <SelectItem key={index} value={group}>
                      {group}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex gap-2 items-center">
            <div>Completed</div>
            <Select
              defaultValue={false}
              onValueChange={(value) =>
                handleNewDetailChange(value, "completed")
              }
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="False" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value={true}>True</SelectItem>
                  <SelectItem value={false}>False</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex gap-3 items-center mt-3 flex-wrap">
          {" "}
          <div className="flex gap-2 items-center flex-wrap">
            <div>Winner:</div>
            <div className="border w-40 p-1">{newDetails.winner}</div>
          </div>
          <div className="flex gap-2 items-center flex-wrap">
            <div>Runner-Up</div>
            <div className="border w-44 p-1">{newDetails.runnerUp}</div>
          </div>
        </div>
        <div className=" mt-3 font-bold">Playoff Semi-final 1</div>
        <div className="flex gap-3 items-center mt-3">
          {" "}
          <div className="flex gap-2 items-center">
            <div>{teamRankings.firstPlace}</div>
            <Input
              type="number"
              className="w-16"
              value={playoffResults.playoffResult1[0]}
              onChange={(e) => {
                setPlayoffResults((prevResults) => ({
                  ...prevResults,
                  playoffResult1: [
                    Number(e.target.value),
                    prevResults.playoffResult1[1],
                  ],
                }));
                updatePlayoffResultsAndFinalists(
                  e.target.value,
                  teamRankings.firstPlace
                );
              }}
            />
            <div>vs</div>
            <Input
              type="number"
              className="w-16"
              value={playoffResults.playoffResult1[1]}
              onChange={(e) => {
                setPlayoffResults((prevResults) => ({
                  ...prevResults,
                  playoffResult1: [
                    prevResults.playoffResult1[0],
                    Number(e.target.value),
                  ],
                }));
                updatePlayoffResultsAndFinalists(
                  e.target.value,
                  teamRankings.fourthPlace
                );
              }}
            />
          </div>
          <div className="flex gap-2 items-center">
            <div>{teamRankings.fourthPlace}</div>
          </div>
        </div>
        <div className=" mt-3 font-bold">Playoff Semi-final 2</div>
        <div className="flex gap-3 items-center mt-3">
          {" "}
          <div className="flex gap-2 items-center">
            <div>{teamRankings.secondPlace} </div>
            <Input
              type="number"
              className="w-16"
              value={playoffResults.playoffResult2[0]}
              onChange={(e) => {
                setPlayoffResults((prevResults) => ({
                  ...prevResults,
                  playoffResult2: [
                    Number(e.target.value),
                    prevResults.playoffResult2[1],
                  ],
                }));
                updatePlayoffResultsAndFinalists(
                  e.target.value,
                  teamRankings.secondPlace
                );
              }}
            />
            <Input
              type="number"
              className="w-16"
              value={playoffResults.playoffResult2[1]}
              onChange={(e) => {
                setPlayoffResults((prevResults) => ({
                  ...prevResults,
                  playoffResult2: [
                    prevResults.playoffResult2[0],
                    Number(e.target.value),
                  ],
                }));
                updatePlayoffResultsAndFinalists(
                  e.target.value,
                  teamRankings.thirdPlace
                );
              }}
            />
            <div>{teamRankings.thirdPlace}</div>
          </div>
        </div>
        <div className=" mt-3 font-bold">Final</div>
        <div className="flex gap-3 items-center mt-3">
          {" "}
          <div className="flex gap-2 items-center">
            <div>{teamRankings.firstFinalist}</div>
            <Input
              type="number"
              className="w-16"
              value={playoffResults.finalResult[0]}
              onChange={(e) =>
                setPlayoffResults((prevResults) => ({
                  ...prevResults,
                  finalResult: [
                    Number(e.target.value),
                    prevResults.finalResult[1],
                  ],
                }))
              }
            />
            <Input
              type="number"
              className="w-16"
              value={playoffResults.finalResult[1]}
              onChange={(e) =>
                setPlayoffResults((prevResults) => ({
                  ...prevResults,
                  finalResult: [
                    prevResults.finalResult[0],
                    Number(e.target.value),
                  ],
                }))
              }
            />
          </div>
          <div className="flex gap-2 items-center">
            <div>vs</div>
            <div>{teamRankings.secondFinalist}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateResults;
