import { Button } from "../ui/button";
import clsx from "clsx";
import Link from "next/link";
import { BiCheck } from "react-icons/bi";

type Feature = {
  text: string;
  items: React.ReactNode[];
};

type FeatureCategory = {
  title?: string;
  features: Feature[];
};

type PricingPlan = {
  planName: string;
  monthlyPrice: string;
  description: string;
  button: React.ReactNode
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  pricingPlans: PricingPlan[];
  featureCategories: FeatureCategory[];
};

export type Pricing21Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Pricing21 = (props: Pricing21Props) => {
  const { tagline, heading, description, pricingPlans, featureCategories } = {
    ...Pricing21Defaults,
    ...props,
  } as Props;
  return (
    <section className="px-[5%] md:px-16 py-16 md:py-24 lg:py-28" id={props.id}>
      <div className="container">
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          {tagline && <p className="mb-3 font-semibold md:mb-4">{tagline}</p>}
          <h2 className="mb-5 md:mb-6 type-mobile-h2 md:type-desktop-h2">{heading}</h2>
          {description && <p className="md:text-md">{description}</p>}
        </div>
        <div className="w-full">
          <div className="max-lg:sticky top-5 grid grid-cols-3 border-border bg-white md:grid-cols-[1.5fr_1fr_1fr_1fr] rounded-lg shadow-medium z-20 w-full border">
            <div className="hidden md:block" />
            {pricingPlans.map((plan, index) => (
              <PricingPlan key={index} {...plan} index={index} />
            ))}
          </div>
          <FeaturesSection featureCategories={featureCategories} />
        </div>
      </div>
    </section >
  );
};

const PricingPlan = ({
  planName,
  monthlyPrice,
  description,
  button,
  index,
}: PricingPlan & { index: number }) => {
  return (
    <div
      className={clsx(
        "flex h-full flex-col justify-start border-border px-4 py-4 sm:px-4 sm:py-6 lg:px-6 lg:py-8",
        {
          "border-0 md:border-l": index === 0,
          "border-l": index > 0,
        },
      )}
    >
      <div>
        <h2 className="type-mobile-h6 md:type-desktop-h6">{planName}</h2>
        <div className="my-3 md:my-4">
          <p className="type-mobile-h4 md:type-mobile-h1">
            {monthlyPrice}
          </p>
          {/* <p className="font-bold">Per month</p> */}
        </div>
      </div>
      <p className="type-tiny font-medium tracking-wider lg:type-regular md:tracking-normal">{description}</p>
      <div className="pt-6 md:pt-8 mt-auto">
        {button}
      </div>
    </div>
  );
};

const FeaturesSection = ({ featureCategories }: { featureCategories: FeatureCategory[] }) => {
  return (
    <div>
      {featureCategories.map((featureCategory, index) => (
        <div key={index}>
          {featureCategory.title && (
            <div className="border-b border-border-primary py-5">
              <h3 className="type-mobile-h6 md:type-desktop-h6">
                {featureCategory.title}
              </h3>
            </div>
          )}
          {featureCategory.features.map((feature, index) => (
            <div
              key={index}
              className="grid grid-cols-3 items-stretch border-l border-r border-l-transparent border-r-transparent border-b border-border md:grid-cols-[1.5fr_1fr_1fr_1fr]"
            >
              <p className="col-span-3 row-span-1 border-b border-border-primary py-4 pr-4 md:col-span-1 md:border-0 md:pr-6 type-regular">
                {feature.text}
              </p>
              {feature.items.map((item, index) => (
                <div
                  key={index}
                  className={clsx(
                    "flex items-center justify-center border-border-primary px-4 py-4 text-center md:px-6",
                    {
                      "border-0 md:border-l": index === 0,
                      "border-l": index > 0,
                    },
                  )}
                >
                  <p className="font-semibold type-regular">{item}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export const Pricing21Defaults: Pricing21Props = {
  // tagline: "Tagline",
  heading: "Bio-Toilet Specification",
  description: "",
  pricingPlans: [
    {
      planName: "Premium",
      monthlyPrice: "PK2B",
      description: "One room with toilet, one with urinal.",
      button: <Link href={"#contact-us"}><Button size={"sm"} className="max-md:type-tiny max-w-full">Contact Us</Button></Link>
    },
    {
      planName: "Essential",
      monthlyPrice: "PK2",
      description: "Comes with urinal in the same room.",
      button: <Link href={"#contact-us"}><Button size={"sm"} className="max-md:type-tiny max-w-full">Contact Us</Button></Link>
    },
    {
      planName: "Basic",
      monthlyPrice: "PK1",
      description: "Basic unit.",
      button: <Link href={"#contact-us"}><Button size={"sm"} className="max-md:type-tiny max-w-full">Contact Us</Button></Link>
    },
  ],
  featureCategories: [
    {
      title: "Features",
      features: [
        {
          text: "Digestive Basin / Urine Tank Capacity",
          items: ["619L / 200L", "619L / 200L,", "619L / 100L"]
        },
        {
          text: "Dimensions",
          items: ["w300cm * d190cm * h280cm", "w190cm * d291cm * h280cm", "w135cm * d290cm * h280cm"]
        },
        {
          text: "Weight",
          items: ["1250kg", "1100kg,", "950kg"]
        },
        {
          text: "Power Supply",
          items: ["AC 100V", "AC 100V", "AC 100V"]
        },
        {
          text: "Startup Power Consumption",
          items: ["880w", "880w", "880w"]
        },
        {
          text: "Constant Power Consumption",
          items: ["260w", "260w", "260w"]
        },
        {
          text: "Capacity (uses per day)",
          items: ["80 - 100", "80 - 100", "80 - 100"]
        },
        {
          text: "Optional Bidet/Washlet",
          items: ["Add on built-in washlet", "Add on built-in washlet", "External pump for washlet"]
        },
        {
          text: "Optional sink available",
          items: [
            <BiCheck key={1} className="size-6" />,
            <BiCheck key={2} className="size-6" />,
            <BiCheck key={3} className="size-6" />,
          ]
        }
      ]
    }
  ],
};

Pricing21.displayName = "Pricing21";
