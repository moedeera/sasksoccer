import { formatDateFunction } from "@/app/utlils/functions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";

const UpdateResults = ({ games, setGames, teams, setTeams, setError }) => {
  const [newGame, setNewGame] = useState({
    home_team_name: "",
    away_team_name: "",
    home_team_goals: "",
    away_team_goals: "",
    date_of_game: "",
  });

  const handleGameChange = (e) => {
    setNewGame({ ...newGame, [e.target.name]: e.target.value });
  };

  const handleAddGame = () => {
    setError("");
    const homeTeam = teams.find((team) => team.name === newGame.home_team_name);
    const awayTeam = teams.find((team) => team.name === newGame.away_team_name);

    if (!homeTeam || !awayTeam) {
      setError("Both home and away teams must be selected.");
      return;
    }
    if (homeTeam.name === awayTeam.name) {
      setError("Please select different teams.");
      return;
    }
    if (!newGame.date_of_game) {
      setError("Please select a date.");
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

  return (
    <div className="flex flex-col gap-3 justify-center">
      <label>Games:</label>
      {games.map((game, index) => (
        <div key={index} className="flex gap-2 items-center">
          <div className="flex gap-3 border border-rounded px-3 ">
            <>{game.home_team_name}</> vs <>{game.away_team_name}</>
          </div>
          <div className="flex gap-3 border border-rounded px-3">
            <>{game.home_team_goals}</> - <>{game.away_team_goals}</>
          </div>
          <Label className="hidden md:block" type="date" readOnly>
            {formatDateFunction(game.date_of_game)}
          </Label>
        </div>
      ))}
      <div className="flex flex-col gap-2">
        <h4>Add New Game:</h4>
        <div className="grid grid-cols-5 gap-x-2">
          <select
            name="home_team_name"
            value={newGame.home_team_name}
            onChange={(e) => {
              setNewGame({ ...newGame, home_team_name: e.target.value });
              console.log("value changed");
            }}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="" disabled>
              Select Home Team
            </option>
            {teams.map((team) => (
              <option key={team._id} value={team.name}>
                {team.name}
              </option>
            ))}
          </select>
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
          />
          <select
            name="away_team_name"
            value={newGame.away_team_name}
            onChange={(e) => {
              setNewGame({ ...newGame, away_team_name: e.target.value });
              console.log("value changed");
            }}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="" disabled>
              Select Away Team
            </option>
            {teams.map((team) => (
              <option key={team._id} value={team.name}>
                {team.name}
              </option>
            ))}
          </select>
          <Input
            type="date"
            name="date_of_game"
            value={newGame.date_of_game}
            onChange={handleGameChange}
            placeholder="Date of Game"
          />
        </div>
      </div>

      <Button
        onClick={() => {
          handleAddGame();
          console.log("clicked");
        }}
        className="mt-2"
      >
        Add Game
      </Button>
    </div>
  );
};

export default UpdateResults;
