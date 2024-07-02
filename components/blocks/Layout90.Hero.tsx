import { Button } from "../ui/button";
import Image from "next/image";
import imgHero from "/public/homepage-daio-international-nagoya.jpg"
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type ImageProps = {
  src: string | StaticImport;
  alt: string;
};

type Props = {
  heading: string;
  description: string;
  image: ImageProps;
};

export type Layout90Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;


export const Layout90 = (props: Layout90Props) => {
  const { heading, description, image } = {
    ...Layout90Defaults,
    ...props,
  } as Props;
  return (
    <section className="px-[5%] py-16 md:pb-24 lg:pb-28">
      <div className="container xl:max-w-xl grid grid-cols-1 items-start justify-between gap-x-12 gap-y-8 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:gap-x-20">
        <h1 className="text-6xl font-serif font-bold leading-[1.2] md:text-6xl lg:text-8xl xl:text-10xl whitespace-pre-line tracking-normal flex md:justify-end">{heading}</h1>
        <div className="">
          <p className="md:text-md max-md:text-justify">{description}</p>
          <div className="flex mt-8 gap-x-3 justify-start">
            <Button size={"lg"} variant={"secondary"}>Learn More</Button>
            <Button size={"lg"} variant={"default"}>Get In Touch</Button>
          </div>
        </div>
      </div>
      <div className="relative aspect-video container mt-14 md:mt-18 lg:mt-20">
        <div className="overflow-hidden relative w-full h-full rounded-3xl">
          <Image
            src={image.src}
            // className="w-full object-cover hover:scale-105 transition-transform ease-linear duration-2000"
            className="w-full object-cover "
            alt={image.alt}
            fill
          />
        </div>
      </div>
    </section>
  );
};

export const Layout90Defaults: Layout90Props = {
  heading: "Engineered for\nMother Nature.",
  description:
    "We offer self-sustainable bio-toilets that do not require sewage. Our MyBio toilets, designed with Japanese technology, are installed in various prefectures in Japan including Mount. Fuji.",
  image: {
    src: imgHero,
    alt: "DAIO International MyBio toilet in Nagoya, Japan.",
  },
};

Layout90.displayName = "Layout90";