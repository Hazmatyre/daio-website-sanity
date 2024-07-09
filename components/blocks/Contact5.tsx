"use client";

import { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";
import type { ButtonProps } from "@relume_io/relume-ui";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";

type Props = {
  tagline: string;
  heading: string;
  description: string;
  email: string;
  phone: string;
  address: string;
  button: ButtonProps;
};

export type Contact5Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Contact5 = (props: Contact5Props) => {
  const { tagline, heading, description, email, phone, address, button } = {
    ...Contact5Defaults,
    ...props,
  } as Props;

  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [messageInput, setMessageInput] = useState("");
  const [acceptTerms, setAcceptTerms] = useState<boolean | "indeterminate">(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({
      nameInput,
      emailInput,
      messageInput,
      acceptTerms,
    });
  };

  return (
    <section id="contact-us" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container grid grid-cols-1 items-start gap-y-12 md:grid-flow-row md:grid-cols-2 md:gap-x-12 lg:grid-flow-col lg:gap-x-20 lg:gap-y-16">
        <div>
          <p className="mb-3 type-regular font-semibold md:mb-4">{tagline}</p>
          <div className="mb-6 md:mb-8">
            <h2 className="mb-5 type-mobile-h2 md:type-desktop-h2 font-bold md:mb-6">{heading}</h2>
            <p className="type-medium">{description}</p>
          </div>

          <div className="grid grid-cols-1 gap-4 py-2">
            <div className="flex items-center gap-4">
              <BiEnvelope className="size-6 flex-none" />
              <p>{email}</p>
            </div>
            <div className="flex items-center gap-4">
              <BiPhone className="size-6 flex-none" />
              <p>{phone}</p>
            </div>
            <div className="flex items-center gap-4">
              <BiMap className="size-6 flex-none" />
              <a href="https://maps.app.goo.gl/vyJEuCpxbyDbGVdZ7" className="whitespace-pre-line underline underline-offset-4 type-regular">{address}</a>
            </div>
          </div>
        </div>

        <form className="grid grid-cols-1 grid-rows-[auto_auto] gap-6" onSubmit={handleSubmit}>
          <div className="grid w-full items-center">
            <Label htmlFor="name" className="mb-2 type-regular">
              Name
            </Label>
            <Input
              type="text"
              id="name"
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
            />
          </div>

          <div className="grid w-full items-center">
            <Label htmlFor="email" className="mb-2 type-regular">
              Email
            </Label>
            <Input
              type="email"
              id="email"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
            />
          </div>

          <div className="grid w-full items-center">
            <Label htmlFor="message" className="mb-2 type-regular">
              Message
            </Label>
            <Textarea
              id="message"
              placeholder="Type your message..."
              className="min-h-[11.25rem] overflow-auto"
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
            />
          </div>

          <div className="mb-3 flex items-center space-x-2 text-sm md:mb-4">
            <Checkbox id="terms" className="" checked={acceptTerms} onCheckedChange={setAcceptTerms} />
            <Label htmlFor="terms" className="cursor-pointer type-regular">
              I consent to having DAIO International store my submitted information so they can respond to my inquiry.
              {/* I accept the{" "} */}
              {/* <a
                className="text-link-primary underline focus-visible:outline-none"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms
              </a> */}
            </Label>
          </div>

          <div>
            <Button variant={"default"} size={"default"}>{button.title}</Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export const Contact5Defaults: Contact5Props = {
  tagline: "Contact Us",
  heading: "Get in touch.",
  description: "We look forward to working with you to make the Earth a better place for our future generations.",
  email: "hello@daiointernational.com",
  phone: "+(60) 37 890 6684",
  address: "Unit 39-02 (East Wing), Q Sentral, 2A Jalan Stesen Sentral 2, KL Sentral, 50470 Kuala Lumpur",
  button: { title: "Submit" },
};

Contact5.displayName = "Contact5";
