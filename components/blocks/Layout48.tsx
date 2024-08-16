type SubHeadingProps = {
  title: string;
  description: string;
};

type Props = {
  heading: React.ReactNode;
  description: React.ReactNode;
  subHeadings: SubHeadingProps[];
};

export type Layout48Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Layout48 = (props: Layout48Props) => {
  const { heading, description, subHeadings } = {
    ...Layout48Defaults,
    ...props,
  } as Props;
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 text-brand-900 bg-primary">
      <div className="container grid grid-cols-1 items-start justify-between gap-5 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:gap-x-20">
        {heading}
        <div>
          <p className="mb-6 md:mb-8 type-regular md:type-medium">{description}</p>
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 py-2 md:grid-cols-2">
            {subHeadings.map((subHeading, index) => (
              <div key={index}>
                <h6 className="mb-3 type-mobile-h6 md:type-mobile-h6 md:mb-4">
                  {subHeading.title}
                </h6>
                <p className="type-regular">{subHeading.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Layout48Defaults: Layout48Props = {
  heading:
    <h2 className="">
      <span className="type-mobile-h1 xl:type-desktop-h1">Pongamia Pinnata</span>
      <br/>
      <span className="type-mobile-h3 xl:type-desktop-h3">solves it all.</span>
    </h2>,
  description:
    "DAIO has a clear mission. We want a sustainable future for our children. We believe that Pongamia Pinnata is one of nature’s most beneficial gifts, not only does it reduce carbon emissions, but it solves two big problems that countries face.",
  subHeadings: [
    {
      title: "Fossil fuels are finite",
      description:
        "Energy is the core of economic production that dictates pricing of supply and demand. Crude oil is set to trigger an energy crisis within the next century as countries race to find alternative sources before it all runs out.",
    },
    {
      title: "Hectares of degraded land unused",
      description:
        "Plantations use up a lot of nutrients[cite], and excess non-sustainable chemical fertilisers put a heavy stress on soil fertility[cite]. All of which lead to ‘slash-and-burn’ tactics to destructively make land fertile again at the cost of CO2 emissions and deforestation[cite].",
    },
  ],
};
