import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 0;

async function getData() {
  const query = `
  *[_type == 'blog'] | order(_createdAt desc) {
    title,
    smallDescription,
    "currentSlug": slug.current,
    titleImage  
  }`;

  const data = await client.fetch(query);
  return data.slice(0, 3);
}

export default async function Home() {
  const data = await getData();
  // console.log(data);

  return (
    <main>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-10">
        {data.map((data, idx) => (
          <Card key={idx}>
            <Image
              src={urlForImage(data.titleImage)}
              alt="image"
              width={828}
              height={535}
              className="object-cover rounded-t-lg"
            />
            <CardContent className="mt-5">
              <h3 className="text-xl font-bold">{data.title}</h3>
              <p className="line-clamp-3 text-sm mt-2 text-gray-500 dark:text-gray-400">
                {data.smallDescription}
              </p>
              <Button asChild className="w-full mt-7">
                <Link href={`/blog/${data.currentSlug}`}>Read More</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
