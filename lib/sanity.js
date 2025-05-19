import { createClient } from "@sanity/client";

export const sanity = createClient({
  projectId: "42pikih6", // e.g., 'abc123'
  dataset: "production", // or the name you used
  apiVersion: "2023-01-01", // use a fixed date
  useCdn: true, // `false` if you want fresh data
});

export async function getPosts() {
  return await sanity.fetch(`*[_type == "post"]{
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
  } | order(publishedAt desc)`);
}
