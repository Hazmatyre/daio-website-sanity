"use client";

import { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";
import type { ButtonProps } from "@relume_io/relume-ui";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { toast } from "sonner";

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

  const formSchema = z.object({
    name: z.string()
      .min(1, "Please enter something longer than 1 characters.").max(100, "Please enter a shorter name."),
    email: z.string().email(),
    message: z.string().max(2000),
    consent: z.boolean().refine(value => value === true, "We cannot contact you without your consent given."),
  })

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      consent: false,
    },
  })

  const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.

    console.log(values)

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "b7c30d1d-554c-47e4-8b5f-a0c57b436ae8",
        name: values.name,
        email: values.email,
        message: values.message,
        consent: values.consent,
      }),
    });

    const data = await response.json();

    if (data.success) {
      toast("Thank you for contacting us.", {
        duration: 10000,
        description: "We'll be in touch!",
        closeButton: true
      })
    } else {
      toast("Something went wrong.", {
        duration: 10000,
        description: "Please e-mail us directly instead!",
        closeButton: true
      })
    }
  }

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

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your name here" disabled={form.formState.isSubmitting} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              // disabled={form.formState.isSubmitting}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Your email here" disabled={form.formState.isSubmitting} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              // disabled={form.formState.isSubmitting}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Leave us a note or any other means of contacting you." disabled={form.formState.isSubmitting} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="consent"
              render={({ field }) => (
                <>
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        disabled={form.formState.isSubmitting}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>
                        Accept terms and conditions
                      </FormLabel>
                      <FormDescription>
                        I consent to having DAIO International store my submitted information so they can respond to my inquiry. At any time I may revoke consent by contacting them.
                      </FormDescription>
                    </div>
                  </FormItem>
                  {/* <FormMessage className=""/> */}
                </>
              )}
            />
            <Button disabled={form.formState.isSubmitting} type="submit">Submit</Button>
          </form>
        </Form>

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
