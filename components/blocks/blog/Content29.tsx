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
import { PostQueryResult } from "@/sanity.types";
import PortableText from "@/app/(site)/portable-text";
import { PortableTextBlock } from "next-sanity";
import post from '@/sanity/schemas/documents/post';
import { urlForImage } from "@/sanity/lib/utils";
import { format } from "date-fns";


type Props = {
  post: PostQueryResult
}

export type Content29Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>

export const Content29 = (props: Content29Props) => {
  const { post } = {
    ...props,
  };
  return (
    <section className={cn("px-[5%] md:px-16 bg-white border-t border-b border-border")}>
      <div className="container md:max-w-lg py-16">

        {post?.content?.length && (
          <PortableText
            className="mx-auto max-w-2xl"
            value={post.content as PortableTextBlock[]}
          />
        )}

        <p className="font-semibold mb-4 mt-8 md:mt-30">Share this post</p>
        <ul className="flex gap-5 mb-8 md:mb-12">
          <li>share</li>
          <li>share</li>
          <li>share</li>
          <li>share</li>
        </ul>

        <hr className="mb-8 md:mb-12" />

        <div className="flex gap-4">
          {post?.author && <div className="relative size-12 aspect-square rounded-lg overflow-hidden">
            <Image className="size-full" fill src={urlForImage(post.author?.picture)?.url() as string} alt={urlForImage(post.author?.name)?.url() as string} />
          </div>}
          <div>
            <div className="type-small font-semibold">{post?.author?.name}</div>
            {post?.date && <time className="type-regular" dateTime={post?.date}>
              {format(new Date(post?.date), "dd	LLL yyyy")}
            </time>}
          </div>
        </div>

      </div>
    </section>
  );
};
