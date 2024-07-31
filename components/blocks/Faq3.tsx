import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "../ui/button";
import type { ButtonProps } from "@relume_io/relume-ui";
import Link from "next/link";

type QuestionsProps = {
  title: string;
  answer: string;
};

type Props = {
  heading: string;
  description: string;
  button: React.ReactNode
  questions: QuestionsProps[];
};

export type Faq3Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Faq3 = (props: Faq3Props) => {
  const { heading, description, button, questions } = {
    ...Faq3Defaults,
    ...props,
  } as Props;
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-12 lg:grid-cols-[.75fr,1fr] lg:gap-x-20">
        <div>
          <h2 className="mb-5 md:mb-6 type-mobile-h2 md:type-desktop-h2">{heading}</h2>
          <p className="type-regular">{description}</p>
          <div className="mt-6 md:mt-8">
            {button}
          </div>
        </div>
        <Accordion type="multiple">
          {questions.map((question, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="md:py-5 type-regular font-bold md:type-medium text-left">{question.title}</AccordionTrigger>
              <AccordionContent className="md:pb-6 type-regular">{question.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export const Faq3Defaults: Faq3Props = {
  heading: "FAQs",
  description:
    "Find answers to commonly asked questions about our MyBio toilets.",
  button: <Link href="#contact-us"><Button variant={"default"} size={"lg"}>Contact Us</Button></Link>,
  questions: [
    {
      title: "My users have a habit of washing up with excess water splashing everywhere. Would it disturb the bacteria in the tank?",
      answer:
        "Our toilet systems are capable of both redirecting and evaporating away excess water within the tank to ensure the proper homeostatic environment for the waste-consuming bacteria inside the tank.",
    },
    {
      title: "Can I throw waste toilet paper into the bio-toilet?",
      answer:
        "Yes, as long as they are rated for to be thrown into toilets. Other types of products like wet wipes are not recommended to be disposed into the bio-toilet",
    },
    {
      title: "I do not like any of the designs. Can I have a custom unit built to my needs?",
      answer:
        "Yes! We welcome any custom requests. Our engineers have experience building for both the outdoors and indoors with space constraints.",
    },
    {
      title: "How easy is maintaining the bio-toilet?",
      answer:
        "Compared to our competitors, our bio-toilets only require an initial batch of bacteria added to the tank. For hot climates without winters such as Malaysia, we recommend a yearly topup of the waste-consuming bacteria. For general cleaning of the toilet bowl we advise to use organic cleaning products. We also offer maintenance visits particularly for operational safety and sanitary purposes. ",
    },
    {
      title: "Do these toilets smell bad?",
      answer:
        `Our bacteria is known to kill odours and the units do not have foul odours (our company staff can personally testify on this!). Excess urine is also evaporated away through special vents.`,
    },
    {
      title: "How easy is it to use a bio-toilet? How would I educate my users?",
      answer:
        "You can expect to use the bio-toilets like any other restroom. You simply step into the booth, do your business, wash yourself up, and press flush. The only thing people have to be wary of is when the toilet's red hazard light is on for instances like when the tank is full etc. We ",
    },
    {
      title: "Are these bio-toilets portable?",
      answer:
        "Our PK1 unit the most portable unit we offer and can be transported as a singular unit suitable for outdoor events. Otherwise we recommended contacting us for a custom solution as we have experience in engineering ultra-portable units for clients in Japan.",
    },
    {
      title: "Can I claim personal or business tax deductions for purchasing a MyBio Bio-Toilet?",
      answer:
        "We may be able to point you to your local government's website for your legal counsel to peruse. We are not tax advisors and anything on this website should not be taken as legal/accounting advice.",
    },
  ],
};

Faq3.displayName = "Faq3";
