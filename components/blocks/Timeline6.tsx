import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

type Props = {
  tagline?: string;
  heading: string;
  description: string;
  buttons: React.ReactNode[];
  features: React.ReactNode[]
};

export type Timeline6Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Timeline6 = (props: Timeline6Props) => {
  const { tagline, heading, description, buttons, features } = {
    ...Contact5Defaults,
    ...props,
  } as Props;

  return (
    <section id="contact-us" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg">
        {/* //* INTRO */}
        <div>
          {tagline &&
            <p className="type-regular font-semibold">{tagline}</p>
          }
          {heading &&
            <h2 className={cn(
              "type-mobile-h2 lg:type-desktop-h2 font-bold mt-3 md:mt-4",
              // "bg-clip-text bg-gradient-to-r from-blue-500 to-brand-500 text-transparent"
            )}>{heading}</h2>
          }
          {description &&
            <p className="mt-5 md:mt-6 type-regular font-medium md:type-medium">{description}</p>
          }
          <div className="mt-6 md:mt-8">
            {buttons}
          </div>
        </div>
        {/* //* TIMELINE */}
        <div className="mt-12 md:mt-20 flex">
          {/* // * progress */}
          <div className="bg-red-500 basis-8 relative">
            {/* fade overlay top */}
            <div className=""></div>
            {/* progress line */}
            <div className=""></div>
            {/* line */}
            <div className=""></div>
            {/* fade overlay bottom */}
            <div className=""></div>
            <div className=""></div>
            woah
          </div>
          {/* // * content */}
          <div className="grow flex flex-col gap-y-16 md:gap-y-12">
            {features.map((feature, index) => (
              <div className="bg-white py-8 px-7 border border-border rounded-lg ml-4 md:ml-12" key={index}>
                {feature}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Contact5Defaults: Timeline6Props = {
  tagline: "Roadmap",
  heading: "TGT Program Timeline",
  description: "We are conducting 3-5 years worth of experiments to determine the best cultivation methods for the highest yield and quality of Pongamia seeds.",
  buttons: [
    <a key={1}><Button size={"lg"}>Partner With Us</Button></a>,
    // <a key={2}><Button variant={"outline"}>Our Team</Button></a>
  ],
  features: [
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </p>,
    <>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</>,
    <>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </>
  ]
};

Timeline6.displayName = "Timeline6";