import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  orderings: [
    {
      title: 'Category Order, Descending',
      name: 'categoryOrderDesc',
      by: [
        {field: 'category', direction: 'desc'}
      ]
    },
    {
      title: 'Category Order, Ascending',
      name: 'categoryOrderAsc',
      by: [
        {field: 'category', direction: 'asc'}
      ]
    },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "meta_description",
      title: "Meta Description",
      type: "text",
    }),
    defineField({
      name: "category_order",
      title: "Category Order",
      type: "number",
      description: "Order of categories to be displayed. The higher the number, the higher the priority."
    }),
  ],
  initialValue: {
    category_order: 1
  }
})