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
    ...Blog7Defaults,
    ...props,
  } as Props;
  return (
    <section className={cn("px-[5%] md:px-16 pt-16 md:pt-24 lg:pt-28 pb-12 md:pb-20")}>
      <div className="container">
        {/* header */}
        <div>
          <p className="type-regular font-semibold">{subtitle}</p>
          <h1 className="type-mobile-h1 md:type-desktop-h1 mt-3 md:mt-4">{heading}</h1>
          <p className="type-regular md:type-medium mt-5 md:mt-6">{description}</p>
        </div>
        {/* card */}
        <BlogCard className="mt-12 md:mt-20" {...post} />
      </div>
    </section>
  );
};

export const Blog7Defaults: Blog7Props = {
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
