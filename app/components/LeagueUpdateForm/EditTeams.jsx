import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import React, { useState } from "react";
import Spinner from "../Spinner";
import {
  calculateAndSortTeamsByPoints,
  generateId,
} from "../../utlils/functions";

const EditTeams = ({ teams, setTeams, league, error, setError }) => {
  const [editTeams, setEditTeams] = useState("");
  const [editGroup, setEditGroup] = useState("");
  const [editTeamsGroup, setEditTeamsGroup] = useState(null);
  const [loading, setLoading] = useState(false);
  const [addTeam, showAddTeam] = useState(false);
  const [newTeam, setNewTeam] = useState({
    id: null,
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
  });

  const handleEditTeam = (value, name) => {
    const updatedTeams = teams.map((team) =>
      team.name === name ? { ...team, name: value } : team
    );
    setTeams(updatedTeams);
    setEditTeams(value);
  };

  const handleEditTeamStat = (stat, value, name) => {
    const updatedTeams = teams.map((team) =>
      team.name === name ? { ...team, [stat]: value } : team
    );
    setTeams(updatedTeams);
    setEditTeamsGroup(value);
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
      // console.log(result); // For demonstration purposes

      setError(""); // Clear any existing errors
    } catch (error) {
      console.error(error);
      setError("An error occurred while updating Team information.");
    } finally {
      setLoading(false);
    }
  };

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
  const finalTeamsArray = calculateAndSortTeamsByPoints(teamsAssortedByGroup);

  // console.log(teamsAssortedByGroup);

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      {" "}
      <div className="flex flex-col gap-3 text-sm lg:text-base">
        {finalTeamsArray.map((group, index) => (
          <div
            key={index}
            className="mb-1 flex flex-col gap-3 border py-3 px-1"
          >
            {" "}
            <div className="flex items-center justify-evenly gap-4 ">
              <label>{group.name}</label>{" "}
              {editGroup === group.name ? (
                <>
                  {" "}
                  <Button
                    className="w-max min-w-20"
                    onClick={() => {
                      setEditGroup("");
                    }}
                    variant="destructive"
                  >
                    Cancel
                  </Button>
                </>
              ) : (
                <>
                  {" "}
                  <Button
                    className="w-max min-w-20"
                    onClick={() => {
                      setEditGroup(group.name);
                    }}
                    variant="success"
                  >
                    Edit
                  </Button>
                </>
              )}
            </div>
            {editGroup === group.name && (
              <>
                {group.teams.map((team, index) => (
                  <div
                    className={
                      editTeams === team.name
                        ? "grid grid-cols-1 gap-3 border bg-gray-500 px-1 py-3"
                        : "grid grid-cols-3"
                    }
                    key={index}
                    style={{ transition: "all .35s ease-in-out" }}
                  >
                    {" "}
                    {editTeams === team.name ? (
                      <div>
                        <div className="mb-2">
                          {" "}
                          <Input
                            type="text"
                            value={team.name}
                            onChange={(e) =>
                              handleEditTeam(e.target.value, team.name)
                            }
                            className="mr-8 mb-2 max-w-80"
                          />
                        </div>
                        <>
                          <div className="bg-gray-200 p-3 mt-2">
                            {
                              <>
                                <div className="flex gap-2 items-center mt-2 w-full flex-wrap md:flex-nowrap">
                                  <div className="flex gap-2 items-center w-max">
                                    <label>Wins</label>{" "}
                                    <Input
                                      type="number"
                                      value={team.win_total}
                                      onChange={(e) =>
                                        handleEditTeamStat(
                                          "win_total",
                                          e.target.value,
                                          team.name
                                        )
                                      }
                                      className="mr-8 max-w-30"
                                    />
                                  </div>
                                  <div className="flex gap-2 items-center max-w-40">
                                    <label>Lose</label>{" "}
                                    <Input
                                      type="number"
                                      value={team.loss_total}
                                      onChange={(e) =>
                                        handleEditTeamStat(
                                          "loss_total",
                                          e.target.value,
                                          team.name
                                        )
                                      }
                                      className="mr-8 max-w-60"
                                    />
                                  </div>
                                  <div className="flex gap-2 items-center max-w-40">
                                    <label>Draw</label>{" "}
                                    <Input
                                      type="number"
                                      value={team.draw_total}
                                      onChange={(e) =>
                                        handleEditTeamStat(
                                          "draw_total",
                                          e.target.value,
                                          team.name
                                        )
                                      }
                                      className="mr-8 max-w-60"
                                    />
                                  </div>
                                  <div className="flex gap-2 items-center max-w-40">
                                    <label>Goals</label>{" "}
                                    <Input
                                      type="number"
                                      value={team.goals_for}
                                      onChange={(e) =>
                                        handleEditTeamStat(
                                          "goals_for",
                                          e.target.value,
                                          team.name
                                        )
                                      }
                                      className="mr-8 max-w-60"
                                    />
                                  </div>
                                  <div className="flex gap-2 items-center max-w-40">
                                    <label>GA</label>{" "}
                                    <Input
                                      type="number"
                                      value={team.goals_against}
                                      onChange={(e) =>
                                        handleEditTeamStat(
                                          "goals_against",
                                          e.target.value,
                                          team.name
                                        )
                                      }
                                      className="mr-8 max-w-60"
                                    />
                                  </div>
                                </div>
                              </>
                            }
                          </div>
                        </>
                      </div>
                    ) : (
                      <>
                        {" "}
                        <Label className="mb-2 text-md">{team.name}</Label>
                        <Label className="mb-2 text-md">
                          {`${
                            team.win_total + team.loss_total + team.draw_total
                          }-${team.win_total}-${team.loss_total}-${
                            team.draw_total
                          } `}
                          <span className="font-bold">{team.points} pts</span>
                        </Label>
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
                          className="max-w-40"
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
                          className="max-w-40"
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
                          className="min-w-40"
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
              </>
            )}
          </div>
        ))}
      </div>
      <div className="bg-gray-200 p-3 mt-2 text-sm">
        {addTeam && (
          <>
            <div className="flex gap-3 items-center">
              <label className="font-bold">Name</label>
              <Input
                type="text"
                value={newTeam.name}
                onChange={(e) =>
                  setNewTeam({ ...newTeam, name: e.target.value })
                }
                className="mr-8 max-w-60"
              />
              {league.groups && (
                <>
                  {" "}
                  <label className="font-bold">Group</label>
                  <Input
                    type="text"
                    value={newTeam.group}
                    onChange={(e) =>
                      setNewTeam({ ...newTeam, group: e.target.value })
                    }
                    className="mr-8 max-w-60"
                  />
                </>
              )}
            </div>
            <div className="flex gap-2 items-center mt-2 flex-wrap">
              <div className="flex gap-2 items-center max-w-40">
                <label>Wins</label>{" "}
                <Input
                  type="number"
                  value={newTeam.win_total}
                  onChange={(e) =>
                    setNewTeam({ ...newTeam, win_total: e.target.value })
                  }
                  className="mr-8 max-w-60"
                />
              </div>
              <div className="flex gap-2 items-center max-w-40">
                <label>Lose</label>{" "}
                <Input
                  type="number"
                  value={newTeam.loss_total}
                  onChange={(e) =>
                    setNewTeam({ ...newTeam, loss_total: e.target.value })
                  }
                  className="mr-8 max-w-60"
                />
              </div>
              <div className="flex gap-2 items-center max-w-40">
                <label>Draw</label>{" "}
                <Input
                  type="number"
                  value={newTeam.draw_total}
                  onChange={(e) =>
                    setNewTeam({ ...newTeam, draw_total: e.target.value })
                  }
                  className="mr-8 max-w-60"
                />
              </div>
              <div className="flex gap-2 items-center max-w-40">
                <label>Goals</label>{" "}
                <Input
                  type="number"
                  value={newTeam.goals_for}
                  onChange={(e) =>
                    setNewTeam({ ...newTeam, goals_for: e.target.value })
                  }
                  className="mr-8 max-w-60"
                />
              </div>
              <div className="flex gap-2 items-center max-w-40">
                <label>GA</label>{" "}
                <Input
                  type="number"
                  value={newTeam.goals_against}
                  onChange={(e) =>
                    setNewTeam({ ...newTeam, goals_against: e.target.value })
                  }
                  className="mr-8 max-w-60"
                />
              </div>
            </div>
          </>
        )}
        <div className="flex gap-3 mt-3">
          {" "}
          <Button
            variant={addTeam ? "destructive" : "success"}
            onClick={() => {
              showAddTeam(!addTeam);
            }}
          >
            {addTeam ? "Cancel" : "Add Team"}
          </Button>
          {addTeam && (
            <Button
              variant={"success"}
              onClick={() => {
                const newlyAddedTeam = {
                  ...newTeam,
                  id: generateId(newTeam.name),
                };
                const updatedLeaguePreview = {
                  ...league,
                  teams: [...league.teams, newlyAddedTeam],
                };
                const updatedTeams = [...teams, newlyAddedTeam];
                setTeams(updatedTeams);
                // console.log(updatedLeaguePreview);
              }}
            >
              Add
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default EditTeams;
