"use server";

import { getUser } from "@/lib/auth";
import { db } from "@/lib/db";

export async function updateComplete(taskId: string, completed: boolean) {
  try {
    const user = await getUser();

    if (!user) {
      return {
        error: "User not found!"
      }
    }

    const task = await db.task.update({
      where: {
        userId: user?.id,
        id: taskId,
      },
      data: {
        completed,
      }
    });

    return task;
  } catch (error) {
    console.log("🟢====>updateTask", error);
    return {
      error: "Task not found!",
    };
  }
}
