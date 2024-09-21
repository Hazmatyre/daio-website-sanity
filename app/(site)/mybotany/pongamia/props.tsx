/* eslint-disable jsx-a11y/alt-text */
import Image, { StaticImageData } from "next/image";
import img1 from "/images/mybotany-pongamia/img3.webp"
import img2 from "/images/mybotany-pongamia/img2.webp"
import img3 from "/images/mybotany-pongamia/img1.webp"
import img4 from "/images/mybotany-pongamia/img4.webp"
import img5 from "/images/mybotany-pongamia/img5.webp"
import img6 from "/images/mybotany-pongamia/img6.webp"
import img7 from "/images/mybotany-pongamia/img7.webp"
import img8 from "/images/mybotany-pongamia/img8.webp"
import img9 from "/images/mybotany-pongamia/img9.webp"
import img10 from "/images/mybotany-pongamia/img10.webp"

import { Gallery17 } from "@/components/blocks/Gallery17.Images";


// const fujiSizes = "(max-width: 768px) 64vw, (max-width: 1000px) 31vw, (max-width: 1280px) 100%, (max-width: 1440px) 100%, (max-width: 1920px) 100%, 100%"

const fujiSizes = "80vw, (min-width: 767px) 55vw, (min-width: 1000px) 42vw, (min-width: 1279px) 33vw, (min-width: 1439px) 30vw, (min-width: 1919px) 22vw"

const fujiSizesPortrait = "64vw, (min-width: 767px) 31vw, (min-width: 1000px) 23vw, (min-width: 1279px) 19vw, (min-width: 1439px) 16vw, (min-width: 1919px) 12vw"

const quality = 50


const images: React.ComponentProps<typeof Image>[] = [
  {
    src: img1,
    alt: "Back side of DAIO Pongamia Johor plantation with two people walking away from the viewer in the foreground.",
    sizes: fujiSizes,
    quality: quality,
  },
  {
    src: img2,
    alt: "Shot of the DAIO Pongamia Johor plantation showing a small river meandering through the property.",
    sizes: fujiSizes,
    quality: quality,
  },
  {
    src: img3,
    alt: "Man kneeling and arranging Pongamia seedlings to make them stand upright in impromptu brick structures.",
    sizes: fujiSizes,
    quality: quality,
  },
  {
    src: img4,
    alt: "Many people kneeling to help mix fertiliser.",
    sizes: fujiSizes,
    quality: quality,
  },
  {
    src: img5,
    alt: "Man in foreground examining soil sample in his palms while another man in the background observes besides him.",
    sizes: fujiSizes,
    quality: quality,
  },
  {
    src: img6,
    alt: "Men arranging a makeshift roof for the Pongamia seedlings to protect them from bad weather.",
    sizes: fujiSizes,
    quality: quality,
  },
  {
    src: img7,
    alt: "pH meter reading placed in the ground with two men half in frame kneeling to check.",
    sizes: fujiSizes,
    quality: quality,
  },
  {
    src: img8,
    alt: "Two men smiling with one holding a pH meter.",
    sizes: fujiSizes,
    quality: quality,
  },
  {
    src: img9,
    alt: "Men bending over to arrange fertiliser into plant bags.",
    sizes: fujiSizes,
    quality: quality,
  },
  {
    src: img10,
    alt: "Man kneeling arranging Pongamia seedlings into a bag ready with fertiliser.",
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
      <div className="h-80 md:aspect-video">
        <Image
          key={index}
          className="size-full object-cover rounded-lg shadow-xxlarge"
          {...img}
        />
      </div>
  }))
}

