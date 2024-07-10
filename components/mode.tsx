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
    time: number
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
              item.time
            )
          }
          className={cn(
            "py-1 px-2 drop-shadow-none shadow-none rounded hover:bg-transparent bg-transparent text-white text-lg",
            mode === item.mode && "bg-black/15 hover:bg-black/15 font-semibold"
          )}
        >
          {item.label}
        </Button>
      ))}
    </>
  );
};

export default Mode;
