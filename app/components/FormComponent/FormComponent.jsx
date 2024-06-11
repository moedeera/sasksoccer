"use client";
import React, { useState } from "react";

// Sample components from your UI library (replace with actual imports)
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const LeagueForm = () => {
  const [name, setName] = useState("");
  const [manager, setManager] = useState("");
  const [teams, setTeams] = useState([""]);
  const [league, setLeague] = useState({
    owner: "",
    name: "",
    type: "",
    description: "",
    teams: [],
    games: [],
    images: [],
    isFeatured: false,
    createdAt: null,
    updatedAt: null,
  });

  const handleAddTeam = () => {
    setTeams([...teams, ""]);
  };

  const handleTeamChange = (index, event) => {
    const newTeams = [...teams];
    newTeams[index] = event.target.value;
    setTeams(newTeams);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const leagueData = {
      name,
      manager,
      teams,
    };
    setLeague(leagueData);
    console.log(leagueData); // For demonstration purposes
  };

  return (
    <div className="component-container">
      <form
        action="/api/properties"
        method="POST"
        encType="multipart/form-data"
        className="p-3 border border-grey flex flex-col gap-4 md:w-1/2 "
      >
        <div>
          <h3 className="text-3xl py-2 text-center">Create a League</h3>
          <label>League Name:</label>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Manager:</label>
          <Input
            type="text"
            value={manager}
            onChange={(e) => setManager(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col gap-3">
          <label>Teams:</label>
          {teams.map((team, index) => (
            <Input
              key={index}
              type="text"
              value={team}
              onChange={(e) => handleTeamChange(index, e)}
              required
            />
          ))}
          <Button type="submit" onClick={handleAddTeam} className="mt-2">
            Add Team
          </Button>
        </div>
        <Button type="submit">Save League</Button>
      </form>
      {league && (
        <div className="mt-4">
          <h3>League Details</h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>League Name</TableHead>
                <TableHead>Manager</TableHead>
                <TableHead>Teams</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>{league.name}</TableCell>
                <TableCell>{league.manager}</TableCell>
                <TableCell>{league.teams.join(", ")}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default LeagueForm;
