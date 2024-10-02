import { urlFor } from "@/sanity/lib/image";
import { DataType } from "@/type";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Card({ post }: { post: DataType }) {
  return (
    <div className="p-6 border flex flex-col justify-between items-center gap-6 w-full lg:w-[33%] rounded-3xl">
      <Image
        src={urlFor(post.image).url()}
        alt={post.title}
        height={400}
        width={400}
      />
      <h4 className="font-bold">{post.title}</h4>
      <p>{post.text}</p>
      <Link
        className="text-bold text-center bg-rose-600 border w-full rounded-lg py-2 px-4 hover:bg-transparent hover:border-rose-600 text-xl transition-colors duration-500"
        href={`/${post.slug}`}
      >
        Read More
      </Link>
    </div>
  );
}

export default Card;
