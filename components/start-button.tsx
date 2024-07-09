import { useAppContext } from "@/context";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";

const StartButton = () => {
  const { isRunning, setIsRunning } = useAppContext();
  const { setTheme, theme } = useTheme();
  const handleStart = () => {
    setIsRunning(!isRunning);
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Button
      onClick={handleStart}
      className="text-2xl w-40 mb-4 mt-4 drop-shadow-lg font-semibold box-content bg-white text-yellow-700 rounded shadow hover:bg-white dark:bg-black dark:text-pomotext"
    >
      {isRunning ? "PAUSE" : "START"}
    </Button>
  );
};

export default StartButton;
