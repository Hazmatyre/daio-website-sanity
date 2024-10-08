import { CogIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

import * as demo from "@/sanity/lib/demo";

export default defineType({
  name: "settings",
  title: "Blog Settings",
  type: "document",
  icon: CogIcon,
  fields: [
    defineField({
      name: "featuredPost",
      description: "The first post to be featured on the homepage",
      title: "Featured Post",
      type: "reference",
      to: { type: "post" },
    }),
    defineField({
      name: "title",
      description: "This field is the title of your blog.",
      title: "Title",
      type: "string",
      initialValue: demo.title,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      description:
        "Used both for the <meta> description tag for SEO, and the blog subheader.",
      title: "Description",
      type: "string",
      initialValue: "Welcome to our blog",
      // of: [
      //   defineArrayMember({
      //     type: "block",
      //     options: {},
      //     styles: [],
      //     lists: [],
      //     marks: {
      //       decorators: [],
      //       annotations: [
      //         defineField({
      //           type: "object",
      //           name: "link",
      //           fields: [
      //             {
      //               type: "string",
      //               name: "href",
      //               title: "URL",
      //               validation: (rule) => rule.required(),
      //             },
      //           ],
      //         }),
      //       ],
      //     },
      //   }),
      // ],
    }),
    defineField({
      title: "Seo",
      name: "seo_default",
      type: "seoMetaFields",
      description: "Base metadata for entire site. See individual blog posts to overwrite per page."
    }),
    // defineField({
    //   name: "footer",
    //   description:
    //     "This is a block of text that will be displayed at the bottom of the page.",
    //   title: "Footer Info",
    //   type: "array",
    //   of: [
    //     defineArrayMember({
    //       type: "block",
    //       marks: {
    //         annotations: [
    //           {
    //             name: "link",
    //             type: "object",
    //             title: "Link",
    //             fields: [
    //               {
    //                 name: "href",
    //                 type: "url",
    //                 title: "Url",
    //               },
    //             ],
    //           },
    //         ],
    //       },
    //     }),
    //   ],
    // }),
    // defineField({
    //   name: "ogImage",
    //   title: "Open Graph Image",
    //   type: "image",
    //   description: "Displayed on social cards and search engine results.",
    //   options: {
    //     hotspot: true,
    //     aiAssist: {
    //       imageDescriptionField: "alt",
    //     },
    //   },
    //   fields: [
    //     defineField({
    //       name: "alt",
    //       description: "Important for accessibility and SEO.",
    //       title: "Alternative text",
    //       type: "string",
    //       validation: (rule) => {
    //         return rule.custom((alt, context) => {
    //           if ((context.document?.ogImage as any)?.asset?._ref && !alt) {
    //             return "Required";
    //           }
    //           return true;
    //         });
    //       },
    //     }),
    //     defineField({
    //       name: "metadataBase",
    //       type: "url",
    //       description: (
    //         <a
    //           href="https://nextjs.org/docs/app/api-reference/functions/generate-metadata#metadatabase"
    //           rel="noreferrer noopener"
    //         >
    //           More information
    //         </a>
    //       ),
    //     }),
    //   ],
    // }),
  ],
  preview: {
    prepare() {
      return {
        title: "Settings",
      };
    },
  },
});
