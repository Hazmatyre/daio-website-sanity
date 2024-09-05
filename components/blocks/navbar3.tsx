"use client";

import { useEffect, useState } from "react";
import type { ButtonProps } from "@relume_io/relume-ui";
import { AnimatePresence, motion } from "framer-motion";
import { RxChevronDown } from "react-icons/rx";
import { Button } from "../ui/button";
import { useMediaQuery } from 'react-responsive'
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerPortal, DrawerTitle, DrawerTrigger } from "../ui/drawer";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import Image from "next/image";
import logo from '/images/daio-logo-green.svg'
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import Link from "next/link";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "../ui/navigation-menu";
import React from "react";

type ImageProps = {
  url?: string;
  src: string;
  alt?: string;
};

type NavLink = {
  url: string;
  title: string;
  subMenuLinks?: NavLink[];
};

type Props = {
  logo: ImageProps;
  navLinks: NavLink[];
  buttons: ButtonProps[];
};

export type Navbar3Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Navbar3 = (props: Navbar3Props) => {
  const wait = () => new Promise((resolve) => setTimeout(resolve, 1000));

  const [open, setOpen] = React.useState(false);

  return (
    <nav className="flex items-center justify-between border-b-0 border-border-primary bg-background-primary px-[5%] min-h-20 basis-0 grow">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild className="md:hidden">
          <div className="basis-0 grow md:basis-auto md:grow-0">
            <Button
              className="flex size-12 flex-col justify-center md:hidden bg-transparent hover:bg-transparent relative -left-4 border-0"
            >
              {Array(3)
                .fill(null)
                .map((_, index) => (
                  <span key={index} className=" no-overflow-anchoring my-[3px] h-0.5 w-6 bg-black md:hidden" />
                ))}
            </Button>
          </div>
        </SheetTrigger>
        <SheetContent side={"left"} title="Navigation Menu">
          <VisuallyHidden.Root>
            <SheetTitle>Navigation Menu</SheetTitle>
            <SheetDescription>Mobile-only navigation menu</SheetDescription>
          </VisuallyHidden.Root>
          <SheetHeader className="flex flex-col gap-y-5">
            <div className="flex">
              <Image
                src={logo}
                alt="DAIO International Logo"
                className="h-6 w-auto"
                priority
              />
            </div>
          </SheetHeader>
          <ul className="flex flex-col gap-y-8 mt-8 tracking-tighter">
            <li
              onClick={() => { setOpen(false) }}
              className="type-mobile-h4"
            >
              <Link href="/">Home</Link>
            </li>
            <li
              onClick={() => { setOpen(false) }}
              className="type-mobile-h4">
              <Link href="/about">About Us</Link>
            </li>
            <li
              onClick={() => { setOpen(false) }}
              className="type-mobile-h4">
              <Link href="/mybio/biotoilet">MyBio Bio-Toilet</Link>
            </li>
            <li
              onClick={() => { setOpen(false) }}
              className="type-mobile-h4">
              <Link href="/mybotany/pongamia">MyBotany Pongamia</Link>
            </li>
          </ul>
        </SheetContent>
      </Sheet>
      <NavigationMenu className="hidden md:flex ">
        <NavigationMenuList>

          <NavigationMenuItem>
            <Link href="/about" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                About Us
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>MyBio</NavigationMenuTrigger>
            <NavigationMenuContent className="shadow-xxlarge">
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] /lg:grid-cols-[.75fr_1fr]">
                <ListItem href="/mybio/biotoilet" title="Bio-Toilet">
                  Zero sewage. Save water.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>MyBotany</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] /lg:grid-cols-[.75fr_1fr]">
                <ListItem
                  title={"Pongamia Plantation"}
                  href={"/mybotany/pongamia"}
                >
                  {"The most natural bio-fuel source from tree seeds through our reforestation initiative."}
                </ListItem>
                {/* {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))} */}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

        </NavigationMenuList>
      </NavigationMenu>
      {/* <ul className="hidden md:flex basis-0 grow gap-x-5">
        <li className="type-regular"><Link href="/about">About</Link></li>
        <Popover>
          <PopoverTrigger className="flex items-center">MyBio <RxChevronDown/></PopoverTrigger>
          <PopoverContent className="border-0 shadow-xxlarge bg-brand-900 text-brand-naplesYellow" align="start">
            <li className="type-regular list-none"><Link href="/mybio/biotoilet">MyBio Bio-Toilet</Link></li>
          </PopoverContent>
        </Popover>
        <a href="#">
          <li>MyBotany</li>
        </a>
      </ul> */}
      <a href="/" className="block">
        <Image
          src={logo}
          alt="DAIO International Logo"
          className="h-6 w-auto"
          priority
        />
      </a>
      <Link className="basis-0 grow flex justify-end block" href="/#contact-us">
        <Button variant={"outline"} className="">
          Contact
        </Button>
      </Link>
    </nav>
  )

  // if (!isDesktop) {
  //   return (
  //     <nav className="flex items-center justify-between border-b border-border-primary bg-background-primary px-[5%]">
  //       <>
  //         <Sheet>
  //           <SheetTrigger asChild>
  //             <Button
  //               className="flex size-12 flex-col justify-center lg:hidden bg-transparent hover:bg-transparent relative -left-4"
  //             >
  //               {Array(3)
  //                 .fill(null)
  //                 .map((_, index) => (
  //                   <span key={index} className="my-[3px] h-0.5 w-6 bg-black lg:hidden" />
  //                 ))}
  //             </Button>
  //           </SheetTrigger>

  //           <SheetContent side={"left"}>
  //             <SheetHeader className="flex flex-col gap-y-5">
  //               <div className="flex">
  //                 <Image
  //                   src={logo}
  //                   alt="DAIO International Logo"
  //                   className="h-6 w-auto"
  //                 />
  //               </div>
  //               <ul>
  //                 <li>Home</li>
  //                 <li>About</li>
  //                 <li>Pongamia</li>
  //               </ul>
  //             </SheetHeader>
  //           </SheetContent>
  //         </Sheet>
  //       </>
  //       <div className="">
  //         <Image
  //           src={logo}
  //           alt="DAIO International Logo"
  //           className="h-6"
  //         />
  //       </div>
  //       <Button variant={"outline"}>Contact</Button>
  //     </nav>
  //   );
  // } else if (isDesktop) {
  //   return (
  //     <nav className="flex items-center justify-between border-b border-border-primary bg-background-primary px-[5%]">
  //       <>
  //         <ul>
  //           <a href="#">
  //             <li>Home</li>
  //           </a>
  //           <a href="#">
  //             <li>Pongamia</li>
  //           </a>
  //           <a href="#">
  //             <li>About</li>
  //           </a>
  //         </ul>
  //       </>
  //       <div className="">
  //         <Image
  //           src={logo}
  //           alt="DAIO International Logo"
  //           className="h-6"
  //         />
  //       </div>
  //       <Button variant={"outline"}>Contact</Button>
  //     </nav>
  //   )
  // }

};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          href={props.href || "#"}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-brand-800 focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="type-regular font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

export const Navbar3Defaults: Navbar3Props = {
  logo: {
    url: "#",
    src: "https://relume-assets.s3.amazonaws.com/logo-image.svg",
    alt: "Logo image",
  },
  navLinks: [
    { title: "Link One", url: "#" },
    { title: "Link Two", url: "#" },
    {
      title: "Link Three",
      url: "#",
      subMenuLinks: [
        { title: "Link Four", url: "#" },
        { title: "Link Five", url: "#" },
        { title: "Link Six", url: "#" },
      ],
    },
  ],
  buttons: [
    {
      title: "Contact",
      size: "sm",
    },
  ],
};

Navbar3.displayName = "Navbar3";
