import { Button } from "@/components/ui/button";
import type { ButtonProps } from "@relume_io/relume-ui";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Link from "next/link";
import { cn } from "@/lib/utils";
import img from "/images/mybio-bio-toilet/homepage-daio-international-nagoya.webp"
import imgAuthor from "/images/placeholder.png"
import { BlogCard } from "./BlogCard";


type Props = {
  subtitle?: string;
  heading: string;
  description: React.ReactNode;
  post: React.ComponentPropsWithoutRef<typeof BlogCard>
};

export type Blog7Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Blog7 = (props: Blog7Props) => {
  const { heading, subtitle, description, post } = {
    ...BlogHeader1Defaults,
    ...props,
  } as Props;
  return (
    <section className={cn("px-[5%] md:px-16 py-16 md:py-24 lg:py-28")}>
      <div className="container">
        {/* header */}
        <div>
          <p>{subtitle}</p>
          <h1>{heading}</h1>
          <p>{description}</p>
        </div>
        {/* card */}
        <BlogCard {...post} />
      </div>
    </section>
  );
};

export const BlogHeader1Defaults: Blog7Props = {
  subtitle: "Blog",
  heading: "DAIO Blog & Newsroom",
  description: "Learn how to save the environment with DAIO.",
  post: {
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
  }
};
