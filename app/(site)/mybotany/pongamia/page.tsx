import Link from "next/link";
import { ComponentPropsWithoutRef, Suspense } from "react";

// import Avatar from "./avatar";
// import CoverImage from "./cover-image";
// import DateComponent from "./date";
// import MoreStories from "./more-stories";
// import Onboarding from "./onboarding";
// import PortableText from "./portable-text";

import type { HeroQueryResult, SettingsQueryResult } from "@/sanity.types";
import * as demo from "@/sanity/lib/demo";
import { sanityFetch } from "@/sanity/lib/fetch";
import { heroQuery, settingsQuery } from "@/sanity/lib/queries";
import { Layout90 } from "@/components/blocks/Layout90.Hero";
import { Layout245 } from "@/components/blocks/Layout245.Feature";
import { Layout7 } from "@/components/blocks/Layout7";
import { Gallery17 } from "@/components/blocks/Gallery17.Images";
import { Contact5 } from "@/components/blocks/Contact5";
import { Header5 } from "@/components/blocks/Header5";
import { Layout48 } from "@/components/blocks/Layout48";

import iconListItem from "/images/mybotany-pongamia/IconListItemGreen.svg"
import { Button } from "@/components/ui/button";

import img_layout7 from "/images/mybotany-pongamia/layout7-pongamia-seeds-in-hand.webp"


export default async function Page() {
  // const [settings, heroPost] = await Promise.all([
  //   sanityFetch<SettingsQueryResult>({
  //     query: settingsQuery,
  //   }),
  //   sanityFetch<HeroQueryResult>({ query: heroQuery }),
  // ]);

  //todo: citation component
  //todo: apply citations throughout the page
  //todo: check that all CTA's link up

  return (
    <>
      <Header5 /> {/* //todo Setup buttons, optimise image */}
      <Layout48 />
      {/* //done redo layout7' colors */}
      <Layout7 {...PropsLayout7} />
      {/* //todo <Layout458/> */}
      {/* //todo <Layout417/> */}
      {/* Below Similar to layout 15 //todo content */}
      <Layout90></Layout90>
      {/* // todo make below have no padding */}
      <Gallery17 />
      {/* //todo add two more bullet points that wrap */}
      <Layout7 />
      {/* // todo custom <Timeline6/> */}
      <Suspense>
        {/* //todo content for contact form */}
        <Contact5 />
      </Suspense>


      {/* // * Remember to use layout 352 for timeline! */}
    </>
  );
}

const PropsLayout7: ComponentPropsWithoutRef<typeof Layout7> = {
  tagline: "Cheaper than fossil fuels.",
  heading: "The energy crisis solved.",
  className: "text-background bg-[#241c00] [&_div:has(>img)]:border-brand-naplesYellow [&_div:has(>img)]:border",
  classNameHeaders: "text-primary",
  description:
    <>Pongamia seeds can be used to produce bio-fuel through the extraction of its oils[1], or bio-coke by crushing husks of the plant into cubes and can used similar to coal[1].
      <span>test</span></>,
  subHeadings: [
    {
      icon: iconListItem,
      title: "As good a pure diesel with less CO2 emissions.",
      description:
        <>Studies have shown that when blended with other fuel, it is as efficient as pure diesel[cite]. When combusted, it shows lower harmful emissions such as carbon monoxide and smoke[cite].</>
    },
    {
      icon: iconListItem,
      title: "Already used as aviation fuel by the Japanese government.",
      description:
        <>Japan is among the first to use Pongamia as fuel for aviation. Other countries are soon to follow as crude oil becomes more scarce and expensive.</>
    }
  ],
  buttons: [
    <a key={1}><Button>Partner With Us</Button></a>,
    <a key={2}><Button className="dark">Pongamia In Malaysia</Button></a>
  ],
  image: {
    src: img_layout7,
    alt: "Closeup of open hand presenting several Pongamia seeds."
  }
}