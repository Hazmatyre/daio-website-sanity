import { Button } from "../ui/button";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { RxChevronRight } from "react-icons/rx";
import Link from "next/link";

type Props = {
  tagline: string;
  heading: string;
  buttons: React.ReactNode[];
};

export type Layout484Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Layout484 = (props: Layout484Props) => {
  const { tagline, heading, buttons } = {
    ...Layout484Defaults,
    ...props,
  } as Props;

  return (
    <section id="relume" className="overflow-hidden px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg">
        <h1 className="type-regular font-semibold">{tagline}</h1>
        <h2 className="type-desktop-h3 tracking-tighter">
          {heading}
        </h2>
        <div className="mt-6 flex items-center gap-x-4 md:mt-8">
          {buttons}
        </div>
      </div>
    </section>
  );
};

export const Layout484Defaults: Layout484Props = {
  tagline: "About Us",
  heading:
    "We delight our customers with how easy it is to preserve the planet without sacrificing financial success or personal convenience.",
  buttons: [
    <Link href={"#"} key={1}><Button size={"lg"}>Contact Us</Button></Link>,
    <Link href={"#"} key={2}><Button variant={"secondary"} size={"lg"}>Our Team</Button></Link>,

  ],
};
