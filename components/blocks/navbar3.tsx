"use client";

import { useEffect, useState } from "react";
import type { ButtonProps } from "@relume_io/relume-ui";
import { AnimatePresence, motion } from "framer-motion";
import { RxChevronDown } from "react-icons/rx";
import { Button } from "../ui/button";
import { useMediaQuery } from 'react-responsive'
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "../ui/drawer";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";

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

  const [open, setOpen] = useState(false)
  const isDesktop = useMediaQuery({
    query: '(min-width: 992px)'
  })

  return (
    <nav className="flex items-center justify-between border-b border-border-primary bg-background-primary px-[5%] md:min-h-18">
      {!isDesktop &&
        <Drawer open={open} onOpenChange={setOpen}>
          <DrawerTrigger asChild>
            <Button
              className="flex size-12 flex-col justify-center lg:hidden bg-transparent hover:bg-transparent"
            >
              {Array(3)
                .fill(null)
                .map((_, index) => (
                  <span key={index} className="my-[3px] h-0.5 w-6 bg-black lg:hidden" />
                ))}
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader className="text-left">
              <DrawerTitle>Edit profile</DrawerTitle>
              <DrawerDescription>
                Make changes to your profile here. Click save when you&apos;re done.
              </DrawerDescription>
            </DrawerHeader>
            <ProfileForm className="px-4" />
            <DrawerFooter className="pt-2">
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      }

    </nav>
  );
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
