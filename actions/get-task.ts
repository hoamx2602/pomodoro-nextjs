"use server";

import { getUser } from "@/lib/auth";
import { db } from "@/lib/db";

export async function getTask(taskId: string) {
  try {
    const user = await getUser();

    const task = await db.task.findFirst({
      where: {
        userId: user?.id,
        id: taskId,
      },
    });

    return task;
  } catch (error) {
    console.log("🟢====>getTask", error);
    return {
      error: "Task not found!",
    };
  }
}
