"use client";

import MainTimer from "@/components/main-timer";
import Navbar from "@/components/navbar";
import ProgressAction from "@/components/progress-action";
import { useState } from "react";

export default function Home() {
  const [mainColor, setMainColor] = useState("bg-yellow-600");

  console.log('🟢====>mainColor', mainColor);
  
  return (
    <div className={mainColor}>
      <div className="m-auto w-[644px] ">
        <Navbar />
        <ProgressAction />
        <MainTimer setMainColor={setMainColor} />
      </div>
    </div>
  );
}
