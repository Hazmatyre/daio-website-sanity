/* eslint-disable jsx-a11y/alt-text */
import { Button } from "../ui/button";
import Image from "next/image";
import img1 from "/images/img-bio-toilet-2068.jpg"
import img2 from "/images/mybio-bio-toilet/work-with-us/img-toilet-director.webp"
import img3 from "/images/mybio-bio-toilet/work-with-us/toilet-closed.webp"
import img4 from "/images/mybio-bio-toilet/work-with-us/toilet-employee-sitting.webp"
import img5 from "/images/mybio-bio-toilet/work-with-us/toilet-employee-thumbs-up.webp"
import img6 from "/images/mybio-bio-toilet/work-with-us/toilet-urinal.webp"
import Link from "next/link";

type Props = {
  heading: string;
  description: string;
  buttons: React.ReactNode
  images: React.ComponentProps<typeof Image>[]
  images2: React.ComponentProps<typeof Image>[]
};

export type Header76Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Header76 = (props: Header76Props) => {
  const { heading, description, buttons, images, images2 } = {
    ...Header76Defaults,
    ...props,
  } as Props;
  return (
    <div className="grid grid-cols-1 gap-y-16 pt-16 md:grid-flow-row md:pt-24 lg:grid-flow-col lg:grid-cols-2 lg:items-center lg:pt-0">
      <div className="mx-[5%] max-w-[40rem] justify-self-start lg:ml-[5vw] lg:mr-20 lg:justify-self-end relative">
        <h2 className="mb-5 md:mb-6 type-mobile-h2 md:type-desktop-h2">{heading}</h2>
        <p className="type-regular font-medium md:type-medium ">{description}</p>
        <div className="mt-6 flex gap-x-4 md:mt-8">
          {buttons}
        </div>
      </div>
      <div className="h-[30rem] overflow-y-clip pl-[5vw] pr-[5vw] md:h-[40rem] lg:h-screen lg:pl-0 border-border">
        <div className="grid w-full grid-cols-2 gap-x-4">
          <div className="-mt-[120%] grid size-full animate-loop-vertically2 columns-2 grid-cols-1 gap-4 self-center">
            {images.map((image, index) => (
              <div key={index} className="grid size-full grid-cols-1 gap-4 no-overflow-anchoring">
                <div className="relative w-full pt-[120%]">
                  <Image
                    className="absolute inset-0 size-full object-cover rounded-lg shadow-xxlarge"
                    {...image}
                    sizes="(max-width: 999px) 43vw, 21vw"
                    quality={30}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="grid size-full animate-loop-vertically2 grid-cols-1 gap-4">
            {images2.map((image, index) => (
              <div key={index} className="grid size-full grid-cols-1 gap-4 no-overflow-anchoring">
                <div className="relative w-full pt-[120%]">
                  <Image
                    className="absolute inset-0 size-full object-cover rounded-lg shadow-xxlarge"
                    {...image}
                    sizes="(max-width: 999px) 43vw, 21vw"
                    quality={30}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const defaultImages = [
  {
    src: img1.src,
    width: img1.width,
    height: img1.height,
    alt: "Placeholder image 1",
  },
  {
    src: img2.src,
    width: img2.width,
    height: img2.height,
    alt: "Placeholder image 2",
  },
  {
    src: img3.src,
    width: img3.width,
    height: img3.height,
    alt: "Placeholder image 3",
  },
  {
    src: img4.src,
    width: img4.width,
    height: img4.height,
    alt: "Placeholder image 4",
  },
  {
    src: img5.src,
    width: img5.width,
    height: img5.height,
    alt: "Placeholder image 5",
  },
  {
    src: img6.src,
    width: img6.width,
    height: img6.height,
    alt: "Placeholder image 6",
  },
]

export const Header76Defaults: Header76Props = {
  heading: "Join us in preserving the planet’s future.",
  description:
    "We are looking for collaborators and organisations who care about the environment and want to make a difference. Together, we can create a sustainable future for generations to come.",
  buttons: [
    <Link key={1} href="#contact-us" className="no-overflow-anchoring"><Button size={"lg"}>Contact Us</Button></Link>,
    <Link key={2} href="/about" className="no-overflow-anchoring"><Button size={"lg"} variant={"secondary"}>Our Team</Button></Link>,  ],
  images: [...defaultImages, ...defaultImages],
  images2: [
    { ...defaultImages[4] },
    { ...defaultImages[5] },
    { ...defaultImages[0] },
    { ...defaultImages[1] },
    { ...defaultImages[2] },
    { ...defaultImages[3] },
    { ...defaultImages[4] },
    { ...defaultImages[5] },
    { ...defaultImages[0] },
    { ...defaultImages[1] },
    { ...defaultImages[2] },
    { ...defaultImages[3] },
  ]
};

Header76.displayName = "Header76";
