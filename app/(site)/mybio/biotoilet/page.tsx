import Link from "next/link";
import { Suspense } from "react";
import Image from "next/image";

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
import { Gallery17 as Gallery17Custom } from "@/components/blocks/Gallery17.Custom";
import { Button } from "@/components/ui/button";
import imgBioToilet1 from "/images/mybio-bio-toilet/pk2b/img2-pk2b.png"
import imgBioToilet2 from "/images/mybio-bio-toilet/pk2.jpg"
import imgBioToilet3 from "/images/mybio-bio-toilet/pk1.jpg"
import { Pricing21 } from "@/components/blocks/Pricing21";
import { Faq3 } from "@/components/blocks/Faq3";
import { Header76 } from "@/components/blocks/Header76";
import { Contact5 } from "@/components/blocks/Contact5";
import { Header110 } from "@/components/blocks/Header110";


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
      <Layout245 className="bg-brand-naplesYellow text-brand-900" />
      <Header110></Header110>
      <Gallery17 {...Props_biotoilet_gallery17_other} />
      <Layout192 />
      {/* Layout 1 - generic for left content, right image. It's layout 18 on figma. This was for the UN SDG part. */}
      <Gallery17Custom {...Props_biotoilet_Gallery17Custom} />
      <Pricing21 />
      <Faq3 />
      <Header76 />
      <Suspense>
        <Contact5 />
      </Suspense>
    </>
  );
}

const Props_biotoilet_Gallery17Custom: React.ComponentProps<typeof Gallery17Custom> = {
  heading: "Bio-Toilet Models",
  description: "Available models for sale or leasing.",
  slides: [
    {
      containerClasses: "aspect-[1/1.618] bg-[#1E3348]",
      cardContent:
        <>
          <div className="absolute -z-20 bottom-0 w-full h-[55%]">
            <Image
              sizes="(max-width: 768px) 69vw, 33vw"
              src={imgBioToilet1}
              alt="MyBio Bio-Toilet Model PK2B"
              quality={5}
              className="size-full object-cover"
            />
          </div>
          <div className="size-full py-6 px-5 flex flex-col ">
            <Button variant="chevron" size={'chevron'} className="font-sans w-fit">
              MyBio
            </Button>
            <h3 className="mt-2.5 type-mobile-h1 md:type-desktop-h1 md:mt-5 text-background">PK2B</h3>
            <p className="font-bold type-tiny text-background md:type-regular">The complete set. Comes with a urinal in a separate room.</p>
            <Link href="/#contact-us" className="block mt-auto w-fit self-end">
              <Button variant={"default"} className="mt-auto w-fit self-end">
                View Specs
              </Button>
            </Link>
          </div>
        </>
    },
    {
      containerClasses: "aspect-[1/1.618] bg-[#383A36]",
      cardContent:
        <>
          <div className="absolute -z-20 bottom-0 w-full h-[55%]">
            <Image
              sizes="(max-width: 768px) 69vw, 33vw"
              src={imgBioToilet2}
              alt="MyBio Bio-Toilet Model PK2B"
              quality={5}
              className="size-full object-cover"
            />
          </div>
          <div className="size-full py-6 px-5 flex flex-col ">
            <Button variant="chevron" size={'chevron'} className="font-sans w-fit">
              MyBio
            </Button>
            <h3 className="mt-2.5 type-mobile-h1 md:type-desktop-h1 md:mt-5 text-background">PK2</h3>
            <p className="font-bold type-tiny text-background md:type-regular">For the average user. Comes with a urinal in the same room.</p>
            <Link href="/#contact-us" className="block mt-auto w-fit self-end">
              <Button variant={"default"} className="mt-auto w-fit self-end">
                View Specs
              </Button>
            </Link>
          </div>
        </>
    },
    {
      containerClasses: "aspect-[1/1.618] bg-[#271F1D]",
      cardContent:
        <>
          <div className="absolute -z-20 bottom-0 w-full h-[55%]">
            <Image
              sizes="(max-width: 768px) 69vw, 33vw"
              src={imgBioToilet3}
              alt="MyBio Bio-Toilet Model PK2B"
              quality={5}
              className="size-full object-cover"
            />
          </div>
          <div className="size-full py-6 px-5 flex flex-col ">
            <Button variant="chevron" size={'chevron'} className="font-sans w-fit">
              MyBio
            </Button>
            <h3 className="mt-2.5 type-mobile-h1 md:type-desktop-h1 md:mt-5 text-background">PK1</h3>
            <p className="font-bold type-tiny text-background md:type-regular">The bare necessities.</p>
            <Link href="/#contact-us" className="block mt-auto w-fit self-end">
              <Button variant={"default"} className="mt-auto w-fit self-end">
                View Specs
              </Button>
            </Link>
          </div>
        </>
    },
  ]
}
