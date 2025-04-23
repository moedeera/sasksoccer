"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import profileDefault from "../../assets/images/profile.png";
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

toast;
const ProfilePage = () => {
  const { data: session } = useSession();
  const profileImage = session?.user?.image;
  const profileName = session?.user?.name;
  const profileEmail = session?.user?.email;

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
          <h1 className="text-xl font-bold mb-4">Your Profile</h1>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/4 mx-20 mt-10">
              <div className="mb-4">
                {profileImage ? (
                  <Image
                    className="h-32 w-32 md:h-24 md:w-24 rounded-full mx-auto md:mx-0"
                    src={profileImage}
                    width={400}
                    height={300}
                    alt="profile image"
                  />
                ) : (
                  <Image
                    className="h-32 w-32 md:h-48 md:w-48 rounded-full mx-auto md:mx-0"
                    src={profileDefault}
                    alt="User"
                    width={400}
                    height={300}
                  />
                )}
              </div>
              <h2 className="text-lg mb-4">
                <span className="font-bold block text-lg">Name: </span>
                {profileName ? profileName : "John Doe"}
              </h2>
              <h2 className="text-lg">
                <span className="font-bold block">Email: </span>
                {profileEmail ? profileEmail : "john@gmail.com"}
              </h2>
            </div>

            <div className="md:w-3/4 md:pl-4">
              <h2 className="text-xl font-semibold mb-4">Leagues you follow</h2>
              {loading && <Spinner loading={loading} />}
              <div className="grid md:grid-cols-3">
                {leagues.length && !loading === 0
                  ? "No leagues"
                  : leagues?.map((league) => (
                      <Card
                        key={league._id}
                        className="flex flex-col justify-between"
                      >
                        <CardHeader>
                          {/* <div
                            className="card-image w-full h-56 bg-black bg-center bg-cover"
                            style={{
                              backgroundImage: `url("${
                                league?.images ? league.images[0] : league.image
                              }")`,
                            }}
                          ></div> */}
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

export default ProfilePage;
