import { Button } from "@/components/ui/button";
import type { ButtonProps } from "@relume_io/relume-ui";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Link from "next/link";
import { cn } from "@/lib/utils";
import img from "/images/mybio-bio-toilet/homepage-daio-international-nagoya.webp"
import imgAuthor from "/images/placeholder.png"
import { Slug } from "@/sanity.types";


type Props = {
  image: React.ReactNode
  category?: {
    title: string | null
    slug: Slug | null
  }
  title: string
  slug: string
  excerpt: string
  author?: {
    image: React.ReactNode
    name: string
  }
  tags?: Array<{
    title: string | null;
    slug: Slug | null;
  }> | null;
  date: string
};

export type BlogCardProps = React.ComponentPropsWithoutRef<"div"> & Partial<Props>;

export const BlogCard = (props: BlogCardProps) => {
  const { ...post } = {
    ...BlogCardDefaults,
    ...props,
  } as Props;
  return (
    <div className="@container">
      <div className="size-full rounded-lg bg-white border border-border flex flex-col overflow-hidden @2xl:flex-row">
        {/* // * IMAGE */}
        <Link href={"blog/" + post.slug} className="relative aspect-video block shrink-0 grow-0 basis-1/2 @2xl:aspect-[656/500]">
          {post.image}
        </Link>
        {/* // * CONTENT */}
        <div className="py-7 px-[5%] @md:py-10 @md:px-10 basis-1/2 flex flex-col">

        {/* //* CATEGORY + TITLE + EXCERPT */}
          <div>
            {post.category &&
              <Link href={"blog/category/" + post.category.slug?.current}>
                <p>{post.category.title}</p>
              </Link>
            }
            <Link href={"blog/" + post.slug}>
              <h2>{post.title}</h2>
            </Link>
            <p>{post.excerpt}</p>
          </div>

          {/* //* AUTHOR + DATE + TAGS */}
          <div className="flex flex-wrap mt-auto">
            <div className="relative size-12 aspect-square rounded-lg overflow-hidden">
              {post.author?.image}
            </div>
            <div>
              <div>{post.author?.name}</div>
              <p>{post.date}</p>
            </div>
            {post.tags &&
              <div className="basis-full">
                {post.tags.map((tag, index) => {
                  return <Link key={index} href={tag.slug?.current || "#"}>{tag.title}</Link>
                })}
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export const BlogCardDefaults: BlogCardProps = {
  image: <Image className="size-full" src={img} alt="nagoya" />,
  category: { title: "Category", slug: { _type: "slug", current: "category1" } },
  title: "Blog title heading will go here or some really obnoxiously long tile",
  slug: "",
  excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  author: {
    image: <Image className="size-full" src={imgAuthor} alt="author" />,
    name: "Nadzirah"
  },
  date: "11 Jan 2022 "
};
