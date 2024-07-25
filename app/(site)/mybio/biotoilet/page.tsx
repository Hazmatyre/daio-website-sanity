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
import { Gallery17 } from "@/components/blocks/Gallery17.Images";
import { Props_biotoilet_gallery17, Props_biotoilet_gallery17_other } from "./props";
import { Layout192 } from "@/components/blocks/Layout192.Custom198";


export default async function Page() {
  // const [settings, heroPost] = await Promise.all([
  //   sanityFetch<SettingsQueryResult>({
  //     query: settingsQuery,
  //   }),
  //   sanityFetch<HeroQueryResult>({ query: heroQuery }),
  // ]);

  return (
    <>
      <Layout90></Layout90> {/* Similar to layout 15 */}
      <Gallery17 {...Props_biotoilet_gallery17} />
      {/* Custom gallery, see homepage */}
      <Layout245 className="bg-brand-naplesYellow text-brand-900" />
      <Gallery17 {...Props_biotoilet_gallery17_other} />
      <Layout192 />
      {/* Layout 1 - generic for left content, right image. It's layout 18 on figma */}
    </>
  );
}

const Props_biotoilet_layout192 = {

}
