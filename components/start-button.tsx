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

  console.log('🟢====>mode', mode);

  return (
    <Button
      onClick={handleStart}
      className={cn(
        "text-2xl w-40 mb-4 drop-shadow-lg font-semibold box-content bg-white rounded shadow hover:bg-white dark:bg-black dark:text-pomotext",
        mode && `text-${colorByMode(mode)}`
      )}
    >
      {isRunning ? "PAUSE" : "START"}
    </Button>
  );
};

export default StartButton;
