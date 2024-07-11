"use client";

import { Card } from "@/components/ui/card";
import { useAppContext } from "@/context";
import { cn } from "@/lib/utils";
import { useEffect } from "react";
import Mode from "./mode";
import StartButton from "./start-button";
import TaskNav from "./task-nav";
import TaskTitle from "./task-title";
import TimeCount from "./time-count";
import TaskDialog from "./task-dialog";

const MainTimer = () => {
  const { setTime, isRunning, setIsRunning } = useAppContext();

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime: number) => {
          if (prevTime <= 1) {
            clearInterval(timer);
            setIsRunning(false);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning, setTime, setIsRunning]);

  return (
    <>
      <div className="relative flex flex-col items-center justify-center">
        <Card
          className={cn(
            "m-auto mt-10 flex w-full flex-col items-center justify-center border-none bg-white/15",
            isRunning && "bg-black",
          )}
        >
          <div
            className={cn(
              "absolute top-10 z-10 mb-4 mt-4 flex space-x-4",
              isRunning && "hidden",
            )}
          >
            <Mode />
          </div>
          <div className="mt-[70px] flex flex-col items-center font-bold">
            <TimeCount />
            <StartButton />
          </div>
        </Card>
        <TaskTitle />
        <div className="dark:hidden">
          <TaskNav />
          <TaskDialog />
        </div>
      </div>
    </>
  );
};

export default MainTimer;
