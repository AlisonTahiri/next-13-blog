import { getPosts } from "@/lib/services/postServices";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const postsRes: Promise<PostsData> = getPosts();
  const postsData = await postsRes;

  return (
    <>
      <main>
        <h1 className="text-xl p-4">Posts</h1>
      </main>
      <section className="flex flex-col items-center gap-4">
        {postsData.data.map((p) => (
          <Link
            href={`/posts/${p.attributes.slug}`}
            key={p.id}
            className="w-full max-w-2xl"
          >
            <div className="flex gap-4 items-center bg-slate-600 w-full  rounded-md overflow-clip h-48">
              <div className="relative h-48 w-96">
                <Image
                  src={p.attributes.cover.data.attributes.url || ""}
                  alt={p.attributes.title}
                  style={{ objectFit: "cover" }}
                  fill={true}
                />
              </div>

              <h1>{p.attributes.title}</h1>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
}
