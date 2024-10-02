import { defineType, defineField } from "sanity";

export const blogs = defineType({
  name: "blogs",
  type: "document",
  title: "Blogs",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
        maxLength: 100,
      },
    }),
    defineField({
      name: "image",
      type: "image",
      title: "Image",
      validation: (rule) => rule.required().error("Image is Required"),
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "text",
      type: "text",
      title: "Text Field",
      validation: (Rule) =>
        Rule.max(1000).warning("Text should not exceed 1000 characters"),
    }),
    defineField({
      name: "richText",
      type: "array",
      title: "Content Area",
      of: [
        {
          type: "block",
        },
      ],
      validation: (Rule) => Rule.required().error("Content Field is required"),
    }),
  ],
});
