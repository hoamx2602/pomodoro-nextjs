"use server";

import { getUser } from "@/lib/auth";
import { db } from "@/lib/db";

export async function getTasks() {
  try {
    const user = await getUser();

    const tasks = await db.task.findMany({
      where: {
        userId: user?.id,
      },
    });

    return tasks;
  } catch (error) {
    console.log("🟢====>getTasks", error);
    return []
  }
}
