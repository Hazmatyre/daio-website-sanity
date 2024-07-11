import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";

type ImageProps = {
  src: string;
  alt?: string;
};

type SectionProps = {
  icon: ImageProps;
  heading: string;
  description: string;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  sections: SectionProps[];
  buttons: ButtonProps[];
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
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container flex flex-col items-start">
        <div className="mb-12 grid grid-cols-1 items-start justify-between gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <div>
            <p className="mb-3 font-sans font-semibold md:mb-4">{tagline}</p>
            <h2 className="text-5xl font-serif whitespace-pre-line font-bold md:text-7xl lg:text-8xl tracking-tight">{heading}</h2>
          </div>
          <p className="md:text-md">{description}</p>
        </div>
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-2 xl:grid-cols-4 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          {sections.map((section, index) => (
            <div key={index} className="no-overflow-anchoring">
              <div className="mb-5 md:mb-6">
                <img src={section.icon.src} className="size-12" alt={section.icon.alt} />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl font-serif tracking-tight">
                {section.heading}
              </h3>
              <p className=" leading-7">{section.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex items-center gap-4 md:mt-14 lg:mt-16">
          {buttons.map((button, index) => (
            <Button
              key={index}
              variant={button.variant}
              size={button.size}
              iconRight={button.iconRight}
              iconLeft={button.iconLeft}
              className="no-overflow-anchoring"
            >
              {button.title}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Layout245Defaults: Layout245Props = {
  tagline: "Tagline",
  heading: "Little maintenance.\nZero sewage.",
  description:
    "Achieving up to 90% decomposition of human waste without water, our toilets are ideal for remote locations, nature reserves, events and disaster relief efforts with limited resources.",
  sections: [
    {
      icon: {
        src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
        alt: "Relume logo 1",
      },
      heading: "No cleanup",
      description:
        "Our provided bacteria decomposing up to 90% of waste mass removes the necessity for large septic tanks. Leftover waste may be further decomposed or be collected as a bio-fertiliser for crops.",
    },
    {
      icon: {
        src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
        alt: "Relume logo 2",
      },
      heading: "No unpleasant smells",
      description:
        "Waste is separated by the Bacillus bacteria, eliminating any unpleasant smells. (We've been to Japan to testify!)",
    },
    {
      icon: {
        src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
        alt: "Relume logo 3",
      },
      heading: "Water not needed",
      description:
        "Flushing does not require water. We provide the option of collecting rainwater for washing up and cleaning.",
    },
    {
      icon: {
        src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
        alt: "Relume logo 4",
      },
      heading: "Natural electricity",
      description:
        "The toilets receive enough power from solar, wind, or any alternative energy sources to satisty its low peak-wattage of 220w.",
    },
  ],
  buttons: [
    { title: "Button", variant: "secondary" },
    {
      title: "Button",
      variant: "link",
      size: "link",
      iconRight: <RxChevronRight className="size-6" />,
    },
  ],
};

Layout245.displayName = "Layout245";
