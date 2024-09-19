"use client"
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
  categories?: Array<{
    title: string | null;
    slug: Slug | null;
  }> | null;
  activeSlug: string | null
};

export type BlogCategoriesProps = React.ComponentPropsWithoutRef<"div"> & Partial<Props>;

export const BlogCategories = (props: BlogCategoriesProps) => {
  const { categories, activeSlug } = {
    ...BlogListDefaults,
    ...props,
  };

  console.log(categories)

  return (
    <div className="px-[5%] md:px-16 overflow-x-visible">
      <div className="container">
        <NavigationMenu className="!justify-start overflow-x-scroll py-2" >
          <NavigationMenuList>
            {categories?.map((category, index) => (
              <NavigationMenuItem key={index}>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink active={activeSlug === category.slug} className={navigationMenuTriggerStyle()}>
                    <span className="type-regular">{category.title}</span>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};

export const BlogListDefaults: BlogCategoriesProps = {
  categories: [
    {
      title: "All News",
      slug: { _type: "slug", current: "blog/all-news" }
    }
  ],
  activeSlug: undefined
};


