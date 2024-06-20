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
import { UpdateLeague } from "../LeagueFormUpdate2/UpdateForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import LeagueSettings from "./LeagueSettings";
import Spinner from "../Spinner";
import EditTeams from "./EditTeams";
import UpdateResults from "./UpdateResults";

const LeagueUpdateForm = () => {
  const [league, setLeague] = useState(null);
  const [name, setName] = useState("");
  const [admin, setAdmin] = useState("");
  const [teams, setTeams] = useState([]);
  const [type, setType] = useState("");
  const [loading, setLoading] = useState(false);
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

  useEffect(() => {
    // Fetch existing league data
    const fetchInfo = async () => {
      try {
        const data = await fetchLeague(slug);
        setLeague(data);
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
      setLoading(true);
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
    } finally {
      setLoading(false);
    }
  };
  if (loading) {
    return <Spinner />;
  }
  return (
    <div className="component-container">
      <div className="p-3 border border-grey flex flex-col gap-4 md:w-3/4 ">
        <h3 className="text-2xl">Update League Information </h3>
        <p className="text-2xl text-red-500">{error}</p>
        <Tabs defaultValue="results" className="md:w-[800px] min-h-56">
          <TabsList className="grid w-full grid-cols-3 gap-1">
            <TabsTrigger value="results">Enter Results</TabsTrigger>
            <TabsTrigger value="teams">Edit Teams</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="results" className="w-full">
            <>
              <UpdateResults
                games={games}
                setNewGame={setNewGame}
                handleGameChange={handleGameChange}
                handleAddGame={handleAddGame}
                newGame={newGame}
                teams={teams}
              />
            </>
          </TabsContent>
          <TabsContent value="teams">
            <EditTeams
              teams={teams}
              setTeams={setTeams}
              league={league}
              error={error}
              setError={setError}
            />
          </TabsContent>
          <TabsContent value="settings">
            {" "}
            <LeagueSettings
              name={name}
              admin={admin}
              setName={setName}
              type={type}
              setType={setType}
              setDescription={setDescription}
              description={description}
            />
          </TabsContent>{" "}
          <Button onClick={handleSubmit} variant="success" className="mt-4">
            Update League
          </Button>
        </Tabs>
      </div>
    </div>
  );
};

export default LeagueUpdateForm;
