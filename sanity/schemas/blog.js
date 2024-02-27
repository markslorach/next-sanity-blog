export default {
  name: "blog",
  type: "document",
  title: "Blog",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Blog Post Title",
    },
    {
      name: "slug",
      type: "slug",
      title: "Blog Post Slug",
      options: {
        source: "title",
      },
    },
    {
      name: "titleImage",
      type: "image",
      title: "Title Image",
    },
    {
      name: "smallDescription",
      type: "text",
      title: "Small Description",
    },
    {
      name: "Content",
      type: "array",
      title: "Blog Post Content",
      of: [
        {
          type: "block",
        },
        {
          type: "image",
        },
      ],
    },
  ],
};
