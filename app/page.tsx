"use client";

import MainTimer from "@/components/main-timer";
import Navbar from "@/components/navbar";
import ProgressAction from "@/components/progress-action";
import { useAppContext } from "@/context";
import { useAuth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default function Home() {
  const { mainColor } = useAppContext();
  const { isLoaded, userId } = useAuth();

  if (!isLoaded || !userId) {
    return redirect("/sign-in");
  }

  return (
    <div className={`${mainColor} h-screen dark:bg-black`}>
      <div className="m-auto w-[644px]">
        <Navbar />
        <ProgressAction />
      </div>
      <div className="m-auto w-[480px]">
        <MainTimer />
      </div>
    </div>
  );
}
