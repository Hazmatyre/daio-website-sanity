"use client"
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { motion, scroll, useAnimate, useMotionValueEvent, usePresence, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { RxOpacity } from "react-icons/rx";

type Props = {
  tagline?: string;
  heading: string;
  description: string;
  buttons: React.ReactNode[];
  features: React.ReactNode[]
};

export type Timeline6Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Timeline6 = (props: Timeline6Props) => {
  const { tagline, heading, description, buttons, features } = {
    ...Contact5Defaults,
    ...props,
  } as Props;

  return (
    <section id="contact-us" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg">
        {/* //* INTRO */}
        <div>
          {tagline &&
            <p className="type-regular font-semibold">{tagline}</p>
          }
          {heading &&
            <h2 className={cn(
              "type-mobile-h2 lg:type-desktop-h2 font-bold mt-3 md:mt-4",
              // "bg-clip-text bg-gradient-to-r from-blue-500 to-brand-500 text-transparent"
            )}>{heading}</h2>
          }
          {description &&
            <p className="mt-5 md:mt-6 type-regular font-medium md:type-medium">{description}</p>
          }
          <div className="mt-6 md:mt-8">
            {buttons}
          </div>
        </div>
        {/* //* TIMELINE */}
        <div className="mt-12 md:mt-20 flex">
          {/* // * progress */}
          <div className="basis-8 shrink-0 relative flex flex-col items-center overflow-y-clip">
            {/* fade overlay top */}
            <div className="absolute h-16 w-1 z-10 bg-gradient-to-b from-background"></div>
            {/* progress line */}
            <div className="h-[50vh] w-1 /bg-brand-900 bg-gradient-to-b from-brand-500 to-brand-500 sticky top-0 mt-[-50vh]"></div>
            {/* line */}
            <div className="w-1 h-full bg-brand-900/20"></div>
            {/* fade overlay bottom */}
            <div className="absolute h-16 w-1 z-10 bottom-0 bg-gradient-to-t from-background"></div>
            {/* progress line cover */}
            {/* <div className="absolute h-[50vh] top-[-50vh] w-8 bg-background"></div> */}
          </div>
          {/* // * content */}
          <div className="grow flex flex-col gap-y-16 md:gap-y-12">
            {features.map((feature, index) => {
              return (
                <FeatureCard
                  feature={feature}
                  key={index}
                />
              )
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

type CardProps = {
  feature: React.ReactNode
}

function FeatureCard(props: CardProps) {
  const { feature } = props as CardProps;

  const ref = useRef(null);

  return (
    <div className="relative">
      {/* circle wrapper */}
      <div className="absolute h-full w-8 -ml-8 flex justify-center items-start" ref={ref}>
        <motion.div
          className="w-4 h-4 bg-brand-naplesYellow rounded-lg border-brand-900 border z-20 mt-9"

          initial={{ opacity: 0.2 }}
          whileInView={{ opacity: 1, scale: 1.3 }}
          transition={{ duration: 0.1 }}
          exit={{ opacity: 0.2 }}
          viewport={{
            root: ref,
            margin: "0% 0px -50% 0px",
          }}
        />
      </div>
      {/* content */}
      <div className="bg-white py-8 px-7 border border-border rounded-lg ml-4 md:ml-12">
        {feature}
      </div>
    </div>
  )
}

export const Contact5Defaults: Timeline6Props = {
  tagline: "Roadmap",
  heading: "TGT Program Timeline",
  description: "We are conducting 3-5 years worth of experiments to determine the best cultivation methods for the highest yield and quality of Pongamia seeds.",
  buttons: [
    <a key={1}><Button size={"lg"}>Partner With Us</Button></a>,
    // <a key={2}><Button variant={"outline"}>Our Team</Button></a>
  ],
  features: [
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </p>,
    <>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</>,
    <>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </>
  ]
};

Timeline6.displayName = "Timeline6";
