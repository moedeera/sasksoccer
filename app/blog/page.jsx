import React from "react";
import BlogLanding from "../components/BlogLanding/BlogLanding";
import { getPosts } from "../../lib/sanity";
import { SampleCard1 } from "../components/BlogLanding/SampleCard1";
import Link from "next/link";
import Image from "next/image";

export default async function BlogPage() {
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
    },
    {
      id: 2,
      name: "Men's Boarded Divisions Wraps Up",
      description:
        "The Men's Boarded Divisions have come to an end, with thrilling matches and intense rivalries defining the season. Read more about the championship results and standout moments from the league.",
      date: "March 14, 2025",
      author: "Admin",
    },
    {
      id: 3,
      name: "List of Tournaments This Summer",
      description:
        "Looking for competitive action this summer? Here’s a complete list of upcoming tournaments, including registration details, locations, and key dates to mark on your calendar.",
      date: "March 12, 2025",
      author: "Admin",
    },
    {
      id: 4,
      name: "Outdoor Registration Starting",
      description:
        "Get ready for outdoor soccer! Registration for the upcoming season is now open. Sign up early to secure your spot and join the action under the sun.",
      date: "March 10, 2025",
      author: "Admin",
    },
  ];
  const posts = await getPosts();
  return (
    <div className="component-container blog-container">
      {" "}
      <main className="p-6 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Latest Posts</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              href={`/blog/${post.slug.current}`}
              key={post._id}
              className="block rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
            >
              {post.mainImage?.asset?.url && (
                <div className="relative h-48 w-full">
                  <Image
                    src={post.mainImage.asset.url}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-4 bg-white">
                <h2 className="text-xl font-semibold mb-1">{post.title}</h2>
                <p className="text-sm text-gray-500 mb-2">
                  {new Date(post.publishedAt).toLocaleDateString()} •{" "}
                  {post.author?.name || "Unknown Author"}
                </p>
                <p className="text-sm text-gray-600 line-clamp-3">
                  {post.body?.[0]?.children?.[0]?.text ||
                    "No preview available."}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
