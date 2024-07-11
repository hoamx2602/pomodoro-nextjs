"use client";

import MainTimer from "@/components/main-timer";
import Navbar from "@/components/navbar";
import ProgressAction from "@/components/progress-action";
import { useAppContext } from "@/context";

export default function Home() {
  const { mainColor } = useAppContext();

  console.log("🟢====>mainColor", mainColor);

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
