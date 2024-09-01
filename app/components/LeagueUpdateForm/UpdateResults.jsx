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
    winner: "",
    runnerUp: "",
    playOffs1: "",
    playOffs2: "",
    final: "",
  });

  const handleNewDetailChange = (value, name) => {
    const newDetail = { ...newDetails, [name]: value };
    setNewDetails(newDetail);
  };

  const [groupsTeams, setGroupsTeams] = useState([]);

  const matchingGroup = teamsAssortedByGroup.find(
    (group) => group.name === newDetails.group
  );
  useEffect(() => {
    console.log(groups, matchingGroup);
    if (matchingGroup) {
      // Set the group teams or perform any operation here
      setGroupsTeams(matchingGroup.teams);
    }
  }, [newDetails]);

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
        <div className="flex gap-3 items-center mt-3">
          {" "}
          <div className="flex gap-2 items-center">
            <div>Winner</div>
            <Select
              defaultValue={""}
              onValueChange={(value) => handleNewDetailChange(value, "winner")}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select one" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {groupsTeams.map((team, index) => (
                    <SelectItem key={index} value={team.name}>
                      {team.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex gap-2 items-center">
            <div>Runner-Up</div>
            <Select
              defaultValue={false}
              onValueChange={(value) =>
                handleNewDetailChange(value, "runnerUp")
              }
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="False" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {groupsTeams.map((team, index) => (
                    <SelectItem key={index} value={team.name}>
                      {team.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          {/* <Input
            type="text"
            className="max-w-40"
            value={newDetails.group}
            onChange={(e) =>
              handleNewDetailChange(e.target.value, e.target.name)
            }
          /> */}
        </div>
        <div className=" mt-3 font-bold">Playoff Semi-final 1</div>
        <div className="flex gap-3 items-center mt-3">
          {" "}
          <div className="flex gap-2 items-center">
            <Select
              defaultValue={""}
              onValueChange={(value) => handleNewDetailChange(value, "winner")}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select one" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {groupsTeams.map((team, index) => (
                    <SelectItem key={index} value={team.name}>
                      {team.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex gap-2 items-center">
            <div>vs</div>
            <Select
              defaultValue={false}
              onValueChange={(value) =>
                handleNewDetailChange(value, "runnerUp")
              }
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Team" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {groupsTeams.map((team, index) => (
                    <SelectItem key={index} value={team.name}>
                      {team.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className=" mt-3 font-bold">Playoff Semi-final 2</div>
        <div className="flex gap-3 items-center mt-3">
          {" "}
          <div className="flex gap-2 items-center">
            <Select
              defaultValue={""}
              onValueChange={(value) => handleNewDetailChange(value, "winner")}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select one" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {groupsTeams.map((team, index) => (
                    <SelectItem key={index} value={team.name}>
                      {team.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex gap-2 items-center">
            <div>vs</div>
            <Select
              defaultValue={false}
              onValueChange={(value) =>
                handleNewDetailChange(value, "runnerUp")
              }
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Team" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {groupsTeams.map((team, index) => (
                    <SelectItem key={index} value={team.name}>
                      {team.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className=" mt-3 font-bold">Final</div>
        <div className="flex gap-3 items-center mt-3">
          {" "}
          <div className="flex gap-2 items-center">
            <Select
              defaultValue={""}
              onValueChange={(value) => handleNewDetailChange(value, "winner")}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select one" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {groupsTeams.map((team, index) => (
                    <SelectItem key={index} value={team.name}>
                      {team.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex gap-2 items-center">
            <div>vs</div>
            <Select
              defaultValue={false}
              onValueChange={(value) =>
                handleNewDetailChange(value, "runnerUp")
              }
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Team" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {groupsTeams.map((team, index) => (
                    <SelectItem key={index} value={team.name}>
                      {team.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateResults;
