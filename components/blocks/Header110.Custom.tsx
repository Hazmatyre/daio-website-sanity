import { Button } from "../ui/button";
import clsx from "clsx";
import Image from "next/image";
import img1 from "/images/mybio-bio-toilet/man-overlooking-r21.webp"
import img2 from "/images/mybio-bio-toilet/model-opening-r21.webp"
import Link from "next/link";
import { cn } from "@/lib/utils";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  description: string;
  buttons: React.ReactNode
  images: ImageProps[];
  subtitle?: string
  bgImage?: ImageProps
};

export type Header110Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Header110Custom = (props: Header110Props) => {
  const { heading, description, buttons, images, subtitle, bgImage } = {
    ...Header110Defaults,
    ...props,
  } as Props;
  return (
    <header className={cn("px-[5%] md:px-16 py-16 md:py-24 lg:py-28 relative overflow-hidden bg-black", props.className)}>
      {bgImage &&
        // <div className="size-full">
          <Image priority className="opacity-35" sizes="100vw" quality={5} objectFit="cover" fill alt={bgImage.alt || ""} src={bgImage.src} />
        // </div>
      }
      <div className="relative z-10 container grid grid-cols-1 gap-12 lg:grid-cols-[0.5fr_1fr] lg:gap-16">
        <div className="flex h-full flex-col justify-start">
          {subtitle &&
            <p className="text-left font-semibold block type-regular text-background md:type-large">{subtitle}</p>
          }
          <h1 className="text-brand-naplesYellow mb-5 md:mb-6 lg:mb-[25%] xxl:mb-28 type-mobile-h2 md:type-desktop-h2">{heading}</h1>
          <div className="ml-[7.5%]">
            <p className="text-white type-regular whitespace-pre-line">{description}</p>
            <div className="mt-6 flex gap-4 md:mt-8 flex-wrap">
              {buttons}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-[1fr_0.75fr] items-start gap-2 md:gap-8">
          {images.map((image, index) => (
            <div key={index} className={clsx("w-full relative", {
              "aspect-[2/3]": index === 0,
              "aspect-square": index !== 0,
            })}>
              <Image
                src={image.src}
                alt={image.alt || ""}
                className={clsx(
                  "size-full object-cover rounded-lg",
                  index == 0 && "-rotate-12"
                )}
                quality={60}
                fill
                sizes={index == 0
                  ? "(max-width: 999px) 50vw, (max-width: 1439px) 30vw, 505px"
                  : "(max-width: 999px) 37vw,  (max-width: 1439px) 22vw, 375px"
                }
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

Header110Custom.displayName = "Header110Custom";
