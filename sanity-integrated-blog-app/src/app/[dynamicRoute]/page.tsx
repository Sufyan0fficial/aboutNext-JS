import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { Container } from "@mui/material";
import { PortableText } from "@portabletext/react";
import React from "react";

async function DynamicCard({ params }: { params: { dynamicRoute: string } }) {
  const query = `*[_type == 'blogs' && slug.current == '${params.dynamicRoute}']{
  title,image,text,richText
}[0]`;
  const post = await client.fetch(query);
  console.log(post);
  return (
    <>
      <div className="my-28 mx-8 font-extrabold">
        <Container maxWidth="xl">
          <div className="flex flex-col gap-6 justify-center items-center">
            <h1>{post.title}</h1>
            <img src={urlFor(post.image).url()} alt={`${post.slug} image`} />
            <Container maxWidth="lg">
              <section className="prose-xl prose-strong:text-amber-500 prose-h2:text-rose-600 prose-h2:font-black prose-p:text-2xl prose-li:list-disc prose-li:list-inside prose-p:font-light">
                <PortableText value={post.richText} />
              </section>
            </Container>
          </div>
        </Container>
      </div>
    </>
  );
}

export default DynamicCard;
