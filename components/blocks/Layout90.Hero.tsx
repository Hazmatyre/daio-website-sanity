import { Button } from "../ui/button";
import Image from "next/image";
import imgHero from "/images/mybio-bio-toilet/homepage-daio-international-nagoya.webp"
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ImageProps = {
  src: string | StaticImport;
  alt: string;
};

type Props = HTMLDivElement & {
  subtitle?: string;
  heading: string;
  description: React.ReactNode;
  image: ImageProps;
  imageCaption?: string
  buttons: React.ReactNode[]
};

export type Layout90Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;


export const Layout90 = (props: Layout90Props) => {
  const { subtitle, heading, description, image, buttons, imageCaption, className } = {
    ...Layout90Defaults,
    ...props,
  };
  return (
    <section id={props.id} className={cn("px-[5%] md:px-16 py-16 md:pb-24 lg:pb-28", className)}>
      <div className="container grid grid-cols-1 items-start justify-between gap-x-12 gap-y-8 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:gap-x-20">
        <div className=" flex md:items-start flex-col w-fit md:ml-auto">
          {subtitle &&
            <h1 className="text-left block type-regular font-semibold mb-3 md-4">{subtitle}</h1>
          }
          <h2 className="/leading-[1.2] type-mobile-h1 md:type-desktop-h1 whitespace-pre-line tracking-normal flex md:justify-end w-full">{heading}</h2>
        </div>
        <div className="">
          <p className="type-regular max-md:text-left whitespace-pre-line">{description}</p>
          <div className="flex mt-8 gap-3 justify-start flex-wrap">
            {buttons}
          </div>
        </div>
      </div>
      <div className="relative aspect-video container mt-14 md:mt-18 lg:mt-20">
        <div className="overflow-hidden relative w-full h-fit">
          {image && <Image
            src={image?.src}
            // className="w-full object-cover hover:scale-105 transition-transform ease-linear duration-2000"
            className="w-full object-cover rounded-lg shadow-xxsmall"
            alt={image?.alt || ""}
            priority
            sizes="(max-width: 1440px) 89vw, 75vw"
            quality={30}
          />}
        </div>
        {imageCaption && <p className="type-tiny uppercase font-medium text-gray-400/90 lg:tracking-wider lg:mt-2.5 mt-3 leading-normal tracking-widest">{imageCaption}</p>}
      </div>
    </section>
  );
};

export const Layout90Defaults: Layout90Props = {
  subtitle: "MyBio Bio-Toilet",
  heading: "Nature's call\nanswered sustainably.",
  description:
    "Acquire self-sustainable bio-toilets that do not require sewage. Our MyBio toilets, designed with Japanese technology, are installed in various prefectures in Japan including Mount. Fuji.",
  image: {
    src: imgHero,
    alt: "DAIO International MyBio toilet in Nagoya, Japan.",
  },
  imageCaption: "MT. TATESHINA TRAILHEAD PARKING LOT, SUZURAN PASS, CHINO CITY, NAGANO PREFECTURE",
  buttons: [
    <Link key={1} href="#contact-us"><Button size={"lg"} variant={"default"}>Contact Us</Button></Link>,
    <Link key={2} href="#bio-toilet-models"><Button size={"lg"} variant={"secondary"}>View Models</Button></Link>
  ]
};

Layout90.displayName = "Layout90";