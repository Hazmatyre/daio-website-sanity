import { RxChevronRight } from "react-icons/rx";
import { Button } from "../ui/button";
import Link from "next/link";
import img from "/images/mybio-bio-fertiliser/test-result.webp"
import Image from "next/image";

type Props = {
  slot1: React.ReactNode[];
  slot2: React.ReactNode[];
};

export type Layout1SlotProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Layout1Slot = (props: Layout1SlotProps) => {
  const { slot1, slot2 } = {
    ...Layout1SlotDefaults,
    ...props,
  } as Props;
  return (
    <section id={props.id} className="px-[5%] md:px-16 py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-2 lg:items-center lg:gap-x-12 xl:gap-x-20">
          <div>{slot1}</div>
          <div>{slot2}</div>
        </div>
      </div>
    </section>
  );
};

export const Layout1SlotDefaults: Layout1SlotProps = {
  slot1: [
    <>
      <p className="mb-3 type-regular font-semibold md:mb-4">{"Scientific Test"}</p>
      <h2 className=" type-mobile-h2 md:type-desktop-h2 mb-5 md:mb-6">Just as good as competing chemical fertilisers.</h2>
      <p className="type-medium mb-2 md:mb-10">
        Our Bio-Fertiliser is both eco-friendly and safe for the environment. Based on a 2021 experiment, our fertiliser is shown to be just as effective in plant growth, with no significant difference compared chemical-based fertiliser.
        <br/><br/>
        Our bio-fertiliser is also rated to be safe to be handled without safety equipment or gloves regardless of whether it is made from human or livestock urine.
      </p>
    </>,
    <div key={1}>
      <Link key={1} target="_blank" href="/docs/daio-fertiliser-test.pdf"><Button size={"lg"} key={1}>View Paper</Button></Link>
    </div>,
  ],
  slot2: [
    <div key={1}>
      <Image className="rounded-lg shadow-xxlarge" sizes="40vw" alt="some" src={img} />
    </div>
  ],
};
