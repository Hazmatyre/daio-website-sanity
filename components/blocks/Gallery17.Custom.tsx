"use client";

import { useState, useEffect } from "react";
import type { CarouselApi } from "@relume_io/relume-ui";
import clsx from "clsx";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselProgress } from "../ui/carousel";
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures'

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  description: string;
  images: ImageProps[];
};

export type Gallery17Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Gallery17 = (props: Gallery17Props) => {
  const { heading, description, images } = {
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
      <div className="px-[5%] py-8 md:py-16 lg:py-24">
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
            '(min-width: 1024px)': { active: false },
            '(min-width: 768px)': { slidesToScroll: 2 },
          },
          dragFree: false,
          skipSnaps: true,
        }}
        plugins={[WheelGesturesPlugin()]}
        className="relative"
      >
        <div className="relative">
          <CarouselContent className="ml-2 lg:justify-center">
            {images.map((image, index) => (
              <CarouselItem key={index} className="px-3 basis-[260px] md:basis-[344px] xxl:basis-[405px] md:px-4">
                <div className="w-full aspect-[9/16] overflow-hidden rounded-lg">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="aspect-square size-full object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </div>
        <div className="mt-8 flex items-center justify-end px-[5%] md:mt-[46px] gap-x-2 container lg:hidden">
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
  images: [
    {
      src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
      alt: "Placeholder image 1",
    },
    {
      src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
      alt: "Placeholder image 2",
    },
    {
      src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
      alt: "Placeholder image 3",
    },
    // {
    //   src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
    //   alt: "Placeholder image 4",
    // },
  ],
};

Gallery17.displayName = "Gallery17";
