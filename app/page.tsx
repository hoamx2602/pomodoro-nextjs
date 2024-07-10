"use client";

import MainTimer from "@/components/main-timer";
import Navbar from "@/components/navbar";
import ProgressAction from "@/components/progress-action";
import { useAppContext } from "@/context";

export default function Home() {
  const { mainColor } = useAppContext();

  console.log('🟢====>mainColor', mainColor);

  return (
    <div className={`${mainColor} dark:bg-black h-screen`}>
      <div className="m-auto w-[644px]">
        <Navbar />
        <ProgressAction />
      </div>
      <div className="w-[480px] m-auto">
        <MainTimer />
      </div>
    </div>
  );
}
