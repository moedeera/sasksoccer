"use client";

import React from "react";
import { BarLoader, ClipLoader } from "react-spinners";
const override = {
  display: "block",
  margin: "100px auto",
};

const loading = ({ loading }) => {
  return (
    // <ClipLoader
    //   color="#3b82f6"
    //   loading={loading}
    //   cssOverride={override}
    //   size={150}
    //   aria-label="Loading Spinner"
    // />
    <BarLoader
      loading={loading}
      cssOverride={override}
      size={150}
      aria-label="Loading Spinner"
    />
  );
};

export default loading;
