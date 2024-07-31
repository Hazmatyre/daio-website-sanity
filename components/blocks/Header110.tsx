import { Button } from "../ui/button";
import clsx from "clsx";
import Image from "next/image";
import img1 from "/images/mybio-bio-toilet/man-overlooking-r21.webp"
import img2 from "/images/mybio-bio-toilet/model-opening-r21.webp"
import Link from "next/link";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  description: string;
  buttons: React.ReactNode
  images: ImageProps[];
};

export type Header110Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Header110 = (props: Header110Props) => {
  const { heading, description, buttons, images } = {
    ...Header110Defaults,
    ...props,
  } as Props;
  return (
    <header className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container grid grid-cols-1 gap-12 lg:grid-cols-[0.5fr_1fr] lg:gap-16">
        <div className="flex h-full flex-col justify-start">
          <h2 className="mb-5 md:mb-6 type-mobile-h2 md:desktop-h2">{heading}</h2>
          <div className="ml-[7.5%]">
            <p className="type-regular whitespace-pre-line">{description}</p>
            <div className="mt-6 flex gap-4 md:mt-8 flex-wrap">
              {buttons}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-[1fr_0.75fr] items-start gap-6 sm:gap-8">
          {images.map((image, index) => (
            <div key={index} className={clsx("w-full relative", {
              "aspect-[2/3]": index === 0,
              "aspect-square": index !== 0,
            })}>
              <Image
                src={image.src}
                alt={image.alt || ""}
                className={clsx("size-full object-cover rounded-lg")}
                fill
              />
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export const Header110Defaults: Header110Props = {
  heading: "How does it work?",
  description:
    `The core of our toilets is the Bio R-21 unit the size of a small car engine.  It maintains the perfect balance of temperature, water content, and oxygen for the fermenting and decomposition of solid human waste. The bacteria is added once for the lifetime of the toilet, and only needs to be topped up at most a few times year.

    Reach out to us for more technical specifications.`,
  buttons: [
    <Link key={1} href="#contact-us"><Button key={1}>Contact Us</Button></Link>,
    <Link key={2} href="#bio-toilet-models"><Button key={1} variant={"secondary"}>View Models</Button></Link>

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
};

Header110.displayName = "Header110";
