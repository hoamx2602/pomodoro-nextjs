"use client";

import MainTimer from "@/components/main-timer";
import Navbar from "@/components/navbar";
import ProgressAction from "@/components/progress-action";
import { useTheme } from "next-themes";
import { useState } from "react";

export default function Home() {
  const [mainColor, setMainColor] = useState("bg-yellow-600");
  const { setTheme } = useTheme()
  
  return (
    <div className={`${mainColor} dark:bg-black`}>
      <div className="m-auto w-[644px] h-screen">
        <Navbar />
        <ProgressAction />
        <MainTimer setMainColor={setMainColor} setTheme={setTheme} />
      </div>
    </div>
  );
}
