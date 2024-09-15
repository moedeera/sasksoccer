"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

import PropertyCard from "./PropertyCard";
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

  return (
    <>
      <section className="px-4 py-6">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-blue-500 mb-6 text-center">
            Recent Properties
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentProperties.length === 0 ? (
              <>No Properties Found</>
            ) : (
              recentProperties.map((property) => (
                <PropertyCard key={property._id} property={property} />
              ))
            )}
          </div>
        </div>
      </section>

      <section className="m-auto max-w-lg my-10 px-6">
        <Link
          href="/properties"
          className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >
          View All Properties
        </Link>
      </section>
    </>
  );
};

export default HomeProperties;
