import { Button } from "../ui/button";
import { RxChevronRight } from "react-icons/rx";
import Image from "next/image";
import img1 from "/images/mybio-bio-fertiliser/bio-fertiliser-samples.webp"
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import iconRecycle from '/images/PhRecycleLight.svg'
import iconEnergy from '/images/CarbonEnergyRenewable.svg'

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
    <header className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div className="order-2 md:order-1 h-full rounded-lg overflow-hidden shadow-xxlarge">
            <Image
              className="w-full object-fit" {...image}
              alt={image.alt || ""}
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="mb-3 type-regular font-semibold md:mb-4">{tagline}</p>
            <h2 className="mb-5 type-mobile-h2 lg:type-desktop-h2 font-bold md:mb-6">{heading}</h2>
            <p className="mb-6 md:mb-8 type-regular font-medium md:type-medium">{description}</p>
            <div className="grid grid-cols-1 gap-6 py-2 md:grid-cols-2">
              {subHeadings.map((subHeading, index) => (
                <div key={index} className="no-overflow-anchoring">
                  <h3 className="mb-3 type-mobile-h6 font-bold leading-[1.4] md:mb-4 md:type-desktop-h6 flex gap-x-3">
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
  tagline: "Tagline",
  heading: "Medium length section heading goes here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
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
    <Button key={"button1"} variant={"default"} size={"lg"}>Learn about Bio-Fertiliser</Button>
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
