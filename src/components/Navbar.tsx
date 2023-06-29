"use client";

import { useRouter } from "next/navigation";
import ThemeSwitcher from "./ThemeSwitcher";
import Link from "next/link";
import { AuthMenu } from "./AuthMenu";
import { StarIcon } from "lucide-react";

const Navbar = () => {
  const router = useRouter();

  return (
    <>
      <div className="bg-slate-500 h-[68px] bg-opacity-60 fixed top-0 left-0 right-0 py-2 px-8">
        <nav className="flex gap-4 justify-between items-center h-full">
          <Link href={"/"}>Logo</Link>

          <div className="flex items-center justify-center gap-4 min-h-full">
            <Link href={"/favorites"} aria-label="favorite posts">
              <StarIcon />
            </Link>
            <ThemeSwitcher />
            <AuthMenu />
          </div>
        </nav>
      </div>
      {/* Div below is added to compensate for the height of the navbar */}
      <div className="h-[68px]" />
    </>
  );
};

export default Navbar;
