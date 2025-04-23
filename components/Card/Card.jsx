"use client";
import * as React from "react";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

import Link from "next/link";
import { AspectRatio } from "../ui/aspect-ratio";
import Image from "next/image";

export function Cards({ data, directory }) {
  const [infoDirectory, setInfoDirectory] = React.useState("leagues");

  React.useEffect(() => {
    if (directory) {
      setInfoDirectory(directory);
    }
  }, [data]);

  return (
    <div className="component-container grid md:grid-cols-3 lg:grid-cols-4 gap-8 md:p-3">
      {" "}
      {data.map((dat, index) => (
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
            {dat?.details?.length > 0 && <> {dat?.details?.length} Divisions</>}
          </CardFooter>

          <CardFooter className="text-sm font-thin">
            {" "}
            {dat?.categories && "  Categories:"}
            {dat?.categories?.map((category, index) => (
              <div
                className="border border-gray rounded p-1 mr-1 capitalize bg-slate-50"
                key={index}
              >
                {category}
              </div>
            ))}
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
