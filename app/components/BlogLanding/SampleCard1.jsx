import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import React from "react";

export const SampleCard1 = ({ name, description, image, link }) => {
  return (
    <Card className="min-h-80 w-full p-5 relative">
      <div className="w-100"></div>
      <div
        className="blog-article-summary"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "10px",
          alignItems: "flex-start",
          backgroundColor: "rgba(0, 0, 0, 0.65)",
          zIndex: 1,
          color: "white",
        }}
      >
        <Badge>Leagues</Badge>
        <div className="text-lg mt-1 font-bold w-4/5">{name}</div>
        <div className="text-sm mb-2">{description}</div>
        <Link href={link} className="btn">
          {" "}
          Read More
        </Link>
      </div>

      <div
        className="blog-article-image-small"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url("https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </Card>
  );
};
