"use client";

import Block4 from "@/app/components/Block4/Block4";
import Landing from "@/app/components/Landing/Landing";
import TableComponent from "@/app/components/Table/TableComponent";
import { useParams } from "next/navigation";
import React from "react";
import { errorReportInfo } from "./info";

const LeaguePage = () => {
  const { id } = useParams();
  console.log(id);

  const leaguePageHeader = {
    title: `${id.replace(/_/g, " ")} League`,
    content: null,
    button: null,
    mini: true,
  };

  return (
    <div>
      <Landing data={leaguePageHeader} />
      <TableComponent />
      <Block4 data={errorReportInfo} />
    </div>
  );
};

export default LeaguePage;
