/* eslint-disable jsx-a11y/alt-text */
import Image, { StaticImageData } from "next/image";
import imgFuji1 from "/images/mybio-bio-toilet/toilet-mount-fuji/bio-toilet-fujisan01.jpg"
import imgFuji2 from "/images/mybio-bio-toilet/toilet-mount-fuji/bio-toilet-fujisan02.jpg"
import imgFuji3 from "/images/mybio-bio-toilet/toilet-mount-fuji/bio-toilet-fujisan03.jpg"
import imgFuji4 from "/images/mybio-bio-toilet/toilet-mount-fuji/bio-toilet-fujisan04.jpg"
import imgFuji6 from "/images/mybio-bio-toilet/toilet-mount-fuji/bio-toilet-fujisan06.jpg"
import imgFuji7 from "/images/mybio-bio-toilet/toilet-mount-fuji/bio-toilet-fujisan07.jpg"
import imgFuji8 from "/images/mybio-bio-toilet/toilet-mount-fuji/bio-toilet-fujisan08.jpg"
import imgFuji10 from "/images/mybio-bio-toilet/toilet-mount-fuji/bio-toilet-fujisan10.jpg"
import imgFuji11 from "/images/mybio-bio-toilet/toilet-mount-fuji/bio-toilet-fujisan11.jpg"
import imgFuji12 from "/images/mybio-bio-toilet/toilet-mount-fuji/bio-toilet-fujisan12.jpg"
import imgFuji13 from "/images/mybio-bio-toilet/toilet-mount-fuji/bio-toilet-fujisan13.jpg"
import imgFuji14 from "/images/mybio-bio-toilet/toilet-mount-fuji/bio-toilet-fujisan14.jpg"
import imgFuji15 from "/images/mybio-bio-toilet/toilet-mount-fuji/bio-toilet-fujisan15.jpg"

import imgOther1 from "/images/mybio-bio-toilet/toilets-other/Matsuhime Pass, Kosuge Village, Yamanashi Prefecture.jpg"
import imgOther2 from "/images/mybio-bio-toilet/toilets-other/Mountain trail of Mt. Tamine, Hanno City, Saitama Prefecture.jpg"
import imgOther3 from "/images/mybio-bio-toilet/toilets-other/mt-sodai.tomioka-city.gunma-prefecture.webp"
import imgOther4 from "/images/mybio-bio-toilet/toilets-other/Mt. Hirao summit, Saku City, Nagano Prefecture.jpg"
import imgOther5 from "/images/mybio-bio-toilet/toilets-other/Mt. Tateshina trailhead parking lot, Suzuran Pass, Chino City, Nagano Prefecture.jpg"
import imgOther6 from "/images/mybio-bio-toilet/toilets-other/Napara Golf Club Ipponmatsu Course, Nara City, Nara Prefecture.webp"
import imgOther7 from "/images/mybio-bio-toilet/toilets-other/Oku-Kirigamine, Suwa City, Nagano Prefecture.jpg"
import imgOther8 from "/images/mybio-bio-toilet/toilets-other/Otome Kogen, Yamanashi City, Yamanashi Prefecture.jpg"
import imgOther9 from "/images/mybio-bio-toilet/toilets-other/Shogen Pass, Koshu City, Yamanashi Prefecture.jpg"
import imgOther10 from "/images/mybio-bio-toilet/toilets-other/suwa-nagano-mt-kirigamine-3.jpeg"
import imgOther11 from "/images/mybio-bio-toilet/toilets-other/Taroyama no Sato, Yotsukaido City, Chiba Prefecture.jpg"
import imgOther12 from "/images/mybio-bio-toilet/toilets-other/Tsurutoge, Kosuge Village, Yamanashi Prefecture.jpg"
import imgOther13 from "/images/mybio-bio-toilet/toilets-other/Wakayama prefecture, Tanabe City, Kumano Kodo Kokumotorikoe.webp"
import imgOther14 from "/images/mybio-bio-toilet/toilets-other/Yunosawa Pass Parking Lot, Koshu City, Yamanashi Prefecture.jpg"
import { Gallery17 } from "@/components/blocks/Gallery17.Images";
import { description } from '../../../../sanity/lib/demo';

