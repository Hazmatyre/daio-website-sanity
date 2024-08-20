/* eslint-disable jsx-a11y/alt-text */
import Image, { StaticImageData } from "next/image";
import img1 from "/images/mybio-bio-toilet/toilet-mount-fuji/bio-toilet-fujisan01.jpg"
import img2 from "/images/mybio-bio-toilet/toilet-mount-fuji/bio-toilet-fujisan02.jpg"
import img3 from "/images/mybio-bio-toilet/toilet-mount-fuji/bio-toilet-fujisan03.jpg"
import img4 from "/images/mybio-bio-toilet/toilet-mount-fuji/bio-toilet-fujisan04.jpg"
import img5 from "/images/mybio-bio-toilet/toilet-mount-fuji/bio-toilet-fujisan06.jpg"
import img6 from "/images/mybio-bio-toilet/toilet-mount-fuji/bio-toilet-fujisan07.jpg"
import img7 from "/images/mybio-bio-toilet/toilet-mount-fuji/bio-toilet-fujisan08.jpg"
import img8 from "/images/mybio-bio-toilet/toilet-mount-fuji/bio-toilet-fujisan10.jpg"
import img9 from "/images/mybio-bio-toilet/toilet-mount-fuji/bio-toilet-fujisan11.jpg"
import img10 from "/images/mybio-bio-toilet/toilet-mount-fuji/bio-toilet-fujisan12.jpg"
import img11 from "/images/mybio-bio-toilet/toilet-mount-fuji/bio-toilet-fujisan13.jpg"
import img12 from "/images/mybio-bio-toilet/toilet-mount-fuji/bio-toilet-fujisan14.jpg"
import img13 from "/images/mybio-bio-toilet/toilet-mount-fuji/bio-toilet-fujisan15.jpg"

import { Gallery17 } from "@/components/blocks/Gallery17.Images";


const fujiSizes = "80vw, (min-width: 767px) 55vw, (min-width: 1000px) 42vw, (min-width: 1279px) 33vw, (min-width: 1439px) 30vw, (min-width: 1919px) 22vw"

const fujiSizesPortrait = "64vw, (min-width: 767px) 31vw, (min-width: 1000px) 23vw, (min-width: 1279px) 19vw, (min-width: 1439px) 16vw, (min-width: 1919px) 12vw"


const images: React.ComponentProps<typeof Image>[] = [
  {
    src: img1,
    alt: "",
    sizes: fujiSizes,
    quality: 10,
  },
  {
    src: img2,
    alt: "",
    sizes: fujiSizes,
    quality: 10,
  },
  {
    src: img3,
    alt: "",
    sizes: fujiSizes,
    quality: 10,
  },
  {
    src: img4,
    alt: "",
    sizes: fujiSizesPortrait,
    quality: 10,
  },
  {
    src: img5,
    alt: "",
    sizes: fujiSizesPortrait,
    quality: 10,
  },
  {
    src: img6,
    alt: "",
    sizes: fujiSizesPortrait,
    quality: 10,
  },
  {
    src: img7,
    alt: "",
    sizes: fujiSizes,
    quality: 10,
  },
  {
    src: img8,
    alt: "",
    sizes: fujiSizes,
    quality: 10,
  },
  {
    src: img9,
    alt: "",
    sizes: fujiSizes,
    quality: 10,
  },
  {
    src: img10,
    alt: "",
    sizes: fujiSizes,
    quality: 10,
  },
  {
    src: img11,
    alt: "",
    sizes: fujiSizes,
    quality: 10,
  },
  {
    src: img12,
    alt: "",
    sizes: fujiSizes,
    quality: 10,
  },
  {
    src: img13,
    alt: "",
    sizes: fujiSizes,
    quality: 10,
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

