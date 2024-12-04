"use client";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const BookMarkButton = ({ league }) => {
  const { data: session } = useSession();
  const userId = session?.user?.id;

  const [isBookmarked, setIsBookmarked] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) {
      setLoading(false);
      return;
    }

    const checkBookmarkStatus = async () => {
      try {
        const res = await fetch("/api/bookmarks/check", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            leagueId: league._id,
          }),
        });

        if (res.status === 200) {
          const data = await res.json();
          // console.log("data:", data);
          setIsBookmarked(data.isBookmarked);
        }
      } catch (error) {
        console.log("error");
      } finally {
        setLoading(false);
      }
    };

    checkBookmarkStatus();
  }, [league._id, userId]);

  const handleClick = async () => {
    if (!userId) {
      toast.error("You need to sign in to bookmark a league");
      return;
    }

    try {
      const res = await fetch("/api/bookmarks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          leagueId: league._id,
        }),
      });

      if (res.status === 200) {
        const data = await res.json();
        toast.success(data.message);
        setIsBookmarked(data.isBookmarked);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  if (loading) return <p className="text-center">Loading...</p>;
  return isBookmarked ? (
    <Button onClick={handleClick} variant="destructive">
      Remove Bookmark
    </Button>
  ) : (
    <button onClick={handleClick} className="btn text-xs">
      Bookmark League
    </button>
  );
};

export default BookMarkButton;
