"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

import { fetchProperties } from "../utlils/request";
import Spinner from "./Spinner";
import { toast } from "react-toastify";

const HomeProperties = () => {
  const [recentProperties, setRecentProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecentProperties = async () => {
      try {
        // is hiding the below function important?
        let res = await fetchProperties();
        const selectProperties = res.properties
          .sort(() => Math.random() - Math.random())
          .slice(0, 3);
        setRecentProperties(selectProperties);
        // toast.success("check our latest listings");
      } catch (error) {
        console.log(error);
        toast.error("Unable to fetch recent properties");
      } finally {
        setLoading(false);
      }
    };
    fetchRecentProperties();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return <>Hello</>;
};

export default HomeProperties;
