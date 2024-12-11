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
import { AspectRatio } from "../ui/aspect-ratio";
import Image from "next/image";

export function Cards({ data, directory }) {
  const [infoDirectory, setInfoDirectory] = React.useState("leagues");
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

    if (directory) {
      setInfoDirectory(directory);
    }
  }, [data]);

  return (
    <div className="component-container grid md:grid-cols-3 lg:grid-cols-4 gap-8 md:p-3">
      {" "}
      {info?.map((dat, index) => (
        <Card key={index} className="flex flex-col justify-between">
          <CardHeader>
            {dat?.image && (
              <div
                className="card-image w-full h-24  md:h-40 bg-black bg-center bg-cover"
                style={{
                  backgroundImage: `url("${
                    dat?.images ? dat.images[0] : dat.image
                  }")`,
                }}
              ></div>
            )}
            {dat?.images && (
              <AspectRatio ratio={16 / 9} className="bg-muted">
                <Image
                  src={dat?.images[0]}
                  alt="Photo by Drew Beamer"
                  fill
                  className="h-full w-full rounded-md object-cover"
                />
              </AspectRatio>
            )}

            <CardTitle className="text-md md:text-lg text-left">
              {dat.name}
            </CardTitle>
            <CardDescription className="text-sm text-left">
              {dat.description}
            </CardDescription>
          </CardHeader>
          <CardFooter className="text-sm">
            {" "}
            {dat?.details?.length} Division(s)
          </CardFooter>
          <CardFooter>
            <Link
              href={
                dat.button ? `${dat.link}` : `/${infoDirectory}/${dat.slug}`
              }
              passHref
              legacyBehavior
            >
              {dat?.newWindow ? (
                <a target="_blank" className="btn text-xs">
                  {dat.button ? dat.button.text : "Read More"}
                </a>
              ) : (
                <div className="btn">
                  {dat.button ? dat.button.text : "Read More"}
                </div>
              )}
            </Link>
          </CardFooter>
        </Card>
      ))}
      <div> </div>
    </div>
  );
}
