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
import imgPlaceholder from "/images/placeholder.png"

import img_layout7 from "/images/mybotany-pongamia/layout7-pongamia-seeds-in-hand.webp"
import { Layout458 } from "@/components/blocks/Layout458";
import img_layout458_1 from "/images/mybotany-pongamia/layout458-man-holding-pongamia-roots.webp"
import img_layout458_2 from "/images/mybotany-pongamia/layout458-pongamia-roots.webp"
import img_layout458_3 from "/images/mybotany-pongamia/layout458-pongamia-roots-on-fingers.webp"
import { Layout417 } from "@/components/blocks/Layout417";
import img_layout90 from "/images/mybotany-pongamia/layout90-pongamia-johor.webp"


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
      {/* //done <Layout458/> type and images done*/}
      <Layout458 {...PropsLayout458} />
      {/* //done <Layout417/> */}
      {/* //todo content for other uses of pongamia */}
      <Layout417 {...PropsLayout417} />
      {/* Below Similar to layout 15 //todo content */}
      <Layout90 {...PropsLayout90} />
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
  className: "text-background bg-[#241c00] [&_div:has(>img)]:border-brand-naplesYellow [&_div:has(>img)]:border",
  tagline: "Cheaper than fossil fuels.",
  heading: "The energy crisis solved.",
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

const PropsLayout458: ComponentPropsWithoutRef<typeof Layout458> = {
  className: "[&_div:has(>img)]:border-brand-naplesYellow [&_div:has(>img)]:border bg-brand-900 text-background [&_:is(h1,h2,h3)]:text-primary",
  tagline: "Why this tree specifically?",
  heading: "Pongamia Pinnata restores your degraded land at low cost.",
  description: "Locally known as Poko Mempair, Malapari, or Kayu Laut, the Pongamia tree is able to restore your land through a process called Nitrogen-fixing which heals your land.",
  buttons: [
    <a key={1}><Button>Partner With Us</Button></a>,
    <a key={2}><Button className="dark">Pongamia In Malaysia</Button></a>
  ],
  features: [
    {
      image: {
        src: img_layout458_1,
        alt: "Man holding Pongamia roots.",
      },
      heading: "1. Pongamia gets Nitrogen from the air.",
      description:
        "Pongamia synergises well with Rhizobium bacteria to convert Nitrogen in the air into compounds that plants can absorb, reducing the need for fertiliser when growing Pongamia.",
    },
    {
      image: {
        src: img_layout458_2,
        alt: "Pongamia tree roots with nitrogen fixing nodules.",
      },
      heading: "2. Nitrogen is stored in round nodules in the roots.",
      description:
        "The Nitrogen compounds generated also transfer to the soil around the Pongamia tree, restoring the surrounding land.",
    },
    {
      image: {
        src: img_layout458_3,
        alt: "Pongamia tree roots on fingertips with nitrogen fixing nodules.",
      },
      heading: "3. Sustains your crops and removes CO2 from the air.",
      description:
        "Alongside fertilising any crops planted within its vicinity, the Pongamia tree is also capable of `sequestering` CO2 from the air and storing it in its roots, reducing carbon emissions and cooling its surroundings.",
    },
  ],
}

const PropsLayout417: ComponentPropsWithoutRef<typeof Layout417> = {
  className: "",
  heading: "It's not just about the environment.",
  featureSections: [
    {
      icon: {
        src: imgPlaceholder,
        alt: "Relume logo 1",
      },
      title: "Subheading one",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    },
    {
      icon: {
        src: imgPlaceholder,
        alt: "Relume logo 2",
      },
      title: "Subheading two",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    },
    {
      icon: {
        src: imgPlaceholder,
        alt: "Relume logo 3",
      },
      title: "Subheading three",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    },
    {
      icon: {
        src: imgPlaceholder,
        alt: "Relume logo 4",
      },
      title: "Subheading four",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    },
  ],
}

const PropsLayout90: ComponentPropsWithoutRef<typeof Layout90> = {
  subtitle: "Our first experiment on Malaysian soil.",
  heading: "The Green Trees Program (TGT)",
  description: <>Located in <b>Kota Tinggi, Johor Bahru</b>, we have begun planting  300 seedlings to test the viability of Pongamia on Malaysian soil while remaining carbon neutral.<br /><br />The <b>Green Trees Program</b> was established to explore local and international ventures in Pongamia plantation, aligning with the Malaysian government&apos;s goal of achieving net-zero carbon emissions by 2050. This initiative is supported by our partners at <a href="https://p2x-japan.co.jp/our-bases/" className="underline">P2X Japan</a>, along with their subsidiaries, P2X Thailand and P2X Indonesia.</>,
  buttons: [
    <Link key={1} href="#contact-us"><Button size={"lg"} variant={"default"}>Partner With US</Button></Link>,
    <a key={2} href="#green-trees-program"><Button size={"lg"} variant={"secondary"}>GPS Coordinates</Button></a>
  ],
  imageCaption: undefined,
  image: {
    src: img_layout90,
    alt: "Landscape shot of Pongamia Plantation in Johor with a line of people walking foward with their backs turned to the viewer,"
  },
}