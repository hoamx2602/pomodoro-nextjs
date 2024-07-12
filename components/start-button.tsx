import { useAppContext } from "@/context";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { colorByMode } from "@/data";
import { useRef, useState } from "react";

const StartButton = () => {
  const { isRunning, setIsRunning, mode } = useAppContext();
  const [instantChange, setInstantChange] = useState(false);
  const [waiting, setWaiting] = useState(false);
  const { setTheme, theme } = useTheme();

  const handleStart = () => {
    const audio = new Audio("/audio/button.wav"); // Đường dẫn tới tệp âm thanh click
    audio.play();

    let timeoutId;
    if (!isRunning) {
      timeoutId = setTimeout(() => {
        setIsRunning(true);
        setTheme(theme === "light" ? "dark" : "light");
      }, 1000);
    } else {
      clearTimeout(timeoutId);
      setIsRunning(false);
      setTheme(theme === "light" ? "dark" : "light");
    }
    setInstantChange(!instantChange);
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
