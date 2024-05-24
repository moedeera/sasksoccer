import React from "react";
import "./CarouselComponent.css";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const CarouselComponent = () => {
  const items = [1, 2, 3, 4, 5, 6];
  let content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum,
`;

  return (
    <div className="component-container">
      <div className="text-3xl font-bold h3-header py-4">Upcoming</div>
      <Carousel>
        <CarouselContent>
          {items.map((item, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 lg:basis-1/4 py-3"
            >
              <div
                className={`min-h-72 m-w-36 border-2 border-solid rounded flex flex-col justify-center p-3 bg-neutral-${
                  index + 1
                }00`}
              >
                <div className="text-2xl font-bold h3-header px-0">
                  Lorem ipsum dolor sit amet {item}
                </div>
                <small className="py-1">May 2{index * 2 + 1} 2024</small>
                <p className="pr-2 ">{content}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
