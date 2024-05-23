"use client";
import * as React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";

import defaultImage from "../../assets/images/carddefault.webp";
import Image from "next/image";
import Link from "next/link";

export function Cards({ data }) {
  const defaultData = [
    {
      title: "Lakewood tournament",
      date: "May 15 2024",
      content:
        "Lakewood tournament starting this thursday.See latest updates on the action today",
      image:
        "https://images.pexels.com/photos/1171084/pexels-photo-1171084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "City Soccer Festival",
      date: "May 18 2024",
      content:
        "Fun and Festivities at the SaskSoccerFestival starting this thursday",
      image:
        "https://images.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "New Jersey kits",
      date: "June 20 2024",
      content:
        "Amazing new kits for amazing new prices. Look into our new catalogue for the summer.",
      image: "https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg",
    },
  ];
  const [info, setInfo] = React.useState(defaultData);

  React.useEffect(() => {
    if (data) {
      setInfo(data);
    }
  }, []);

  return (
    <div className="component-container grid md:grid-cols-3 gap-8 p-3">
      {" "}
      {info.map((dat, index) => (
        <Card key={index}>
          <CardHeader>
            {/* <Image
              src={dat.image} // Dynamic source based on property._id
              alt="blah" // Alt text for the image
              width={0}
              height={60}
              style={{ height: "100px" }}
              layout="responsive" // Optional: Adjusts the layout behavior of the image (e.g., fill, fixed, responsive)
            /> */}
            <div
              className="card-image w-full h-56 bg-black bg-center bg-cover"
              style={{ backgroundImage: `url("${dat.image}")` }}
            ></div>
            <CardTitle>{dat.title}</CardTitle>
            <CardDescription>{dat.content}</CardDescription>
          </CardHeader>

          {/* <CardContent>
            <p>{dat.content}</p>
          </CardContent> */}
          <CardFooter>
            <Link href={"/"} className="btn">
              Read More
            </Link>
          </CardFooter>
        </Card>
      ))}
      <div> </div>
    </div>
  );
}
