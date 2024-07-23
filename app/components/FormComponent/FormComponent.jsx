"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { MdOutlineDoNotDisturbAlt } from "react-icons/md";
// Sample components from your UI library (replace with actual imports)
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { generateId } from "@/app/utlils/functions";

const LeagueForm = () => {
  const randomPlaceHolderImages = [
    "https://images.pexels.com/photos/47343/the-ball-stadion-horn-corner-47343.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/54567/pexels-photo-54567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/209841/pexels-photo-209841.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];
  const randomImageIndex = Math.floor(Math.random() * 4);

  const [name, setName] = useState("");

  const [teams, setTeams] = useState([
    {
      team_id: generateId("Team A"),
      name: "Team A",
      win_total: 0,
      loss_total: 0,
      draw_total: 0,
      goals_for: 0,
      goals_against: 0,
      color1: "gray",
      color2: "white",
      coach1: null,
      coach2: null,
      group: "Group A",
    },
    {
      team_id: generateId("Team B"),
      name: "Team B",
      win_total: 0,
      loss_total: 0,
      draw_total: 0,
      goals_for: 0,
      goals_against: 0,
      color1: "gray",
      color2: "white",
      coach1: null,
      coach2: null,
      group: "Group A",
    },
    {
      team_id: generateId("Team C"),
      name: "Team C",
      win_total: 0,
      loss_total: 0,
      draw_total: 0,
      goals_for: 0,
      goals_against: 0,
      color1: "gray",
      color2: "white",
      coach1: null,
      coach2: null,
      group: "Group A",
    },
    {
      team_id: generateId("Team D"),
      name: "Team D",
      win_total: 0,
      loss_total: 0,
      draw_total: 0,
      goals_for: 0,
      goals_against: 0,
      color1: "gray",
      color2: "white",
      coach1: null,
      coach2: null,
      group: "Group A",
    },
  ]);

  const [type, setType] = useState("");
  const [groups, setGroups] = useState(false);
  const [description, setDescription] = useState("");
  const [league, setLeague] = useState({
    name: "",
    type: "",
    description: "",
    teams: [],
    groups: false,
    games: [],
    images: [randomPlaceHolderImages[randomImageIndex]],
    isFeatured: false,
    createdAt: null,
    updatedAt: null,
  });
  const [error, setError] = useState("");

  const router = useRouter();

  const types = ["Mens", "Womens", "Boys", "Girls", "Co-ed"];
  const group_types = ["No Groups", "Groups"];

  const handleAddTeam = () => {
    setTeams([
      ...teams,
      {
        team_id: generateId("Team"),
        name: "",
        win_total: 0,
        loss_total: 0,
        draw_total: 0,
        goals_for: 0,
        goals_against: 0,
        color1: "gray",
        color2: "white",
        coach1: null,
        coach2: null,
        group: "Group A",
      },
    ]);
  };

  const handleTeamChange = (index, event) => {
    const newTeams = [...teams];
    const newName = event.target.value;
    newTeams[index] = {
      ...newTeams[index],
      name: newName,
      team_id: generateId(newName), // Generate a new ID based on the new name
    };
    setTeams(newTeams);
  };

  const handleGroupChange = (index, event) => {
    const newTeams = [...teams];
    const newGroup = event.target.value;
    newTeams[index] = {
      ...newTeams[index],
      group: newGroup,
    };
    setTeams(newTeams);
  };

  const handleTeamDelete = (id) => {
    const updatedTeams = teams.filter((team) => team.team_id !== id);
    setTeams(updatedTeams);
  };

  const handleSubmit = async () => {
    if (!name || !description || type === "") {
      setError("All fields are required.");
      console.log(name, description, type);
      return;
    }

    if (teams.length < 2) {
      setError("A minimum of 2 teams is required.");
      return;
    }

    if (teams.some((team) => team.name === "")) {
      setError("Team names cannot be empty.");
      return;
    }

    const currentDate = new Date();
    const newLeague = {
      name: name,
      description: description,
      type: type,
      teams: teams,
      images: league.images[0],
      isFeatured: false,
      createdAt: currentDate,
      updatedAt: currentDate,
    };

    try {
      const response = await fetch("/api/leagues", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newLeague),
      });

      if (!response.ok) {
        throw new Error("Failed to save league");
      }

      const result = await response.json();
      console.log(result); // For demonstration purposes

      setError(""); // Clear any existing error
      router.push(`/leagues/${result.slug}`);
    } catch (error) {
      console.error(error);
      setError("An error occurred while saving the league.");
    }
  };

  return (
    <div className="component-container">
      <div className="p-3 border border-grey flex flex-col gap-4 md:w-1/2 ">
        <div>
          <h3 className="text-3xl py-2 text-center">Create a League</h3>
          {error && <p className="text-red-500">{error}</p>}
          <label>League Name:</label>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="flex gap-3">
          {" "}
          <div>
            <label>Type:</label>
            <Select
              defaultValue={"Select one"}
              onValueChange={(value) => {
                setType(value);
              }}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select one" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {types.map((type, index) => (
                    <SelectItem key={index} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label>Groups:</label>
            <Select
              defaultValue={"Select one"}
              onValueChange={(value) => {
                if (value === "Groups") {
                  setGroups(true);
                } else {
                  setGroups(false);
                }
              }}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select one" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {group_types.map((type, index) => (
                    <SelectItem key={index} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <label>Description:</label>
          <Textarea
            placeholder="Write a brief description."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col gap-3 ">
          <label>Teams:</label>
          {teams.map((team, index) => (
            <div
              className="flex gap-3 flex-wrap md:grid md:grid-cols-3"
              key={team.id}
            >
              <Input
                type="text"
                value={team.name}
                onChange={(e) => handleTeamChange(index, e)}
                required
              />
              {groups && (
                <Input
                  type="text"
                  value={team.group}
                  onChange={(e) => handleGroupChange(index, e)}
                  required
                />
              )}

              {index > 1 ? (
                <Button
                  onClick={() => {
                    handleTeamDelete(team.team_id);
                  }}
                  variant="destructive"
                >
                  Delete
                </Button>
              ) : (
                <Button variant="secondary">
                  <MdOutlineDoNotDisturbAlt />
                </Button>
              )}
            </div>
          ))}
          <Button onClick={handleAddTeam} className="mt-2">
            Add Team
          </Button>
        </div>
        <Button
          onClick={() => {
            handleSubmit();
          }}
        >
          Save League
        </Button>
      </div>
    </div>
  );
};

export default LeagueForm;
