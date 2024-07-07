"use client";

import { useEffect, useState } from "react";

import { Progress } from "@/components/ui/progress";

const ProgressAction = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(98), 500);
    return () => clearTimeout(timer);
  }, []);
  return <Progress value={progress} className="w-full h-0.5" />;
};

export default ProgressAction;