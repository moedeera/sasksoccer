"use client";
import { useState, useEffect } from "react";

import { toast } from "react-toastify";
import Spinner from "../../components/Spinner";

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
    <section className="px-4 py-6 border"></section>
  );
};
export default SavedLeaguesPage;
