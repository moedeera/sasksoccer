import React from "react";
import BlogLanding from "../components/BlogLanding/BlogLanding";

import { SampleCard1 } from "../components/BlogLanding/SampleCard1";
import { newsHeaderInfo } from "../../assets/Info/Info";
import Link from "next/link";
import { Card } from "../../components/ui/card";
import { AspectRatio } from "../../components/ui/aspect-ratio";
import Image from "next/image";
import { getPosts } from "../../lib/sanity";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";

export default async function Page() {
  const posts = await getPosts();
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
    {
      id: 3,
      name: "List of Tournaments This Summer",
      description:
        "Looking for competitive action this summer? Here’s a complete list of upcoming tournaments, including registration details, locations, and key dates to mark on your calendar.",
      date: "March 12, 2025",
      author: "Admin",
      link: "news/list",
    },
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
        <div className="text-xl font-bold mb-4">Latest News</div>

        <div className="flex  flex-wrap  gap-3 mb-8 ">
          {posts?.map((post, index) => (
            <Link href={`news/${post.slug.current}`} key={index}>
              <Card className="p-3 w-full h-full min-w-80">
                {" "}
                {post?.mainImage?.asset?.url && (
                  <AspectRatio ratio={16 / 9} className="bg-muted border">
                    <Image
                      src={post.mainImage.asset.url}
                      alt={post.title}
                      fill
                      className="h-full w-full rounded-md object-cover"
                    />
                  </AspectRatio>
                )}
                <div className="text-xs my-2">
                  {" "}
                  {new Date(post.publishedAt).toLocaleDateString()} •{" "}
                </div>
                <div className="flex items-center gap-2 text-sm mt-2 mb-2">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  Admin
                </div>
                <div className="text-xl font-bold w-4/5">{post.title}</div>
              </Card>
            </Link>
          ))}
        </div>
        <div className="text-3xl font-bold mt-10 mb-4 text-center">
          League Updates
        </div>
        <div className="w-full flex gap-2 flex-wrap md:flex-nowrap ">
          {articles.map((article, index) => (
            <div key={index} className="">
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
