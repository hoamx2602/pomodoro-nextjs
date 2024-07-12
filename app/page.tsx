"use client";

import MainTimer from "@/components/main-timer";
import Navbar from "@/components/navbar";
import ProgressBar from "@/components/progress-bar";
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
    <div className={`${mainColor} dark:bg-black min-h-screen`}>
      <div className="m-auto w-[644px]">
        <Navbar />
        <ProgressBar />
      </div>
      <div className="m-auto w-[480px]">
        <MainTimer />
      </div>
    </div>
  );
}
