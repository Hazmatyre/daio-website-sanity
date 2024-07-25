"use client";

import React, { useState, useEffect, ComponentProps } from "react";
import type { CarouselApi } from "@relume_io/relume-ui";
import clsx from "clsx";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselProgress } from "../ui/carousel";
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures'
import imgSlider1 from '/images/img-bio-toilet-2068.jpg'
import imgSlider2 from '/images/homepageSlide-bio-fertiliser-exported-2134.png'
import imgSlider3 from '/images/homepageSlide-pongamia-seed.jpg'

import Image from "next/image";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";

type SlideProps = {
  // containerClasses?: string
  // img: React.ReactNode
  // gradient?: React.ReactNode
  cardContent: React.ReactNode
};

type Props = {
  headingTag: "h1" | "h2"
  heading: string;
  description: string;
  slides: SlideProps[];
};

export type Gallery17Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Gallery17 = (props: Gallery17Props) => {
  const { heading, description, slides, headingTag } = {
    ...Gallery17Defaults,
    ...props,
  } as Props;

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const FADE_UP_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "tween" } },
  };

  return (
    <section className="">
      <div className="px-[5%] pt-14 md:pt-16 lg:pt-16 xl:pt-28">
        <div className="container">
          <div className=" text-left  flex flex-col items-start">
            {headingTag === "h1"
              ? <h1 className="mb-5 type-mobile-h2 font-bold md:mb-6 md:type-desktop-h2">{heading}</h1>
              : <h2 className="mb-5 type-mobile-h2 font-bold md:mb-6 md:type-desktop-h2">{heading}</h2>
            }
            <p className="type-medium max-w-md">{description}</p>
          </div>

        </div>
      </div>
      {/* for all available options: https://www.embla-carousel.com/api/options/ */}
      <Carousel
        setApi={setApi}
        opts={{
          loop: false,
          align: "start",

          breakpoints: {
            // '(min-width: 1280px)': { active: false },
            // '(min-width: 768px)': { slidesToScroll: 1 },
          },
          dragFree: false,
          skipSnaps: true,
        }}
        plugins={[WheelGesturesPlugin()]}
        className="relative mt-12 md:mt-18 lg:mt-20 mb-14 md:mb-16 lg:mb-16 xl:mb-28"
      >
        <div className="relative ">
          <motion.div
            initial="hidden"
            animate="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            <CarouselContent className="ml-2 items-start /xl:justify-center transition-[height] duration-75 ease-in ">
              {slides.map((slide, index) => (
                <CarouselItem key={index} className="px-3 basis-auto min-w-0 max-w-[90%] md:py-6 md:px-5 no-overflow-anchoring">
                  <motion.div
                    className={cn("w-full overflow-hidden rounded-lg relative z-10 shadow-xxlarge")}
                    variants={FADE_UP_ANIMATION_VARIANTS}
                  >
                    {/* {slide.img} */}
                    {/* {slide.gradient} */}
                    {slide.cardContent}
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </motion.div>
        </div>
        <div className="mt-8 flex items-center justify-end px-[5%] md:mt-[46px] gap-x-2 container /xl:hidden relative z-10">
          {/* <CarouselProgress></CarouselProgress> */}
          <CarouselPrevious className="bg-white flex md:size-12 lg:size-14" />
          <CarouselNext className="bg-white flex md:size-12 lg:size-14" />
        </div>
      </Carousel>
    </section>
  );
};

// Sizes
// 260 x 505 - done - 75,73%
// md: 344 x 608
// lg: 372 x 680
// xxl: 405 x 740

export const Gallery17Defaults: Gallery17Props = {
  heading: "Engineered for Mother Nature.",
  description: "Do your part for the environment with our eco-friendly products. We help to reduce human waste pollution and provide sustainable low-cost fuel alternatives.",
  slides: [
    {
      cardContent:
        <Image
          sizes="(max-width: 768px) 69vw, 33vw"
          src={imgSlider1}
          alt={"Picture of woman standing next to DAIO International Bio-Toilet urinal."}
          className="size-full object-fit"
          priority
          quality={5}
        />
    },
    {
      cardContent:
        <Image
          sizes="(max-width: 768px) 69vw, 33vw"
          src={imgSlider1}
          alt={"Picture of woman standing next to DAIO International Bio-Toilet urinal."}
          className="size-full object-fit"
          priority
          quality={5}
        />
    },
    {
      cardContent:
        <Image
          sizes="(max-width: 768px) 69vw, 33vw"
          src={imgSlider1}
          alt={"Picture of woman standing next to DAIO International Bio-Toilet urinal."}
          className="size-full object-fit"
          priority
          quality={5}
        />
    },
  ],
};

Gallery17.displayName = "Gallery17";
