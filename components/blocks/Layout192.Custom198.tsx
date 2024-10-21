import { Button } from "../ui/button";
import { RxChevronRight } from "react-icons/rx";
import Image from "next/image";
import img1 from "/images/mybio-bio-fertiliser/bio-fertiliser-samples.webp"
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import iconRecycle from '/images/PhRecycleLight.svg'
import iconEnergy from '/images/CarbonEnergyRenewable.svg'
import Link from "next/link";

type SubHeadingProps = {
  icon?: StaticImport
  title: string;
  description: string;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  subHeadings: SubHeadingProps[];
  buttons: React.ReactNode[];
  image: React.ComponentProps<typeof Image>;
};

export type Layout192Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Layout192 = (props: Layout192Props) => {
  const { tagline, heading, description, buttons, image, subHeadings } = {
    ...Layout192Defaults,
    ...props,
  } as Props;
  return (
    <header className="px-[5%] md:px-16 py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div className="order-2 md:order-1 rounded-lg overflow-hidden≈">
            <Image
              className="w-full object-cover shadow-xxlarge rounded-lg" {...image}
              alt={image.alt || ""}
              quality={30}
              sizes="(max-width: 767px) 90vw, (max-width: 1439px) 34vw, 680px"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="mb-3 type-regular font-semibold md:mb-4">{tagline}</p>
            <h2 className="mb-5 type-mobile-h2 lg:type-desktop-h2 font-bold md:mb-6">{heading}</h2>
            <p className="mb-6 md:mb-8 type-regular font-medium md:type-medium whitespace-pre-line">{description}</p>
            <div className="grid grid-cols-1 gap-5 py-2 md:grid-cols-2 ">
              {subHeadings.map((subHeading, index) => (
                <div key={index} className="no-overflow-anchoring">
                  <h3 className="mb-3 type-mobile-h6 font-bold leading-[1.4] md:mb-4 md:type-desktop-h6 flex gap-x-3 md:max-lg:flex-wrap gap-y-2">
                    {subHeading.icon && <Image alt="" src={subHeading.icon} className="size-8"></Image>}
                    {subHeading.title}
                  </h3>
                  <p className="type-regular">{subHeading.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex gap-x-4 md:mt-8">
              {buttons}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};


export const Layout192Defaults: Layout192Props = {
  tagline: "MyBio Bio-Fertiliser",
  heading: "Urine-Based Organic Bio-Fertiliser: A Sustainable Solution for Crop Growth.",
  description:
    `We handle collection of human and animal waste urine to process into odourless bio-fertiliser available in both liquid and powdered forms.

    The 400L to 500L of urine excreted per year per person contains sufficient plant nutrients to grow 250kg of grain, which is sufficient to support one person for a year.`,
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
    // <Link href="/#contact-us" key={"button1"}><Button variant={"default"} size={"lg"}>Learn about Bio-Fertiliser</Button></Link>
    <Link href="/#contact-us" key={"button1"}><Button variant={"default"} size={"lg"}>Contact Us</Button></Link>,
    <Link href="/mybio/biofertiliser" key={"button1"}><Button variant={"secondary"} size={"lg"}>Learn More</Button></Link>

  ],
  // buttons: [
  //   { title: "Button", variant: "secondary" },
  //   {
  //     title: "Button",
  //     variant: "link",
  //     size: "link",
  //     iconRight: <RxChevronRight className="size-6" />,
  //   },
  // ],
  image: {
    src: img1,
    alt: "Placeholder image",
  },
};

Layout192.displayName = "Layout192";
