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
import imgMachine from '/images/mybio-bio-fertiliser/machine.webp'
import { Metadata } from "next";
import { Cta7 } from "@/components/blocks/Cta7";
import { Layout1Slot } from "@/components/blocks/Layout1";
import { Gallery17 } from "@/components/blocks/Gallery17.Images";
import { Props_biofertiliser_gallery17_other } from "./props";
import icon1 from "/images/mybio-bio-toilet/BxTrophy.svg";
import icon2 from "/images/mybio-bio-toilet/BxHappyBeaming.svg";
import icon3 from "/images/mybio-bio-toilet/TablerDropletOff.svg";
import icon4 from "/images/mybio-bio-toilet/CarbonEnergyRenewable.svg";
import { Timeline6 } from "@/components/blocks/Timeline6";

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
      <Cta7
        {...Cta7Props}
      />
      <Layout1Slot id="scientific-test"/>
      <Gallery17
        {...Props_biofertiliser_gallery17_other}
      />
      <Layout245
        className="bg-brand-naplesYellow text-brand-900"
        {...Layout245Props}
      />
      <Timeline6
        {...Timeline6Props}
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
    <Link key={1} href="#contact-us"><Button size={"lg"} key={1}>Contact Us</Button></Link>,
    <Link key={2} href="#scientific-test"><Button size={"lg"} key={2} variant={"default"} className="dark">Scientific Test</Button></Link>
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

const Cta7Props: React.ComponentPropsWithoutRef<typeof Cta7> = {
  heading: "Sell your livestock waste to DAIO.",
  description: "We purchase urine produced from livestock such as cows. We aim to boost the local Malaysian economy by creating demand for animal waste for the creation of our bio-fertiliser. Contact us for more information.",
  buttons:
    <Link key={1} href="#contact-us"><Button size={"lg"} key={1}>Contact Us</Button></Link>
}

const Layout245Props: React.ComponentPropsWithoutRef<typeof Layout245> = {
  tagline: "It's been done before. Why us?",
  heading: "We save your business time and money.",
  description:
    "Going green should not be expensive. We work with green-conscious businesses to help reduce their expenditure in the long-term with our MyBio Bio-Fertiliser.",
  sections: [
    {
      icon: {
        src: icon1,
        alt: "Relume logo 1",
      },
      heading: "Tax breaks.",
      description:
        "Depending on where you live, you may be eligible for tax breaks. Contact us and we will help you out!",
    },
    {
      icon: {
        src: icon2,
        alt: "Relume logo 2",
      },
      heading: "Eco-friendly means cheap",
      description:
        <>
          {/* Low-cost and accessible for small-scale farmers, providing a cost-effective alternative to expensive chemical fertilisers. <a href="" className="font-semibold underline hover:text-blue-500">(Singh et al. 2019)</a> */}
          Low-cost and accessible for small-scale farmers, providing a cost-effective alternative to expensive chemical fertilisers.
        </>,
    },
    {
      icon: {
        src: icon3,
        alt: "Relume logo 3",
      },
      heading: "Preserve your land",
      description:
        "Chemical-based fertilisers are also known to damage soil fertility over time which is costly to repair. our fertiliser is designed without any harmful metals.",
    },
    {
      icon: {
        src: icon4,
        alt: "Relume logo 4",
      },
      heading: "Save shipping and space",
      description:
        "Our compact bio-fertiliser comes in both concentrated liquid and powdered forms which is to be diluted for use, which takes up less space during transit.",
    },
  ],
  buttons: []
}

const Timeline6Props: React.ComponentPropsWithoutRef<typeof Timeline6> = {
  className: "bg-brand-50",
  tagline: "How it's made",
  heading: "DAIO Purification Treatment Process",
  description: "Our Japanese-patented process of converting waste into fertiliser is fairly straightforward. Reach out to us for more technical information.",
  buttons: [
    <Link href="#contact-us" key={1}><Button size={"lg"}>Contact Us</Button></Link>
  ],
  features: [
    <>
      <h3 className="type-large">Urine waste collected from DAIO MyBio Toilets.</h3>
    </>,
    <>
      <h3 className="type-large ">Urine purification treatment started by ozone aeration. The aeration source is via 'Ultra Fine Bubble' (UFB).</h3>
    </>,
    <>
      <h3 className="type-large">When ozone saturation is confirmed by the ozone monitor, the urine purification process is complete.</h3>
    </>,
    <>
      <h3 className="type-large">Purified urine ready to be utilised as bio fertiliser. There is no scum when collecting purified urine.</h3>
    </>
  ],
  image: <Image className="size-full" src={imgMachine} alt="DAIO's Urine Purification Machine"></Image>
};