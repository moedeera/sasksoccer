"use client";

import React, { useEffect, useState } from "react";
import "./CarouselComponent.css";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";

const CarouselComponent = ({ data }) => {
  const items = [1, 2, 3, 4, 5, 6];
  let content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum,
`;

  let defaultData = [
    {
      title: "Holandia Cup Youth Tournament",
      date: "May 25-26, 2024",
      content:
        "The Holandia Cup is a prestigious youth soccer tournament held in Foster Park. Teams from all over the region come to compete in this exciting event. Join us for a weekend of thrilling matches and showcase your skills on the field.",
    },
    {
      title: "Lakewood Park Soccer Tournament",
      date: "May 17-19, 2024",
      content:
        "The Lakewood Park Soccer Tournament is a highly anticipated event for soccer enthusiasts. Held in the beautiful Lakewood Park, this tournament features both adult and youth divisions. Come and enjoy a weekend of competitive soccer in a picturesque setting.",
    },
    {
      title: "Saskatoon Adult Soccer Championship",
      date: "May 3, 2024",
      content:
        "The Saskatoon Adult Soccer Championship brings together the best adult teams in the city. Held at the SaskTel Sports Centre, this one-day tournament promises intense competition and high-quality soccer. Don't miss out on the action!",
    },
    {
      title: "Saskatoon Youth Soccer Invitational",
      date: "May 6, 2024",
      content:
        "The Saskatoon Youth Soccer Invitational is a great opportunity for young players to showcase their talents. This tournament, held at the Kinsmen Park, features teams from across the province. It's a day filled with fun, sportsmanship, and great soccer.",
    },
    {
      title: "Citywide Adult Soccer Cup",
      date: "May 12, 2024",
      content:
        "The Citywide Adult Soccer Cup is an exciting tournament for adult teams in Saskatoon. Held at the Gordie Howe Sports Complex, this event features competitive matches and a lively atmosphere. Gather your team and compete for the citywide title.",
    },
    {
      title: "Youth Soccer League Finals",
      date: "May 20, 2024",
      content:
        "The Youth Soccer League Finals is the culmination of a season of hard work and dedication. Held at the Nutana Kiwanis Park, this tournament features the top youth teams in the league battling it out for the championship. Come and support the future stars of soccer.",
    },
  ];

  const [info, setInfo] = useState(defaultData);
  useEffect(() => {
    if (data && data !== null) {
      setInfo(data);
    }
  }, []);

  return (
    <div className="component-container border-x-2 ">
      <div className="carousel-container">
        <div className="text-3xl font-bold h3-header py-4">
          Latest Bulletins
        </div>
        <Carousel className="">
          <CarouselContent>
            {info.map((item, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/4 py-3 "
              >
                <div
                  className={`min-h-72 m-w-36 border-2 border-solid rounded flex flex-col justify-center px-3 pt-2 pb-4 bg-neutral-${
                    index + 1
                  }00`}
                >
                  <div className="text-xl text-black font-bold h3-header px-0 pb-3">
                    {item.title}
                  </div>
                  <small className="py-1">{item.date}</small>
                  <p className="pr-2 text-sm">{item.content}</p>
                  {item.link && (
                    <Link href={item.link} className="btn mt-3">
                      More
                    </Link>
                  )}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselComponent;
