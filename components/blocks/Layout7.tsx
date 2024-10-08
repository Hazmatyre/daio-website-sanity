import { Button } from "../ui/button";
import type { ButtonProps } from "@relume_io/relume-ui";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { RxChevronRight } from "react-icons/rx";
import Image from "next/image";
import imgPollution from '/images/pexels-ellocofish-12906459.jpg'
import iconRecycle from '/images/PhRecycleLight.svg'
import iconEnergy from '/images/CarbonEnergyRenewable.svg'
import Link from "next/link";
import { cn } from "@/lib/utils";

type ImageProps = {
  src: string | StaticImport;
  alt?: string;
};

type SubHeadingProps = {
  icon?: StaticImport
  title: string;
  description: React.ReactNode;
};

type Props = HTMLDivElement & {
  tagline: string;
  heading: string;
  description: React.ReactNode;
  subHeadings: SubHeadingProps[];
  buttons: React.ReactNode[];
  image: ImageProps;
  classNameHeaders: string;
  
};

export type Layout7Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Layout7 = (props: Layout7Props) => {
  const { tagline, heading, description, buttons, image, subHeadings, className, classNameHeaders } = {
    ...Layout7Defaults,
    ...props,
  };
  return (
    <section className={cn("px-[5%] md:px-16 py-16 md:py-24 lg:py-28", className)}>
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 type-regular font-semibold md:mb-4">{tagline}</p>
            <h2 className={cn("mb-5 type-mobile-h2 lg:type-desktop-h2 font-bold md:mb-6 bg-clip-text bg-gradient-to-r from-blue-500 to-brand-500 text-transparent", classNameHeaders)}>{heading}</h2>
            <p className="mb-6 md:mb-8 type-regular font-medium md:type-medium">{description}</p>
            <div className="grid grid-cols-1 gap-6 py-2 lg:grid-cols-2">
              {subHeadings?.map((subHeading, index) => (
                <div key={index} className="no-overflow-anchoring">
                  <h3 className={cn("mb-3 type-mobile-h6 font-bold leading-[1.4] md:mb-4 md:type-desktop-h6 flex gap-x-3 md:flex-col gap-y-2 text-brand-700", classNameHeaders)}>
                    {subHeading.icon && <Image alt="" src={subHeading.icon} className="size-8"></Image>}
                    {subHeading.title}
                  </h3>
                  <p className="type-regular">{subHeading.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-x-4 md:mt-8 flex-wrap gap-4">
              {buttons}
            </div>
          </div>
          {image &&
            <div className="rounded-3xl overflow-hidden shadow-xxlarge">
              <Image
                src={image.src}
                className="w-full object-cover"
                alt={image.alt || ""}
                quality={25}
                sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 33vw"
                width={338}
                height={422}
                loading="lazy"
              />
            </div>
          }
        </div>
      </div>
    </section>
  );
};

export const Layout7Defaults: Layout7Props = {
  tagline: "Our Vision",
  heading: "Dealing with Waste & Climate Change: Our Plans for a Sustainable Planet.",
  description:
    "At Daio International, our commitment lies in building a sustainable global future and striving for carbon neutrality by 2050. We strive to achieve a balance between financial success and social impact, envisioning a world where one does not have to choose between convenience and the well-being of the planet to pursue their goals and necessities.",
  subHeadings: [
    {
      icon: iconRecycle,
      title: "Recycling Human Waste",
      description:
        "Our MyBio Toilets do not require any piping for sewage. We collect and process urine into bio-fertiliser.",
    },
    {
      icon: iconEnergy,
      title: "Fuel From Trees",
      description:
        "We make eco-friendly bio-fuel from Pongamia tree seeds as an energy alternative to diesel and palm.",
    },
  ],
  buttons: [
    <Link key={1} href="/#contact-us" className="no-overflow-anchoring"><Button size={"lg"}>Contact Us</Button></Link>,
    <Link key={2} href="/about" className="no-overflow-anchoring"><Button size={"lg"} variant={"secondary"}>Our Team</Button></Link>,

  ],
  image: {
    src: imgPollution, alt: "Woman looking through polluted glass by Trevor Lawrence. https://www.pexels.com/photo/woman-looking-through-polluted-glass-12906459/",
  },
};

Layout7.displayName = "Layout7";
