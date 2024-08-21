import Block1 from "@/app/components/Block1/Block1";
import Landing from "@/app/components/Landing/Landing";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { FaMeetup } from "react-icons/fa";

export const CasualPlayPage = () => {
  const pageHeader = {
    title: "Casual Soccer",
    content: null,
    button: null,
    mini: true,
  };

  const data = {
    reverse: true,
    title: "Join Our Casual Soccer Group",
    date: "August 2024",
    content: `We are excited to announce that we will soon be starting a soccer meetup in Saskatoon for all ages. Join us for fun games through our upcoming official group on Meetup.com! Keep tabs on our "latest" page for more updates. `,
    // buttonText: "Read More",
    // buttonLink: "/",
    image:
      "https://images.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  };
  return (
    <div>
      <Landing data={pageHeader} />
      <div className="component-container">
        <div className="flex flex-col gap-3 md:grid md:grid-cols-2">
          <div>
            {" "}
            <div className="text-3xl font-bold h3-header">
              Saskatoon Pick-Up Soccer Meetup Group
            </div>
            <div className="pt-1 pb-3  pr-2">
              A meetup group for pickup/casual soccer (non-competitive) and is
              just for people wanting to stay active or keep their skills fresh.
              Please be respectful to everyone regardless of their skill level.
            </div>
            <Link
              href={
                "https://www.meetup.com/saskatoon-pick-up-soccer-meetup-group/"
              }
            >
              {" "}
              <Button className="btn ga-4">
                Join Group <FaMeetup className="text-3xl ml-3" />
              </Button>
            </Link>
          </div>

          <div
            className="h-20 w-full border md:h-80"
            style={{
              backgroundImage: `url(${data.image})`,
              minHeight: "250px",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></div>
        </div>
      </div>
      {/* <Block1 data={data} /> */}
    </div>
  );
};
export default CasualPlayPage;