const fujiSizes = "80vw, (min-width: 767px) 60vw, (min-width: 1000px) 46vw, (min-width: 1279px) 37vw, (min-width: 1439px) 33vw, (min-width: 1919px) 25vw"

const fujiSizesPortrait = "64vw, (min-width: 767px) 31vw, (min-width: 1000px) 23vw, (min-width: 1279px) 19vw, (min-width: 1439px) 16vw, (min-width: 1919px) 12vw"


const imagesFuji: React.ComponentProps<typeof Image>[] = [
  {
    src: imgFuji1,
    alt: "",
    sizes: fujiSizes,
    quality: 10,
  },
  {
    src: imgFuji2,
    alt: "",
    sizes: fujiSizes,
    quality: 10,
  },
  {
    src: imgFuji3,
    alt: "",
    sizes: fujiSizes,
    quality: 10,
  },
  {
    src: imgFuji4,
    alt: "",
    sizes: fujiSizesPortrait,
    quality: 10,
  },
  {
    src: imgFuji6,
    alt: "",
    sizes: fujiSizesPortrait,
    quality: 10,
  },
  {
    src: imgFuji7,
    alt: "",
    sizes: fujiSizesPortrait,
    quality: 10,
  },
  {
    src: imgFuji8,
    alt: "",
    sizes: fujiSizes,
    quality: 10,
  },
  {
    src: imgFuji10,
    alt: "",
    sizes: fujiSizes,
    quality: 10,
  },
  {
    src: imgFuji11,
    alt: "",
    sizes: fujiSizes,
    quality: 10,
  },
  {
    src: imgFuji12,
    alt: "",
    sizes: fujiSizes,
    quality: 10,
  },
  {
    src: imgFuji13,
    alt: "",
    sizes: fujiSizes,
    quality: 10,
  },
  {
    src: imgFuji14,
    alt: "",
    sizes: fujiSizes,
    quality: 10,
  },
  {
    src: imgFuji15,
    alt: "",
    sizes: fujiSizes,
    quality: 10,
  },
]

const otherSizes = "80vw, (min-width: 767px) 60vw, (min-width: 1000px) 46vw, (min-width: 1279px) 37vw, (min-width: 1439px) 33vw, (min-width: 1919px) 25vw"

