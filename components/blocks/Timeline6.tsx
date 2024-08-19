import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

type Props = {
  tagline?: string;
  heading: string;
  description: string;
  buttons: React.ReactNode[];
};

export type Timeline6Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Timeline6 = (props: Timeline6Props) => {
  const { tagline, heading, description, buttons } = {
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
      </div>
      {/* //* TIMELINE */}
      <div>

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
};

Timeline6.displayName = "Timeline6";
