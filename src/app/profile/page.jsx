import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";

const Page = async () => {
  const session = await getServerSession(authOptions);

  return (
    <section className="py-24">
      <div className="container">
        <h1 className="text-2xl font-bold">Profile</h1>
        <h2>{session.user.name}</h2>
        <h2>{session.user.jwt}</h2>
        <pre>{JSON.stringify(session, null, 2)}</pre>
      </div>
    </section>
  );
};

export default Page;
