"use client";

import { getTasks } from "@/actions/get-tasks";
import LoadingOverlay from "@/components/loading-overlay";
import MainTimer from "@/components/main-timer";
import Navbar from "@/components/navbar";
import ProgressBar from "@/components/progress-bar";
import { useAppContext } from "@/context";
import { useAuth } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { mainColor, isLoading, setIsLoading, setTasks } = useAppContext();
  const { isLoaded, userId } = useAuth();

  useEffect(() => {
    async function fetchTasks() {
      const result = await getTasks();
      setTasks(result);
      setIsLoading(false);
    }
    fetchTasks();
  }, [setIsLoading, setTasks]);

  console.log("🟢====>isLoading", isLoading);

  if (!isLoaded || !userId) {
    return redirect("/sign-in");
  }

  return (
    <>
      {isLoading && <LoadingOverlay />}
      {!isLoading && (
        <div className={`${mainColor} min-h-screen dark:bg-black`}>
          <div className="m-auto w-[644px]">
            <Navbar />
            <ProgressBar />
          </div>
          <div className="m-auto w-[480px]">
            <MainTimer />
          </div>
        </div>
      )}
    </>
  );
}
