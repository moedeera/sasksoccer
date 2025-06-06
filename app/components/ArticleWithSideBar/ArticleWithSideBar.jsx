import Image from "next/image";
import Link from "next/link";

export default function ArticleWithSidebar({ article, related }) {
  return (
    <div className=" mx-auto px-4 py-8">
      {/* Main Article Layout */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <article className="lg:w-2/3">
          {/* Headline */}
          <h1 className="text-4xl font-bold mb-4">{article.title}</h1>

          {/* Main Image */}
          {article.mainImage?.asset?.url && (
            <div className="relative w-full h-72 mb-6">
              <Image
                src={article.mainImage.asset.url}
                alt={article.title}
                fill
                className="rounded-md object-cover"
              />
            </div>
          )}

          {/* Metadata */}
          <div className="text-sm text-gray-500 flex flex-wrap gap-4 mb-6">
            <span>{new Date(article.publishedAt).toDateString()}</span>
            <span>by {article.author?.name || "Unknown"}</span>
            <span>{article.readTime || "1 min read"}</span>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">{article.content}</div>
        </article>

        {/* Sidebar: Related Articles */}
        <aside className="lg:w-1/3 space-y-6">
          <h2 className="text-xl font-semibold border-b pb-2">
            Related Articles
          </h2>
          <div className="space-y-4">
            {related.map((item) => (
              <Link
                href={`/news/${item.slug.current}`}
                key={item._id}
                className="flex gap-3 items-start hover:bg-gray-50 p-2 rounded-md transition"
              >
                <div className="relative w-32 h-32 shrink-0 rounded overflow-hidden">
                  {item.mainImage?.asset?.url && (
                    <Image
                      src={item.mainImage.asset.url}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>
                <div className="text-sm">
                  <div className="font-medium text-lg leading-tight line-clamp-2">
                    {item.title}
                  </div>
                  <p className="text-gray-500 text-xs mt-1">
                    {item.author?.name || "Unknown"}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}
