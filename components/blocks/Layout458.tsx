"use client";

import { Button } from "../ui/button";
import clsx from "clsx";
import { RxChevronRight } from "react-icons/rx";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import imgPlaceholder from "/images/placeholder.png"
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type ImageProps = {
  src: string | StaticImport;
  alt?: string;
};

type Feature = {
  image: ImageProps;
  heading: string;
  description: React.ReactNode;
};

type Props = HTMLDivElement & {
  tagline: string;
  heading: string;
  description: string;
  buttons: React.ReactNode;
  features: Feature[];
};

export type Layout458Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Layout458 = (props: Layout458Props) => {
  const { tagline, heading, description, buttons, features, className } = {
    ...Layout458Defaults,
    ...props,
  };

  const FADE_UP_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "tween" } },
  };

  return (
    <section className={cn("overflow-hidden px-[5%] md:px-16 py-16 md:py-24 lg:py-28", className)}>
      <div className="container">
        <div className="mb-12 grid auto-cols-fr grid-cols-1 items-start gap-x-5 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-x-12 lg:mb-20 lg:gap-x-20 lg:gap-y-20">
          <div className="flex h-full flex-col">
            <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
            <h2 className="type-mobile-h1 md:type-desktop-h2">{heading}</h2>
          </div>
          <div className="mx-[7.5%] flex flex-col justify-end md:mt-40">
            <p className="type-medium font-medium">{description}</p>
            <div className="mt-6 flex items-center gap-x-4 md:mt-8 flex-wrap gap-4">
              {buttons}
            </div>
          </div>
        </div>
        <motion.div
          className="grid auto-cols-fr grid-cols-1 items-start gap-x-12 gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-8 lg:gap-x-12 lg:gap-y-12"
          initial="hidden"
          // animate="show"
          viewport={{ once: true }}
          whileInView="show"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {features?.map((feature, index) => (
            <motion.div
              key={index}
              className={clsx("w-full", {
                "md:mt-[25%]": index === 1,
                "md:mt-[50%]": index === 2,
              })}
              variants={FADE_UP_ANIMATION_VARIANTS}
            >
              <div className="mb-6 w-full md:mb-8 rounded-lg overflow-hidden">
                <Image
                  src={feature.image.src}
                  alt={feature.image.alt || ""}
                  className="aspect-[3/2] w-full object-cover"
                  sizes="(max-width: 768px) 89vw, 27vw"
                  quality={50}
                />
              </div>
              <h3 className="mb-3 md:mb-4 type-mobile-h4 xl:type-desktop-h4">
                {feature.heading}
              </h3>
              <p className="type-regular">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export const Layout458Defaults: Layout458Props = {
  tagline: "Tagline",
  heading: "Medium length section heading goes here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  buttons: [
    <a key={1}><Button>Partner With Us</Button></a>,
    <a key={2}><Button className="dark">Pongamia In Malaysia</Button></a>
  ],

  features: [
    {
      image: {
        src: imgPlaceholder,
        alt: "Placeholder image 1",
      },
      heading: "Medium length section heading goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
    },
    {
      image: {
        src: imgPlaceholder,
        alt: "Placeholder image 2",
      },
      heading: "Medium length section heading goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
    },
    {
      image: {
        src: imgPlaceholder,
        alt: "Placeholder image 3",
      },
      heading: "Medium length section heading goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
    },
  ],
};
