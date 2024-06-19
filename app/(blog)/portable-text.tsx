/**
 * This component uses Portable Text to render a post body.
 *
 * You can learn more about Portable Text on:
 * https://www.sanity.io/docs/block-content
 * https://github.com/portabletext/react-portabletext
 * https://portabletext.org/
 *
 */

import {
  PortableText,
  type PortableTextComponents,
  type PortableTextBlock,
} from "next-sanity";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/utils";


export default function CustomPortableText({
  className,
  value,
}: {
  className?: string;
  value: PortableTextBlock[];
}) {
// console.warn(value)

  const components: PortableTextComponents = {
    types: {
      image: ({value, isInline}) => {

        console.log("WOWWOWOWOOWOWOOWW======")
        console.log(urlForImage(value)?.height(1000).width(2000).url())
        return (
          <div className="max-h-96 h-96 w-full relative max-w-full">
            <Image
              className="h-auto w-full"
              width={2000}
              height={1000}
              alt={value?.alt || ""}
              src={urlForImage(value)?.height(1000).width(2000).url() as string}
              sizes="100vw"
            />
          </div>
        )
      }
    },
    block: {
      h5: ({ children }) => (
        <h5 className="mb-2 text-sm font-semibold">{children}</h5>
      ),
      h6: ({ children }) => (
        <h6 className="mb-1 text-xs font-semibold">{children}</h6>
      ),
    },
    marks: {
      link: ({ children, value }) => {
        return (
          <a href={value?.href} rel="noreferrer noopener">
            {children}
          </a>
        );
      },
    },
  };

  return (
    <div className={["prose", className].filter(Boolean).join(" ")}>
      <PortableText components={components} value={value} />
    </div>
  );
}
