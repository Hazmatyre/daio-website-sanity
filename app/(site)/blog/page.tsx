import Link from "next/link";
import { Suspense } from "react";

import Avatar from "../avatar";
import CoverImage from "../cover-image";
import DateComponent from "../date";
import MoreStories from "../more-stories";
import Onboarding from "../onboarding";
import PortableText from "../portable-text";
import Image from "next/image";

import { CategoriesQueryResult, internalGroqTypeReferenceTo, type HeroQueryResult, type PostsQueryResult, type SettingsQueryResult } from "@/sanity.types";
import * as demo from "@/sanity/lib/demo";
import { sanityFetch } from "@/sanity/lib/fetch";
import { categoriesQuery, heroQuery, postsQuery, settingsQuery } from "@/sanity/lib/queries";
import { cn } from "@/lib/utils";
import { Blog7 } from "@/components/blocks/blog/Blog7";
import { useSearchParams } from 'next/navigation';
import { urlForImage } from '@/sanity/lib/utils';
import imgPlaceholder from "/images/placeholder.png"
import { Blog7List } from "@/components/blocks/blog/Blog7.List";
import { BlogCategories } from "@/components/blocks/blog/BlogCategories";

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {

  // Pagination
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  //Fetched data
  const [settings, posts, categories] = await Promise.all([
    sanityFetch<SettingsQueryResult>({
      query: settingsQuery,
    }),
    sanityFetch<PostsQueryResult>({
      query: postsQuery
    }),
    sanityFetch<CategoriesQueryResult>({
      query: categoriesQuery
    }),
  ]);

  // Featured post
  const post = settings?.featuredPost
  const coverImageUrl = urlForImage(post?.coverImage)?.url()
  const authorImage = urlForImage(post?.author)?.url()

  const Blog7Props: React.ComponentPropsWithoutRef<typeof Blog7> = {
    subtitle: "Blog",
    heading: settings?.title,
    description: settings?.description,
    post: {
      image: <Image priority className="size-full" src={coverImageUrl || imgPlaceholder} alt={post?.coverImage?.alt || ""} fill />,
      category: post?.categories?.at(0),
      title: post?.title || "Learn More",
      slug: post?.slug || "",
      excerpt: post?.excerpt,
      author: post?.author
        ? {
          image: <Image className="size-full object-cover !relative" src={authorImage || imgPlaceholder} alt={post?.author?.name || ""} fill />,
          name: post.author.name,
        }
        : undefined
      ,
      date: post?.date,
      tags: post?.tags,
    }
  };

  // Posts
  const Blog7ListProps = posts.map((post) => {
    return {
      image: <Image className="size-full object-cover" src={urlForImage(post?.coverImage)?.url() || imgPlaceholder} alt={post?.coverImage?.alt || ""} fill />,
      category: post?.categories?.at(0),
      title: post?.title || "Learn More",
      slug: post?.slug || "",
      excerpt: post.excerpt,
      author: post?.author
        ? {
          image: <Image className="object-cover !relative" src={urlForImage(post?.author)?.url() || imgPlaceholder} alt={post?.author?.name || ""} fill />,
          name: post.author.name,
        }
        : undefined
      ,
      date: post?.date,
      tags: post?.tags,
    }
  })

  return (
    <>
      <Blog7 {...Blog7Props} />
      <BlogCategories categories={categories} />
      <Blog7List posts={Blog7ListProps} />
    </>
  );
}

// return (
//   <div className="container mx-auto px-5">
//     <Intro title={settings?.title} description={settings?.description} />
//     {heroPost ? (
//       <HeroPost
//         title={heroPost.title}
//         slug={heroPost.slug}
//         coverImage={heroPost.coverImage}
//         excerpt={heroPost.excerpt}
//         date={heroPost.date}
//         author={heroPost.author}
//       />
//     ) : (
//       <Onboarding />
//     )}
//     {heroPost?._id && (
//       <aside>
//         <h2 className="mb-8 text-6xl font-bold leading-tight tracking-tighter md:text-7xl">
//           More Stories
//         </h2>
//         <Suspense>
//           <MoreStories skip={heroPost._id} limit={100} />
//         </Suspense>
//       </aside>
//     )}
//   </div>
// );

function Intro(props: { title: string | null | undefined; description: any }) {
  const title = props.title || demo.title;
  const description = props.description?.length
    ? props.description
    : demo.description;
  return (
    <section className="mt-16 mb-16 flex flex-col items-center lg:mb-12 lg:flex-row lg:justify-between">
      <h1 className="text-balance text-6xl font-bold leading-tight tracking-tighter lg:pr-8 lg:text-8xl">
        {title || demo.title}
      </h1>
      <h2 className="text-pretty mt-5 text-center text-lg lg:pl-8 lg:text-left">
        <PortableText
          className="prose-lg"
          value={description?.length ? description : demo.description}
        />
      </h2>
    </section>
  );
}

function HeroPost({
  title,
  slug,
  excerpt,
  coverImage,
  date,
  author,
}: Pick<
  Exclude<HeroQueryResult, null>,
  "title" | "coverImage" | "date" | "excerpt" | "author" | "slug"
>) {
  return (
    <article>
      <Link className="group mb-8 block md:mb-16" href={`/blog/${slug}`}>
        <CoverImage image={coverImage} priority />
      </Link>
      <div className="mb-20 md:mb-28 md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8">
        <div>
          <h3 className="text-pretty mb-4 text-4xl leading-tight lg:text-6xl">
            <Link href={`/blog/${slug}`} className="hover:underline">
              {title}
            </Link>
          </h3>
          <div className="mb-4 text-lg md:mb-0">
            <DateComponent dateString={date} />
          </div>
        </div>
        <div>
          {excerpt && (
            <p className="text-pretty mb-4 text-lg leading-relaxed">
              {excerpt}
            </p>
          )}
          {author && <Avatar name={author.name} picture={author.picture} />}
        </div>
      </div>
    </article>
  );
}


