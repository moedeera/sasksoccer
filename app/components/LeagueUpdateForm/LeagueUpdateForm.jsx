"use client";
import React, { useState, useEffect } from "react";

// Sample components from your UI library (replace with actual imports)
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useParams, useRouter } from "next/navigation";
import { fetchLeague } from "@/app/utlils/request";
import { Label } from "@/components/ui/label";
import { formatDate } from "date-fns";
import { formatDateFunction } from "@/app/utlils/functions";

const LeagueUpdateForm = () => {
  const [name, setName] = useState("");
  const [admin, setAdmin] = useState("");
  const [teams, setTeams] = useState([]);
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [games, setGames] = useState([]);
  const [newGame, setNewGame] = useState({
    home_team_name: "",
    away_team_name: "",
    home_team_goals: "",
    away_team_goals: "",
    date_of_game: "",
  });
  const [error, setError] = useState("");
  const { slug } = useParams();
  const router = useRouter();
  const types = ["Mens", "Womens", "Boys", "Girls", "Co-ed"];

  useEffect(() => {
    // Fetch existing league data
    const fetchInfo = async () => {
      try {
        const data = await fetchLeague(slug);

        console.log(data);
        setName(data.name);
        setAdmin(data.admin);
        setTeams(data.teams);
        setType(data.type);
        setDescription(data.description);
        setGames(data.games);
      } catch (error) {
        console.error("Failed to fetch league data:", error);
      }
    };

    fetchInfo();
  }, [slug]);

  const handleGameChange = (e) => {
    setNewGame({ ...newGame, [e.target.name]: e.target.value });
  };

  const updateTeamStats = (homeTeam, awayTeam, homeGoals, awayGoals) => {
    const updatedTeams = teams.map((team) => {
      if (team.name === homeTeam.name) {
        return {
          ...team,
          goals_for: team.goals_for + parseInt(homeGoals, 10),
          goals_against: team.goals_against + parseInt(awayGoals, 10),
          win_total:
            homeGoals > awayGoals ? team.win_total + 1 : team.win_total,
          draw_total:
            homeGoals === awayGoals ? team.draw_total + 1 : team.draw_total,
          loss_total:
            homeGoals < awayGoals ? team.loss_total + 1 : team.loss_total,
        };
      } else if (team.name === awayTeam.name) {
        return {
          ...team,
          goals_for: team.goals_for + parseInt(awayGoals, 10),
          goals_against: team.goals_against + parseInt(homeGoals, 10),
          win_total:
            awayGoals > homeGoals ? team.win_total + 1 : team.win_total,
          draw_total:
            awayGoals === homeGoals ? team.draw_total + 1 : team.draw_total,
          loss_total:
            awayGoals < homeGoals ? team.loss_total + 1 : team.loss_total,
        };
      } else {
        return team;
      }
    });

    setTeams(updatedTeams);
  };

  const handleAddGame = () => {
    const homeTeam = teams.find((team) => team.name === newGame.home_team_name);
    const awayTeam = teams.find((team) => team.name === newGame.away_team_name);

    if (!homeTeam || !awayTeam) {
      setError("Both home and away teams must be selected.");
      return;
    }

    setGames([...games, newGame]);
    updateTeamStats(
      homeTeam,
      awayTeam,
      newGame.home_team_goals,
      newGame.away_team_goals
    );

    setNewGame({
      home_team_name: "",
      away_team_name: "",
      home_team_goals: "",
      away_team_goals: "",
      date_of_game: "",
    });
  };

  const handleSubmit = async () => {
    if (!name || !admin || !description || type === "") {
      setError("All fields are required.");
      return;
    }

    try {
      const response = await fetch(`/api/leagues/${slug}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          admin,
          description,
          type,
          teams,
          games,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to update league");
      }

      const result = await response.json();
      console.log(result); // For demonstration purposes
      router.push(`/leagues/${result.slug}`);
      setError(""); // Clear any existing errors
    } catch (error) {
      console.error(error);
      setError("An error occurred while updating the league.");
    }
  };

  return (
    <div className="component-container">
      <div className="p-3 border border-grey flex flex-col gap-4 md:w-3/4 ">
        <h3 className="text-3xl py-2 text-center">Update League</h3>
        {error && <p className="text-red-500">{error}</p>}
        <div>
          <label>League Name:</label>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Owner:</label>
          <Input
            type="text"
            value={admin}
            onChange={(e) => setAdmin(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Type:</label>
          <Select defaultValue={type} onValueChange={(value) => setType(value)}>
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
            <div className="flex justify-between" key={index}>
              {" "}
              <Label className="mb-2 text-md">{team.name}</Label>
              <div className="flex gap-1">
                {" "}
                <Button variant="success">Edit</Button>
                <Button variant="destructive">Delete</Button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-3 justify-center">
          <label>Games:</label>
          {games.map((game, index) => (
            <div key={index} className="flex gap-2 items-center">
              {/* <Input
                type="text"
                value={game.home_team_name.substring(0, 4)}
                readOnly
                placeholder="Home Team"
                disabled="true"
              />
              <Input
                type="text"
                value={game.away_team_name}
                readOnly
                placeholder="Away Team"
              /> */}
              <div className="flex gap-3 border border-rounded px-3 ">
                <>{game.home_team_name}</>
                <> vs </>
                <>{game.away_team_name}</>
              </div>
              <div className="flex gap-3 border border-rounded px-3">
                <>{game.home_team_goals}</>
                <>-</>
                <>{game.away_team_goals}</>
              </div>
              <Label
                className="hidden md:block"
                type="date"
                value={game.date_of_game}
                readOnly
                placeholder="Date of Game"
              >
                {formatDateFunction(game.date_of_game)}
              </Label>
            </div>
          ))}
          <div className="flex flex-col gap-2">
            <h4>Add New Game:</h4>
            <div className="grid grid-cols-5 gap-x-2">
              <Select
                name="home_team_name"
                value={newGame.home_team_name}
                onValueChange={(value) =>
                  setNewGame({ ...newGame, home_team_name: value })
                }
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Home Team" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {teams.map((team) => (
                      <SelectItem key={team.name} value={team.name}>
                        {team.name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Input
                type="number"
                name="home_team_goals"
                value={newGame.home_team_goals}
                onChange={handleGameChange}
                placeholder="Home Goals"
              />
              <Input
                type="number"
                name="away_team_goals"
                value={newGame.away_team_goals}
                onChange={handleGameChange}
                placeholder="Away Goals"
              />{" "}
              <Select
                name="away_team_name"
                value={newGame.away_team_name}
                onValueChange={(value) =>
                  setNewGame({ ...newGame, away_team_name: value })
                }
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Away Team" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {teams.map((team) => (
                      <SelectItem key={team.name} value={team.name}>
                        {team.name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>{" "}
              <Input
                type="date"
                name="date_of_game"
                value={newGame.date_of_game}
                onChange={handleGameChange}
                placeholder="Date of Game"
              />
            </div>

            <Button onClick={handleAddGame} className="mt-2">
              Add Game
            </Button>
          </div>
        </div>
        <Button onClick={handleSubmit} variant="success" className="mt-4">
          Update League
        </Button>
      </div>
    </div>
  );
};

export default LeagueUpdateForm;
