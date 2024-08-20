/* eslint-disable jsx-a11y/alt-text */
import Image, { StaticImageData } from "next/image";
import img1 from "/images/mybotany-pongamia/img2.webp"
import img2 from "/images/mybotany-pongamia/img1.webp"
import img3 from "/images/mybotany-pongamia/img3.webp"
import img4 from "/images/mybotany-pongamia/img4.webp"
import img5 from "/images/mybotany-pongamia/img5.webp"
import img6 from "/images/mybotany-pongamia/img6.webp"
import img7 from "/images/mybotany-pongamia/img7.webp"
import img8 from "/images/mybotany-pongamia/img8.webp"
import img9 from "/images/mybotany-pongamia/img9.webp"
import img10 from "/images/mybotany-pongamia/img10.webp"

import { Gallery17 } from "@/components/blocks/Gallery17.Images";


const fujiSizes = "80vw, (min-width: 767px) 55vw, (min-width: 1000px) 42vw, (min-width: 1279px) 33vw, (min-width: 1439px) 30vw, (min-width: 1919px) 22vw"

const fujiSizesPortrait = "64vw, (min-width: 767px) 31vw, (min-width: 1000px) 23vw, (min-width: 1279px) 19vw, (min-width: 1439px) 16vw, (min-width: 1919px) 12vw"

const quality = 50


const images: React.ComponentProps<typeof Image>[] = [
  {
    src: img1,
    alt: "",
    sizes: fujiSizes,
    quality: quality,
  },
  {
    src: img2,
    alt: "",
    sizes: fujiSizes,
    quality: quality,
  },
  {
    src: img3,
    alt: "",
    sizes: fujiSizes,
    quality: quality,
  },
  {
    src: img4,
    alt: "",
    sizes: fujiSizes,
    quality: quality,
  },
  {
    src: img5,
    alt: "",
    sizes: fujiSizes,
    quality: quality,
  },
  {
    src: img6,
    alt: "",
    sizes: fujiSizes,
    quality: quality,
  },
  {
    src: img7,
    alt: "",
    sizes: fujiSizes,
    quality: quality,
  },
  {
    src: img8,
    alt: "",
    sizes: fujiSizes,
    quality: quality,
  },
  {
    src: img9,
    alt: "",
    sizes: fujiSizes,
    quality: quality,
  },
  {
    src: img10,
    alt: "",
    sizes: fujiSizes,
    quality: quality,
  },
]

export const Props_Pongamia_Gallery17: React.ComponentProps<typeof Gallery17> = {
  headingTag: "h2",
  heading: null,
  description: null,
  topSectionClassName: "!pt-0",
  bottomSectionClassName: "!my-0",
  slides: images.map((img, index) => ({
    cardContent:
      // eslint-disable-next-line jsx-a11y/alt-text
      <Image
        key={index}
        className="size-full object-cover h-80 rounded-lg shadow-xxlarge"
        {...img}
      />
  }))
}

