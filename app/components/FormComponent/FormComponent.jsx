"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

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

const LeagueForm = () => {
  const randomPlaceHolderImages = [
    "https://images.pexels.com/photos/47343/the-ball-stadion-horn-corner-47343.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/54567/pexels-photo-54567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/209841/pexels-photo-209841.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];
  const randomImageIndex = Math.floor(Math.random() * 4);

  const [name, setName] = useState("");

  const [teams, setTeams] = useState([""]);
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [league, setLeague] = useState({
    name: "",
    type: "",
    description: "",
    teams: [],
    games: [],
    images: [randomPlaceHolderImages[randomImageIndex]],
    isFeatured: false,
    createdAt: null,
    updatedAt: null,
  });
  const [error, setError] = useState("");

  const router = useRouter();

  const types = ["Mens", "Womens", "Boys", "Girls", "Co-ed"];

  const handleAddTeam = () => {
    setTeams([...teams, ""]);
  };

  const handleTeamChange = (index, event) => {
    const newTeams = [...teams];
    newTeams[index] = {
      id: `${event.target.value}-${index}`,
      name: event.target.value,
      win_total: 0,
      loss_total: 0,
      draw_total: 0,
      goals_for: 0,
      goals_against: 0,
    };
    setTeams(newTeams);
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

    if (teams.some((team) => team === "")) {
      setError("Team names cannot be empty.");
      return;
    }

    const currentDate = new Date();
    const newLeague = {
      name: name,
      description: description,
      type: type,
      teams: teams,
      images: ["https://placehold.co/600x400"],
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

      setError(""); // Clear any existing errors
      router.push(`/leagues/${result.slug}`);
      // Optionally reset form fields here
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
          <label>Description:</label>
          <Textarea
            placeholder="Write a brief description."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col gap-3">
          <label>Teams:</label>
          {teams.map((team, index) => (
            <Input
              key={index}
              type="text"
              value={team.name}
              onChange={(e) => handleTeamChange(index, e)}
              required
            />
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
