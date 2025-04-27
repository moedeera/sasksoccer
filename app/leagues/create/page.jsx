"use client";
import LeagueForm from "../../components/FormComponent/FormComponent";
import Landing from "../../components/Landing/Landing";

import React from "react";

export const Page = () => {
  const openerContent = {
    title: `Add your current league`,
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum,
            `,
    mini: true,
  };
  return (
    <div>
      <Landing data={openerContent} />
      <LeagueForm />
    </div>
  );
};

export default Page;
