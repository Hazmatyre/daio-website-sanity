import { Button } from "@/components/ui/button";
import type { ButtonProps } from "@relume_io/relume-ui";
import Image from "next/image";
import img from "/images/mybotany-pongamia/header5-pongamia-seeds.webp"
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Link from "next/link";
import { cn } from "@/lib/utils";


type Props = {
  heading: string;
  subtitle?: string;
  description: React.ReactNode;
};

type postItem = {
  image: React.ReactNode
  category?: string
  title: string
  excerpt: string
  author?: {
    image: React.ReactNode
    name: string
  }
}

export type BlogHeader1Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const BlogHeader1 = (props: BlogHeader1Props) => {
  const { heading, subtitle, description } = {
    ...BlogHeader1Defaults,
    ...props,
  } as Props;
  return (
    <section className={cn("px-[5%] py-16 md:py-24 lg:py-28")}>
      <div className="container">
      </div>
    </section>
  );
};

export const BlogHeader1Defaults: BlogHeader1Props = {
  heading: "Harvest bio-fuel from trees that heal your land.",
  subtitle: "MyBotany Pongamia Pinnata",
  description:
    "The cleanest source of bio-fuel comes from the seeds of the versatile Pongamia Pinnata tree. We plant them non-invasively on your land with little nutritional maintenance to improve and restore infertile and damaged soil no matter how extreme environmental conditions may be.",
};
