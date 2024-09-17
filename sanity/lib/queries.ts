import { groq } from "next-sanity";
import { seo } from "./queries-seo";

export const settingsQuery = groq`*[_type == "settings"][0] 
{
  ...,
  featuredPost->
}
`;

const postFields = /* groq */ `
  _id,
  "status": select(_originalId in path("drafts.**") => "draft", "published"),
  "title": coalesce(title, "Untitled"),
  "slug": slug.current,
  excerpt,
  coverImage,
  "date": coalesce(date, _updatedAt),
  "author": author->{"name": coalesce(name, "Anonymous"), picture},
`;

export const heroQuery = groq`*[_type == "post" && defined(slug.current)] | order(date desc, _updatedAt desc) [0] {
  content,
  ${postFields}
}`;

export const moreStoriesQuery = groq`*[_type == "post" && _id != $skip && defined(slug.current)] | order(date desc, _updatedAt desc) [0...$limit] {
  ${postFields}
}`;

export const postQuery = groq`*[_type == "post" && slug.current == $slug] [0] {
  content,
  ${postFields}
}`;

// * Example of SEO field
// const groqQuery = groq`*[_type == "page"]{
//   _type,
//   "slug":slug.current,
//   ${seo},
//   }`;

// Used in /blog
// * More complicated pagination solutions below for splitting 10k+ records:
// * https://www.sanity.io/docs/paginating-with-groq
// * For now we just fetch all posts and filter them on a server component. client doesn't need to do any heavy fetching or have access to all posts in a given page.
export const postsQuery = groq`*[_type == "post"] 
| order(date desc, _updatedAt desc) {
  ${postFields}
  ${seo}
}`;

// Featured Post
// export const featuredPostQuery = groq`
// *[_type == "post" && slug.current == $slug] [0] {

// }
// `