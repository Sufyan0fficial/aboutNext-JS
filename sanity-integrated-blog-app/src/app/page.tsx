import { Container } from "@mui/material";
import React from "react";
import Card from "../components/card";
import { client } from "@/sanity/lib/client";
import { DataType } from "../../src/type";

async function page() {
  const query = `*[_type == "blogs"]{
 title, image, text,  "slug":slug.current
}`;
  const blog = await client.fetch(query);
  console.log(blog);
  return (
    <>
      <div className="my-40 ">
        <Container>
          <h1 className="font-black text-rose-600  text-center font-robo1">
            Blogs Website
          </h1>
          <h6 className="text-center mt-6 leading-relaxed">
            This Blog website is created By <strong>Muhammad Sufyan</strong> to
            practise <strong>Sanity_headless CMS</strong> & UI Development
          </h6>
        </Container>
      </div>
      <Container maxWidth="xl">
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-stretch my-20 lg:gap-6 gap-8">
          {blog.map((data: DataType) => (
            <Card post={data} key={data.slug} />
          ))}
        </div>
      </Container>
    </>
  );
}

export default page;
