"use client";

import { useAppContext } from "@/context";
import { MODES } from "@/data";
import { MODE } from "@/context";
import { useState, useEffect } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0.5);
  const { isRunning, time, mode, setTime } = useAppContext();
  const timeTotal = MODES.find((mod: MODE) => mod.mode === mode).time;

  console.log("🟢====>time", time);
  useEffect(() => {
    if (isRunning) {
      setProgress((prev) => prev + 100 / timeTotal);
    }
  }, [isRunning, setTime, setProgress, timeTotal, time]);

  return (
    <div className="relative flex h-[1px] w-full items-center bg-[#0000001a]">
      <div
        className="h-[3px] rounded-full bg-[#aaaaaa] transition-all duration-100 ease-linear"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
