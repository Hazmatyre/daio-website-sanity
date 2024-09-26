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
  currentPage: number
  pages: number
};

export type BlogListProps = React.ComponentPropsWithoutRef<"div"> & Partial<Props>;

export const Blog7List = (props: BlogListProps) => {
  const { posts, currentPage = 1, pages = 1 } = {
    ...BlogListDefaults,
    ...props,
  };

  return (
    <section id="blog-list" className={cn("px-[5%] md:px-16 pt-10 pb-16 md:pt-14 md:pb-24 lg:pt-14 lg:pb-28 relative")}>
      <div className="container">
        {/* // ? LIST */}
        <div className="gap-y-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:gap-x-5 md:gap-y-12 xl:gap-x-8 xl:gap-y-16">
          {posts?.map((post, index) => {
            return <BlogCard key={index} {...post}></BlogCard>
          })}
        </div>
      </div>
      {/* // ? PAGINATION */}
      <Pagination className="hover:scale-110 transition-transform mt-5 md:mt-8 sticky bottom-5 bg-brand-50 border border-border p-1 rounded-lg drop-shadow-2xl w-fit">
        <PaginationContent>

          {/* //* PREVIOUS BUTTON */}
          {/* if at start, disable. */}
          {currentPage > 1 &&
            <PaginationItem>
              <PaginationPrevious
                isActive={currentPage > 1}
                href={"/blog/"+(currentPage - 1) + "#blog-list"}
                className=""
              />
            </PaginationItem>
          }

          {/* // * PREVIOUS PAGE */}
          {/* what happens if we're at the start? */}
          {/* we shouldn't display this. */}
          {currentPage > 1 &&
            <PaginationItem>
              <PaginationLink
                href={"/blog/"+(currentPage - 1) + "#blog-list"}
              >
                {currentPage - 1}
              </PaginationLink>
            </PaginationItem>
          }

          {/* what happens if we're at the end? */}
          {/* we should display one more page */}
          {/* we shouldn't display this. */}
          {currentPage > 1 && currentPage + 1 <= pages &&
            <PaginationItem>
              <PaginationLink
                href={"/blog/"+(currentPage - 1) + "#blog-list"}
              >
                {currentPage - 1}
              </PaginationLink>
            </PaginationItem>
          }

          {/* // * CURRENT PAGE */}
          <PaginationItem>
            <PaginationLink
              href={"/blog/"+(currentPage) + "#blog-list"}
              isActive
            >
              {currentPage}
            </PaginationLink>
          </PaginationItem>

          {/* // * NEXT PAGE */}

          {/* normal */}
          {/* do no display if we hit the cap */}
          {currentPage + 1 <= pages &&
            <PaginationItem>
              <PaginationLink
                href={"/blog/"+(currentPage + 1) + "#blog-list"}
              >
                {currentPage + 1}
              </PaginationLink>
            </PaginationItem>
          }

          {/* what happens if we're at the start? */}
          {/* we should display one more page */}
          {/* do not display if we've hit the cap */}
          {(currentPage === 1) && (currentPage + 2 <= pages) &&
            <PaginationItem>
              <PaginationLink 
              href={"/blog/"+(currentPage + 2) + "#blog-list"}
              >
                {currentPage + 2}
              </PaginationLink>
            </PaginationItem>
          }

          {/* //* NEXT BUTTON */}
          {currentPage + 1 <= pages &&
            <PaginationItem>
              <PaginationNext
                isActive={currentPage + 1 <= pages}
                href={"/blog/"+(currentPage + 1) + "#blog-list"}
                className=""
              />
            </PaginationItem>
          }

        </PaginationContent>
      </Pagination>
    </section >
  );
};

export const BlogListDefaults: BlogListProps = {
  currentPage: 1,
  pages: 1,
}
