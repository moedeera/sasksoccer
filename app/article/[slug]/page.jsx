import { sanity } from "../../../lib/sanity";
import ArticleWithSidebar from "../../components/ArticleWithSideBar/ArticleWithSideBar";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";

// Fetch the current post
async function getPost(slug) {
  const query = `*[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    publishedAt,
    body,
    readTime,
    mainImage {
      asset-> { url }
    },
    author-> { name }
  }`;
  return await sanity.fetch(query, { slug });
}

// Fetch 3 related articles
async function getRelatedPosts(currentId) {
  const query = `*[_type == "post" && _id != $id][0...3]{
    _id,
    title,
    slug,
    mainImage { asset-> { url } },
    author-> { name }
  }`;
  return await sanity.fetch(query, { id: currentId });
}

export default async function Page({ params }) {
  const post = await getPost(params.slug);
  console.log(params, params.slug);
  if (!post) return notFound();

  const related = await getRelatedPosts(post._id);

  return (
    <div className="component-container">
      <ArticleWithSidebar
        article={{
          ...post,
          content: <PortableText value={post.body} />,
        }}
        related={related}
      />
    </div>
  );
}
