import Link from "next/link";
import { Suspense } from "react";
import Image from "next/image";
import img_kazyuki from "/images/about-us/img0603.webp"
import img_thiaku from "/images/about-us/img0604.jpg"
import imgBioNad from "/images/about-us/nad.webp"
import imgBioZam from "/images/about-us/img0606.jpg"
import imgBioGpr from "/images/about-us/img0610.jpg"
import imgBotRaymi from "/images/about-us/raymi.jpeg"
import imgBotVV from "/images/about-us/viveghan-vinod.webp"
import imgBotEmb from "/images/about-us/img0616.png"
import imgHaz from "/images/about-us/haz.webp"

import { Layout484 } from "@/components/blocks/Layout484";
import { Team18 } from "@/components/blocks/Team18";


export default async function Page() {
  // const [settings, heroPost] = await Promise.all([
  //   sanityFetch<SettingsQueryResult>({
  //     query: settingsQuery,
  //   }),
  //   sanityFetch<HeroQueryResult>({ query: heroQuery }),
  // ]);

  // todo: Make sure buttons work!

  return (
    <>
      <Layout484></Layout484>
      <Team18 {...team18Leadership}></Team18>
      <Team18 {...team18MyBio}></Team18>
      <Team18 {...team18MyBotany}></Team18>
      <Team18 {...team18Associates}></Team18>
    </>
  );
}

const team18Leadership: React.ComponentPropsWithoutRef<typeof Team18> = {
  tagline: "Leadership",
  heading: "Board of Directors",
  description: "From co-workers to good friends with decades of engineering experience, we build products engineered to give back to mother nature.",
  people: [
    {
      image: <Image
        src={img_kazyuki}
        alt="Portrait of Kazuyuki Iinuma"
        className="size-full object-cover"
      />,
      name: "Kazuyuki Iinuma",
      title: "PRESIDENT, CO-FOUNDER",
      email: {
        address: "mailto:iinuma@daiointernational.com",
        text: "iinuma@daiointernational.com"
      },
    },
    {
      image: <Image
        src={img_thiaku}
        alt="Portrait of Kazuyuki Iinuma"
        className="size-full object-cover"
      />,
      name: "Thiaku Marimuthu",
      title: "MANAGING DIRECTOR, CO-FOUNDER",
      email: {
        address: "mailto:thiaku@daiointernational.com",
        text: "thiaku@daiointernational.com"
      },
    },
  ],
  className: "bg-brand-naplesYellow !text-brand-900"
}

const team18MyBio: React.ComponentPropsWithoutRef<typeof Team18> = {
  tagline: "Team",
  heading: "MyBio",
  productChips: [
    {
      address: "/mybio/biotoilet",
      text: "Bio-Toilet"
    },
    {
      address: "#",
      text: "Bio-Fertiliser"
    }
  ],
  description: "Answering nature's call sustainably by safely recycling human waste into envrionmentally friendly bio-fertilizer.",
  people: [
    {
      image: <Image
        src={imgBioNad}
        alt="Portrait of Nadzirah"
        className="size-full object-cover"
      />,
      name: "Nadzirah Salwa",
      title: "HR & MARKETING MANAGER",
      email: {
        address: "mailto:nadzirah@daiointernational.com",
        text: "nadzirah@daiointernational.com"
      },
      description: "Handles public & private sector partnership marketing deal closures for both MyBio and MyBotany. Manages company HR, socials, and general copywriting."
    },
    {
      image: <Image
        src={imgBioZam}
        alt="Portrait of Zamrie"
        className="size-full object-cover"
      />,
      name: "Zamrie Jaya",
      title: "TECHNICAL SALES MANAGER",
      email: {
        address: "mailto:zamrie@daiointernational.com",
        text: "zamrie@daiointernational.com"
      },
      description: "Targets both public & private sectors in East Malaysia in addition to NGOs. Specialises in technical deal closures."
    },
    {
      image: <Image
        src={imgBioGpr}
        alt="Generasi Prestij Sdn Bhd logo"
        className="size-full object-cover"
      />,
      name: "Generasi Prestij Sdn. Bhd.",
      title: "TECHNICAL SUPPORT",
      email: {
        address: "https://www.gprsdnbhd.com",
        text: "Click here for website"
      },
      description: `Provides 24/7 Bio-Toilet & Bio- Fertiliser technical support for our clients.

      Credentials:
      - CIDB
      - IPA(SPAN)
      - TNB
      - SAJ
      - MMHE
      - RAC
      - KTM. JCCD`
    },
  ],
}

const team18MyBotany: React.ComponentPropsWithoutRef<typeof Team18> = {
  tagline: "Team",
  heading: "MyBotany",
  productChips: [
    {
      address: "/mybotany/pongamia",
      text: "Pongamia Plantation"
    }
  ],
  description: "Aims to produce oil from the Pongamia tree as a solution to the finite nature of fossil fuels.",
  people: [
    {
      image: <Image
        src={imgBotRaymi}
        alt="Portrait of Raymi"
        className="size-full object-cover"
      />,
      name: "Raymy Shahromann",
      title: "BUSINESS DEVELOPMENT MANAGER",
      email: {
        address: "mailto:raymy@daiointernational.com",
        text: "raymy@daiointernational.com"
      },
      description: "Head liason and manages expectations between all stakeholders for the Pongamia project."
    },
    {
      image: <Image
        src={imgBotVV}
        alt="Portrait of Viveghan & Vinod"
        className="size-full object-cover"
      />,
      name: "Viveghan & Vinod",
      title: "Land Operations",
      // email: {
      //   address: "iinuma@daiointernational.com",
      //   text: "iinuma@daiointernational.com"
      // },
      description: "Land clearing, and tends to the preparation of Pongamia plantations."
    },
    {
      image: <Image
        src={imgBotEmb}
        alt="Embun Karisma Resources logo"
        className="size-full object-cover"
      />,
      name: "Embun Karisma Resources",
      title: "LABOUR MANAGEMENT, RECRUITMENT AGENCY",
      email: {
        address: "https://www.embunkarisma.com",
        text: "https://www.embunkarisma.com"
      },
      description: `
        Foreign manpower recruitment & placement for workers on the plantation.

        Credentials
        - CIDB
        - RBA
        - ICLQ
      `
    },
  ],
}

const team18Associates: React.ComponentPropsWithoutRef<typeof Team18> = {
  tagline: "Team",
  heading: "Associates",
  description: "Other parties and consultants we work with.",
  people: [
    {
      image: <Image
        src={imgHaz}
        alt="Portrait of Haziq"
        className="size-full object-cover"
      />,
      name: "Haziq Hamdan",
      title: "Digital Marketing",
      email: {
        address: "https://www.linkedin.com/in/haziq-hamdan-49788684/",
        text: "Linkedin Profile"
      },
      description: "General website maintenance and helps out with brand identity & marketing. (I made this!)"
    },
  ],
}