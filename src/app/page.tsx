import { getPosts } from "@/lib/services/postServices";

export default async function Home() {
  const postsData: Promise<Post[]> = getPosts();
  const posts = await postsData;

  console.log(postsData);

  return (
    <main>
      <h1 className="text-xl p-4">Welcome to Home Page</h1>
      <section>{JSON.stringify(posts)}</section>
    </main>
  );
}
