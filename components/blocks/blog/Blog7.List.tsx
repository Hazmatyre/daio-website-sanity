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
    <section id="blog-list" className={cn("px-[5%] py-16 md:py-24 lg:py-28")}>
      <div className="container">
        {/* // ? CATEGORY SELECTOR */}
        <Tabs defaultValue="account" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
          <TabsContent value="account">Make changes to your account here.</TabsContent>
          <TabsContent value="password">Change your password here.</TabsContent>
        </Tabs>
        {/* // ? LIST */}
        <div className="md:grid grid-cols-2 lg:grid-cols-3 md:gap-4">
          {posts?.map((post, index) => {
            return <BlogCard key={index} {...post}></BlogCard>
          })}
        </div>
      </div>
      {/* // ? PAGINATION */}
      <Pagination>
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
            <PaginationEllipsis />
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
