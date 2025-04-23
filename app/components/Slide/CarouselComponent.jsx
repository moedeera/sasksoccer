"use client";

import React, { useEffect, useState } from "react";
import "./CarouselComponent.css";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../components/ui/carousel";
import Link from "next/link";

const CarouselComponent = ({ data }) => {
  return (
    <div className="component-container border-x-2 ">
      <div className="carousel-container">
        <div className="text-3xl font-bold h3-header py-4">
          Latest Bulletins
        </div>
        <Carousel className="">
          <CarouselContent>
            {data.map((item, index) => (
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
                    <Link href={item.link} className=" btn-carousel mt-3">
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
