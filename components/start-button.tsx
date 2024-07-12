import { useAppContext } from "@/context";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { colorByMode } from "@/data";

const StartButton = () => {
  const { isRunning, setIsRunning, mode } = useAppContext();
  const { setTheme, theme } = useTheme();
  const handleStart = () => {
    setIsRunning(!isRunning);
    setTheme(theme === "light" ? "dark" : "light");
  };

  console.log("🟢====>mode", mode);

  return (
    <Button
      onClick={handleStart}
      className={cn(
        "mb-4 box-content w-40 rounded bg-white text-2xl font-bold shadow drop-shadow-lg hover:bg-white dark:bg-black dark:text-pomotext",
        mode && `text-${colorByMode(mode)}`,
      )}
    >
      {isRunning ? "PAUSE" : "START"}
    </Button>
  );
};

export default StartButton;
