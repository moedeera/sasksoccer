import { Card } from "@/components/ui/card";
import Link from "next/link";
import React from "react";

export const SampleCard1 = ({ name, description, image, link }) => {
  return (
    <Card className="min-h-60 w-full p-4 relative">
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
          alignItems: "center",
          backgroundColor: "rgba(0, 0, 0, 0.65)",
          zIndex: 1,
          color: "white",
        }}
      >
        <div className="text-md">{name}</div>
        <div className="text">{description}</div>
        <Link href={link} className="btn">
          {" "}
          More
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
