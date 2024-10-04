import Link from "next/link";
import { Suspense } from "react";

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
import { Header76 } from "@/components/blocks/Header76";
import { Contact5 } from "@/components/blocks/Contact5";
import { Layout353 } from "@/components/blocks/Layout353";
import testimg from "/images/mybio-bio-fertiliser/IMG_2132.webp"
import Image from "next/image";
import { Header110Custom } from "@/components/blocks/Header110.Custom";
import { Button } from "@/components/ui/button";

import img1 from "/images/mybio-bio-fertiliser/img_2134.webp"
import img2 from "/images/mybio-bio-fertiliser/img_2132.webp"
import imgBackground from "/images/mybio-bio-fertiliser/hero-landscape.webp"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bio-Fertiliser",
  description: "Odourless Bio-Fertiliser made from urine that’s proven to be as good as chemical fertiliser. Comes in both liquid and compact powdered forms to help your business save on shipping costs. Malaysian companies and government-linked bodies are welcome to apply for discounts as early adopters.",
  // keywords: post?.seo?.seoKeywords,
  openGraph: {
    url: "https//daiointernational.com/mybio/biofertiliser",
    description: "Odourless Bio-Fertiliser made from urine that’s proven to be as good as chemical fertiliser. Comes in both liquid and compact powdered forms to help your business save on shipping costs. Malaysian companies and government-linked bodies are welcome to apply for discounts as early adopters.",
    title: "Bio-Fertiliser | DAIO International",
  },
} satisfies Metadata;


export default async function Page() {
  // const [settings, heroPost] = await Promise.all([
  //   sanityFetch<SettingsQueryResult>({
  //     query: settingsQuery,
  //   }),
  //   sanityFetch<HeroQueryResult>({ query: heroQuery }),
  // ]);

  return (
    <>
      {/* Header 5.... or 33 */}
      <Header110Custom
        {...Header110Props}
        className=""
      />



      <Header76 />
      <Suspense>
        <Contact5 />
      </Suspense>
    </>
  );
}

const Header110Props: React.ComponentPropsWithoutRef<typeof Header110Custom> = {
  subtitle: "MyBio Bio-Fertiliser",
  heading: "Preserve your soil fertility for generations with zero chemicals.",
  description:
    `Odourless Bio-Fertiliser made from urine that’s proven to be as good as chemical fertiliser. Comes in both liquid and compact powdered forms to help your business save on shipping costs. Malaysian companies and government-linked bodies are welcome to apply for discounts as early adopters.

    Reach out to us for more technical specifications.`,
  buttons: [
    <Link key={1} href="#contact-us"><Button key={1}>Contact Us</Button></Link>,
    <Link key={2} href="#scientific-test"><Button key={1} variant={"default"} className="dark">Scientific Test</Button></Link>

  ],
  // buttons: [
  //   { title: "Button" },
  //   {
  //     title: "Button",
  //     variant: "secondary"
  //   }],
  images: [
    {
      src: img1.src,
      alt: "DAIO Director standing beside Bio R-21 core unit skewer.",
    },
    {
      src: img2.src,
      alt: "Model standing beside Bio R-21 core unit holding its top lid.",
    },
  ],
  bgImage: {
    src: imgBackground.src,
    alt: "Landscape of farmland. Image from pexels."
  },
};