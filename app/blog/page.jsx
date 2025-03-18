import React from "react";
import BlogLanding from "../components/BlogLanding/BlogLanding";
import { Card } from "@/components/ui/card";
import { SampleCard1 } from "../components/BlogLanding/SampleCard1";

const page = () => {
  let imgUrl =
    "https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg";
  const articles = [
    {
      id: 1,
      name: "Women's Boarded Divisions Completed",
      description:
        "The Women's Boarded Divisions have officially concluded, showcasing an exciting season of competition. Check out the final standings, top performers, and key highlights from this year's matches.",
    },
    {
      id: 2,
      name: "Men's Boarded Divisions Wraps Up",
      description:
        "The Men's Boarded Divisions have come to an end, with thrilling matches and intense rivalries defining the season. Read more about the championship results and standout moments from the league.",
    },
    {
      id: 3,
      name: "List of Tournaments This Summer",
      description:
        "Looking for competitive action this summer? Here’s a complete list of upcoming tournaments, including registration details, locations, and key dates to mark on your calendar.",
    },
    {
      id: 4,
      name: "Outdoor Registration Starting",
      description:
        "Get ready for outdoor soccer! Registration for the upcoming season is now open. Sign up early to secure your spot and join the action under the sun.",
    },
  ];

  return (
    <div className="component-container blog-container">
      <BlogLanding />

      <div className="my-12">
        <div className="text-lg font-bold mb-4">Latest Articles</div>
        <div className="w-full flex gap-2 flex-wrap md:flex-nowrap ">
          {articles.map((article, index) => (
            <div key={index} className="w-full">
              <SampleCard1
                name={article.name}
                description={article.description}
                image={imgUrl}
                link={"/"}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
