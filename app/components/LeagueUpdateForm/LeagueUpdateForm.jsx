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
import QuickEdit from "./QuickEdit";

const LeagueUpdateForm = () => {
  const [league, setLeague] = useState(null);
  const [name, setName] = useState("");
  const [admin, setAdmin] = useState("");
  const [teams, setTeams] = useState([]);
  const [type, setType] = useState("");
  const [loading, setLoading] = useState(false);
  const [description, setDescription] = useState("");
  const [games, setGames] = useState([]);
  const [details, setDetails] = useState();
  const [error, setError] = useState("");
  const { slug } = useParams();
  const router = useRouter();

  useEffect(() => {
    // Fetch existing league data
    const fetchInfo = async () => {
      try {
        const data = await fetchLeague(slug);
        setLeague(data);

        setName(data.name);
        setAdmin(data.admin);
        setTeams(data.teams);
        setType(data.type);
        setDescription(data.description);
        setGames(data.games);
        setDetails(
          data?.details
            ? data.details
            : {
                group: "",
                completed: false,
                winner: "TBA",
                runnerUp: "TBA",
                playOffs1: "",
                playOffs2: "",
                final: "",
              }
        );
        // console.log(data.details);
      } catch (error) {
        console.error("Failed to fetch league data:", error);
      }
    };

    fetchInfo();
  }, [slug]);

  const handleSubmit = async () => {
    if (!name || !admin || !description || type === "") {
      setError("All fields are required.");
      return;
    }

    try {
      // console.log(details);
      if (details === 1) {
        console.log("error");
        return;
      }
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
          details,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to update league");
      }

      const result = await response.json();
      // console.log(result); // For demonstration purposes
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
      <div className="p-3 border border-grey flex flex-col gap-4 md:w-full">
        <h3 className="text-2xl">Update League Information </h3>
        <p className="text-2xl text-red-500">{error}</p>
        <Tabs defaultValue="teams" className="md:w-[800px] min-h-56">
          <TabsList className="grid w-full grid-cols-4 gap-1">
            <TabsTrigger value="results">Enter Results</TabsTrigger>
            <TabsTrigger value="teams">Edit Teams</TabsTrigger>
            <TabsTrigger value="quick-edit">Quick Edit</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="results" className="w-full">
            <>
              <UpdateResults
                games={games}
                setGames={setGames}
                error={error}
                setError={setError}
                setTeams={setTeams}
                teams={teams}
                details={details}
                setDetails={setDetails}
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
          <TabsContent value="quick-edit">
            <QuickEdit
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
