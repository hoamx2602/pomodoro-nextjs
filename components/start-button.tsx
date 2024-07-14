import { useAppContext } from "@/context";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { colorByMode } from "@/data";
import { useRef, useState } from "react";

const StartButton = () => {
  const { isRunning, setIsRunning, mode } = useAppContext();
  const [instantChange, setInstantChange] = useState(false);
  const { setTheme, theme } = useTheme();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleStart = () => {
    const audio = new Audio("/audio/button.wav");
    audio.volume = 0.3;
    audio.play();

    if (timeoutRef.current) {
      // If there's a timeout pending, clear it and reset states
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
      setIsRunning(false);
      setInstantChange(false);
      return;
    }

    if (!isRunning) {
      // Start the waiting period and change button text to "PAUSE" immediately
      setInstantChange(true);
      timeoutRef.current = setTimeout(() => {
        setIsRunning(true);
        setTheme(theme === "light" ? "dark" : "light");
        timeoutRef.current = null;
      }, 1500);
    } else {
      // Stop the running timer immediately
      setIsRunning(false);
      setInstantChange(false);
      setTheme(theme === "light" ? "dark" : "light");
    }
  };

  return (
    <Button
      onClick={handleStart}
      className={cn(
        "mb-4 box-content w-40 rounded bg-white text-2xl font-bold drop-shadow-lg hover:bg-white dark:bg-black dark:text-pomotext",
        mode && `text-${colorByMode(mode)}`,
        instantChange && "shadow-none",
      )}
    >
      {instantChange ? "PAUSE" : "START"}
    </Button>
  );
};

export default StartButton;
