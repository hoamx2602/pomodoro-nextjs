import { useAppContext } from "@/context";

const TimeCount = () => {
  const { setTime, time } = useAppContext();

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes < 10 ? "0" : ""}${minutes}:${
      remainingSeconds < 10 ? "0" : ""
    }${remainingSeconds}`;
  };
  return (
    <div className="text-9xl text-white dark:text-pomotext">
      {formatTime(time)}
    </div>
  );
};

export default TimeCount;
