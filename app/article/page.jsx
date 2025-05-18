export const dynamic = "force-dynamic"; // ⬅ disables static caching

import React from "react";
import BlogLanding from "../components/BlogLanding/BlogLanding";
import { getPosts } from "../../lib/sanity";
import { SampleCard1 } from "../components/BlogLanding/SampleCard1";
import Link from "next/link";
import Image from "next/image";

export default async function ArticlePage() {
  let imgUrl =
    "https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg";

  const posts = await getPosts();
  return (
    <div className="component-container blog-container">
      {" "}
      <main className="p-6 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Latest Posts</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              href={`/article/${post.slug.current}`}
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
