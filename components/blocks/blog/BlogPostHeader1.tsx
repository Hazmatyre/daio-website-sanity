import { Button } from "@/components/ui/button";
import type { ButtonProps } from "@relume_io/relume-ui";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Link from "next/link";
import { cn } from "@/lib/utils";
import img from "/images/mybio-bio-toilet/homepage-daio-international-nagoya.webp"
import imgAuthor from "/images/placeholder.png"
import { BlogCard } from "./BlogCard";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Slug } from "@/sanity.types";
import { title } from '../../../sanity/lib/demo';
import { format } from "date-fns";


type Props = {
  image: React.ReactNode
  category?: {
    title: string | null
    slug: Slug | null
  }
  heading: string;
  description: React.ReactNode;
  author?: {
    image: React.ReactNode
    name: string
  }
  date: string
};

export type BlogPostHeader1Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const BlogPostHeader1 = (props: BlogPostHeader1Props) => {
  const { heading, category, description, image, author, date } = {
    ...BlogPostHeader1Defaults,
    ...props,
  } as Props;

  return (
    <section className={cn("px-[5%] md:px-16 py-16 md:py-28")}>
      <div className="container md:max-w-lg">

        {/* breadcrumb */}
        <Breadcrumb className="type-regular">
          <BreadcrumbList>
            <BreadcrumbItem>
              {/* <BreadcrumbLink asChild>
                {category
                  ? <Link className="underline underline-offset-2" href={"/blog"}>Blog</Link>
                  : <Link className="underline underline-offset-2" href={"/blog"}>Back to Blog Home</Link>
                }
              </BreadcrumbLink> */}
              <BreadcrumbLink asChild>
                <Link className="underline underline-offset-2" href={"/blog"}>Back to Blog Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            {/* {category &&
              <>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link className="underline underline-offset-2" href={"/blog/category/" + category?.slug?.current}>{category?.title}</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </>
            } */}
          </BreadcrumbList>
        </Breadcrumb>

        {/* Title */}
        <h1 className="type-mobile-h2 md:type-desktop-h2 mt-6">{heading}</h1>

        {/* author info */}
        {/* //* AUTHOR + DATE + SHARE */}
        <div className="mt-8 md:mt-12 flex justify-between md:items-center gap-y-4 max-md:flex-col">
          <div className="flex gap-x-4">
            {author?.name &&
              <div className="relative size-12 aspect-square rounded-lg overflow-hidden">
                {author?.image}
              </div>
            }
            <div>
              {author?.name && <div className="type-small font-semibold">{author?.name}</div>}
              <time className="type-regular" dateTime={date}>
                {format(new Date(date), "dd	LLL yyyy")}
              </time>
            </div>
            {/* {post.tags &&
                <div className="basis-full">
                  {post.tags.map((tag, index) => {
                    return <Link key={index} href={tag.slug?.current || "#"}>{tag.title}</Link>
                  })}
                </div>
              } */}
          </div>
          <ul className="flex gap-5">
            <li>share</li>
            <li>share</li>
            <li>share</li>
            <li>share</li>
          </ul>
        </div>

        {/* Image */}
        <div className="relative block overflow-hidden mt-12">
          {image}
        </div>

      </div>
    </section>
  );
};

export const BlogPostHeader1Defaults: BlogPostHeader1Props = {
  image: <Image className="size-full" sizes="(max-width: 1023px) 100vw, 40vw" src={img} fill alt="nagoya" />,
  category: {
    title: "some category",
    slug: { _type: "slug", current: "category-slug" }
  },
  heading: "Some really long default blog title should go here.",
  description: "Learn how to save the environment with DAIO.",
  author: {
    image: <Image className="size-full" fill src={imgAuthor} alt="author" />,
    name: "Nadzirah"
  },
  date: "11 Jan 2022 "
};
