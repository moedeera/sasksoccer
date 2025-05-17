import React from "react";
import BlogLanding from "../components/BlogLanding/BlogLanding";
import { getPosts } from "../../lib/sanity";
import { SampleCard1 } from "../components/BlogLanding/SampleCard1";

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
      <main className="p-6">
        <h1 className="text-3xl font-bold mb-4">Blog</h1>
        <ul>
          {posts.map((post) => (
            <li key={post._id} className="mb-4">
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-gray-500">
                {new Date(post.publishedAt).toDateString()}
              </p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
