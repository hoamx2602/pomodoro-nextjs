import MainTimer from "@/components/main-timer";
import Navbar from "@/components/navbar";
import ProgressAction from "@/components/progress-action";

export default function Home() {
  return (
    <div className="w-[644px] m-auto">
      <Navbar />
      <ProgressAction />
      <MainTimer />
    </div>
  );
}
