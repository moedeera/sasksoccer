import { sanity } from "../../../lib/sanity";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { AspectRatio } from "../../../components/ui/aspect-ratio";

// GROQ query for a single post by slug
async function getPost(slug) {
  const query = `*[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    publishedAt,
    body,
    mainImage {
      asset-> {
        url
      }
    },
    author-> {
      name
    }
  }`;
  return await sanity.fetch(query, { slug });
}

// Dynamic page for a blog post
export default async function BlogPostPage({ params }) {
  const post = await getPost(params.slug);
  console.log("info1", params, "info 2", params.slug);

  if (!post) {
    return notFound();
  }

  return (
    <div className="component-container max-w-3xl mx-auto p-6">
      {/* Meta */}
      <div className="text-gray-500 text-sm flex justify-between border-b pb-2">
        <span>{new Date(post.publishedAt).toDateString()}</span>
        <span>by {post.author?.name || "Unknown Author"}</span>
      </div>

      {/* Title */}
      <h1 className="text-3xl font-bold mt-4">{post.title}</h1>

      {/* Main Image */}
      {post.mainImage?.asset?.url && (
        <div className="mt-4">
          <AspectRatio ratio={16 / 9} className="bg-muted border">
            <Image
              src={post.mainImage.asset.url}
              alt={post.title}
              fill
              className="h-full w-full rounded-md object-cover"
            />
          </AspectRatio>
        </div>
      )}

      {/* Body */}
      <div className="mt-6 text-gray-800 leading-relaxed space-y-4">
        <PortableText value={post.body} />
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const query = `*[_type == "post"]{ "slug": slug.current }`;
  const slugs = await sanity.fetch(query);
  return slugs.map((s) => ({ slug: s.slug }));
}
