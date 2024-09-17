import { Button } from "@/components/ui/button";
import type { ButtonProps } from "@relume_io/relume-ui";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Link from "next/link";
import { cn } from "@/lib/utils";
import img from "/images/mybio-bio-toilet/homepage-daio-international-nagoya.webp"
import imgAuthor from "/images/placeholder.png"


type Props = {
  subtitle?: string;
  heading: string;
  description: React.ReactNode;
  postItem: PostItem
};

type PostItem = {
  image: React.ReactNode
  category?: string
  title: string
  excerpt: string
  author?: {
    image: React.ReactNode
    name: string
  }
  tags?: string[]
  date: string
}

export type BlogHeader1Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const BlogHeader1 = (props: BlogHeader1Props) => {
  const { heading, subtitle, description, postItem } = {
    ...BlogHeader1Defaults,
    ...props,
  } as Props;
  return (
    <section className={cn("px-[5%] py-16 md:py-24 lg:py-28")}>
      <div className="container">
        {/* header */}
        <div>
          <p>{subtitle}</p>
          <h1>{heading}</h1>
          <p>{description}</p>
        </div>
        {/* card */}
        <div className="rounded-lg bg-white flex flex-col">
          <div className="">
            {postItem.image}
          </div>
          <div className="">

          </div>
        </div>
      </div>
    </section>
  );
};

export const BlogHeader1Defaults: BlogHeader1Props = {
  subtitle: "Blog",
  heading: "DAIO Blog & Newsroom",
  description: "Learn how to save the environment with DAIO.",
  postItem: {
    image: <Image className="size-full" src={img} alt="nagoya" />,
    category: "Category",
    title: "Blog title heading will go here or some really obnoxiously long tile",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    author: {
      image: <Image className="size-full" src={imgAuthor} alt="author" />,
      name: "Nadzirah"
    },
    date: "11 Jan 2022 "
  }
};
