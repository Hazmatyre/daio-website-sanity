import { Button } from "@/components/ui/button";
import type { ButtonProps } from "@relume_io/relume-ui";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Link from "next/link";
import { cn } from "@/lib/utils";
import img from "/images/mybio-bio-toilet/homepage-daio-international-nagoya.webp"
import imgAuthor from "/images/placeholder.png"
import { Slug } from "@/sanity.types";
import { BlogCard } from "./BlogCard";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";


type Props = {
  posts: React.ComponentPropsWithoutRef<typeof BlogCard>[]
};

export type BlogListProps = React.ComponentPropsWithoutRef<"div"> & Partial<Props>;

export const Blog7List = (props: BlogListProps) => {
  const { posts } = {
    ...BlogListDefaults,
    ...props,
  };
  return (
    <section id="blog-list" className={cn("px-[5%] md:px-16 pt-10 pb-16 md:pt-14 md:pb-24 lg:py-28 relative")}>
      <div className="container">
        {/* // ? LIST */}
        <div className="gap-y-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:gap-x-5 md:gap-y-12 xl:gap-x-8 xl:gap-y-16">
          {posts?.map((post, index) => {
            return <BlogCard key={index} {...post}></BlogCard>
          })}
        </div>
      </div>
      {/* // ? PAGINATION */}
      <Pagination className=" mt-5 md:mt-8 sticky bottom-5 bg-brand-50 border border-border p-1 rounded-lg drop-shadow-2xl w-fit text-brand-900">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </section>
  );
};

export const BlogListDefaults: BlogListProps = {

};
