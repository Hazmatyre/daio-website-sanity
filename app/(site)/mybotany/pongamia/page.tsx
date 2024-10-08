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
import icon417placeholder from "/images/mybotany-pongamia/CarbonPhraseSentiment.svg"
import img_layout90 from "/images/mybotany-pongamia/layout90-pongamia-johor.webp"
import Image from "next/image";
import imgFuji1 from "/images/mybio-bio-toilet/toilet-mount-fuji/bio-toilet-fujisan01.jpg"
import imgFuji2 from "/images/mybio-bio-toilet/toilet-mount-fuji/bio-toilet-fujisan02.jpg"
import imgFuji3 from "/images/mybio-bio-toilet/toilet-mount-fuji/bio-toilet-fujisan03.jpg"
import img_layout7_2 from "/images/mybotany-pongamia/three-people-examining-pongamia.webp"
import { Timeline6 } from "@/components/blocks/Timeline6";
import { Props_Pongamia_Gallery17 } from "./props";

export default async function Page() {
  // const [settings, heroPost] = await Promise.all([
  //   sanityFetch<SettingsQueryResult>({
  //     query: settingsQuery,
  //   }),
  //   sanityFetch<HeroQueryResult>({ query: heroQuery }),
  // ]);

  //todo: citation component
  //todo: apply citations throughout the page
  //done: check that all CTA's link up
  //todo: clean up citation placeholders

  return (
    <>
      <Header5 /> {/* //done Setup buttons, optimise image */}
      <Layout48 />
      {/* //done redo layout7' colors */}
      <Layout7 {...PropsLayout7} />
      {/* //done <Layout458/> type and images done*/}
      <Layout458 {...PropsLayout458} />
      {/* //done <Layout417/> */}
      {/* //todo content for other uses of pongamia */}
      <Layout417 {...PropsLayout417} />
      {/* //done content */}
      <Layout90 {...PropsLayout90} />
      {/* //done make below have no padding */}
      {/* //done pick out photos */}
      <Gallery17 {...Props_Pongamia_Gallery17} />
      {/* //done add two more bullet points that wrap */}
      <Layout7 {...PropsLayout7_2} />
      {/* // done custom <Timeline6/> */}
      <Timeline6 />
      <Suspense>
        {/* //done content for contact form */}
        <Contact5 {...PropsContact5} />
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
    <>Pongamia seeds can be used to produce bio-fuel through the extraction of its oils, or bio-coke by crushing husks of the plant into cubes and can used similar to coal.</>,
  subHeadings: [
    {
      icon: iconListItem,
      title: "As good a pure diesel with less CO2 emissions.",
      description:
        <>Studies have shown that when blended with other fuel, it is as efficient as pure diesel. When combusted, it shows lower harmful emissions such as carbon monoxide and smoke.</>
    },
    {
      icon: iconListItem,
      title: "Shortlisted as aviation fuel by the Japanese government.",
      description:
        <>Japan is among the first to shortlist Pongamia as fuel for aviation. Other countries are soon to follow as crude oil becomes more scarce and expensive.</>
    }
  ],
  buttons: [
    <Link href="#contact-us" key={1}><Button size={"lg"}>Partner With Us</Button></Link>,
    <Link href="#tgt-program" key={2}><Button size={"lg"} className="dark">Pongamia In Malaysia</Button></Link>
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
    <Link href="#contact-us" key={1}><Button size={"lg"}>Partner With Us</Button></Link>,
    <Link href="#tgt-program" key={2}><Button size={"lg"} className="dark">Pongamia In Malaysia</Button></Link>
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
        src: icon417placeholder,
        alt: "A speech bubble with a heart.",
      },
      title: "Medicinal",
      description:
        <>
          <span>“Its anthelmintic nature helps in treating ophthalmic, dermal, and vaginal ulcers. P. pinnata leaves are digestive, laxative, and anthelmintic, and they can help in treating diarrhea, leprosy, dyspepsia, and cough. Flowers are useful in diabetes dypsia, as well as vata and Kapha imbalances.”</span>
          <br /><br />
          <a target="_blank" className="type-regular underline font-semibold" href="https://www.researchgate.net/publication/376005129_Pongamia_Pinnata_An_Heirloom_Herbal_Medicine">Click here for source</a>
        </>,
    },
    {
      icon: {
        src: icon417placeholder,
        alt: "A speech bubble with a heart.",
      },
      title: "Delicious food",
      description:
        <>
          <span>Terviva makes <a target="_blank" href="https://ponovafoods.com/" className="type-regular underline font-semibold">foods from pongamia oils</a> based on research that shows it has no toxicological difference in rats[<a target="_blank" href="https://www.sciencedirect.com/science/article/pii/S0278691522004112?via%3Dihub" className="type-regular underline font-semibold">source</a>].
            <br /><br />
            One of their first products is their <a target="_blank" href="https://aloha.com/pages/the-paakai-protein-bar?utm_source=partners&utm_campaign=ponova-paakai" className="type-regular underline font-semibold">Aloha special edition chocolate bar.</a></span>
        </>,
    },
    {
      icon: {
        src: icon417placeholder,
        alt: "A speech bubble with a heart.",
      },
      title: "As nutritious as soybean",
      description:
        <>
          <span>A 2016 study fed extracted pongamia cake to dairy cattle at a 50% protein replacement for soybean meal (5% of the total ration) in their diet for 90 days. The study used methanol as a solvent for extraction of the meal.</span>
          <br /><br />
          <a target="_blank" className="type-regular underline font-semibold" href="https://www.researchgate.net/publication/301822100_Effect_of_incorporation_of_detoxified_karanja_Pongamia_pinnata_and_neem_Azadirachta_indica_seed_cakes_in_total_mixed_rations_on_milk_yield_composition_and_efficiency_in_crossbred_dairy_cows">Click here for source</a>
        </>,
    },
    {
      icon: {
        src: icon417placeholder,
        alt: "A speech bubble with a heart.",
      },
      title: "Animal feed",
      description:
        <>
          <span>A 2020 study fed extracted pongamia cake to lambs at a 50% protein replacement for de-oiled groundnut (peanut) meal in their diet for 98 days.</span>
          <br /><br />
          <a  target="_blank" className="type-regular underline font-semibold" href="https://www.sciencedirect.com/science/article/abs/pii/S0377840100001735?via%3Dihub">Click here for source</a>
        </>,
    },
  ],
}

