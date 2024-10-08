"use client";
import { useState, useEffect } from "react";

import { toast } from "react-toastify";
import Spinner from "../../components/Spinner";
import PropertyCard from "../../components/PropertyCard";

const SavedLeaguesPage = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSavedLeagues = async () => {
      try {
        const res = await fetch("/api/bookmarks");

        if (res.status === 200) {
          const data = await res.json();
          setProperties(data);
        } else {
          console.log(res.statusText);
          toast.error("Failed to fetch saved leagues");
        }
      } catch (error) {
        console.log(error);
        toast.error("Failed to fetch saved leagues");
      } finally {
        setLoading(false);
      }
    };

    fetchSavedLeagues();
  }, []);

  return loading ? (
    <Spinner loading={loading} />
  ) : (
    <section className="px-4 py-6 border">
      <div className="container-xl lg:container m-auto px-4 py-6">
        <h1 className="text-2xl mb-4">Saved Leagues</h1>
        {properties.length === 0 ? (
          <p>No saved Leagues</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {properties.map((property) => (
              <PropertyCard key={property._id} property={property} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
export default SavedLeaguesPage;
