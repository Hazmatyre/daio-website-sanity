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
import { Layout7 } from "@/components/blocks/Layout7";
import { Gallery17 } from "@/components/blocks/Gallery17.Custom";
import { Contact5 } from "@/components/blocks/Contact5";
import { Header5 } from "@/components/blocks/Header5";
import { Layout48 } from "@/components/blocks/Layout48";


export default async function Page() {
  // const [settings, heroPost] = await Promise.all([
  //   sanityFetch<SettingsQueryResult>({
  //     query: settingsQuery,
  //   }),
  //   sanityFetch<HeroQueryResult>({ query: heroQuery }),
  // ]);

  return (
    <>
      <Header5 /> {/* //todo Setup buttons, optimise image */}
      {/* //todo <Layout48/>  */}
      <Layout48/>
      {/* //todo  redo layout7' colors */}
      <Layout7 />
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
