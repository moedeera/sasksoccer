"use client";
import LeagueForm from "../../components/FormComponent/FormComponent";
import Landing from "../../components/Landing/Landing";
import React from "react";

export const page = () => {
  const openerContent = {
    title: `Add your current league`,
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit…`,
    mini: true,
  };

  return (
    <div>
      <Landing data={openerContent} />
      <LeagueForm />
    </div>
  );
};
