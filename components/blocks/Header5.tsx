import { Button } from "../ui/button";
import type { ButtonProps } from "@relume_io/relume-ui";
import Image from "next/image";
import img from "/images/mybotany-pongamia/header5-pongamia-seeds.webp"
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Link from "next/link";

type ImageProps = {
  src: string | StaticImport;
  alt?: string;
};

type Props = {
  heading: string;
  subtitle?: string;
  description: React.ReactNode;
  buttons: React.ReactNode[];
  image: ImageProps;
};

export type Header5Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Header5 = (props: Header5Props) => {
  const { heading, subtitle, description, buttons, image } = {
    ...Header5Defaults,
    ...props,
  } as Props;
  return (
    <header className="relative px-[5%] md:px-16">
      <div className="container relative z-10 bg-transparent">
        <div className="flex max-h-[60rem] min-h-svh items-center py-16 md:py-24 lg:py-28">
          <div className="max-w-md">
            {subtitle &&
              <p className="text-left block type-regular text-background md:type-large mb-3 md-4">{subtitle}</p>
            }
            <h1 className="mb-5 type-mobile-h1 md:type-desktop-h1 text-primary md:mb-6">
              {heading}
            </h1>
            <p className="type-regular md:font-medium text-base text-background md:text-md">{description}</p>
            <div className="mt-6 flex gap-x-4 md:mt-8 flex-wrap gap-4">
              {buttons}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0">
        <Image
          src={image.src}
          className="size-full object-cover"
          alt={image.alt || ""}
          sizes="100vw"
          quality={5}
          priority
        />
        <div className="absolute inset-0 bg-black/65" />
      </div>
    </header>
  );
};

export const Header5Defaults: Header5Props = {
  heading: "Harvest bio-fuel from trees that heal your land.",
  subtitle: "MyBotany Pongamia Pinnata",
  description:
    "The cleanest source of bio-fuel comes from the seeds of the versatile Pongamia Pinnata tree. We plant them non-invasively on your land with little nutritional maintenance to improve and restore infertile and damaged soil no matter how extreme environmental conditions may be.",
  buttons: [
    <Link passHref href="#contact-us" key={1}><Button size={"lg"}>Partner With Us</Button></Link>,
    <Link passHref href="#tgt-program" key={2}><Button size={"lg"} className="dark">Pongamia In Malaysia</Button></Link>
  ],
  image: {
    src: img,
    alt: "Pongamia Seeds",
  },
};
