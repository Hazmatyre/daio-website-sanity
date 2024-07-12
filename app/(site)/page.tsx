import Link from "next/link";
import { Suspense } from "react";

import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateComponent from "./date";
import MoreStories from "./more-stories";
import Onboarding from "./onboarding";
import PortableText from "./portable-text";

import type { HeroQueryResult, SettingsQueryResult } from "@/sanity.types";
import * as demo from "@/sanity/lib/demo";
import { sanityFetch } from "@/sanity/lib/fetch";
import { heroQuery, settingsQuery } from "@/sanity/lib/queries";
import { Layout90 } from "@/components/blocks/Layout90.Hero";
import { Layout245 } from "@/components/blocks/Layout245.Feature";
import { Gallery17 } from "@/components/blocks/Gallery17.Custom";
import { Layout7 } from "@/components/blocks/Layout7";
import { Header19 } from "@/components/blocks/Header19";
import { Contact5 } from "@/components/blocks/Contact5";
import { Metadata } from "next";
import Image from "next/image";
import testimg from '/images/testimg.webp'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Home | DAIO International",
    description: "Engineered for Mother Nature.",
  } satisfies Metadata;
}

export default async function Page() {
  // const [settings, heroPost] = await Promise.all([
  //   sanityFetch<SettingsQueryResult>({
  //     query: settingsQuery,
  //   }),
  //   sanityFetch<HeroQueryResult>({ query: heroQuery }),
  // ]);

  return (
    <>
      <Gallery17 />
      <Layout7 />
      <Header19 />
      <Suspense>
        <Contact5 />
      </Suspense>
      {/* <Layout90></Layout90>
      <Layout245></Layout245> */}
    </>
  );
}
