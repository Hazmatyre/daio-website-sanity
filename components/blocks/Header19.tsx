import Image from "next/image";
import { Button } from "../ui/button";
import type { ButtonProps } from "@relume_io/relume-ui";
import imgTeam from '/images/homepage-team-2144.webp'
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Link from "next/link";

type ImageProps = {
  src: string | StaticImport;
  alt?: string;
};

type Props = {
  heading: string;
  description: string;
  buttons: React.ReactNode[];
  image: ImageProps;
};

export type Header19Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Header19 = (props: Header19Props) => {
  const { heading, description, buttons, image } = {
    ...Header19Defaults,
    ...props,
  } as Props;
  return (
    <header className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
          <div className="order-2 lg:order-1 overflow-hidden rounded-3xl block shadow-xxlarge">
            <Image
              src={image.src}
              quality={40}
              className="w-full object-cover" alt={image.alt || ""}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              width={338}
              height={190}
              loading="lazy"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="mb-5 type-mobile-h1 font-bold md:mb-6 md:type-desktop-h1">{heading}</h2>
            <p className="type-medium">{description}</p>
            <div className="mt-6 flex gap-x-4 md:mt-8">
              {buttons}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export const Header19Defaults: Header19Props = {
  heading: "Join us in preserving the planet's future.",
  description:
    "We are looking for like-minded individuals and groups who care about the environment and want to make a difference. Together, we can create a sustainable future for generations to come.",
  buttons: [
    <Link key={1} href="/#contact-us" className="block no-overflow-anchoring"><Button variant={"default"} size={"lg"} className="shadow-xxlarge">Contact Us</Button></Link>
  ],
  image: {
    src: imgTeam,
    alt: "DAIO International staff members photo.",
  },
};

Header19.displayName = "Header19";
