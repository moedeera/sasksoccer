import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import Spinner from "../Spinner";

const EditTeams = ({ teams, setTeams, league, error, setError }) => {
  const [editTeams, setEditTeams] = useState("");
  const [editTeamsGroup, setEditTeamsGroup] = useState("");
  const [loading, setLoading] = useState(false);

  const handleEditTeam = (value, name) => {
    const updatedTeams = teams.map((team) =>
      team.name === name ? { ...team, name: value } : team
    );
    setTeams(updatedTeams);
    setEditTeams(value);
  };

  const handleEditTeamGroup = (value, name) => {
    const updatedTeams = teams.map((team) =>
      team.name === name ? { ...team, group: value } : team
    );
    setTeams(updatedTeams);
    setEditTeamsGroup(value);
  };
  const handleDelete = (id) => {
    const updatedTeams = teams.filter((team) => team.team_id !== id);
    setTeams(updatedTeams);
  };

  const handleSave = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/leagues/${league.slug}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: league.name,
          admin: league.admin,
          description: league.description,
          type: league.type,
          teams: teams,
          games: league.games,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to update league");
      }

      const result = await response.json();
      console.log(result); // For demonstration purposes

      setError(""); // Clear any existing errors
    } catch (error) {
      console.error(error);
      setError("An error occurred while updating Team information.");
    } finally {
      setLoading(false);
    }
  };
  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      {" "}
      <div className="flex flex-col gap-3">
        <label>Teams:</label>
        {teams.map((team, index) => (
          <div className="flex justify-between" key={index}>
            {" "}
            {editTeams === team.name ? (
              <>
                {" "}
                <Input
                  type="text"
                  value={team.name}
                  onChange={(e) => handleEditTeam(e.target.value, team.name)}
                  className="mr-8"
                />
                {league.groups && (
                  <Input
                    type="text"
                    value={team.group}
                    onChange={(e) =>
                      handleEditTeamGroup(e.target.value, team.name)
                    }
                    className="mr-8"
                  />
                )}
              </>
            ) : (
              <>
                {" "}
                <Label className="mb-2 text-md">{team.name}</Label>
                <Label className="mb-2 text-md">{team.group}</Label>
              </>
            )}
            <div className="flex gap-1">
              {" "}
              {editTeams === team.name ? (
                <Button
                  onClick={() => {
                    setEditTeams("");
                  }}
                >
                  Cancel
                </Button>
              ) : (
                <Button
                  onClick={() => {
                    setEditTeams(team.name);
                  }}
                  variant="success"
                >
                  Edit
                </Button>
              )}
              {editTeams === team.name ? (
                <Button
                  onClick={() => {
                    setEditTeams("");
                    handleSave();
                  }}
                  variant="success"
                >
                  Save
                </Button>
              ) : (
                <Button
                  variant="destructive"
                  onClick={() => {
                    handleDelete(team.team_id);
                  }}
                >
                  Delete
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default EditTeams;
