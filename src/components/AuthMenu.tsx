"use client";

import * as React from "react";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import { buttonVariants } from "@/components/ui/button";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightSquareIcon, Settings } from "lucide-react";

type Checked = DropdownMenuCheckboxItemProps["checked"];

export function AuthMenu() {
  const { data: session } = useSession();

  return (
    <>
      {session ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button aria-label="open auth menu">
              {session?.user?.image ? (
                <div className="relative h-10 w-10">
                  <Image
                    src={session.user.image}
                    alt={session.user.name || ""}
                    className="inline-block rounded-full"
                    fill
                  />
                </div>
              ) : (
                <span className="inline-block h-8 w-8 overflow-hidden rounded-full bg-stone-100">
                  <svg
                    className="h-full w-full text-stone-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </span>
              )}
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-72">
            <DropdownMenuLabel>
              <div className="flex gap-2">
                {session?.user?.image ? (
                  <div className="relative h-10 w-10">
                    <Image
                      src={session.user.image}
                      alt={session.user.name || ""}
                      className="inline-block rounded-full"
                      fill
                    />
                  </div>
                ) : (
                  <span className="inline-block h-8 w-8 overflow-hidden rounded-full bg-stone-100">
                    <svg
                      className="h-full w-full text-stone-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </span>
                )}
                <div>
                  <p className="font-medium text-stone-600">
                    {session.user?.name || "User name"}
                  </p>
                  <p className="text-stone-400">{session.user?.email}</p>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link
                href={"/profile"}
                className={`${buttonVariants({
                  variant: "ghost",
                })} w-full justify-start`}
              >
                <Settings className="mr-2 h-4 w-4" />
                <span>Manage Account</span>
              </Link>
            </DropdownMenuItem>

            <DropdownMenuItem>
              <Button
                onClick={() =>
                  signOut({
                    callbackUrl: "/",
                  })
                }
                variant={"ghost"}
                className="w-full justify-start"
              >
                <ArrowRightSquareIcon className="mr-2 h-4 w-4" />
                <span>Sign Out</span>
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <button
          className="rounded-md px-3 py-1 text-sm "
          onClick={() => signIn()}
        >
          Sign In
        </button>
      )}
    </>
  );
}
