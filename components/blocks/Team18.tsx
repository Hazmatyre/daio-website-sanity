import { Button } from "../ui/button";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { RxChevronRight } from "react-icons/rx";
import Link from "next/link";
import img_kazyuki from "/images/about-us/IMG_0603.webp"
import img_thiaku from "/images/about-us/IMG_0604.jpg"
import { cn } from "@/lib/utils";

type Props = {
  tagline: string;
  heading: string;
  productChips?: string[]
  description: string
  people: {
    image: React.ReactNode
    name: string
    title?: string
    email?: string
    description?: string
  }[]
};

export type Team18Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Team18 = (props: Team18Props) => {
  const { tagline, heading, description, productChips, people } = {
    ...Team18Defaults,
    ...props,
  } as Props;

  return (
    <section id="relume" className={cn("overflow-hidden px-[5%] py-16 md:py-24 lg:py-28 text-brand-900", props.className)}>
      <div className="max-w-xxl mx-auto flex flex-col md:flex-row md:justify-between md:gap-x-10 xl:gap-x-20">
        {/* Description */}
        <div className="md:basis-1/2">
          <p className="type-regular font-semibold">{tagline}</p>
          <h2 className="type-mobile-h2 md:type-desktop-h2 mt-3">{heading}</h2>
          {productChips &&
            <div className="flex gap-x-2">
              {productChips.map((name, index) =>
                <Button key={index} variant="chevron" size={'chevron'} className="font-sans w-fit">
                  {name}
                </Button>
              )}
            </div>
          }
          <p className="type-medium mt-5">{description}</p>
        </div>
        {/* People */}
        <div className="max-md:mt-12 md:basis-1/2 flex flex-col gap-16">
          {people.map((person, index) => {
            return (
              <div key={index} className="lg:flex lg:gap-x-8">
                <div className="lg:basis-5/12 aspect-square rounded-lg overflow-hidden  border-2 border-border h-fit max-md:w-2/3 max-md:mx-auto">
                  {person.image}
                </div>
                <div className="basis-0">
                  <h3 className="mt-5 type-mobile-h3 md:type-desktop-h4">{person.name}</h3>
                  {person.title &&
                    <p className="type-regular font-bold">{person.title}</p>
                  }
                  {person.email &&
                    <a href={`mailto:${person.email}`} className="truncate mt-3 block type-regular underline">{person.email}</a>
                  }
                  {person.description &&
                    <p>{person.description}</p>
                  }
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export const Team18Defaults: Team18Props = {
  tagline: "About Us",
  heading:
    "Board of Directors",
  description: "From co-workers to good friends with decades of engineering experience, we build products engineered to give back to mother nature.",
  people: [
    {
      image: <Image
        src={img_kazyuki}
        alt="Portrait of Kazuyuki Iinuma"
        className="size-full object-cover"
      />,
      name: "Kazuyuki Iinuma",
      title: "PRESIDENT, CO-FOUNDER",
      email: "iinuma@daiointernational.com",
      // description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      image: <Image
        src={img_thiaku}
        alt="Portrait of Kazuyuki Iinuma"
        className="size-full object-cover"
      />,
      name: "Thiagku Marimuthu",
      title: "MANAGING DIRECTOR, CO-FOUNDER",
      email: "thiaku@daiointernational.com",
      // description: ""
    },
  ]
};
