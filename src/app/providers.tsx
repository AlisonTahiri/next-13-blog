"use client";

import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";

type Props = {
  children: React.ReactNode;
};

export const Providers = ({ children }: Props) => {
  return (
    <ThemeProvider>
      <SessionProvider>{children}</SessionProvider>
    </ThemeProvider>
  );
};
