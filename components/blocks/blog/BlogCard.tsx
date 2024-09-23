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
  excerpt: string | null
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
  };

  const postDate = new Intl.DateTimeFormat('en-GB', {
    day: "numeric",
    month: "short",
    year: "numeric"
  }
  ).format(Date.parse(post.date || ""))

  return (
    <div className={cn("@container overflow-hidden shadow-xxlarge rounded-lg bg-white border border-border", post.className)}>
      <div className="size-full  flex flex-col  @xl:flex-row">
        {/* // * IMAGE */}
        <Link href={"/blog/post/" + post.slug} className="relative aspect-video block shrink-0 grow-0 md:aspect-[656/500] @xl:basis-1/2">
          {post.image}
        </Link>
        {/* // * CONTENT */}
        <div className="py-7 px-[5%] @md:py-10 @md:px-10 @xl:basis-1/2 flex flex-col gap-y-6 h-full @xl:h-auto">

          {/* //* CATEGORY + TITLE + EXCERPT */}
          <div>
            {post.category ?
              <Link className="" href={"blog/category/" + post.category.slug?.current}>
                <p className="type-small font-semibold">{post.category.title}</p>
              </Link>
              :
              <p className="h-6"></p>
            }
            <Link href={"/blog/post/" + post.slug}>
              <h2 className="mt-2 type-mobile-h4 md:type-desktop-h4">{post.title}</h2>
            </Link>
            <p className="line-clamp-3 @xl:line-clamp-6 mt-2 @5xl:line-clamp-[10] type-regular">{post.excerpt}</p>
            <Link className="mt-2 block font-semibold underline type-regular" href={"/blog/post/" + post.slug}>Read more</Link>
          </div>

          {/* //* AUTHOR + DATE + TAGS */}
          <div className="flex mt-auto gap-x-4">
            {post.author && <div className="relative size-12 aspect-square rounded-lg overflow-hidden">
              {post.author?.image}
            </div>}
            <div>
              <div className="type-small font-semibold">{post.author?.name}</div>
              <p className="type-regular">{postDate}</p>
            </div>
            {/* {post.tags &&
              <div className="basis-full">
                {post.tags.map((tag, index) => {
                  return <Link key={index} href={tag.slug?.current || "#"}>{tag.title}</Link>
                })}
              </div>
            } */}
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
