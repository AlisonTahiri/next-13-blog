import getFormattedDate from "@/lib/getFormattedDate";
import { getPost, getPosts } from "@/lib/services/postServices";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

type Props = {
  params: {
    slug: string;
  };
};

export default async function Post({ params: { slug } }: Props) {
  const postsData: Promise<PostsData> = getPosts();
  const posts = await postsData;

  const selectedPost = posts.data.filter((p) => p.attributes.slug === slug);

  if (!selectedPost) return notFound;

  const postData: Promise<SinglePost> = getPost(selectedPost[0].id);
  const post = await postData;

  const { title, content, updatedAt } = post.data.attributes;
  const pubDate = getFormattedDate(updatedAt);

  return (
    <main className="px-6 prose prose-xl prose-slate dark:prose-invert mx-auto">
      <h1 className="text-3xl mt-4 mb-0">{title}</h1>
      <p className="mt-0">{pubDate}</p>
      <article>
        <section dangerouslySetInnerHTML={{ __html: content }} />
        <p>
          <Link href="/">← Back to home</Link>
        </p>
      </article>
    </main>
  );
}
