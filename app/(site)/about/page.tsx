import Link from "next/link";
import { Suspense } from "react";
import Image from "next/image";
import img_kazyuki from "/images/about-us/IMG_0603.webp"
import img_thiaku from "/images/about-us/IMG_0604.jpg"

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
import { Layout484 } from "@/components/blocks/Layout484";
import { Team18 } from "@/components/blocks/Team18";


export default async function Page() {
  // const [settings, heroPost] = await Promise.all([
  //   sanityFetch<SettingsQueryResult>({
  //     query: settingsQuery,
  //   }),
  //   sanityFetch<HeroQueryResult>({ query: heroQuery }),
  // ]);

  return (
    <>
      <Layout484></Layout484>
      <Team18 {...team18Leadership}></Team18>
      <Team18></Team18>
      <Team18></Team18>
    </>
  );
}

const team18Leadership: React.ComponentPropsWithoutRef<typeof Team18> = {
  tagline: "About Us",
  heading:
    "Board of Directors",
  description: "From co-workers to good friends with decades of engineering experience, we build products engineered to give back to mother nature.",
  people: [
    {
      image: <Image
        src={img_kazyuki}
        alt="Portrait of Kazuyuki Iinuma"
        className="size-full object-cover"
      />,
      name: "Kazuyuki Iinuma",
      title: "PRESIDENT, CO-FOUNDER",
      email: "iinuma@daiointernational.com",
    },
    {
      image: <Image
        src={img_thiaku}
        alt="Portrait of Kazuyuki Iinuma"
        className="size-full object-cover"
      />,
      name: "Thiagku Marimuthu",
      title: "MANAGING DIRECTOR, CO-FOUNDER",
      email: "thiaku@daiointernational.com",
    },
  ],
  className: "bg-brand-naplesYellow"
}