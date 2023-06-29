import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

const Favorites = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/signin?callbackUrl=/favorites");
  }

  const cookieStore = cookies();
  const jwt = cookieStore.getAll();
  console.log(jwt);

  return <div>Favorites</div>;
};

export default Favorites;
