"use client";

import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import { NextUIProvider } from "@nextui-org/react";

interface Props {
  children: ReactNode;
}

const Providers = ({ children }: Props) => {
  return (
    <NextUIProvider>
      <SessionProvider>{children}</SessionProvider>
    </NextUIProvider>
  );
};

export default Providers;
