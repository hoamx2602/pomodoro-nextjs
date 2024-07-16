"use client";

import { Task } from "@prisma/client";
import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";

export type MODE =  "pomodoro" | "shortBreak" | "longBreak"

interface Context {
  mainColor: string;
  setMainColor: Dispatch<SetStateAction<string>>
  mode: MODE;
  setMode: Dispatch<SetStateAction<MODE>>
  setTime: Dispatch<SetStateAction<number>>;
  time: number;
  isRunning: boolean;
  setIsRunning: Dispatch<SetStateAction<boolean>>;
  isLoading?: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  tasks: Task[],
  setTasks: Dispatch<SetStateAction<Task[]>>;
  openDialog: boolean;
  setOpenDialog: Dispatch<SetStateAction<boolean>>;
  task: Task | null,
  setTask: Dispatch<SetStateAction<Task | null>>;
  showNote: boolean,
  setShowNote: Dispatch<SetStateAction<boolean>>;
  showProject: boolean,
  setShowProject: Dispatch<SetStateAction<boolean>>;
}

const AppContext = createContext<Context>({
  mainColor: "bg-pomocolor1",
  mode: "pomodoro",
  setMainColor: () => {},
  setMode: () => {},
  setTime: () => {},
  time: 0,
  isRunning: false,
  setIsRunning: () => {},
  isLoading: true,
  setIsLoading: () => {},
  tasks: [],
  setTasks: () => {},
  openDialog: false,
  setOpenDialog: () => {},
  task: null,
  setTask: () => {},
  showNote: false,
  setShowNote: () => {},
  showProject: false,
  setShowProject: () => {}
});

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [mainColor, setMainColor] = useState("bg-pomocolor1");
  const [mode, setMode] = useState<MODE>(
    "pomodoro"
  );
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [task, setTask] = useState<Task | null>(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [time, setTime] = useState<number>(900); // Default to 15 minutes
  const [showNote, setShowNote] = useState(false);
  const [showProject, setShowProject] = useState(false);

  const value = {
    mainColor,
    setMainColor,
    mode,
    setMode,
    time,
    setTime,
    isRunning,
    setIsRunning,
    isLoading,
    setIsLoading,
    tasks,
    setTasks,
    openDialog,
    setOpenDialog,
    setTask,
    task,
    showNote,
    setShowNote,
    showProject,
    setShowProject,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
