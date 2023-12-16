"use client";

import Image from "next/image";
import { useSession } from "next-auth/react";
import AppBar from "./components/AppBar";

export default function Home() {
  const { data: session, status } = useSession();

  return (
    <div>
      {status === "authenticated" && <AppBar />}
      <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-blue-700">
        <h1>Hello World</h1>
      </main>
    </div>
  );
}