const imagesOther: React.ComponentProps<typeof Image>[] = [
  {
    src: imgOther1,
    alt: "Bio-Toilet in Matsuhime Pass, Kosuge Village, Yamanashi Prefecture",
    "aria-description": "Matsuhime Pass, Kosuge Village, Yamanashi Prefecture.",
    sizes: otherSizes,
    quality: 10,
  },
  {
    src: imgOther2,
    alt: "Bio-Toilet in Mountain trail of Mt. Tamine, Hanno City, Saitama Prefecture.",
    "aria-description": "Mountain trail of Mt. Tamine, Hanno City, Saitama Prefecture",
    sizes: otherSizes,
    quality: 10,
  },
  {
    src: imgOther3,
    alt: "Bio-Toilet in Mt. Sodai, Tomioka City, Gunma Prefecture",
    "aria-description": "Mt. Sodai, Tomioka City, Gunma Prefecture",
    sizes: otherSizes,
    quality: 10,
  },
  {
    src: imgOther4,
    alt: "Bio-Toilet in Mt. Hirao summit, Saku City, Nagano Prefecture.",
    "aria-description": "Mt. Hirao summit, Saku City, Nagano Prefecture",
    sizes: otherSizes,
    quality: 10,
  },
  {
    src: imgOther5,
    alt: "Bio-Toilet in Mt. Tateshina trailhead parking lot, Suzuran Pass, Chino City, Nagano Prefecture.",
    "aria-description": "Mt. Tateshina trailhead parking lot, Suzuran Pass, Chino City, Nagano Prefecture",
    sizes: otherSizes,
    quality: 10,
  },
  {
    src: imgOther6,
    alt: "Bio-Toilet in Napara Golf Club Ipponmatsu Course, Nara City, Nara Prefecture.",
    "aria-description": "Napara Golf Club Ipponmatsu Course, Nara City, Nara Prefecture",
    sizes: otherSizes,
    quality: 10,
  },
  {
    src: imgOther7,
    alt: "Bio-Toilet in Oku-Kirigamine, Suwa City, Nagano Prefecture.",
    "aria-description": "Oku-Kirigamine, Suwa City, Nagano Prefecture",
    sizes: otherSizes,
    quality: 10,
  },
  {
    src: imgOther8,
    alt: "Bio-Toilet in Otome Kogen, Yamanashi City, Yamanashi Prefecture.",
    "aria-description": "Otome Kogen, Yamanashi City, Yamanashi Prefecture",
    sizes: otherSizes,
    quality: 10,
  },
  {
    src: imgOther9,
    alt: "Bio-Toilet in Shogen Pass, Koshu City, Yamanashi Prefecture.",
    "aria-description": "Shogen Pass, Koshu City, Yamanashi Prefecture",
    sizes: otherSizes,
    quality: 10,
  },
  {
    src: imgOther10,
    alt: "Bio-Toilet in Mt. Kirigamine, Suwa City, Nagano Prefecture.",
    "aria-description": "Mt. Kirigamine, Suwa City, Nagano Prefecture",
    sizes: otherSizes,
    quality: 10,
  },
  {
    src: imgOther11,
    alt: "Bio-Toilet in Taroyama no Sato, Yotsukaido City, Chiba Prefecture",
    "aria-description": "Taroyama no Sato, Yotsukaido City, Chiba Prefecture",
    sizes: otherSizes,
    quality: 10,
  },
  {
    src: imgOther12,
    alt: "Bio-Toilet in Tsurutoge, Kosuge Village, Yamanashi Prefecture.",
    "aria-description": "Tsurutoge, Kosuge Village, Yamanashi Prefecture",
    sizes: otherSizes,
    quality: 10,
  },
  {
    src: imgOther14,
    alt: "Bio-Toilet in Yunosawa Pass Parking Lot, Koshu City, Yamanashi Prefecture.",
    "aria-description": "Yunosawa Pass Parking Lot, Koshu City, Yamanashi Prefecture",
    sizes: otherSizes,
    quality: 10,
  },
]

export const Props_biotoilet_gallery17: React.ComponentProps<typeof Gallery17> = {
  headingTag: "h2",
  heading: "Bio-Toilet in Mount Fuji, Japan",
  description: "Installed 2.640m above sea level at the 7th station of Mt. Fuji on the Yoshida route descent. It features automatic urine separation up to 2400 litres. Urine is transported down to be processed into bio-fertiliser.",
  slides: imagesFuji.map((img, index) => ({
    cardContent:
      // eslint-disable-next-line jsx-a11y/alt-text
      <div className=" h-80">
        <Image
          key={index}
          className="size-full object-cover rounded-lg shadow-xxlarge"
          quality={5}
          {...img}
        />
      </div>
  }))
}

export const Props_biotoilet_gallery17_other: React.ComponentProps<typeof Gallery17> = {
  headingTag: "h2",
  heading: "Bio-Toilets in Japanese Prefectures",
  description: "Our toilets have been manufactured for several local governments and private companies in the past two decades. Whether on mountanous landscapes to busy indoor factories, our toilets fit anywhere.",
  slides: imagesOther.map((img, index) => ({
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
        <p className="type-tiny uppercase font-medium text-gray-400/90 lg:tracking-wider lg:mt-2.5 mt-3 leading-normal tracking-widest">{img["aria-description"]}</p>
      </>
  }))
}