const PropsLayout90: ComponentPropsWithoutRef<typeof Layout90> = {
  className: "!pb-8",
  subtitle: "Our first experiment on Malaysian soil.",
  heading: "The Green Trees Program (TGT)",
  description: <>Located in <b>Kota Tinggi, Johor Bahru</b>, we have begun planting  300 seedlings to test the viability of Pongamia on Malaysian soil while remaining carbon neutral.<br /><br />The <b>Green Trees Program</b> was established to explore local and international ventures in Pongamia plantation, aligning with the Malaysian government&apos;s goal of achieving net-zero carbon emissions by 2050. This initiative is supported by our partners at <a href="https://p2x-japan.co.jp/our-bases/" className="underline">P2X Japan</a>, along with their subsidiaries, P2X Thailand and P2X Indonesia.</>,
  buttons: [
    <Link key={1} href="#contact-us"><Button size={"lg"} variant={"default"}>Partner With US</Button></Link>,
    <a key={2} target="_blank" href="https://maps.app.goo.gl/FEhmXQtdurQjXHpE7"><Button size={"lg"} variant={"secondary"}>GPS Coordinates</Button></a>
  ],
  imageCaption: undefined,
  image: {
    src: img_layout90,
    alt: "Landscape shot of Pongamia Plantation in Johor with a line of people walking foward with their backs turned to the viewer,"
  },
  id: "tgt-program"
}

const PropsLayout7_2: ComponentPropsWithoutRef<typeof Layout7> = {
  tagline: "How we at DAIO help you.",
  heading: "Malaysia stands to benefit the most from Pongamia.",
  description:
    <>We have the expertise to help Malaysia generate economic productivity while achieving its goal of net-zero emissions thanks to its suitable climate for planting Pongamia trees.
    </>,
  subHeadings: [
    {
      // icon: iconListItem,
      title: "Lucrative exports",
      description:
        <>Worldwide increased demand for alternative fuel such as the recent G7 Summit, and the Japanese government prioritising Pongamia seeds for aviation fuel. </>
    },
    {
      // icon: iconListItem,
      title: "Generate domestic jobs",
      description:
        <>Made by Malaysians, Pongamia creates job and skill opportunities thanks to the sheer amount of products that can be made from it.</>
    },
    {
      // icon: iconListItem,
      title: "Revenue from unused land",
      description:
        <>Pongamia grows even in land that is non-fertile, making it the perfect opportunity for hectares of land that lay unused or damaged.</>
    },
    {
      // icon: iconListItem,
      title: "Win the peoples' hearts",
      description:
        <>Going green leads to more than just profits. Remove carbon emissions with Pongamia and make the land colder for your citizens.</>
    },
  ],
  buttons: [
    <Link key={1} href="#contact-us" className="no-overflow-anchoring"><Button size={"lg"}>Partner With Us</Button></Link>,
    <Link key={2} href="/about" className="no-overflow-anchoring"><Button size={"lg"} variant={"secondary"}>Our Team</Button></Link>,  ],
  image: {
    src: img_layout7_2,
    alt: "Closeup of open hand presenting several Pongamia seeds."
  }
}

const PropsContact5: React.ComponentPropsWithoutRef<typeof Contact5> = {
  tagline: "Contact Us",
  heading: "Invest and partner with our initiative.",
  description: `We help federal and state governments restore damaged land with Pongamia and generate better yields the sustainable way.
  
  We are also seeking collaboration and partnership opportunities with green-conscious research institutions, government-linked companies and local authorities to make Pongamia Pinnata accessible to everyone.`,

}

