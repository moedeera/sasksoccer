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
      name: "Article A",
    },
    { id: 2, name: "Article B" },
    { id: 3, name: "Article C" },
    { id: 3, name: "Article D" },
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
                description={
                  "lorem ipsum blah blah blah,lorem ipsum blah blah blah,lorem ipsum blah blah blah"
                }
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
