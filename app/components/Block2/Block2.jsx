"use client";

import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import "./Block2.css";
import { useState, useEffect } from "react";

const Block2 = ({ data }) => {
  const defaultInfo = {
    reverse: true,
    title: "Summer Soccer Is Here",
    date: "May 21 2024",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum,
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`,
    buttonText: "Read More",
    buttonLink: "/",
    accordion: true,
    image:
      "https://images.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  };
  const [info, setInfo] = useState(defaultInfo);

  useEffect(() => {
    if (data) {
      setInfo(data);
    }
  }, []);

  return (
    <div className="component-container ">
      <div className="block2 mt-4 overflow-x-hidden">
        {" "}
        <div className="text py-4 px-3">
          <small>Recent</small>
          <div className="text-3xl font-bold h3-header">{info.title}</div>

          <p className="py-3  pr-2 text-base">{info.content}</p>

          {info.accordion && (
            <>
              <div className="text-2xl h3-header">
                Frequently Asked Questions
              </div>
              <Accordion
                type="single"
                collapsible
                className="md:w-full  color-black"
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    <div className="text-black hover:text-white">
                      Where do I start if I want to play casual?
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="text-black hover:text-white">
                      {" "}
                      Click{" "}
                      <Link href={"/play/casual"} className="font-bold">
                        Here
                      </Link>{" "}
                      for weekly casual meetups
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    How do I find tournaments/leagues that suit my skill level?
                  </AccordionTrigger>
                  <AccordionContent>
                    <Link
                      href={"https://www.saskatoonadultsoccer.com"}
                      className="font-bold"
                    >
                      Saskatoon Adult Soccer
                    </Link>{" "}
                    has a variety of different divisions suited for each skill
                    level
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Where can I volunteer?</AccordionTrigger>
                  <AccordionContent>
                    Go to our{" "}
                    <Link href={"/play/casual"} className="font-bold">
                      Community Page
                    </Link>{" "}
                    to find out about opportunities to volunteer .
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Block2;
