"use client";

import MainTimer from "@/components/main-timer";
import Navbar from "@/components/navbar";
import ProgressAction from "@/components/progress-action";
import { useAppContext } from "@/context";

export default function Home() {
  const { mainColor} = useAppContext();

  console.log('🟢====>bg-pomocolor1', mainColor);
  
  return (
    <div className={`${mainColor} dark:bg-black`}>
      <div className="m-auto w-[644px] h-screen">
        <Navbar />
        <ProgressAction />
        <MainTimer />
      </div>
    </div>
  );
}
