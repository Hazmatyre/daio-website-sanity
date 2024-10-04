/* eslint-disable jsx-a11y/alt-text */
import Image, { StaticImageData } from "next/image";

import { Gallery17 } from "@/components/blocks/Gallery17.Images";

import img1 from '/images/mybio-bio-fertiliser/gallery/img1-tomato.webp'
import img2 from '/images/mybio-bio-fertiliser/gallery/img2-shishito-pepper.webp'
import img3 from '/images/mybio-bio-fertiliser/gallery/img3-eggplant.webp'
import img4 from '/images/mybio-bio-fertiliser/gallery/img4-greenpepper.webp'
import img5 from '/images/mybio-bio-fertiliser/gallery/img5-watermelon.webp'
import img6 from '/images/mybio-bio-fertiliser/gallery/img6-blueberries.webp'
import img7 from '/images/mybio-bio-fertiliser/gallery/img7-grapes.webp'
import img8 from '/images/mybio-bio-fertiliser/gallery/img8-cucumber.webp'
import img9 from '/images/mybio-bio-fertiliser/gallery/img9-scallion.webp'

const fujiSizes = "80vw, (min-width: 767px) 60vw, (min-width: 1000px) 457px"


const images: React.ComponentProps<typeof Image>[] = [
  {
    src: img1,
    alt: "Tomatoes",
    sizes: fujiSizes,
    quality: 20,
  },
  {
    src: img2,
    alt: "Shishito Pepper",
    sizes: fujiSizes,
    quality: 20,
  },
  {
    src: img3,
    alt: "Eggplant",
    sizes: fujiSizes,
    quality: 20,
  },
  {
    src: img4,
    alt: "Green Peppers",
    sizes: fujiSizes,
    quality: 20,
  },
  {
    src: img5,
    alt: "Watermelon",
    sizes: fujiSizes,
    quality: 20,
  },
  {
    src: img6,
    alt: "Blueberries",
    sizes: fujiSizes,
    quality: 20,
  },
  {
    src: img7,
    alt: "Grapes",
    sizes: fujiSizes,
    quality: 20,
  },
  {
    src: img8,
    alt: "Cucumber",
    sizes: fujiSizes,
    quality: 20,
  },
  {
    src: img9,
    alt: "Scallion",
    sizes: fujiSizes,
    quality: 20,
  },
]

export const Props_biofertiliser_gallery17_other: React.ComponentProps<typeof Gallery17> = {
  headingTag: "h2",
  heading: "We already use our own product.",
  description: <>
    We have  been planting crops and flowers with our urine-based bio-fertiliser since 2007 in Japan. <a className="font-semibold underline hover:text-blue-500" rel="nofollow" href="https://daiobio.co.jp/news/">https://daiobio.co.jp/news/</a>
  </>,
  slides: images.map((img, index) => ({
    cardContent:
      <>
        <div className=" h-80">
          <Image
            key={index}
            className="size-full object-cover rounded-lg shadow-xxsmall"
            quality={5}
            {...img}
          />
        </div>
        <p className="type-tiny text-center uppercase font-medium text-gray-400/90 lg:tracking-wider lg:mt-2.5 mt-3 leading-normal tracking-widest">{img["alt"]}</p>
      </>
  }))
}

