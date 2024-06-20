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
import React from "react";

const UpdateResults = ({
  games,
  setNewGame,
  handleGameChange,
  handleAddGame,
  newGame,
  teams,
}) => {
  return (
    <div className="flex flex-col gap-3 justify-center">
      <label>Games:</label>
      {games.map((game, index) => (
        <div key={index} className="flex gap-2 items-center">
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
  );
};

export default UpdateResults;
