"use client";
import React from "react";
import "./BlogLanding.css";
import { Card, CardContent } from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";
import Link from "next/link";

const BlogLanding = ({ data }) => {
  console.log(data);
  const events = [
    {
      id: 1,
      name: "Outdoor Preseason Start",
      date: "May 11 2025",
    },
    {
      id: 2,
      name: "Outdoor season start",
      date: "May 13 2025",
    },
    {
      id: 3,
      name: "Player Registrations open",
      date: "April 11 2025",
    },
  ];

  const features = [
    { id: 2, name: "Indoor 2024-25 Champions" },
    {
      id: 1,
      name: "Outdoor 2025 Alignment",
    },

    { id: 3, name: "Referee Registration" },
    { id: 3, name: "Player Registration" },
  ];
  return (
    <div className="blog-landing-container">
      <div className="blog-header-main">
        {/* Featured content over the background image */}
        <div className="blog-header-content">
          <div className="text-xl mb-2 font-bold">{data?.header}</div>
          <p className="text-gray-200">{data?.description}</p>
          <Link href={data?.link} className="btn">
            Read More
          </Link>
        </div>
      </div>

      {/* Side container that has two items. 
          They’re side by side below 768px and stacked from 768px up. */}
      <div className="blog-header-side">
        <Card className="blog-header-side-item flex flex-col space-in-between pt-4 ">
          <CardContent>
            <div className="text-lg font-bold mb-2">Upcoming Events</div>
            <div className="flex flex-col gap-3 mb-2">
              {events.map((event) => (
                <div key={event.id} className="flex flex-col">
                  <div className="text-xs md:text-sm lg:text-md">
                    {event.name}
                  </div>
                  <div className="hidden md:block text-xs">{event?.date}</div>
                </div>
              ))}
            </div>
            <Button className="mt-2">
              {" "}
              <Link href={"/"}>See All</Link>
            </Button>
          </CardContent>
        </Card>
        <Card
          className="bg-amber-100 blog-header-side-item hidden   px-4 lg:flex flex-col justify-evenly"
          id="feature-card"
        >
          <div className="text-lg font-bold ">Latest</div>
          <div className="flex flex-col h-4/5 gap-5">
            {" "}
            {features.map((feature, index) => (
              <div key={index} className="text-sm font-semi-bold">
                {" "}
                {feature.name}
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default BlogLanding;
