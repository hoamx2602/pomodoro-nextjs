import { useAppContext } from "@/context";
import { FaCheckCircle } from "react-icons/fa";

const LoadingOverlay = () => {
  const { mainColor } = useAppContext();
  return (
    <div
      className={`min-h-screen ${mainColor} flex flex-col items-center justify-center text-2xl text-white`}
    >
      <span className="mb-4">
        <FaCheckCircle className="h-16 w-16" />
      </span>
      <p className="text-xl">Loading...</p>
    </div>
  );
};

export default LoadingOverlay;
