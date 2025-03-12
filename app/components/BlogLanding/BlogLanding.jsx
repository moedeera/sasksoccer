import React from "react";
import "./BlogLanding.css";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const BlogLanding = () => {
  const events = [
    {
      id: 1,
      name: "Event A",
    },
    { id: 2, name: "Event B" },
    { id: 3, name: "Event C" },
  ];
  return (
    <div className="blog-landing-container">
      <div className="blog-header-main">
        {/* Featured content over the background image */}
        <div className="blog-header-content">
          <h2>Featured Article Title</h2>
          <p>
            A short description of the article goes here. This text sits near
            the bottom half of the image.
          </p>
          <button className="btn">Read More</button>
        </div>
      </div>

      {/* Side container that has two items. 
          They’re side by side below 768px and stacked from 768px up. */}
      <div className="blog-header-side">
        <Card className="blog-header-side-item flex flex-col space-in-between pt-4">
          <CardContent>
            <div className="text-lg font-bold mb-2">Upcoming Events</div>
            <div className="flex flex-col gap-3 mb-2">
              {events.map((event) => (
                <div key={event.id} className="flex flex-col">
                  <div className="text-xs md:text-sm lg:text-md">
                    {event.name}
                  </div>
                  <div className="hidden md:block text-xs">
                    April 5 2025 @ 9:30 pm
                  </div>
                </div>
              ))}
            </div>
            <Button className="mt-2">See All</Button>
          </CardContent>
        </Card>
        <div className="blog-header-side-item hidden md:block">Side Item 2</div>
      </div>
    </div>
  );
};

export default BlogLanding;
