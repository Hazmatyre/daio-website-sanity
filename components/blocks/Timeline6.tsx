"use client"
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { motion, scroll, useAnimate, useMotionValueEvent, usePresence, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { RxOpacity } from "react-icons/rx";
import Link from "next/link";

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
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-md">
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
            <div className="h-[50vh] w-1 /bg-brand-900 bg-gradient-to-b from-brand-900 to-brand-900 sticky top-0 mt-[-50vh]"></div>
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
          className="w-4 h-4 bg-brand-naplesYellow rounded-lg border-brand-900 border-2 z-20 mt-12"

          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, scale: 1.3 }}
          transition={{ duration: 0.1 }}
          exit={{ opacity: 0 }}
          viewport={{
            root: ref,
            margin: "0% 0px -50% 0px",
          }}
        />
      </div>
      {/* content */}
      <div className={cn(
        "bg-white py-8 px-6 border border-border rounded-lg /ml-4 md:ml-12 shadow-xlarge",
      )}>
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
    <Link href="#contact-us" key={1}><Button size={"lg"}>Partner With Us</Button></Link>
    // <a key={2}><Button variant={"outline"}>Our Team</Button></a>
  ],
  features: [
    <>
      <h3 className="type-mobile-h3 md:type-desktop-h3 tracking-wider text-brand-900 mb-2">2024</h3>
      <h4 className="type-mobile-h5 md:type-desktop-h5 mt-8 max-md:tracking-tighter text-brand-600">Land Acquisition</h4>
      <ul className="list-disc list-inside mt-3 flex flex-col gap-y-3 tracking-tighter type-regular leading-tight">
        <li>Establish 5,000 hectars state or federal land.</li>
        <li>Nominal-leased land or JV with major plantations conglomerate/GLCs.</li>
        <li>Preliminary mini plantation site set-up in Kota Tinggi, Johor.</li>
      </ul>
      <h4 className="type-mobile-h5 md:type-desktop-h5 mt-8 max-md:tracking-tighter text-brand-600">Funding</h4>
      <ul className="list-disc list-inside mt-3 flex flex-col gap-y-3 tracking-tighter type-regular leading-tight">
        <li>Promoting the initiative to get project grants/funding.</li>
      </ul>
    </>,
    <>
      <h3 className="type-mobile-h3 md:type-desktop-h3 tracking-wider text-brand-900 mb-2">2025 / 2026</h3>
      <h4 className="type-mobile-h5 md:type-desktop-h5 mt-8 max-md:tracking-tighter text-brand-600">Cultivation</h4>
      <ul className="list-disc list-inside mt-3 flex flex-col gap-y-3 tracking-tighter type-regular leading-tight">
        <li>Land clearing / landscaping Logistic set-up.</li>
        <li>Planting 3 million trees in 3 years time.</li>
      </ul>
      <h4 className="type-mobile-h5 md:type-desktop-h5 mt-8 max-md:tracking-tighter text-brand-600">CSR</h4>
      <ul className="list-disc list-inside mt-3 flex flex-col gap-y-3 tracking-tighter type-regular leading-tight">
        <li>Initiate local research programs for biofuel domestic usage.</li>
        <li>Promoting environmental campaigns such as reforestation and land regeneration by planting Pongamia.</li>
      </ul>
    </>,
    <>
      <h3 className="type-mobile-h3 md:type-desktop-h3 tracking-wider text-brand-900 mb-2">2030</h3>
      <h4 className="type-mobile-h5 md:type-desktop-h5 mt-8 max-md:tracking-tighter text-brand-600">Harvest</h4>
      <ul className="list-disc list-inside mt-3 flex flex-col gap-y-3 tracking-tighter type-regular leading-tight">
        <li>Establish 5,000 hectars state or federal land</li>
        <li>Nominal-leased land or JV with major plantations conglomerate / GLCs</li>
        <li>Preliminary mini plantation site set-up in Kota Tinggi, Johor</li>
      </ul>
      <h4 className="type-mobile-h5 md:type-desktop-h5 mt-8 max-md:tracking-tighter text-brand-600">Future projects</h4>
      <ul className="list-disc list-inside mt-3 flex flex-col gap-y-3 tracking-tighter type-regular leading-tight">
        <li>Promoting the initiative to get project grants / funding</li>
      </ul>
    </>
  ]
};

Timeline6.displayName = "Timeline6";
