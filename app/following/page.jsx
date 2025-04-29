"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import { useSession } from "next-auth/react";
import Spinner from "../components/Spinner";

import Link from "next/link";
import { toast } from "react-toastify";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { AspectRatio } from "../../components/ui/aspect-ratio";
import { Button } from "../../components/ui/button";

export const FollowingPage = () => {
  const { data: session } = useSession();

  const [loading, setLoading] = useState(true);
  const [leagues, setLeagues] = useState([]);

  // useEffect(() => {
  //   const fetchUserLeagues = async (userId) => {
  //     if (!userId) {
  //       return;
  //     }
  //     try {
  //       const res = await fetch(`api/leagues/user/${userId}`);

  //       if (res.status === 200) {
  //         const data = await res.json();
  //         setLeagues(data);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   // fetch only if user is available
  //   if (session) {
  //     fetchUserLeagues(session.user.id);
  //   }
  // }, [session]);
  const handleDeleteBookmark = async (leagueID) => {
    try {
      const res = await fetch("/api/bookmarks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          leagueId: leagueID,
        }),
      });

      if (res.status === 200) {
        const data = await res.json();
        toast.success(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  // const handleDeleteLeague = async (leagueSlug) => {
  //   const confirmed = window.confirm(
  //     "Are you sure you want to delete this league?"
  //   );
  //   if (!confirmed) {
  //     return;
  //   }

  //   try {
  //     const res = await fetch(`api/leagues/${leagueSlug}`, {
  //       method: "DELETE",
  //     });

  //     if (res.status === 200) {
  //       const updatedLeagues = leagues.filter((league) => league.slug);
  //       setLeagues(updatedLeagues);
  //       toast.success("league deleted");
  //     } else {
  //       toast.error("failed to delete league");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     toast.error("Failed to delete league");
  //   }
  // };

  useEffect(() => {
    const fetchSavedLeagues = async () => {
      try {
        const res = await fetch("/api/bookmarks");

        if (res.status === 200) {
          const data = await res.json();
          console.log("data:", data);
          setLeagues(data);
        } else {
          console.log(res.statusText);
          toast.error("Failed to fetch bookmarked leagues");
        }
      } catch (error) {
        console.log(error);
        toast.error("Failed to fetch bookmarked leagues");
      } finally {
        setLoading(false);
      }
    };

    fetchSavedLeagues();
  }, []);

  return (
    <section className="bg-blue-50">
      <div className="container m-auto py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-3/4 md:pl-4">
              <h2 className="text-xl font-semibold mb-4">Leagues you follow</h2>
              {loading && <Spinner loading={loading} />}
              <div className="grid md:grid-cols-3 gap-2">
                {leagues.length && !loading === 0
                  ? "No leagues"
                  : leagues?.map((league) => (
                      <Card
                        key={league._id}
                        className="flex flex-col justify-between"
                      >
                        <CardHeader>
                          <AspectRatio ratio={16 / 9} className="bg-muted">
                            <Image
                              src={
                                league?.images ? league.images[0] : league.image
                              }
                              alt="Photo by Drew Beamer"
                              fill
                              className="h-full w-full rounded-md object-cover"
                            />
                          </AspectRatio>
                        </CardHeader>
                        <CardContent>
                          <CardTitle className="text-xl">
                            {league.name}
                          </CardTitle>
                          <CardDescription>
                            {league.description}
                          </CardDescription>
                          <div className="text-sm"> Type: {league.type}</div>
                          <div className="text-sm">Divisions</div>
                          <div className="text-xs">
                            {" "}
                            {league.groups &&
                              league.details.map((detail, index) => (
                                <span key={index}>
                                  {detail.group}
                                  <br />
                                </span>
                              ))}
                          </div>
                        </CardContent>

                        <CardFooter className="flex flex-col justify-center gap-3">
                          <Button
                            onClick={() => {
                              handleDeleteBookmark(league._id);
                            }}
                            variant="destructive"
                            className=" w-full"
                          >
                            Unfollow
                          </Button>
                          <Link
                            href={`/leagues/${league.slug}`}
                            className="w-full"
                          >
                            {" "}
                            <Button variant="success">Visit</Button>
                          </Link>
                        </CardFooter>
                      </Card>
                    ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
