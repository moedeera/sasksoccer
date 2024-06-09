"use client";

import Block4 from "@/app/components/Block4/Block4";
import Landing from "@/app/components/Landing/Landing";
import TableComponent from "@/app/components/Table/TableComponent";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { errorReportInfo } from "./info";
import { fetchLeague } from "@/app/utlils/request";
import Spinner from "@/app/components/Spinner";

const LeaguePage = () => {
  const { id } = useParams();
  console.log(id);
  const [league, setLeague] = useState(null);
  const [loading, setLoading] = useState(true);

  const leaguePageHeader = {
    title: `${id.replace(/_/g, " ")} League`,
    content: null,
    button: null,
    mini: true,
  };

  useEffect(() => {
    const fetchLeagueData = async () => {
      if (!id) {
        return;
      }
      try {
        const leagueData = await fetchLeague(id);

        console.log(leagueData);
        setLeague(leagueData);
      } catch (error) {
        console.error("Error fetching league", error);
      } finally {
        setLoading(false);
      }
    };

    if (league === null) {
      fetchLeagueData();
    }
  }, []);

  return (
    <div>
      <Landing data={leaguePageHeader} />
      {loading ? <Spinner /> : <TableComponent data={league.teams} />}
      <Block4 data={errorReportInfo} />
    </div>
  );
};

export default LeaguePage;
