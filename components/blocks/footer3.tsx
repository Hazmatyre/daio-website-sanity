import { FaXTwitter } from "react-icons/fa6";
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
  BiLogoYoutube,
} from "react-icons/bi";
import Image from "next/image";
import WebsiteLogo from '/images/daio-logo-white.svg'
import Link from "next/link";

type ImageProps = {
  url?: string;
  src: string;
  alt?: string;
};

type Links = {
  title: string;
  url: string;
};

type SocialMediaLinks = {
  url: string;
  icon: React.ReactNode;
};

type ColumnLinks = {
  links: Links[];
};

type Address = {
  label: string;
  value: string;
};

type Contact = {
  label: string;
  phone: string;
  email: string;
};

type Props = {
  logo: ImageProps;
  address: Address;
  contact: Contact;
  columnLinks: ColumnLinks[];
  socialMediaLinks: SocialMediaLinks[];
  footerText?: string;
  footerLinks: Links[];
};

export type Footer3Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Footer3 = (props: Footer3Props) => {
  const { logo, address, contact, columnLinks, socialMediaLinks, footerText, footerLinks } = {
    ...Footer3Defaults,
    ...props,
  } as Props;
  return (
    <footer className="px-[5%] md:px-16 py-12 md:py-18 lg:py-20 bg-foreground text-white">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-[4vw] gap-y-12 pb-12 md:gap-y-16 md:pb-18 lg:grid-cols-[1fr_0.7fr] lg:gap-y-4 lg:pb-20">
          <div>
            <div className="mb-6 md:mb-8">
              <Link passHref href="/">
                <Image
                  src={WebsiteLogo}
                  alt="DAIO International Logo"
                  className="h-6 w-auto"
                />
              </Link>
            </div>
            <div className="mb-6 md:mb-8">
              <div>
                <p className="type-regular mb-1 font-semibold">{address.label}</p>
                <a href="https://maps.app.goo.gl/vyJEuCpxbyDbGVdZ7" className="underline mb-5 type-regular md:mb-6 whitespace-pre-line">{address.value}</a>
              </div>
              <div className="mt-5">
                <p className="mb-1 type-small font-semibold">{contact.label}</p>
                <p className="flex flex-col type-regular underline decoration-background underline-offset-1 md:mb-6">
                  <a href={`tel:${contact.phone}`} className="focus-visible:outline-none">
                    {contact.phone}
                  </a>
                  <a href={`mailto:${contact.email}`} className="focus-visible:outline-none truncate">
                    {contact.email}
                  </a>
                </p>
              </div>
            </div>
            <div className="grid grid-flow-col grid-cols-[max-content] items-start justify-start gap-x-3 gap-y-0">
              {socialMediaLinks.map((link, index) => (
                <a key={index} href={link.url} className="focus-visible:outline-none no-overflow-anchoring">
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 items-start gap-x-6 gap-y-10 md:grid-cols-2 md:gap-x-8 md:gap-y-4">
            {columnLinks.map((column, index) => (
              <ul key={index} className="no-overflow-anchoring">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex} className="no-overflow-anchoring py-2 text-sm font-semibold">
                    <Link href={link.url} className="focus-visible:outline-none">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="h-px w-full bg-background" />
        <div className="flex flex-col-reverse items-start justify-between pb-4 pt-6 text-sm md:flex-row md:items-center md:pb-0 md:pt-8">
          <p className="mt-8 md:mt-0 text-small">{footerText}</p>
          <ul className="grid grid-flow-row grid-cols-[max-content] justify-center gap-x-0 gap-y-4 text-sm md:grid-flow-col md:gap-x-6 md:gap-y-0">
            {footerLinks.map((link, index) => (
              <li key={index} className="underline no-overflow-anchoring">
                <Link href={link.url} className="focus-visible:outline-none">
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export const Footer3Defaults: Footer3Props = {
  logo: {
    src: "https://relume-assets.s3.amazonaws.com/logo-image.svg",
    alt: "Logo image",
  },
  address: {
    label: "Address:",
    value: "Unit 39-02 (East Wing), Q Sentral,\n2A Jalan Stesen Sentral 2, KL Sentral, 50470 Kuala Lumpur",
  },
  contact: {
    label: "Contact:",
    phone: "+(60) 37 890 6684",
    email: "hello@daiointernational.com",
  },
  columnLinks: [
    {
      links: [
        { title: "Home", url: "/" },
        { title: "About", url: "/about" },
        { title: "MyBio Bio-Toilet", url: "/mybio/biotoilet" },
        // { title: "MyBio Bio-Fertiliser", url: "#" },
        { title: "MyBotany Pongamia", url: "/mybotany/pongamia" },
      ],
    },
    {
      links: [
        // { title: "Blog", url: "#" },
        // { title: "Contact", url: "#" },
        // { title: "Link Eight", url: "#" },
        // { title: "Link Nine", url: "#" },
        // { title: "Link Ten", url: "#" },
      ],
    },
  ],
  socialMediaLinks: [
    // { url: "#", icon: <BiLogoFacebookCircle className="size-6" /> },
    // { url: "#", icon: <BiLogoInstagram className="size-6 fill-white" /> },
    // { url: "#", icon: <FaXTwitter className="size-6 p-0.5" /> },
    // { url: "#", icon: <BiLogoLinkedinSquare className="size-6 fill-white" /> },
    // { url: "#", icon: <BiLogoYoutube className="size-6" /> },
  ],
  footerText: "© 2024 DAIO International Sdn. Bhd. (1240908-W) All rights reserved.",
  footerLinks: [
    // { title: "Terms & Conditions", url: "#" },
  ],
};

Footer3.displayName = "Footer3";
