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
import logo from '/public/daio-logo-green.svg'
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';

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

  return (
    <nav className="flex items-center justify-between border-b-0 border-border-primary bg-background-primary px-[5%] min-h-20 basis-0 grow">
      <Sheet>
        <SheetTrigger asChild>
          <div className="basis-0 grow md:basis-auto md:grow-0">
            <Button
              className="flex size-12 flex-col justify-center md:hidden bg-transparent hover:bg-transparent relative -left-4 "
            >
              {Array(3)
                .fill(null)
                .map((_, index) => (
                  <span key={index} className="my-[3px] h-0.5 w-6 bg-black md:hidden" />
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
              />
            </div>
          </SheetHeader>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Pongamia</li>
            </ul>
        </SheetContent>
      </Sheet>
      <ul className="hidden md:flex basis-0 grow gap-x-5">
        <a href="#">
          <li>Home</li>
        </a>
        <a href="#">
          <li>Pongamia</li>
        </a>
        <a href="#">
          <li>About</li>
        </a>
      </ul>
      <div className="">
        <Image
          src={logo}
          alt="DAIO International Logo"
          className="h-6 w-auto"
        />
      </div>
      <div className="basis-0 grow flex justify-end">
        <Button variant={"outline"} className="">
          Contact
        </Button>
      </div>
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

function ProfileForm({ className }: React.ComponentProps<"form">) {
  return (
    <form className={cn("grid items-start gap-4", className)}>
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" defaultValue="shadcn@example.com" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="username">Username</Label>
        <Input id="username" defaultValue="@shadcn" />
      </div>
      <Button type="submit">Save changes</Button>
    </form>
  )
}

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
