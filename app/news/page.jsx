import React from "react";
import BlogLanding from "../components/BlogLanding/BlogLanding";

import { SampleCard1 } from "../components/BlogLanding/SampleCard1";
import { newsHeaderInfo } from "../../assets/Info/Info";

export default function Page() {
  let imgUrl =
    "https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg";
  const articles = [
    {
      id: 1,
      name: "Women's Boarded Divisions Completed",
      description:
        "The Women's Boarded Divisions have officially concluded, showcasing an exciting season of competition. Check out the final standings, top performers, and key highlights from this year's matches.",
      date: "March 15, 2025",
      author: "Admin",
      link: "leagues/womens-boarded-2024",
    },
    {
      id: 2,
      name: "Men's Boarded Divisions Wraps Up",
      description:
        "The Men's Boarded Divisions have come to an end, with thrilling matches and intense rivalries defining the season. Read more about the championship results and standout moments from the league.",
      date: "March 14, 2025",
      author: "Admin",
      link: "leagues/mens-boarded",
    },
    // {
    //   id: 3,
    //   name: "List of Tournaments This Summer",
    //   description:
    //     "Looking for competitive action this summer? Here’s a complete list of upcoming tournaments, including registration details, locations, and key dates to mark on your calendar.",
    //   date: "March 12, 2025",
    //   author: "Admin",
    //   link: "news/list",
    // },
    {
      id: 4,
      name: "Outdoor Registration Starting",
      description:
        "Get ready for outdoor soccer! Registration for the upcoming season is now open. Sign up early to secure your spot and join the action under the sun.",
      date: "March 10, 2025",
      author: "Admin",
      link: "news//registration2025",
    },
  ];

  return (
    <div className="component-container blog-container">
      <BlogLanding data={newsHeaderInfo} />

      <div className="my-12">
        <div className="text-lg font-bold mb-4">Latest Articles</div>
        <div className="w-full flex gap-2 flex-wrap md:flex-nowrap ">
          {articles.map((article, index) => (
            <div key={index} className="w-full">
              <SampleCard1
                name={article.name}
                description={article.description}
                image={imgUrl}
                date={article.date}
                author={article.author}
                link={article.link}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
