"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const MainTimer: React.FC = () => {
  const [time, setTime] = useState<number>(900); // Default to 15 minutes
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [mode, setMode] = useState<"Pomodoro" | "Short Break" | "Long Break">(
    "Long Break"
  ); // Default mode

  const modes = {
    Pomodoro: 1500, // 25 minutes
    "Short Break": 300, // 5 minutes
    "Long Break": 900, // 15 minutes
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timer);
            setIsRunning(false);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const handleModeChange = (
    newMode: "Pomodoro" | "Short Break" | "Long Break"
  ) => {
    setMode(newMode);
    setTime(modes[newMode]);
  };

  const handleStart = () => {
    setIsRunning(!isRunning);
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes < 10 ? "0" : ""}${minutes}:${
      remainingSeconds < 10 ? "0" : ""
    }${remainingSeconds}`;
  };

  return (
    <Card className="bg-white/15 w-[480px] border-none m-auto relative flex flex-col items-center justify-center transition-all duration-500 mt-10">
      <div
        className={`absolute inset-0 bg-black ${
          isRunning ? "opacity-90" : "opacity-0"
        } transition-opacity duration-500`}
      ></div>
      <div className="z-10 flex space-x-4 mb-4 mt-4">
        {Object.keys(modes).map((modeName) => (
          <Button
            variant="ghost"
            key={modeName}
            onClick={() =>
              handleModeChange(
                modeName as "Pomodoro" | "Short Break" | "Long Break"
              )
            }
            className={cn(
              `py-2 px-4 rounded hover:bg-transparent bg-transparent`,
              mode === modeName && "bg-black/15 text-white"
            )}
          >
            {modeName}
          </Button>
        ))}
      </div>
      <div className="z-10 text-6xl text-white">{formatTime(time)}</div>
      <Button
        onClick={handleStart}
        className="z-10 mt-4 py-2 px-8 bg-white text-yellow-700 rounded shadow"
      >
        {isRunning ? "PAUSE" : "START"}
      </Button>
    </Card>
  );
};

export default MainTimer;
