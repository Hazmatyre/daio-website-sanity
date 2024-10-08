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


export default async function Page() {
  // const [settings, heroPost] = await Promise.all([
  //   sanityFetch<SettingsQueryResult>({
  //     query: settingsQuery,
  //   }),
  //   sanityFetch<HeroQueryResult>({ query: heroQuery }),
  // ]);

  return (
    <>
      {/* Header 5.... or 33
      <div>
        <div className="container">
          <div className="w-full">
            <Image src={testimg} alt=""></Image>
          </div>
        </div>
      </div>
      <Layout353/>
      <Header76 />
      <Suspense>
        <Contact5 />
      </Suspense> */}
    </>
  );
}
