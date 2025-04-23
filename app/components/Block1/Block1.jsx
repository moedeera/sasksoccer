"use client";

import Link from "next/link";

import "./Block1.css";
// import { useState, useEffect } from "react";
import Image from "next/image";
import { AspectRatio } from "../../../components/ui/aspect-ratio";

const Block1 = ({ info }) => {
  return (
    <div className="component-container ">
      <div className="block1">
        {info?.reverse ? (
          <>
            {" "}
            <div className="text py-4 px-4">
              <div className="text-2xl font-bold h3-header">{info?.title}</div>
              <small>{info?.date}</small>
              <p className="pt-1 pb-3  pr-2 text-base">{info?.content}</p>
              <p className="pt-1 pb-3  pr-2 text-base">{info?.content_sec}</p>
              {info?.buttonLink && (
                <Link href={info?.buttonLink} className="btn">
                  {info?.buttonText}
                </Link>
              )}
            </div>
            <AspectRatio ratio={16 / 9} className="bg-muted border">
              <Image
                src={info.image}
                alt="Photo by Drew Beamer"
                fill
                className="h-full w-full rounded-md object-cover"
              />
            </AspectRatio>
          </>
        ) : (
          <>
            <div
              className="block-1-image w-full h-full  "
              style={{ backgroundImage: `url(${info?.image})` }}
            ></div>
            <div className="text py-3 px-2">
              <div className="text-3xl font-bold h3-header">{info?.title}</div>
              <small>{info?.date}</small>
              <p className="py-3  pr-2">{info?.content}</p>
              <p className="py-3  pr-2">{info?.content_sec}</p>
              {info?.buttonLink && (
                <Link href={info?.buttonLink} className="btn">
                  {info?.buttonText}
                </Link>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Block1;
