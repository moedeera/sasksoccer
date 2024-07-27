"use client";
import * as React from "react";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Link from "next/link";

export function Cards({ data }) {
  const defaultData = [
    {
      name: "Lakewood tournament",
      id: "lakewood",
      date: "May 15 2024",
      description:
        "Lakewood tournament starting this thursday.See latest updates on the action today",
      image:
        "https://images.pexels.com/photos/1171084/pexels-photo-1171084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      slug: "blog/lakewood-tournament",
      blog: true,
    },

    {
      name: "City Soccer Festival",
      date: "May 18 2024",
      id: "cityfestival",
      description:
        "Fun and Festivities at the SaskSoccerFestival starting this thursday",
      image:
        "https://images.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      slug: "blog/city-soccer-festival",
      blog: true,
    },
    {
      name: "New Jersey kits",
      date: "June 20 2024",
      id: "newjersey",
      description:
        "Amazing new kits for amazing new prices. Look into our new catalogue for the summer.",

      image: "https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg",
      slug: "blog/new-kits",
      blog: true,
    },
  ];
  const [info, setInfo] = React.useState(defaultData);

  React.useEffect(() => {
    if (data) {
      setInfo(data);
    }
  }, [data]);

  return (
    <div className="component-container grid grid-cols-2 md:grid-cols-3 gap-8 p-3">
      {" "}
      {info.map((dat, index) => (
        <Card key={index}>
          <CardHeader>
            <div
              className="card-image w-full h-24  md:h-56 bg-black bg-center bg-cover"
              style={{
                backgroundImage: `url("${
                  dat?.images ? dat.images[0] : dat.image
                }")`,
              }}
            ></div>
            <CardTitle className="text-xl">{dat.name}</CardTitle>
            <CardDescription className="hidden md:block">
              {dat.description}
            </CardDescription>
          </CardHeader>

          <CardFooter>
            <Link
              href={dat.button ? `${dat.link}` : `leagues/${dat.slug}`}
              className="btn text-small"
            >
              {dat.button ? dat.button.text : "Read More"}
            </Link>
          </CardFooter>
        </Card>
      ))}
      <div> </div>
    </div>
  );
}
