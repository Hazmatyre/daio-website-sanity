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
import Image, { StaticImageData } from "next/image";
import imgFuji1 from "/images/mybio-bio-toilet/toilet-mount-fuji/bio-toilet-fujisan01.jpg"
import imgFuji2 from "/images/mybio-bio-toilet/toilet-mount-fuji/bio-toilet-fujisan02.jpg"
import imgFuji3 from "/images/mybio-bio-toilet/toilet-mount-fuji/bio-toilet-fujisan03.jpg"
import imgFuji4 from "/images/mybio-bio-toilet/toilet-mount-fuji/bio-toilet-fujisan04.jpg"
import imgFuji6 from "/images/mybio-bio-toilet/toilet-mount-fuji/bio-toilet-fujisan06.jpg"
import imgFuji7 from "/images/mybio-bio-toilet/toilet-mount-fuji/bio-toilet-fujisan07.jpg"
import imgFuji8 from "/images/mybio-bio-toilet/toilet-mount-fuji/bio-toilet-fujisan08.jpg"
import imgFuji9 from "/images/mybio-bio-toilet/toilet-mount-fuji/bio-toilet-fujisan09.jpg"
import imgFuji10 from "/images/mybio-bio-toilet/toilet-mount-fuji/bio-toilet-fujisan10.jpg"
import imgFuji11 from "/images/mybio-bio-toilet/toilet-mount-fuji/bio-toilet-fujisan11.jpg"
import imgFuji12 from "/images/mybio-bio-toilet/toilet-mount-fuji/bio-toilet-fujisan12.jpg"
import imgFuji13 from "/images/mybio-bio-toilet/toilet-mount-fuji/bio-toilet-fujisan13.jpg"
import imgFuji14 from "/images/mybio-bio-toilet/toilet-mount-fuji/bio-toilet-fujisan14.jpg"
import imgFuji15 from "/images/mybio-bio-toilet/toilet-mount-fuji/bio-toilet-fujisan15.jpg"


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
      <Gallery17 {...PropsLayout90} />
      {/* Custom gallery, see homepage */}
      <Layout245 className="bg-brand-naplesYellow text-brand-900" />
      {/* Layout 192 for bio-fertiliser section */}
      {/* Layout 1 - generic for left content, right image. It's layout 18 on figma */}
    </>
  );
}

const imagesFuji: React.ComponentProps<typeof Image>[] = [
  {
    src: imgFuji1,
    alt: "",
    sizes: "(max-width: 768px) 69vw, 33vw",
    quality: 10,
  },
  {
    src: imgFuji2,
    alt: "",
    sizes: "(max-width: 768px) 69vw, 33vw",
    quality: 10,
  },
  {
    src: imgFuji3,
    alt: "",
    sizes: "(max-width: 768px) 69vw, 33vw",
    quality: 10,
  },
  {
    src: imgFuji4,
    alt: "",
    sizes: "(max-width: 768px) 69vw, 33vw",
    quality: 10,
  },
  {
    src: imgFuji6,
    alt: "",
    sizes: "(max-width: 768px) 69vw, 33vw",
    quality: 10,
  },
  {
    src: imgFuji7,
    alt: "",
    sizes: "(max-width: 768px) 69vw, 33vw",
    quality: 10,
  },
  {
    src: imgFuji8,
    alt: "",
    sizes: "(max-width: 768px) 69vw, 33vw",
    quality: 10,
  },
  {
    src: imgFuji10,
    alt: "",
    sizes: "(max-width: 768px) 69vw, 33vw",
    quality: 10,
  },
  {
    src: imgFuji11,
    alt: "",
    sizes: "(max-width: 768px) 69vw, 33vw",
    quality: 10,
  },
  {
    src: imgFuji12,
    alt: "",
    sizes: "(max-width: 768px) 69vw, 33vw",
    quality: 10,
  },
  {
    src: imgFuji13,
    alt: "",
    sizes: "(max-width: 768px) 69vw, 33vw",
    quality: 10,
  },
  {
    src: imgFuji14,
    alt: "",
    sizes: "(max-width: 768px) 69vw, 33vw",
    quality: 10,
  },
  {
    src: imgFuji15,
    alt: "",
    sizes: "(max-width: 768px) 69vw, 33vw",
    quality: 10,
  },
]

const PropsLayout90 = {
  heading: "Bio-Toilet in Mount Fuji, Japan",
  description: "Installed 2.640m above sea level at the 7th station of Mt. Fuji on the Yoshida route descent. It features automatic urine separation up to 2400 litres. Urine is transported down to process into bio-fertiliser.",
  slides: imagesFuji.map((img, index) => ({
    // eslint-disable-next-line jsx-a11y/alt-text
    cardContent: <Image
      key={index}
      className="size-full object-cover h-80"
      quality={5}
      {...img}
    />
  })
  )
}
