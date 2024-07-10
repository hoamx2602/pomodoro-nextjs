"use client";

import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";

export type mode =  "pomodoro" | "shortBreak" | "longBreak"

interface Context {
  mainColor: string;
  setMainColor: Dispatch<SetStateAction<string>>
  mode: mode;
  setMode: Dispatch<SetStateAction<mode>>
  setTime: Dispatch<SetStateAction<number>>;
  time: number;
  isRunning: boolean;
  setIsRunning: Dispatch<SetStateAction<boolean>>;
}

const AppContext = createContext<Context>({
  mainColor: "bg-pomocolor1",
  mode: "pomodoro",
  setMainColor: () => {},
  setMode: () => {},
  setTime: () => {},
  time: 0,
  isRunning: false,
  setIsRunning: () => {}
});

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [mainColor, setMainColor] = useState("bg-pomocolor1");
  const [mode, setMode] = useState<mode>(
    "pomodoro"
  );
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [time, setTime] = useState<number>(900); // Default to 15 minutes

  const value = {
    mainColor,
    setMainColor,
    mode,
    setMode,
    time,
    setTime,
    isRunning,
    setIsRunning
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
