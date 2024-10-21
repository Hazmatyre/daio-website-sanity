import Link from "next/link";
import { Button } from "../ui/button";

type Props = {
  heading: string;
  description: string;
  buttons: React.ReactNode
};

export type Cta7Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Cta7 = (props: Cta7Props) => {
  const { heading, description, buttons } = {
    ...Cta7Defaults,
    ...props,
  } as Props;
  return (
    <section id="relume" className="px-[5%] md:px-16 py-16 md:py-24 lg:py-28 bg-brand-200">
      <div className="container lg:max-w-xl grid w-full grid-cols-1 justify-between gap-6 md:grid-cols-[1fr_max-content] md:gap-x-12 md:gap-y-8 lg:gap-x-20 items-center">
        <div className="md:mr-12 lg:mr-0">
          <div className="w-full max-w-lg">
            <h2 className="mb-3 type-mobile-h3 md:type-desktop-h3 text-brand-900">
              {heading}
            </h2>
            <p className="type-medium text-brand-900">{description}</p>
          </div>
        </div>
        <div className="flex items-start justify-start gap-4">
          {buttons}
        </div>
      </div>
    </section>
  );
};

export const Cta7Defaults: Cta7Props = {
  heading: "Medium length heading goes here",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  buttons:
    <Link key={1} href="#contact-us"><Button key={1}>Contact Us</Button></Link>
};
