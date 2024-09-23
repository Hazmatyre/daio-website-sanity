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
  CreateDataAttribute,
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

  const components: PortableTextComponents = {
    types: {
      image: ({ value, isInline, renderNode }) => {
        // console.log(value)
        // console.log("WOWWOWOWOOWOWOOWW======")
        // console.log(urlForImage(value)?.height(1000).width(2000).url())

        return (
          <>
            <div
              className="w-full relative max-w-full mt-11 md:mt-12"
            // data-sanity-edit-target
            >
              <Image
                className="!relative size-full object-cover rounded-lg shadow-small"
                alt={value?.alt || ""}
                src={urlForImage(value)?.url() as string}
                sizes="(max-width: 1023px) 100vw, 40vw"
                fill
              />
            </div>
            <p className="type-tiny uppercase font-medium !text-gray-400/90 lg:tracking-wider lg:mt-2.5 mt-3 leading-normal tracking-widest block text-center mb-11 md:mb-12">{value?.alt}</p>
          </>
        )
      }
    },
    block: {
      normal: ({ children }) => (
        <p className="type-regular">{children}</p>
      ),
      h1: ({ children }) => (
        <h1 className="type-mobile-h1 md:type-desktop-h1">{children}</h1>
      ),
      h2: ({ children }) => (
        <h3 className="type-mobile-h2 md:type-desktop-h2">{children}</h3>
      ),
      h3: ({ children }) => (
        <h3 className="type-mobile-h3 md:type-desktop-h3">{children}</h3>
      ),
      h4: ({ children }) => (
        <h4 className="type-mobile-h4 md:type-desktop-h4">{children}</h4>
      ),
      h5: ({ children }) => (
        <h5 className="type-mobile-h5 md:type-desktop-h5">{children}</h5>
      ),
      h6: ({ children }) => (
        <h6 className="type-mobile-h6 md:type-desktop-h6">{children}</h6>
      ),
      // image: ({ children }) => (
      //   <div>
      //     <h1>test</h1>
      //   </div>
      // ),
    },
    marks: {
      link: ({ children, value }) => {
        return (
          <a className="" href={value?.href} rel="noreferrer noopener">
            {children}
          </a>
        );
      },
    },
  };

  return (
    <div className={[`
    prose 
    !prose-daioGreen 
    prose-p:text-brand-700 
    prose-h6:mb-4
    prose-h6:text-brand-700
    prose-img:my-0
    prose-li:text-brand-800
    `, className].filter(Boolean).join(" ")}>
      <PortableText components={components} value={value} />
    </div>
  );
}
