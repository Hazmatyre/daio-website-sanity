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
  containerClasses?: string
  img: React.ReactNode
  gradient?: React.ReactNode
  cardContent: React.ReactNode
};

type Props = {
  heading: string;
  description: string;
  slides: SlideProps[];
};

export type Gallery17Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Gallery17 = (props: Gallery17Props) => {
  const { heading, description, slides } = {
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
      <div className="px-[5%] py-14 md:py-16 lg:py-16">
        <div className="container">
          <div className="mb-12 text-center md:mb-18 lg:mb-20 flex flex-col items-center">
            <h2 className="mb-5 type-mobile-h2 font-bold md:mb-6 md:type-desktop-h2">{heading}</h2>
            <p className="type-regular md:type-medium font-medium max-w-md">{description}</p>
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
            '(min-width: 1280px)': { active: false },
            // '(min-width: 768px)': { slidesToScroll: 1 },
          },
          dragFree: false,
          skipSnaps: true,
        }}
        plugins={[WheelGesturesPlugin()]}
        className="relative pb-8 md:pb-16 xl:pb-24"
      >
        <div className="relative">
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
            <CarouselContent className="ml-2 xl:justify-center">
              {slides.map((slide, index) => (
                <CarouselItem key={index} className="px-3 basis-[284px] md:basis-[376px] md:py-6 lg:basis-[406px] xxl:basis-[405px] md:px-5 no-overflow-anchoring">
                  <motion.div
                    className={cn("w-full aspect-[9/16] overflow-hidden rounded-lg border relative z-10", slide.containerClasses)}
                    variants={FADE_UP_ANIMATION_VARIANTS}
                  >
                    {slide.img}
                    {slide.gradient}
                    {slide.cardContent}
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </motion.div>
        </div>
        <div className="mt-8 flex items-center justify-end px-[5%] md:mt-[46px] gap-x-2 container xl:hidden">
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
      img:
        <Image
          sizes="(max-width: 768px) 69vw, 33vw"
          src={imgSlider1}
          alt={"Picture of woman standing next to DAIO International Bio-Toilet urinal."}
          className="size-full absolute -z-20 object-cover object-bottom"
          priority
          quality={5}
        />,
      gradient:
        <div className="absolute -z-10 bg-gradient-to-b from-white size-full via-25% via-white to-35% rounded-3xl" />,
      cardContent:
        <div className="size-full py-6 px-5 flex flex-col ">
          <Button variant="chevron" size={'chevron'} className="font-sans w-fit">
            MyBio
          </Button>
          <h3 className="font-bold mt-2.5 type-mobile-h3 md:type-desktop-h2 xxl:type-desktop-h1 md:mt-5">Bio-Toilet</h3>
          <p className="font-bold type-tiny text-black md:type-regular">Zero sewage. Save Water.</p>
          <Link href="/#contact-us" className="block mt-auto w-fit self-end">
            <Button variant={"default"} className="mt-auto w-fit self-end">
              Contact Us
            </Button>
          </Link>
        </div>
    },
    {
      img:
        <Image
          sizes="(max-width: 768px) 69vw, 33vw"
          src={imgSlider2}
          alt={"DAIO International's bio-fertiliser made from urine. Picture shows two vials of before and after processing."}
          className="absolute bottom-1/4 -z-10 scale-150"
          quality={35}
          loading="eager"
        />,
      gradient:
        <div className="absolute -z-20 bg-gradient-to-b from-brand-700 to-brand-900  size-full rounded-3xl" />,
      cardContent:
        <div className="size-full py-6 px-5 flex flex-col ">
          <Button variant="chevron" size={'chevron'} className="font-sans w-fit">
            MyBio
          </Button>
          <h3 className="type-mobile-h3 md:mt-5 font-bold mt-2.5 text-brand-200 xxl:type-desktop-h1 md:type-desktop-h2">Bio-Fertiliser</h3>
          <p className="font-bold md:type-regular type-tiny text-background">Maintain soil fertility for generations with zero sewage</p>
          <Link href="/#contact-us" className="block mt-auto w-fit self-end">
            <Button variant={"default"} className="mt-auto w-fit self-end">
              Contact Us
            </Button>
          </Link>
        </div>
    },
    {
      img:
        <Image
        sizes="(max-width: 768px) 69vw, 33vw"
          src={imgSlider3}
          alt={"Picture of Pongamia Pinnata seeds by @rawjeev / Rawlife / Rajeev B - Own work, CC BY-SA 4.0"}
          className="size-full absolute -z-20 object-cover position object-bottom"
          quality={10}
          loading="eager"
        />,
      gradient:
        <div className="absolute -z-10 bg-gradient-to-b from-black to-65% via size-full rounded-3xl" />,
      cardContent:
        <div className="size-full py-6 px-5 flex flex-col ">
          <Button variant="chevron" size={'chevron'} className="font-sans w-fit">
            MyBotany
          </Button>
          <h3 className="font-bold md:mt-5 mt-2.5 type-mobile-h3 md:type-desktop-h2 xxl:type-desktop-h1 text-brand-naplesYellow">Pongamia Pinnata</h3>
          <p className="font-bold md:type-regular text-background type-tiny">The most natural bio-fuel source from tree seeds through our reforestation initiative.</p>
          <Link href="/#contact-us" className="block mt-auto w-fit self-end">
            <Button variant={"default"} className="mt-auto w-fit self-end">
              Contact Us
            </Button>
          </Link>
        </div>
    },
  ],
};

Gallery17.displayName = "Gallery17";
