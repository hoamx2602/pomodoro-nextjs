"use client";

import { MODES } from "@/data";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { useAppContext } from "@/context";

const Mode = () => {
  const { mode, setMode, setTime, setMainColor } = useAppContext();
  const handleModeChange = (
    newMode: "pomodoro" | "shortBreak" | "longBreak",
    color: string,
    time: number,
  ) => {
    setMode(newMode);
    setTime(time);
    setMainColor(color);
  };
  return (
    <>
      {MODES.map((item) => (
        <Button
          key={item.time}
          onClick={() =>
            handleModeChange(
              item.mode as "pomodoro" | "shortBreak" | "longBreak",
              item.color,
              item.time,
            )
          }
          className={cn(
            "rounded bg-transparent px-2 py-1 text-lg text-white shadow-none drop-shadow-none hover:bg-transparent",
            mode === item.mode && "bg-black/15 font-semibold hover:bg-black/15",
          )}
        >
          {item.label}
        </Button>
      ))}
    </>
  );
};

export default Mode;
