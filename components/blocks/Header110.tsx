import { Button } from "../ui/button";
import clsx from "clsx";
import Image from "next/image";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  description: string;
  buttons: React.ReactNode
  images: ImageProps[];
};

export type Header110Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Header110 = (props: Header110Props) => {
  const { heading, description, buttons, images } = {
    ...Header110Defaults,
    ...props,
  } as Props;
  return (
    <header className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container grid grid-cols-1 gap-12 md:grid-cols-[0.5fr_1fr] md:gap-16">
        <div className="flex h-full flex-col justify-between">
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h1>
          <div className="ml-[7.5%]">
            <p className="md:text-md">{description}</p>
            <div className="mt-6 flex gap-4 md:mt-8 md:flex-wrap">
              {buttons}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-[1fr_0.75fr] items-start gap-6 sm:gap-8">
          {images.map((image, index) => (
            <div key={index} className={clsx("w-full relative", {
              "aspect-[2/3]": index === 0,
              "aspect-square": index !== 0,
            })}>
              <Image
                src={image.src}
                alt={image.alt || ""}
                className={clsx("size-full object-cover rounded-lg")}
                fill
              />
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export const Header110Defaults: Header110Props = {
  heading: "Medium length hero heading goes here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  buttons: [
    <Button key={1}> Some Button</Button>
  ],
  // buttons: [
  //   { title: "Button" },
  //   {
  //     title: "Button",
  //     variant: "secondary"
  //   }],
  images: [
    {
      src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
      alt: "Placeholder image 1",
    },
    {
      src: "https://relume-assets.s3.amazonaws.com/placeholder-image-landscape.svg",
      alt: "Placeholder image 2",
    },
  ],
};

Header110.displayName = "Header110";
