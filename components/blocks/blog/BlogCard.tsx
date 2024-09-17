import { Button } from "@/components/ui/button";
import type { ButtonProps } from "@relume_io/relume-ui";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Link from "next/link";
import { cn } from "@/lib/utils";
import img from "/images/mybio-bio-toilet/homepage-daio-international-nagoya.webp"
import imgAuthor from "/images/placeholder.png"


type Props = {
  image: React.ReactNode
  category?: string
  title: string
  slug: string
  excerpt: string
  author?: {
    image: React.ReactNode
    name: string
  }
  tags?: string[]
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
        <Link href={"blog/" + post.slug} className="relative aspect-video block shrink-0 grow-0 basis-1/2 @2xl:aspect-[656/500]">
          {post.image}
        </Link>
        <div className="py-7 px-[5%] @md:py-10 @md:px-10">
          <div>{post.category}</div>
          <Link href={"blog/" + post.slug}>
            <h2>{post.title}</h2>
          </Link>
          <p>{post.excerpt}</p>
          <div className="flex">
            <div className="relative size-12 aspect-square rounded-lg overflow-hidden">
              {post.author?.image}
            </div>
            <div>
              <div>{post.author?.name}</div>
              <p>{post.date}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const BlogCardDefaults: BlogCardProps = {
  image: <Image className="size-full" src={img} alt="nagoya" />,
  category: "Category",
  title: "Blog title heading will go here or some really obnoxiously long tile",
  slug: "",
  excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  author: {
    image: <Image className="size-full" src={imgAuthor} alt="author" />,
    name: "Nadzirah"
  },
  date: "11 Jan 2022 "
};
