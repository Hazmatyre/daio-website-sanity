import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import Image from "next/image";
import img1 from "/images/img-bio-toilet-2068.jpg"
import img2 from "/images/mybio-bio-toilet/work-with-us/img-toilet-director.webp"
import img3 from "/images/mybio-bio-toilet/work-with-us/toilet-closed.webp"
import img4 from "/images/mybio-bio-toilet/work-with-us/toilet-employee-sitting.webp"
import img5 from "/images/mybio-bio-toilet/work-with-us/toilet-employee-thumbs-up.webp"
import img6 from "/images/mybio-bio-toilet/work-with-us/toilet-urinal.webp"

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
  images: ImageProps[];
  images2: ImageProps[];
};

export type Header76Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Header76 = (props: Header76Props) => {
  const { heading, description, buttons, images, images2 } = {
    ...Header76Defaults,
    ...props,
  } as Props;
  return (
    <header className="grid grid-cols-1 gap-y-16 pt-16 md:grid-flow-row md:pt-24 lg:grid-flow-col lg:grid-cols-2 lg:items-center lg:pt-0">
      <div className="mx-[5%] max-w-[40rem] justify-self-start lg:ml-[5vw] lg:mr-20 lg:justify-self-end">
        <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">{heading}</h1>
        <p className="md:text-md">{description}</p>
        <div className="mt-6 flex gap-x-4 md:mt-8">
          {buttons.map((button, index) => (
            <Button key={index} {...button}>
              {button.title}
            </Button>
          ))}
        </div>
      </div>
      <div className="h-[30rem] overflow-hidden pl-[5vw] pr-[5vw] md:h-[40rem] lg:h-screen lg:pl-0">
        <div className="grid w-full grid-cols-2 gap-x-4">
          <div className="-mt-[120%] grid size-full animate-loop-vertically2 columns-2 grid-cols-1 gap-4 self-center">
            {images.map((image, index) => (
              <div key={index} className="grid size-full grid-cols-1 gap-4">
                <div className="relative w-full pt-[120%]">
                  <Image
                    className="absolute inset-0 size-full object-cover"
                    src={image.src}
                    alt={image.alt || ""}
                    fill
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="grid size-full animate-loop-vertically2 grid-cols-1 gap-4">
            {images2.map((image, index) => (
              <div key={index} className="grid size-full grid-cols-1 gap-4">
                <div className="relative w-full pt-[120%]">
                  <Image
                    className="absolute inset-0 size-full object-cover"
                    src={image.src}
                    alt={image.alt || ""}
                    fill
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export const Header76Defaults: Header76Props = {
  heading: "Medium length hero heading goes here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  buttons: [{ title: "Button" }, { title: "Button", variant: "secondary" }],
  images: [
    {
      src: img1.src,
      alt: "Placeholder image 1",
    },
    {
      src: img2.src,
      alt: "Placeholder image 2",
    },
    {
      src: img3.src,
      alt: "Placeholder image 3",
    },
    {
      src: img4.src,
      alt: "Placeholder image 4",
    },
    {
      src: img5.src,
      alt: "Placeholder image 5",
    },
    {
      src: img6.src,
      alt: "Placeholder image 6",
    },
  ],
  images2: [
    {
      src: img5.src,
      alt: "Placeholder image 1",
    },
    {
      src: img6.src,
      alt: "Placeholder image 6",
    },
    {
      src: img1.src,
      alt: "Placeholder image 2",
    },
    {
      src: img2.src,
      alt: "Placeholder image 3",
    },
    {
      src: img3.src,
      alt: "Placeholder image 1",
    },
    {
      src: img4.src,
      alt: "Placeholder image 1",
    },
  ]
};

Header76.displayName = "Header76";
