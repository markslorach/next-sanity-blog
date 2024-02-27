import { client } from "@/sanity/lib/client";

async function getData(slug) {
  const query = `
    *[_type == "blog" && slug.current == '${slug}'] {
        "currentSlug": slug.current,
        title,
        content,
        titleImage
      }[0]
  `;

  const data = await client.fetch(query);
  return data;
}

const BlogArticle = async ({ params }) => {
  const data = await getData(params.slug);
  console.log(data);

  return <div>{params.slug}</div>;
};

export default BlogArticle;
