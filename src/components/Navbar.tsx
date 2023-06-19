"use client";

import { useRouter } from "next/navigation";
import ThemeSwitcher from "./ThemeSwitcher";
import { FaCartArrowDown } from "react-icons/fa";
import { CiDeliveryTruck } from "react-icons/ci";
import { MdFavorite } from "react-icons/md";

const Navbar = () => {
  const router = useRouter();

  return (
    <>
      <div className="bg-slate-500 bg-opacity-60 fixed top-0 left-0 right-0 py-2 px-8">
        <nav className="flex gap-4 justify-between items-center">
          <div>Logo</div>

          {true ? (
            <div className="flex items-center justify-center gap-4 min-h-full">
              <ThemeSwitcher />
              <button
                onClick={() => console.log("log out")}
                className="px-4 bg-bgk py-2 rounded-md"
              >
                Logout
              </button>

              <button
                onClick={() => router.push("/bookmark")}
                className="p-4 rounded-full bg-slate-500"
              >
                <MdFavorite className="text-white text-xl" />
              </button>
            </div>
          ) : (
            <button
              onClick={() => router.push("/auth/login")}
              className="btn text-white mx-2"
            >
              Login
            </button>
          )}
        </nav>
      </div>
      {/* Div below is added to compensate for the height of the navbar */}
      <div className="h-[68px]" />
    </>
  );
};

export default Navbar;
