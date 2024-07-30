import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { RxChevronRight } from "react-icons/rx";
import parse from 'html-react-parser';

type ImageProps = {
  src: string;
  alt?: string;
};

type SectionProps = {
  icon: ImageProps;
  heading: string;
  description: string;
};

type Props = React.HTMLAttributes<"div"> & {
  tagline: string;
  heading: string;
  description: string;
  sections: SectionProps[];
  buttons?: React.ReactNode[];
};

export type Layout245Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Layout245 = (props: Layout245Props) => {
  const {
    tagline,
    heading,
    description,
    sections = [],
    buttons = [],
  } = { ...props, ...Layout245Defaults };
  return (
    <section className={cn("px-[5%] py-16 md:py-24 lg:py-28", props.className)}>
      <div className="container flex flex-col items-start">
        <div className="mb-12 grid grid-cols-1 items-start justify-between gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <div>
            <p className="mb-3 type-regular font-semibold md:mb-4">{tagline}</p>
            <h2 className="type-mobile-h2 md:type-desktop-h2 whitespace-pre-line font-bold tracking-tight">{heading}</h2>
          </div>
          <p className="type-large md:font-medium">{description}</p>
        </div>
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-2 xl:grid-cols-4 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          {sections.map((section, index) => (
            <div key={index} className="no-overflow-anchoring">
              <div className="mb-5 md:mb-6">
                <img src={section.icon.src} className="size-12" alt={section.icon.alt} />
              </div>
              <h3 className="mb-5 md:mb-6 type-mobile-h5 md:type-desktop-h5 tracking-tight">
                {section.heading}
              </h3>
              <p className="type-regular leading-relaxed">{parse(section.description)}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex items-center gap-4 md:mt-14 lg:mt-16">
          {buttons}
        </div>
      </div>
    </section>
  );
};

export const Layout245Defaults: Layout245Props = {
  tagline: "It's been done before. Why us?",
  heading: "Little maintenance.\nZero sewage.",
  description:
    "Requiring no sewage or water, our toilets are ideal for remote locations, nature reserves, events and disaster relief efforts with limited resources.",
  sections: [
    {
      icon: {
        src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
        alt: "Relume logo 1",
      },
      heading: "No need to empty the toilet.",
      description:
        "Our provided bacteria lasting for <b>months decomposes up to 90% of human waste</b>, eliminating the necessity for large septic tanks. Leftover waste may be further decomposed or be collected as a bio-fertiliser for crops.",
    },
    {
      icon: {
        src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
        alt: "Relume logo 2",
      },
      heading: "No unpleasant smells.",
      description:
        "Waste is separated by the Bacillus bacteria, eliminating any foul odours. (We personally testify to this!)",
    },
    {
      icon: {
        src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
        alt: "Relume logo 3",
      },
      heading: "Water not needed.",
      description:
        "Flushing does not require water. We provide the option of collecting rainwater for washing up and cleaning.",
    },
    {
      icon: {
        src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
        alt: "Relume logo 4",
      },
      heading: "Electricity without the guilt.",
      description:
        "Harness energy from nature with solar panels or wind turbines. Our toilets only consume up to 260w at peak loads to maintain a suitable environment for the bacteria.",
    },
  ],
  buttons: [
    <Button key={"button1"} variant={"secondary"}>View Bio-Toilet Models</Button>
  ]
  // buttons: [
  //   { title: "Button", variant: "secondary" },
  //   {
  //     title: "Button",
  //     variant: "link",
  //     size: "link",
  //     iconRight: <RxChevronRight className="size-6" />,
  //   },
  // ],
};

Layout245.displayName = "Layout245";
