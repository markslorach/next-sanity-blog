import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

export const revalidate = 0;

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

  return (
    <div className="mt-12">
      <h1>
        <span className="block text-center text-primary font-semibold tracking-wide uppercase">
          Mark Slorach - Blog
        </span>
        <span className="block text-center mt-2 text-3xl leading-relaxed font-bold tracking-tight sm:text-4xl">
          {data.title}
        </span>
      </h1>
      <Image
        src={urlForImage(data.titleImage)}
        alt="image"
        width={1920}
        height={1241}
        priority
        className="rounded-lg mt-8 border"
      />
      <div className="mt-16 prose prose-blue prose-base dark:prose-invert mb-12 prose-li:marker:text-primary">
        <PortableText value={data.content} />
      </div>
    </div>
  );
};

export default BlogArticle;
