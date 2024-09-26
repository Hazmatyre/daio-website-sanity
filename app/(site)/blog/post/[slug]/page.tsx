import type { Metadata, ResolvingMetadata } from "next";
import { groq, type PortableTextBlock } from "next-sanity";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";

import Avatar from "../../../avatar";
import CoverImage from "../../../cover-image";
import DateComponent from "../../../date";
import MoreStories from "../../../more-stories";
import PortableText from "../../../portable-text";
import Image from "next/image";

import type {
  PostQueryResult,
  PostSlugsResult,
  SettingsQueryResult,
} from "@/sanity.types";
import * as demo from "@/sanity/lib/demo";
import { sanityFetch } from "@/sanity/lib/fetch";
import { postQuery, settingsQuery } from "@/sanity/lib/queries";
import { resolveOpenGraphImage, urlForImage } from "@/sanity/lib/utils";
import { Blog7 } from "@/components/blocks/blog/Blog7";
import { BlogPostHeader1 } from "@/components/blocks/blog/BlogPostHeader1";
import { Content29 } from "@/components/blocks/blog/Content29";
import { Contact5 } from "@/components/blocks/Contact5";
import { format } from "date-fns";

type Props = {
  params: { slug: string };
};

const postSlugs = groq`*[_type == "post"]{slug}`;

export async function generateStaticParams() {
  const params = await sanityFetch<PostSlugsResult>({
    query: postSlugs,
    perspective: "published",
    stega: false,
  });
  return params.map(({ slug }) => ({ slug: slug?.current }));
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const post = await sanityFetch<PostQueryResult>({
    query: postQuery,
    params,
    stega: false,
  });
  const previousImages = (await parent).openGraph?.images || [];
  const ogImage = resolveOpenGraphImage(post?.coverImage);

  return {
    authors: post?.author?.name ? [{ name: post?.author?.name }] : [],
    title: post?.seo?.metaTitle || post?.title,
    description: post?.seo?.metaTitle || post?.excerpt,
    keywords: post?.seo?.seoKeywords,
    openGraph: {
      images: ogImage ? [ogImage, ...previousImages] : previousImages,
      url: "https//daiointernational.com/blog/"+post?.slug,
      description: post?.seo?.metaTitle || post?.excerpt || undefined,
      publishedTime: post?.date ? format(new Date(post.date), "dd LLL yyyy") : undefined,
      title: post?.seo?.metaTitle || post?.title,
    },
  } satisfies Metadata;
}

export default async function PostPage({ params }: Props) {
  const [post, settings] = await Promise.all([
    sanityFetch<PostQueryResult>({
      query: postQuery,
      params,
    }),
    sanityFetch<SettingsQueryResult>({
      query: settingsQuery,
    }),
  ]);

  if (!post?._id) {
    return notFound();
  }

  // todo: do share buttons properly
  // todo: do metadata for ogImage in layout.tsx

  //Header
  const BlogPostHeader1Props: React.ComponentPropsWithoutRef<typeof BlogPostHeader1> = {
    image: <Image
      className="!relative size-full object-cover rounded-lg shadow-xxsmall"
      alt={post.coverImage?.alt || ""}
      src={urlForImage(post.coverImage)?.url() as string}
      sizes="(max-width: 1023px) 100vw, 40vw"
      fill
      priority
    />,
    category: post.categories?.at(0),
    author: {
      image: <Image className="size-full" fill src={urlForImage(post.author?.picture)?.url() as string} alt={post.author?.name as string} />,
      name: post.author?.name as string
    },
    date: post.date
  }



  return (
    <>
      <BlogPostHeader1
        {...BlogPostHeader1Props}
      />
      <Content29
        post={post}
      />
      <Contact5></Contact5>
    </>
  )

  // return (
  //   <div className="container mx-auto px-5">
  //     <h2 className="mb-16 mt-10 text-2xl font-bold leading-tight tracking-tight md:text-4xl md:tracking-tighter">
  //       <Link href="/" className="hover:underline">
  //         {settings?.title || demo.title}
  //       </Link>
  //     </h2>
  //     <article>
  //       <h1 className="text-balance mb-12 text-6xl font-bold leading-tight tracking-tighter md:text-7xl md:leading-none lg:text-8xl">
  //         {post.title}
  //       </h1>
  //       <div className="hidden md:mb-12 md:block">
  //         {post.author && (
  //           <Avatar name={post.author.name} picture={post.author.picture} />
  //         )}
  //       </div>
  //       <div className="mb-8 sm:mx-0 md:mb-16">
  //         <CoverImage image={post.coverImage} priority />
  //       </div>
  //       <div className="mx-auto max-w-2xl">
  //         <div className="mb-6 block md:hidden">
  //           {post.author && (
  //             <Avatar name={post.author.name} picture={post.author.picture} />
  //           )}
  //         </div>
  //         <div className="mb-6 text-lg">
  //           <div className="mb-4 text-lg">
  //             <DateComponent dateString={post.date} />
  //           </div>
  //         </div>
  //       </div>
  //       {post.content?.length && (
  //         <PortableText
  //           className="mx-auto max-w-2xl"
  //           value={post.content as PortableTextBlock[]}
  //         />
  //       )}
  //     </article>
  //     <aside>
  //       <hr className="border-accent-2 mb-24 mt-28" />
  //       <h2 className="mb-8 text-6xl font-bold leading-tight tracking-tighter md:text-7xl">
  //         Recent Stories
  //       </h2>
  //       <Suspense>
  //         <MoreStories skip={post._id} limit={2} />
  //       </Suspense>
  //     </aside>
  //   </div>
  // );
}


