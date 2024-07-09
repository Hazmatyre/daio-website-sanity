"use client";

import React, { useState, useEffect, ComponentProps } from "react";
import type { CarouselApi } from "@relume_io/relume-ui";
import clsx from "clsx";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselProgress } from "../ui/carousel";
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures'
import imgSlider1 from '/public/img-bio-toilet-2068.jpg'
import imgSlider2 from '/public/homepageSlide-bio-fertiliser-exported-2134.png'
import imgSlider3 from '/public/homepageSlide-pongamia.jpg'
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

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


  return (
    <section className="">
      <div className="px-[5%] py-14 md:py-16 lg:py-16">
        <div className="container">
          <div className="mb-12 text-center md:mb-18 lg:mb-20 flex flex-col items-center">
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h2>
            <p className="md:text-md max-w-md">{description}</p>
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
          <CarouselContent className="ml-2 xl:justify-center">
            {slides.map((slide, index) => (
              <CarouselItem key={index} className="px-3 basis-[284px] md:basis-[376px] lg:basis-[406px] xxl:basis-[405px] md:px-4">
                <div className={cn("w-full aspect-[9/16] overflow-hidden rounded-lg border relative z-10", slide.containerClasses)}>
                  {slide.img}
                  {slide.gradient}
                  {/* Card Content */}
                  {/* <div className="size-full py-6 px-5 flex flex-col ">
                    {slide.chevron}
                    <h1 className="font-serif text-4xl font-bold mt-2.5 leading-tight">Bio-Toilet</h1>
                    <p className="font-extrabold text-xs text-black">Zero sewage. Save Water.</p>
                    <Button variant={"default"} className="mt-auto w-fit self-end">
                      Coming Soon
                    </Button>
                  </div> */}
                  {slide.cardContent}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
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
          src={imgSlider1}
          alt={"Some alt text"}
          className="size-full absolute -z-20 object-cover object-bottom"
          width={405}
        />,
      gradient:
        <div className="absolute -z-10 bg-gradient-to-b from-white size-full via-25% via-white to-35% rounded-3xl" />,
      cardContent:
        <div className="size-full py-6 px-5 flex flex-col ">
          <Button variant="chevron" size={'chevron'} className="font-sans w-fit">
            MyBio
          </Button>
          <h1 className="font-serif text-4xl font-bold mt-2.5 leading-tight">Bio-Toilet</h1>
          <p className="font-extrabold text-xs text-black">Zero sewage. Save Water.</p>
          <Button variant={"default"} className="mt-auto w-fit self-end">
            Coming Soon
          </Button>
        </div>
    },
    {
      // containerClasses: "bg-brand-800",
      img:
        <Image
          src={imgSlider2}
          alt={"Some alt"}
          className="absolute bottom-1/4 -z-10 scale-150"
          width={405}
        />,
      gradient:
        <div className="absolute -z-20 bg-gradient-to-b from-brand-700 to-brand-900  size-full rounded-3xl" />,
      cardContent:
        <div className="size-full py-6 px-5 flex flex-col ">
          <Button variant="chevron" size={'chevron'} className="font-sans w-fit">
            MyBio
          </Button>
          <h1 className="font-serif text-4xl font-bold mt-2.5 leading-tight text-brand-200">Bio-Fertiliser</h1>
          <p className="font-extrabold text-xs text-background">Maintain soil fertility for generations with zero sewage</p>
          <Button variant={"default"} className="mt-auto w-fit self-end">
            Coming Soon
          </Button>
        </div>
    },
    {
      img:
        <Image
          src={imgSlider3}
          alt={"Some alt text"}
          className="size-full absolute -z-20 object-cover position object-bottom"
          width={405}
        />,
      gradient:
        <div className="absolute -z-10 bg-gradient-to-b from-black to-65% via size-full rounded-3xl" />,
      cardContent:
        <div className="size-full py-6 px-5 flex flex-col ">
          <Button variant="chevron" size={'chevron'} className="font-sans w-fit">
            MyBotany
          </Button>
          <h1 className="font-serif text-4xl font-bold mt-2.5 leading-tight text-brand-naplesYellow">Pongamia Pinnata</h1>
          <p className="font-extrabold text-background text-xs">The most natural bio-fuel source from tree seeds through our reforestation initiative.</p>
          <Button variant={"default"} className="mt-auto w-fit self-end">
            Coming Soon
          </Button>
        </div>
    },
  ],
};

Gallery17.displayName = "Gallery17";
